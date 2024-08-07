// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
// app/javascript/application.js
import { greet } from './controllers/hello_controller';

// Use the function (you can also call it from HTML or other parts of your app)
document.addEventListener('DOMContentLoaded', () => {
  greet('World');
});


// app/assets/javascripts/articles/show.js

  
