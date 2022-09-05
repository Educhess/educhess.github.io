//main container as where we should add the data
var aboutContainer = document.querySelector('.about-myself')
    //array containing objects with details to be shown
var aboutCards = [{
        icon: 'far fa-4x fa-user',
        title: 'Manasa | 1609',
        desc: 'International chess player, Bronze medallist (Asia), 3 times Silver medalist (Country - India), 8 times gold medalist (State - Karnataka)'
    },
    {
        icon: 'far fa-4x fa-user',
        title: 'Damodar M | 1227',
        desc: 'National Level Player, University Nationals'
    },
    {
        icon: 'far fa-4x fa-user',
        title: 'Parthsarthy R | 1992',
        desc: 'International level, National Under 25 - 5th Place, State Championship - 3rd Place'
    },
    {
        icon: 'far fa-4x fa-user',
        title: 'Jatin S N | 1705',
        desc: 'World amateur chess champion, 2018, Played Commonwealth, Asian schools and Grandmaster tournaments'
    },
    {
        icon: 'far fa-4x fa-user',
        title: 'Nikhil Singh | 1512',
        desc: 'International chess player, National level player (4 times), 3rd State level'
    },
    {
        icon: 'far fa-4x fa-user',
        title: 'Nitin S N | 1132',
        desc: 'Commonwealth and Asian school, 5th in State'
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