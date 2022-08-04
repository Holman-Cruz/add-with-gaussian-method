function suma1(a, b) {
    let c = a + b;
    let d = Math.max(a, b);
    let e = d / 2;
    let f = e * c;
    document.getElementById("description-1").innerHTML = `The sum of the sequence of numbers of ${a} to ${b} is equal to: <b>${f}</b>`;
}

suma1(1, 10);

function suma2(a, b) {
    let c = a + b;
    let d = Math.max(a, b);
    let e = d / 2;
    let f = e * c;
    document.getElementById("description-2").innerHTML = `The sum of the sequence of numbers of ${a} to ${b} is equal to: <b>${f}</b>`;
}

suma2(1, 100);

function suma3(a, b) {
    let c = a + b;
    let d = Math.max(a, b);
    let e = d / 2;
    let f = e * c;
    document.getElementById("description-3").innerHTML = `The sum of the sequence of numbers of ${a} to ${b} is equal to: <b>${f}</b>`;
}

suma3(1, 1000);


// Script calculate section

function calculate() {
    let a = document.getElementById("start").value;
    let a1 = parseInt(a ,10);
    let b = document.getElementById("end").value;
    let b1 = parseInt(b, 10);
    let c = a1 + b1;
    let d = Math.max(a1, b1);
    let d1 = Math.min(a1, b1);
    let d2 =  d - d1 + 1;
    let e = d2 / 2;
    let f = e * c;
    if (a1 > 0 && b1 > 0 && a1 < b1) {
        document.getElementById("result").innerHTML = `The sum of the sequence of numbers of ${a} to ${b} is equal to:<br><b>${f}</b>`;
    } else {
        document.getElementById("result").innerHTML = "Enter values ​​greater than 0, the start number must be less than the end number.";
    }
}

