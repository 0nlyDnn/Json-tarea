
const user = {
    "name":"Daniel",
    "lastname": "Sanchez Castro",
    "age": 17,
    "hobbies": ["play","play","play"],
    "Job": "Student",
    "url": "img/tucan.png"
}



fetch('user.json')
.then(response => response.json())
.then (data => {
    document.getElementById('olis1').innerHTML += `<h2>${data.name}</h2>` + `<h2>${user.lastname}</h2>` + `<h2>${user.age}</h2>` + `<img src="${data.url}"</img>`     
})


console.log(document.getElementById('olis1'));
console.log(JSON.stringify(user));
 


let olis1Elements = ''



 
   
    