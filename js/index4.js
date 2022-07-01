const user4 = {
    "name":"Miguel",
    "lastname": "Sanchez",
    "age": 56,
    "hobbies": ["Listen to music","Watch tv","drink beer"],
    "Job":"electric technicial",
    "url":"img/leon.png"
}


fetch('./user4.json')
.then(response => response.json())
.then (data => {
    document.getElementById('olis4').innerHTML = `<h2>${data.name}</h2>`+ `<h2>${data.lastname}</h2>`+ `<h2>${data.age}</h2>`+`<img src="${data.url}" />`
})


console.log(document.getElementById('olis4'));
console.log(JSON.stringify(user4));



let olis4Elements = ''