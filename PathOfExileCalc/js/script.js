//check if an element was already selected. If it wasn't then a new currency will be selected
//for conversion
function myCurrencyCheck(id) {
    const elem = document.getElementById(id);
    //const collection = document.getElementsByClassName('possesed');


    //if there are elements selected
    if (document.getElementsByClassName('possessed').length != 0 ) {   

        if (elem.classList.contains('possessed')) {
            elem.classList.toggle('possessed');
            //need to clear table and desired currencies here
            clearTable();
            clearDesired();
        } else {
            elem.classList.toggle('desired');
            addRow(id);
        }
    } else {   
        elem.classList.toggle('possessed');
        elem.classList.remove('desired');
    }
}

function addRow(id) {
    const collection = document.getElementsByClassName('possessed');
    var table = document.getElementById("conversion-table");
    var row = table.insertRow(-1);
    var cell = row.insertCell(0);
    cell.innerHTML = `
    <p>
        <span>` + getPrice(id) + `</span>
        <img src="` +  setImages(collection[0].id) +`" class="default-image"/>
        <span>&rarr;</span>
        <span>13</span>
        <img src="` +  setImages(id) +`" class="default-image"/>
    </p>`;
}

function clearTable() {
    var tb = document.getElementById('conversion-table');
    while(tb.rows.length > 1) {
    tb.deleteRow(1);
    }
}

function clearDesired() {
    const collection = document.getElementsByClassName('desired');
    const collectionLength = collection.length;

    for (var i = 0;i < collectionLength ; i++) {
        collection[0].classList.toggle('desired');
    }
}

function setImages(id) {
    var newImage = "image";
    switch (id) {
        case "scroll-fragment":
            newImage = "https://bit.ly/3kGXgLv";
            break;
        case "scroll-of-wisdom":
            newImage = "https://bit.ly/3ESZIoL";
            break;
        case "portal-scroll":
            newImage = "https://bit.ly/3ZEZQ3h";
            break;
        case "enkindling-orb":
            newImage = "https://bit.ly/41X5EY2";
            break;
        case "instilling-orb":
            newImage = "https://bit.ly/3mvTK6U";
            break;
        case "blacksmith-whetstone":
            newImage = "https://bit.ly/3ZkYQSf";
            break;    
        case "armourer-scrap":
            newImage = "https://bit.ly/3Jdfptz";
            break;
        case "glassblower-bauble":
            newImage = "https://bit.ly/3kOXrnY";
            break; 
        case "gemcutter-prism":
            newImage = "https://bit.ly/3EWZZXS";
            break; 
        case "cartographer-chisel":
            newImage = "https://bit.ly/3ST0kAD";
            break; 
        case "transmutation":
            newImage = "https://bit.ly/3YmJBXu";
            break;
        case "alteration":
            newImage = "https://bit.ly/3kQwLTW";
            break;
        case "annulment":
            newImage = "https://bit.ly/3yf0okE";
            break;
        case "chance":
            newImage = "https://bit.ly/3EWsXam";
            break;
        case "exalted-orb":
            newImage = "https://bit.ly/3kURupr";
            break;
        case "mirror":
            newImage = "https://bit.ly/3y9WIke";
            break;    
        case "regal-orb":
            newImage = "https://bit.ly/3kNUFiQ";
            break;
        case "alchemy-orb":
            newImage = "https://bit.ly/3kISoFI";
            break; 
        case "chaos-orb":
            newImage = "https://bit.ly/3Jev5Ni";
            break; 
        case "veiled-chaos-orb":
            newImage = "https://bit.ly/3IPdkCH";
            break; 
        case "transmutation-shard":
            newImage = "https://bit.ly/3ISMxp1";
            break;
        case "alteration-shard":
            newImage = "https://bit.ly/3yfZnch";
            break;
        case "annulment-shard":
            newImage = "https://bit.ly/3IOvtRm";
            break;
        case "augmentation":
            newImage = "https://bit.ly/3KTOAfd";
            break;
        case "exalted-shard":
            newImage = "https://bit.ly/3ZEafMO";
            break;
        case "mirror-shard":
            newImage = "https://bit.ly/3kIuhqH";
            break;    
        case "regal-shard":
            newImage = "https://bit.ly/3YnPLqD";
            break;
        case "alchemy-shard":
            newImage = "https://bit.ly/3mtfCjk";
            break; 
        case "chaos-shard":
            newImage = "https://bit.ly/3JdUwOR";
            break; 
        case "divine-orb":
            newImage = "https://bit.ly/3ZE1hiz";
            break; 
        case "jewelers-orb":
            newImage = "https://bit.ly/3IQwkRx";
            break;
        case "fusing":
            newImage = "https://bit.ly/3ZDqxW4";
            break;
        case "chromatic":
            newImage = "https://bit.ly/41ICWd7";
            break;
        case "awakened-sextant":
            newImage = "https://bit.ly/3EXsrc2";
            break;
        case "elevated-sextant":
            newImage = "https://bit.ly/3IUmyxA";
            break;
        case "harbinger-orb":
            newImage = "https://bit.ly/3KYjOSG";
            break;    
        case "horizon-orb":
            newImage = "https://bit.ly/3KXJ7UJ";
            break;
        case "fracturing-orb":
            newImage = "https://bit.ly/3INNYoN";
            break; 
        case "ancient-orb":
            newImage = "https://bit.ly/3ETlNni";
            break; 
        case "binding-orb":
            newImage = "https://bit.ly/3SS9M7C";
            break; 
        case "engineer-orb":
            newImage = "https://bit.ly/3EYR1tk";
            break;
        case "regret-orb":
            newImage = "https://bit.ly/3IPZJLx";
            break;
        case "unmaking-orb":
            newImage = "https://bit.ly/3IIVMrO";
            break;
        case "harbinger-shard":
            newImage = "https://bit.ly/41Pxky2";
            break;
        case "horizon-shard":
            newImage = "https://bit.ly/3yvLNBP";
            break;
        case "fracturing-shard":
            newImage = "https://bit.ly/3JeFEA4";
            break;    
        case "ancient-shard":
            newImage = "https://bit.ly/3Ykv7HJ";
            break;
        case "binding-shard":
            newImage = "https://bit.ly/3Zl0QtJ";
            break; 
        case "engineer-shard":
            newImage = "https://bit.ly/3SQizGP";
            break; 
        case "scouring-orb":
            newImage = "https://bit.ly/3EWQVm3";
            break; 
        case "sacred-orb":
            newImage = "https://bit.ly/3kNxaX7";
            break; 
        case "blessed-orb":
            newImage = "https://bit.ly/3IUnFgK";
            break; 
        case "vaal-orb":
            newImage = "https://bit.ly/3kLtB3E";
            break;
        default:
    }

    return newImage;
}


//API to call https://api.poe.watch/get?category=currency&league=Sanctum
/*
this call works

fetch("https://api.poe.watch/get?category=armour&league=Sanctum")
.then((response) => response.json())
.then((data) => console.log(data.find( record => record.name === "Ghostwrithe").divine));

*/
async function getPrice(id) {

fetch("https://api.poe.watch/get?category=armour&league=Sanctum")
    .then((response) => response.json())
    .then((data) => {
        //price = data.find( record => record.name === "Ghostwrithe").divine;
        console.log(data.find( record => record.name === "Ghostwrithe").divine); 
});
}


