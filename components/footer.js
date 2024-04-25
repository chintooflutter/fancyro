class FooterComponent extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    this.shadowRoot.innerHTML = `
      <style>
.footer-links {
          display: flex;
          justify-content: space-around;
          padding: 1rem;
        }

        .footer-links a {
          color: rgb(0, 0, 255); /* Blue color */
          text-decoration: none;
        }

        .footer-links a:hover {
          text-decoration: underline;	
        }

        @media (max-width: 767px) {
          .footer-links {
            flex-direction: column;
            align-items: center;
          }
        }


      </style>

      <footer class="bg-body-tertiary">
        <div class="footer-links">
          <a href="https://fancyletters.org/a-in-different-fonts.html">A in Different Fonts</a>
          <a href="https://fancyletters.org/a-in-cursive.html">How to Write A in Cursive</a>
          <a href="https://fancyletters.org/about.html">About</a>
          <a href="https://fancyletters.org/contact.html">Contact</a>
          <a href="https://fancyletters.org/privacy.html">Privacy</a>
        </div>

        <!-- Copyright -->
        <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.05);">
          © 2024 Copyright:
          <a class="text-body" href="https://fancyletters.org/sitemap.xml">FancyLetters.org</a>
        </div>
        <!-- Copyright -->
      </footer>
    `;
  }
}

customElements.define("footer-component", FooterComponent);