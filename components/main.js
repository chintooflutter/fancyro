class HeaderComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <header>


    <nav class="navbar navbar-expand-lg bg-dark navbar-dark" width="100%" height="60px">
          <a class="navbar-brand" href="https://fancyletters.org/">Home</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar" title="Toggle navigation">
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

      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
    integrity="sha384Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
  </link>

  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
  </link>


  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js"
    integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
    crossorigin="anonymous" defer></script>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js"
    integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
    crossorigin="anonymous" defer></script>


    `;

    const navbarToggler = this.shadowRoot.querySelector('.navbar-toggler');
    navbarToggler.addEventListener('click', () => {
      const navbarCollapse = this.shadowRoot.querySelector('.navbar-collapse');
      navbarCollapse.classList.toggle('show');
    });
  }
}

window.customElements.define('header-component', HeaderComponent);


class FooterComponent extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    const template = document.createElement("template");
    template.innerHTML = `
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

    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("footer-component", FooterComponent);





// Register the Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('https://fancyletters.org/components/serviceworker.js').then(function(registration) {
      console.log('Service Worker registered with scope:', registration.scope);
    }).catch(function(error) {
      console.log('Service Worker registration failed:', error);
    });
  });
}


// Function to save custom HTML or data to Cache Storage
function saveHtmlToCache(url, htmlContent) {
  if ('caches' in window) {
    caches.open('fancyletters-cache-v1').then(function(cache) {
      const response = new Response(htmlContent, {
        headers: {
          'Content-Type': 'text/html'
        }
      });
      return cache.put(url, response);
    }).then(() => {
      console.log(`HTML content saved to Cache Storage for URL: ${url}`);
    }).catch(function(error) {
      console.error('Failed to save HTML to Cache Storage:', error);
    });
  }
}

// Function to retrieve HTML content from Cache Storage
function getHtmlFromCache(url) {
  if ('caches' in window) {
    return caches.open('fancyletters-cache-v1').then(function(cache) {
      return cache.match(url).then(function(response) {
        if (response) {
          return response.text().then(function(html) {
            return html;
          });
        } else {
          console.log('No HTML content found in Cache Storage for:', url);
          return null;
        }
      });
    }).catch(function(error) {
      console.error('Failed to retrieve HTML from Cache Storage:', error);
      return null;
    });
  }
  return Promise.resolve(null);
}

// Load jQuery safely without using document.write()
(function() {
  var script = document.createElement('script');
  script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js';
  script.async = true;
  document.head.appendChild(script);
})();

// Example usage: Saving and retrieving content
const pageUrl = window.location.href;

// Save current page content to cache
saveHtmlToCache(pageUrl, document.documentElement.outerHTML);

// Retrieve and use cached content (if needed)
getHtmlFromCache(pageUrl).then(function(cachedHtml) {
  if (cachedHtml) {
    // Replace the content of the body with the cached HTML
    document.body.innerHTML = cachedHtml;
    console.log('Page content retrieved from cache and updated');
  } else {
    console.log('No cached content available');
  }
});