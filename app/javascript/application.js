import "@hotwired/turbo-rails"
import "controllers"
import { greet } from './hello'
import "jquery"

document.addEventListener("DOMContentLoaded", () => {
  greet();

  // Example DOM manipulation
  const button = document.getElementById("myButton");
  if (button) {
    button.addEventListener("click", () => {
      const element = document.getElementById("myElement");
      element.textContent = "You clicked the button!";
    });
  }

  // jQuery code for turbo:load event
  $(document).on('turbo:load', function() {
    console.log("jQuery is working!");

    $('#toggleButton').click(function() {
      $('#toggleDiv').toggle();
    });

    // Form submission with validation
    $('#articleForm').on('submit', function(event) {
      event.preventDefault(); // Prevent the default form submission
      validateForm();
    });

    function validateForm() {
      let isValid = true;
      $('.error-message').remove(); // Remove any previous error messages
    
      // Validate title
      if ($('#articleTitle').val().trim() === '') {
        isValid = false;
        $('#articleTitle').before('<div class="error-message text-danger" style="font-weight: bold;">Title can\'t be blank</div>');
        hideErrorMessageAfterDelay();
      }
    
      // Validate body
      if ($('#articleBody').val().trim() === '') {
        isValid = false;
        $('#articleBody').before('<div class="error-message text-danger" style="font-weight: bold;">Body can\'t be blank</div>');
        hideErrorMessageAfterDelay();
      }
    
      if (isValid) {
        // If the form is valid, submit it via AJAX
        $.ajax({
          url: $('#articleForm').attr('action'),
          method: 'POST',
          data: $('#articleForm').serialize(),
          dataType: 'json',
          success: function(response) {
            if (response.success) {
              showSuccessMessage('Article saved successfully!');
              setTimeout(() => {
                window.location.href = response.redirect_url;
              }, 2000); // Redirect after 2 seconds
            } else {
              alert('Error saving article: ' + response.errors.join(', '));
            }
          },
          error: function(xhr) {
            alert('Error saving article: ' + xhr.responseText);
          }
        });
      }
    }

    function hideErrorMessageAfterDelay() {
      setTimeout(function() {
        $('.error-message').fadeOut('slow', function() {
          $(this).remove(); // Optionally remove the element from the DOM
        });
      }, 4000); // Change 3000 to the number of milliseconds you want the message to be visible (e.g., 5000 for 5 seconds)
    }

    function showSuccessMessage(message) {
      // Create and show the success message
      const successDiv = $('<div class="alert alert-success" style="position: fixed; top: 100px; right: 800px; background-color: #28a745; color: white; z-index: 1000; padding: 10px; border-radius: 5px;"></div>');
      successDiv.text(message);
      $('body').append(successDiv);
      successDiv.fadeIn('slow');
      
      // Optionally hide the message after some time
      setTimeout(() => {
        successDiv.fadeOut('slow', () => {
          successDiv.remove(); // Remove the element from the DOM
        });
      }, 5000); // Message visible for 2 seconds
    }
    
  });
});
