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

if (getParams(str) == 'unofc') setUnData()