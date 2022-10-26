//main container as where we should add the data
let pricingContainer = document.querySelector(".pricing");
let country = localStorage.getItem("country")
  ? localStorage.getItem("country")
  : "ROW";
// Others
// India
let pricingCards = [
  {
    title: "Beginner",
    info: [
      "16 live classes",
      "2 Tests and review sessions",
      "Lifetime access to weekly tournaments",
      "Weekly assignments",
      "Access to all content",
      "24x7 support from trainers",
      "Batch size 1:1",
    ],
    rowCurrentPricing: "$200",
    rowPreviousPricing: "$250",
    rowPricingPerClass: "$12.5",
    indiaCurrentPricing: "₹6400",
    indiaPreviousPricing: "₹8000",
    indiaPricingPerClass: "₹400",
  },
  {
    title: "Intermediate",
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
    rowCurrentPricing: "$384",
    rowPreviousPricing: "$450",
    rowPricingPerClass: "$12.5",
    indiaCurrentPricing: "₹12,800",
    indiaPreviousPricing: "₹15,000",
    indiaPricingPerClass: "₹400",
  },
  {
    title: "Advanced",
    info: [
      "48 live classes",
      "4 Tests and review sessions",
      "Lifetime access to weekly tournaments",
      "Weekly assignments",
      "Access to all content",
      "Internation Rating",
      "24x7 support from trainers",
      "Batch size 1:1",
    ],
    rowCurrentPricing: "$600",
    rowPreviousPricing: "$700",
    rowPricingPerClass: "$12.5",
    indiaCurrentPricing: "₹19,200",
    indiaPreviousPricing: "₹21,000",
    indiaPricingPerClass: "₹400",
  },
];

//function to display cards on the home page
function displayPricing() {
  let output = "";
  pricingCards.forEach(
    ({
      title = "",
      info = "",
      rowCurrentPricing = "",
      rowPreviousPricing = "",
      rowPricingPerClass = "",
      indiaCurrentPricing = "",
      indiaPreviousPricing = "",
      indiaPricingPerClass = "",
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
                        <span class="pricing__footer--bold">${
                          country == "ROW"
                            ? rowCurrentPricing
                            : indiaCurrentPricing
                        }</span>
                        <span class="pricing__footer--strike">${
                          country == "ROW"
                            ? rowPreviousPricing
                            : indiaPreviousPricing
                        }</span>
                        <span class="uppercase">Price Per Class: ${
                          country == "ROW"
                            ? rowPricingPerClass
                            : indiaPricingPerClass
                        }</span>
                        <span href="#" class="waves-effect waves-light btn-small" style="background-color:rgb(63, 25, 170)">BOOK</span>
                    </div>
                </div>
            </div>`;
    }
  );
  //ading contents to the container
  pricingContainer.innerHTML = output;
}

document.addEventListener("DOMContentLoaded", displayPricing);
