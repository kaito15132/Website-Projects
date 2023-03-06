import fetch from "node-fetch";

fetch("https://poe.ninja/api/data/currencyoverview?league=Sanctum&type=Currency")
.then((response) => response.json())
.then((data) => console.log(data));

