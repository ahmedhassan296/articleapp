import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    this.element.textContent = "Hello World!"
  }
}

// app/javascript/controllers/example_controller.js
export function greet(name) {
  alert(`Hello, ${name}!`);
}
