// Custom Hello World Element, created by chatgpt
class HelloWorld extends HTMLElement {
    connectedCallback() {
        console.log("Hello World!");
    }
}
customElements.define('hello-world', HelloWorld);