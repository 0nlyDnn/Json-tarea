const user3 = {
    "name":"Carmen",
    "lastname": "Castro",
    "age": 48,
    "hobbies": ["Listen to music","Watch tv"],
    "Job":"Housewife",
    "url":"img/mariposa.png"
}


fetch('./user3.json')
.then(response => response.json())
.then (data => {
    document.getElementById('olis3').innerHTML = `<h2>${data.name}</h2>`+ `<h2>${data.lastname}</h2>`+ `<h2>${data.age}</h2>`+`<img src="${data.url}" />`
})


console.log(document.getElementById('olis3'));
console.log(JSON.stringify(user3));



let olis3Elements = ''