const btn = document.querySelector('.button');
btn.addEventListener('click', function (r) {
    let x = r.clientX - r.target.offsetLeft;
    let y = r.clientY - r.target.offsetTop;
    let ripples = document.createElement('span');
    ripples.setAttribute('id', 'ripps');
    ripples.style.left = `${x}px`;
    ripples.style.top = `${y}px`;
    this.appendChild(ripples);
    setTimeout(() => {
        ripples.remove();
    }, 1000)
});

let str = window.location.search.slice(1, 5);

function getParams(paramNames) {
    let params = new URLSearchParams(window.location.search);
    return params.get(paramNames);
}

function setUnData() {
    let unElements = document.querySelectorAll('[id=name]');
    let targets = document.querySelectorAll('[class=target]');
    let abtLogo = document.getElementById('nameAb')
    unElements.forEach(r => r.innerHTML = 'Ray');
    targets.forEach(r => r.setAttribute('id', 'hidden'))
    abtLogo.innerHTML = 'Ray-chan';
}

if (getParams(str) == 'unofc') setUnData();

function detectMob() {
    if (window.innerWidth <= 800 && window.innerHeight <= 600) window.location.href = './notsupported.html'
}