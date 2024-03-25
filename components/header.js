const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
    integrity="sha384Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
  </link>

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
  </link>

<header>


<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="https://fancyletters.org/">Home</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link" href="https://fancyletters.org/cute-fonts-copy-and-paste.html">Cute Fonts</a>
    <a class="nav-link" href="https://fancyletters.org/fancy-text-generator.html">Fancy Text</a>
    <a class="nav-link" href="https://fancyletters.org/zalgo-font-generator.html">Zalgo Font</a>
    <a class="nav-link" href="https://fancyletters.org/cursive-font-generator.html">Cursive Font</a>
    <a class="nav-link" href="https://fancyletters.org/fancy-font-generator.html">Fancy Font</a>        
    <a class="nav-link" href="https://fancyletters.org/symbols/christmas.html">Christmas Symbols</a>
      </div>
    </div>
  </div>
</nav>


</header>

`;

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    shadowRoot.appendChild(headerTemplate.content);
  }
}

customElements.define('header-component', Header);
