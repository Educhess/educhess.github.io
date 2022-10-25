//main container as where we should add the data
let pricingContainer = document.querySelector(".pricing");

let pricingCards = [
  {
    title: "Short term",
    info: [
      "16 live classes",
      "2 Tests and review sessions",
      "Lifetime access to weekly tournaments",
      "Weekly assignments",
      "Access to all content",
      "24x7 support from trainers",
      "Batch size 1:1",
    ],
    currentPricing: "$200",
    previousPricing: "$250",
    pricingPerClass: "$12.5",
  },
  {
    title: "Mid term",
    info: [
      "32 live classes",
      "4 Tests and review sessions",
      "Lifetime access to weekly tournaments",
      "Weekly assignments",
      "Access to all content",
      "Internation Rating",
      "24x7 support from trainers",
      "Batch size 1:1",
    ],
    currentPricing: "$300",
    previousPricing: "$350",
    pricingPerClass: "$9.375",
  },
  {
    title: "Long term",
    info: [
      "48 live classes",
      "4 Tests and review sessions",
      "Lifetime access to weekly tournaments",
      "Weekly assignments",
      "Access to all content",
      "24x7 support from trainers",
      "Batch size 1:1",
    ],
    currentPricing: "$600",
    previousPricing: "$700",
    pricingPerClass: "$12.5",
  },
];

//function to display cards on the home page
function displayCards() {
  let output = "";
  pricingCards.forEach(
    ({
      title = "",
      info = "",
      currentPricing = "",
      previousPricing = "",
      pricingPerClass = "",
    }) => {
      output += `<div class="col">
                <div class="card" style="width: fit-content">
                    <div class="card-content" style="width:fit-content;">
                        <span class="card-title uppercase">${title}</span>
                            <ul class="collection">
                                ${info.reduce((result, point) => {
                                  return (
                                    result +
                                    `<li class="collection-item">${point}</li>`
                                  );
                                }, "")}
                            </ul>
                    </div>
                    <div class="card-action pricing__footer">
                        <span class="pricing__footer--bold">${currentPricing}</span>
                        <span class="pricing__footer--strike">${previousPricing}</span>
                        <span class="uppercase">Price Per Class: ${pricingPerClass}</span>
                        <span href="#" class="waves-effect waves-light btn-small" style="background-color:rgb(63, 25, 170)">BOOK</span>
                    </div>
                </div>
            </div>`;
    }
  );
  //ading contents to the container
  pricingContainer.innerHTML = output;
}

document.addEventListener("DOMContentLoaded", displayCards);
