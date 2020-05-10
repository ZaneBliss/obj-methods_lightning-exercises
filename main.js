let app = document.querySelector("#app")

const dateVisited = "visitDate";
const owed = "amountBilled";
const patient = "patientName";

let bill = {
  officeName: "Goofy Goober",
  streetAddress: "321 Sandy Lane",
  doctorName: "Mr. Smart",
  patientName: "John",
  visitDate: "01-05-2020",
  amountBilled: "$150",
  dueDate: "01-06-2020",
};

app.innerHTML += `<h1>Values</h1><hr>`
for (const value of Object.values(bill)) {
    app.innerHTML += `<p>${value}</p>`
}

app.innerHTML += `<h1>Keys</h1><hr>`
for (const key of Object.keys(bill)) {
  app.innerHTML += `<p>${key}</p>`
}

let favDinnerFood = { 
    name: "pizza",
    topping: "mushroom",
    style: "regular",
    cheeseQuantity: "extra",
    sauce: "tomato"
}

app.innerHTML += "<h1>Favorite Dinner Food</h1><hr>"
app.innerHTML += "<article class='food'></article>"
for (const entry of Object.entries(favDinnerFood)) {
    document.querySelector(".food").innerHTML += `<p>${entry[0]}: ${entry[1]}</p>`
}