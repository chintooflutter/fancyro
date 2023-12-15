const nav = document.querySelector('.navbar')
fetch('source/navbar.html')
  .then(res => res.text())
  .then(data => {
    nav.innerHTML = data
  })