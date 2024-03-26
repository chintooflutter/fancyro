const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
    integrity="sha384Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
  </link>

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
 
 </link>
 
<footer class="navbar">
     <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="https://fancyletters.org/about.html">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://fancyletters.org/contact.html">Contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://fancyletters.org/privacy.html">Privacy</a>
        </li>
</footer>
  
`;

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const fontAwesome = document.querySelector('link[href*="font-awesome"]');
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    if (fontAwesome) {
      shadowRoot.appendChild(fontAwesome.cloneNode());
    }

    shadowRoot.appendChild(footerTemplate.content);
  }
}

customElements.define('footer-component', Footer);