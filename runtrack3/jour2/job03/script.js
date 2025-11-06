function addone() {
    const el = document.getElementById('compteur');
    let value = parseInt(el.textContent, 10);
    if (isNaN(value)) value = 0;
    value += 1;
    el.textContent = value;
}

document.getElementById('button').addEventListener('click', addone);