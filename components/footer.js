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
 .footer-basic .copyright {
 margin-top:15px;
 text-align:center;
 font-size:13px;
 color:#aaa;
 margin-bottom:0;
 }

</style>
 
<div class="footer-clean">
<footer>
<div class="container">
<div class="row justify-content-center">
<div class="col-sm-4 col-md-3 item">
<h3>Services</h3>
<ul>
<li><a href="#">Web design</a></li>
<li><a href="#">Development</a></li>
<li><a href="#">Hosting</a></li>
</ul>
</div>
<div class="col-sm-4 col-md-3 item">
<h3>About</h3>
<ul>
<li><a href="#">Company</a></li>
<li><a href="#">Team</a></li>
<li><a href="#">Legacy</a></li>
</ul>
</div>
<div class="col-sm-4 col-md-3 item">
<h3>Careers</h3>
<ul>
<li><a href="#">Job openings</a></li>
<li><a href="#">Employee success</a></li>
<li><a href="#">Benefits</a></li>
</ul>
</div>
<p class="copyright">FancyLetters.org © 2018</p>
</div>
</div>
</div>
</footer>
</div>
  
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