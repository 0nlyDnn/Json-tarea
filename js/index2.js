
const user2 = {
    "name":"Juan",
    "lastname": "Sanchez",
    "age": 22,
    "Job":["Student","Network Technicial"],
    "url":"img/tiburon.png",
}


fetch('./user2.json')
.then(response => response.json())
.then (data => {
    document.getElementById('olis2').innerHTML += `<h2>${data.name}</h2>` + `<h2>${data.lastname}</h2>` +  `<h2>${data.age}</h2>`+`<img src="${data.url}"</img>`
})

console.log(document.getElementById('olis2'));
console.log(JSON.stringify(user2));



let olis2Elements = ''
