let hour = document.createElement('h1')
let minute = document.createElement('h1')
let second = document.createElement('h1')
let point = document.createElement('h1')
let point2 = document.createElement('h1')
let box = document.createElement('div')
point.innerHTML = ':'
point.style.color = 'black'
point2.innerHTML = ':'
point2.style.color = 'black'
hour.innerHTML = '11'
hour.style.color = 'red'
minute.innerHTML = '08'
minute.style.color = 'green'
second.innerHTML = '42'
second.style.color = 'blue'
box.append(hour, point, minute, point2, second)
document.body.append(box);
box.style.display = 'flex'

