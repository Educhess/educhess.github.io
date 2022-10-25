//main container as where we should add the data
var aboutContainer = document.querySelector(".about-myself");
const imageSrc =
  "https://firebasestorage.googleapis.com/v0/b/educhess-image-storage.appspot.com/o/";
const defaultMaleImage =
  imageSrc + "male.png?alt=media&token=ef777a1c-b7b6-4048-9165-eb8c6cf2b389";
const defaultFemaleImage =
  imageSrc + "female.png?alt=media&token=83f6747c-95e6-412b-8b94-f254ec82067c";
//array containing objects with details to be shown
var aboutCards = [
  {
    image: defaultFemaleImage,
    title: "Manasa | 1609",
    desc: "International chess player, Bronze medallist (Asia), 3 times Silver medalist (Country - India), 8 times gold medalist (State - Karnataka)",
  },
  {
    image: defaultMaleImage,
    title: "Damodar M | 1227",
    desc: "National Level Player, University Nationals",
  },
  {
    image: defaultMaleImage,
    title: "Parthsarthy R | 1992",
    desc: "International level, National Under 25 - 5th Place, State Championship - 3rd Place",
  },
  {
    image:
      imageSrc +
      "jatin-1.jpg?alt=media&token=1e07cfd4-d9e2-481f-993e-621eab3ec1e7",
    title: "Jatin S N | 1705",
    desc: "World amateur chess champion, 2018, Played Commonwealth, Asian schools and Grandmaster tournaments",
  },
  {
    image:
      imageSrc +
      "nikhil.jpg?alt=media&token=fa31fb19-197d-4a93-a57e-9cd8b98460bf",
    title: "Nikhil Singh | 1512",
    desc: "International chess player, National level player (4 times), 3rd State level",
  },
  {
    image: defaultMaleImage,
    title: "Nitin S N | 1132",
    desc: "Commonwealth and Asian school, 5th in State",
  },
];

//function to display cards on the home page
function displayCards() {
  console.log("ok");
  let output = "";
  aboutCards.forEach(({ image, title, desc }) => {
    output += `<div class="col">
                <div class="card about-us__card">
                    <div style="width: 200px;height: 160px;"
                        class="card-image mx-auto mt-5 d-flex justify-content-center align-items-center rounded-circle">
                        <img src="${image}" style="width: 100%;height: auto;"/>
                       
                    </div>
                    <div class="card-body">
                        <h5 class="font-weight-bold">${title}</h5>
                        <p>${desc}</p>
                    </div>
                </div>
            </div>`;
  });
  //ading contents to the container
  aboutContainer.innerHTML = output;
}

document.addEventListener("DOMContentLoaded", displayCards);
