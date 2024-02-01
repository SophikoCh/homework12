
const table = document.querySelector('table');
table.style.borderSpacing = '0';

let tds = document.querySelectorAll('td');
for (let i = 0; i < tds.length; i++) {
    tds[i].style.border = '1px solid black';
    tds[i].style.padding = '5px';
}

let tdcolor = document.querySelectorAll('.red');

for (let i = 0; i < tdcolor.length; i++) {
    tdcolor[i].style.backgroundColor = 'red';
}
