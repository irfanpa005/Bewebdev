
let display = document.getElementById("personsList");

fetch('persons.json')
.then(response => response.json())
.then(data => {

    for (i=0; i<data.length; i++){
        const personLi = document.createElement('li');
        personLi.innerText = data[i].name + ' ' + data[i].age;
        display.appendChild(personLi);
    }

});