const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
    integrity="sha384Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
  </link>

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
 
 </link>

 <footer>
  <ul class="fixed-bottom" bg-dark>
  <div class="container text-center"> 
 <li class="list-inline-item"><a href="#">Home</a></li>
 <li class="list-inline-item"><a href="#">Services</a></li>
 <li class="list-inline-item"><a href="#">About</a></li>
 <li class="list-inline-item"><a href="#">Terms</a></li>
 <li class="list-inline-item"><a href="#">Privacy Policy</a></li>
 </ul>
 <p class="copyright">FancyLetters.org © 2024</p>
 </div>
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