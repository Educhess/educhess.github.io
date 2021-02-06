//main container as where we should add the data
var aboutContainer = document.querySelector('.about-myself')
    //array containing objects with details to be shown
var aboutCards = [{
        icon: 'far fa-4x fa-user',
        title: 'Damodar M',
        desc: 'National Level Player, Fide Rating: 1227'
    },
    {
        icon: 'far fa-4x fa-user',
        title: 'Parthsarthy R',
        desc: 'Commonwealth Player, Fide Rating: 1992'
    },
    {
        icon: 'far fa-4x fa-user',
        title: 'Jatin S N',
        desc: 'World Amateur Champion, Fide Rating: 1705'
    }
]

//function to display cards on the home page
function displayCards() {
    console.log('ok');
    let output = ""
    aboutCards.forEach(({ icon, title, desc }) => {
            output += `<div class="col">
                <div class="card">
                    <div style="width:120px;height:120px"
                        class="card-img mx-auto mt-5 d-flex justify-content-center align-items-center rounded-circle">
                        <i class="${icon}"></i>
                    </div>
                    <div class="card-body">
                        <h5 class="font-weight-bold">${title}</h5>
                        <p>${desc}</p>
                    </div>
                </div>
            </div>`
        })
        //ading contents to the container
    aboutContainer.innerHTML = output
}

document.addEventListener("DOMContentLoaded", displayCards);