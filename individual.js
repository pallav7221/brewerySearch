
let id = JSON.parse(localStorage.getItem("moreDetails"));

async function display() {
    let res = await fetch(`https://api.openbrewerydb.org/breweries/${id}`)
    let data = await res.json();
    moreDetail(data);
    console.log(data)
}
document.querySelector("#card").innerHTML = "";
function moreDetail(element) {

    let name = document.createElement('h1');
    name.innerHTML = "Name: " + element.name;
    let type = document.createElement('p');
    type.innerHTML = "Type: " + element.brewery_type;


    let city = document.createElement('p');
    city.innerHTML = "City: " + element.city;
    let state = document.createElement('p');
    state.innerHTML = "State: " + element.state;

    let country = document.createElement('p');
    country.innerHTML = "Country: " + element.country;

    let postal_code = document.createElement('p');
    postal_code.innerHTML = "postal_code: " + element.postal_code;

    let phone = document.createElement('p');
    phone.innerHTML = "Country: " + element.phone;

    document.querySelector("#card").append(name, type, city, state, country, postal_code, phone)


}
display()