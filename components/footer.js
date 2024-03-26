const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
    integrity="sha384Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
  </link>

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
 
 </link>
 <style>

    .footer-basic {
    padding:40px 0;
    background-color:#ffffff;
    color:#4b4c4d;
    }
    .footer-basic ul {
    padding:0;
    list-style:none;
    text-align:center;
    font-size:18px;
    line-height:1.6;
    margin-bottom:0;
    }
    .footer-basic li {
    padding:0 10px;
    }
    .footer-basic ul a {
    color:inherit;
    text-decoration:none;
    opacity:0.8;
    }
    .footer-basic ul a:hover {
    opacity:1;
    }
    .footer-basic .social {
    text-align:center;
    padding-bottom:25px;
    }
    .footer-basic .social > a {
    font-size:24px;
    width:40px;
    height:40px;
    line-height:40px;
    display:inline-block;
    text-align:center;
    border-radius:50%;
    border:1px solid #ccc;
    margin:0 8px;
    color:inherit;
    opacity:0.75;
    }
    .footer-basic .social > a:hover {
    opacity:0.9;
    }
    .footer-basic .copyright {
    margin-top:15px;
    text-align:center;
    font-size:13px;
    color:#aaa;
    margin-bottom:0;
    }

 
 </style>

 <footer>
  <ul class="list-inline">
 <li class="list-inline-item"><a href="#">Home</a></li>
 <li class="list-inline-item"><a href="#">Services</a></li>
 <li class="list-inline-item"><a href="#">About</a></li>
 <li class="list-inline-item"><a href="#">Terms</a></li>
 <li class="list-inline-item"><a href="#">Privacy Policy</a></li>
 </ul>
 <p class="copyright">Company Name © 2018</p>
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