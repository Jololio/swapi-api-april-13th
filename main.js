const residentButton = document.querySelector('button');
const resNames = document.querySelector('section');


const buttonClick = event => {
    axios.get(`https://swapi.dev/api/planets/?search=ald`)
        .then(res => {
            console.log(res.data)
            for(let i = 0; i < res.data.results[0].residents.length; i++){
                // console.log(res.data.results[0].residents)
                axios.get(res.data.results[0].residents[i])
                    .then(res => {
                       let residentName = document.createElement('div')
                       residentName.innerHTML = `<h2>${res.data.name}</h2>`
                       document.body.appendChild(residentName) 
                    })
            }
        })  
}

residentButton.addEventListener('click', buttonClick)