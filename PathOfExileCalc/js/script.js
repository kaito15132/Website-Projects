//Used to learn how to find a selected element
/*
function myCurrencyCheck(id) {
    const elem = document.getElementById(id);

    if (document.getElementsByClassName('selected').length != 0)
    {
        elem.style.backgroundColor = 'green';
    } else {
        elem.style.backgroundColor = 'red';
    }
    document.getElementsByClassName('selected').
}*/

//check if an element was already selected. If it wasn't then a new currency will be selected
//for conversion
function myCurrencyCheck(id) {
    const elem = document.getElementById(id);
    //const collection = document.getElementsByClassName('possesed');


    //if there are elements selected
    if (document.getElementsByClassName('possessed').length != 0 )
    {   

        if (elem.classList.contains('possessed'))
        {

            elem.classList.toggle('possessed');
            //need to clear table and desired currencies here
            clearTable();
            clearDesired();
        } else {
            elem.classList.toggle('desired');
            addRow("conversion-table");
        }
        
    } else {
        
        elem.classList.toggle('possessed');
        elem.classList.remove('desired');
        
    }
}

function addRow(id) {
    var table = document.getElementById("conversion-table");
    var row = table.insertRow(-1);
    var cell = row.insertCell(0);
    cell.innerHTML = `
    <p>
        <span>10.3</span>
        <img src="" class="selected-currency"/>
        <span>→</span>
        <span>13</span>
        <img src=""/>
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