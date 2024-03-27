const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `

 <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
    integrity="sha384Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
  </link>

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
 </link>

  

<header>
<!-- Navbar -->
<nav class="navbar navbar-expand-md bg-dark navbar-dark">

  <!-- Brand -->
  <a class="navbar-brand" href="https://fancyletters.org/">Home</a>

  <!-- Toggler/collapsibe Button -->
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>

  <!-- Navbar links -->
  <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="https://fancyletters.org/cute-fonts-copy-and-paste.html">Cute Fonts</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="https://fancyletters.org/fancy-text-generator.html">Fancy Text</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="https://fancyletters.org/zalgo-font-generator.html">Zalgo Font</a>
      </li>                            
      <li class="nav-item">
        <a class="nav-link" href="https://fancyletters.org/cursive-font-generator.html">Cursive Font</a>
      </li>                            
      <li class="nav-item">
        <a class="nav-link" href="https://fancyletters.org/fancy-font-generator.html">Fancy Font</a>
      </li>                            
      <li class="nav-item">
        <a class="nav-link" href="https://fancyletters.org/symbols/christmas.html">Christmas Symbols</a>
      </li>                            
    </ul>
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

