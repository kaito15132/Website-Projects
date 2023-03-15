//check if an element was already selected. If it wasn't then a new currency will be selected
//for conversion
let currencyArr = [];

const formatter = new Intl.NumberFormat('en-US', {
    maximumSignificantDigits: 4 
});


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

async function addRow(id) {
    const collection = document.getElementsByClassName('possessed');
    const possessedImageSet = setImages(collection[0].id);
    const desiredImageSet = setImages(id);

    //check currency array for provided id, then output divine or exalted value to price variable
    let possessed = document.getElementById('currency-number').value;
    let desiredPrice = calculateCurrentValue(collection[0].id, id) * possessed;

    var table = document.getElementById("conversion-table");
    var row = table.insertRow(-1);
    var cell = row.insertCell(0);
    cell.innerHTML = `
    <p>
        <span>${possessed}</span>
        <img src="${possessedImageSet}" class="default-image"/>
        <span>&rarr;</span>
        <span>${desiredPrice}</span>
        <img src="${desiredImageSet}" class="default-image"/>
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
        case "blacksmiths-whetstone":
            newImage = "https://bit.ly/3ZkYQSf";
            break;    
        case "armourers-scrap":
            newImage = "https://bit.ly/3Jdfptz";
            break;
        case "glassblowers-bauble":
            newImage = "https://bit.ly/3kOXrnY";
            break; 
        case "gemcutters-prism":
            newImage = "https://bit.ly/3EWZZXS";
            break; 
        case "cartographers-chisel":
            newImage = "https://bit.ly/3ST0kAD";
            break; 
        case "orb-of-transmutation":
            newImage = "https://bit.ly/3YmJBXu";
            break;
        case "orb-of-alteration":
            newImage = "https://bit.ly/3kQwLTW";
            break;
        case "orb-of-annulment":
            newImage = "https://bit.ly/3yf0okE";
            break;
        case "orb-of-chance":
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
        case "orb-of-alchemy":
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
        case "orb-of-augmentation":
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
        case "jewellers-orb":
            newImage = "https://bit.ly/3IQwkRx";
            break;
        case "orb-of-fusing":
            newImage = "https://bit.ly/3ZDqxW4";
            break;
        case "chromatic-orb":
            newImage = "https://bit.ly/41ICWd7";
            break;
        case "awakened-sextant":
            newImage = "https://bit.ly/3EXsrc2";
            break;
        case "elevated-sextant":
            newImage = "https://bit.ly/3IUmyxA";
            break;
        case "harbingers-orb":
            newImage = "https://bit.ly/3KYjOSG";
            break;    
        case "orb-of-horizons":
            newImage = "https://bit.ly/3KXJ7UJ";
            break;
        case "fracturing-orb":
            newImage = "https://bit.ly/3INNYoN";
            break; 
        case "ancient-orb":
            newImage = "https://bit.ly/3ETlNni";
            break; 
        case "orb-of-binding":
            newImage = "https://bit.ly/3SS9M7C";
            break; 
        case "engineers-orb":
            newImage = "https://bit.ly/3EYR1tk";
            break;
        case "orb-of-regret":
            newImage = "https://bit.ly/3IPZJLx";
            break;
        case "orb-of-unmaking":
            newImage = "https://bit.ly/3IIVMrO";
            break;
        case "harbingers-shard":
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
        case "orb-of-scouring":
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

async function populateCurrencyArray() {
    let response = await fetch("https://api.poe.watch/get?category=currency&league=Sanctum");
    let asyncResp = await response.json();
    console.log(asyncResp);
    

    for (var i in asyncResp) {
        var item = asyncResp[i];
        var newStringFormat = item.name.toLowerCase();
        newStringFormat = newStringFormat.replace(/\s/g, '-');
        newStringFormat = newStringFormat.replace(/'/g, '');

        currencyArr.push({
            "name" : newStringFormat,
            "divineValue" : item.divine,
            "exaltValue" : item.exalted,
            "chaosValue" : item.mean
        });

    }
}

//purpose is to get
function calculateCurrentValue(possessedID, desiredID) {
    //get divine value, chaos, and exalted value for calculations here
    const div = currencyArr.find( record => record.name === "divine-orb").divineValue;
    const ex = currencyArr.find( record => record.name === "exalted-orb").exaltValue;
    const chaos = currencyArr.find( record => record.name === "chaos-orb").chaosValue;

    //example: veiled chaos: 14  
    //         chaos: 1
    //         gemcutters: 1.55
    let possessed = currencyArr.find( record => record.name === possessedID).chaosValue;
    let desired = currencyArr.find( record => record.name === desiredID).chaosValue;
    console.log(formatter.format(possessed/desired));
    return formatter.format(possessed/desired);
}



//used to add currencies that aren't included in the api
function addAdditionalCurr() {
    const div = currencyArr.find( record => record.name === "divine-orb").divineValue;
    const ex = currencyArr.find( record => record.name === "exalted-orb").exaltValue;
    let fracturingVal = currencyArr.find( record => record.name === "fracturing-shard").chaosValue * 20;
    let bindingVal = currencyArr.find( record => record.name === "orb-of-binding").chaosValue / 20;
    let engineerVal = currencyArr.find( record => record.name === "engineers-orb").chaosValue / 20;
    let horizonVal = currencyArr.find( record => record.name === "orb-of-horizons").chaosValue / 20;

    currencyArr.push({
        "name" : "mirror",
        "divineValue" : 140200/div,
        "exaltValue" :  140200/ex,
        "chaosValue" : 140200
    });
    currencyArr.push({
        "name" : "chaos-orb",
        "divineValue" : 1/div,
        "exaltValue" :  1/ex,
        "chaosValue" : 1
    });
    currencyArr.push({
        "name" : "scroll-fragment",
        "divineValue" : .002/div,
        "exaltValue" :  .002/ex,
        "chaosValue" : .002
    });
    currencyArr.push({
        "name" : "enkindling-orb",
        "divineValue" : 1/div,
        "exaltValue" :  1/ex,
        "chaosValue" : 1
    });
    currencyArr.push({
        "name" : "transmutation-shard",
        "divineValue" : .35/div,
        "exaltValue" :  .35/ex,
        "chaosValue" : .35/20
    });
    currencyArr.push({
        "name" : "alteration-shard",
        "divineValue" : .08/div,
        "exaltValue" :  .08/ex,
        "chaosValue" : .08/20
    });
    currencyArr.push({
        "name" : "mirror-shard",
        "divineValue" : 7010/div,
        "exaltValue" :  7010/ex,
        "chaosValue" : 7010
    });
    currencyArr.push({
        "name" : "regal-shard",
        "divineValue" : 0.055/div,
        "exaltValue" :  0.055/ex,
        "chaosValue" : 0.055
    });
    currencyArr.push({
        "name" : "alchemy-shard",
        "divineValue" : 0.0065/div,
        "exaltValue" :  0.0065/ex,
        "chaosValue" : 0.0065
    });
    currencyArr.push({
        "name" : "chaos-shard",
        "divineValue" : 0.05/div,
        "exaltValue" :  0.05/ex,
        "chaosValue" : 0.05
    });
    currencyArr.push({
        "name" : "fracturing-orb",
        "divineValue" : fracturingVal/div,
        "exaltValue" :  fracturingVal/ex,
        "chaosValue" : fracturingVal
    });
    currencyArr.push({
        "name" : "binding-shard",
        "divineValue" : bindingVal/div,
        "exaltValue" :  bindingVal/ex,
        "chaosValue" : bindingVal
    });
    currencyArr.push({
        "name" : "engineer-shard",
        "divineValue" : engineerVal/div,
        "exaltValue" :  engineerVal/ex,
        "chaosValue" : engineerVal
    });
    currencyArr.push({
        "name" : "sacred-orb",
        "divineValue" : 80/div,
        "exaltValue" :  80/ex,
        "chaosValue" : 80
    });
    currencyArr.push({
        "name" : "horizon-shard",
        "divineValue" : horizonVal/div,
        "exaltValue" :  horizonVal/ex,
        "chaosValue" : horizonVal
    });


}

//This function makes the slider and text field match
function matchValue(id) {

    if (id === "my-range") {
        document.getElementById('currency-number').value = document.getElementById('my-range').value;
        //textVal = sliderVal;
    } else {
        document.getElementById('my-range').value = document.getElementById('currency-number').value;
    }
    
}

populateCurrencyArray();
setTimeout(function(){
    addAdditionalCurr();
}, 1000); 
console.log(currencyArr);

