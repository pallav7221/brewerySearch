function displayBrewerry(data) {
    document.querySelector("tbody").innerHTML = "";
    data.forEach(element => {
        var row = document.createElement("tr");

        var td1 = document.createElement("td");
        td1.innerText = element.name;

        var td2 = document.createElement("td");
        td2.innerText = element.brewery_type;

        var td3 = document.createElement("td");
        td3.innerText = element.city;

        var td4 = document.createElement("td");
        td4.innerText = element.state;

        let button1 = document.createElement("td");

        button1.innerHTML = "More Details";

        button1.addEventListener("click", function () {

            let id = element.id;
            localStorage.setItem("moreDetails", JSON.stringify(id));
            window.location.href = "individual.html";


        });


        row.append(td1, td2, td3, td4, button1);
        document.querySelector("tbody").append(row);
    });

}

async function search() {

    let value = document.querySelector("#search>input").value;
    let res = await fetch(`https://api.openbrewerydb.org/breweries/search?query=${value}&per_page=20`)
    let data = await res.json();
    console.log(data);
    displayBrewerry(data)
}
let timer;
function debounce(callback, delay) {
    if (timer) {
        clearTimeout(timer)
    }
    timer = setTimeout(() => {
        callback();
    }, delay);
}