class HeaderComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <header>
        <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
          <a class="navbar-brand" href="https://fancyletters.org/">Home</a>
          <button class="navbar-toggler" aria-label="Toggle navigation" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
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

    const navbarToggler = this.shadowRoot.querySelector('.navbar-toggler');
    navbarToggler.addEventListener('click', () => {
      const navbarCollapse = this.shadowRoot.querySelector('.navbar-collapse');
      navbarCollapse.classList.toggle('show');
    });
  }
}

window.customElements.define('header-component', HeaderComponent);