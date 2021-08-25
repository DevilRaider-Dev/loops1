let i;

output = document.getElementById("output");
output.innerHTML = "Loops Level 1<br><br>";
output.innerHTML += "Aufgabe 1<br><br>";

for (i = 0; i < 10; i++) {
    output.innerHTML += `Hallo World (${i + 1}), `;
}

output.innerHTML += "<br><br><br>Aufgabe 2<br><br>";

numArray = [];
for (i = 0; i < 11; i++) {
    numArray.push(i)
}
output.innerHTML += `numArray: ${numArray}`

output.innerHTML += "<br><br><br>Aufgabe 4<br><br>";

let names = ['Georg', 'Anass', 'Elaine', 'Hakan', 'Erik', 'Kim', 'Sergio'];
output.innerHTML += "names: ";
for (i = 0; i < names.length; i++) {
    output.innerHTML += `${names[i]}, `;
}

output.innerHTML += "<br><br><br>Aufgabe 6<br><br>";

let images = [];
for (i = 0; i < 100; i++) {
    images.push(` image_${i + 1}.jpg`)
}

output.innerHTML += `images: ${images}`

output.innerHTML += "<br><br><br>Aufgabe 7<br><br>";

i = 0;
do {
    i++;
    output.innerHTML += `The number is ${i}, `;
} while (i < 5);

output.innerHTML += "<br><br><br>Aufgabe 8<br><br>";

i = 1;
do {
    if (i % 2 == 0) {
        output.innerHTML += `${i}, `;
    }
    i++;
} while (i < 20)

output.innerHTML += "<br><br><br>Aufgabe 9<br><br>";

let words = [
    'hallo',
    'Auto',
    'Waschmaschine',
    'Schrank',
    'Katze',
    'Beispiel',
    'Eltern',
    'Fenster',
    'Geburtstag',
    'Himmel',
    'schwimmen',
    'Zeitung'
];

output.innerHTML += '<input type="number" id="input"><input type="button" value="word print" onclick="print()"><br><br><label for="" id="result"></label>';

function print() {

    input = Number(document.getElementById("input").value);
    result.innerHTML = ""
    for (let e of words) {
        if (e.length == input) {
            result.innerHTML += `${e}, `;
        }
    }
}

output.innerHTML += "<br><br><br>Aufgabe 9 Bonus<br><br>";

output.innerHTML += '<input type="text" id="input2"><input type="button" value="add word" onclick="add()"><br><br><label for="" id="result2"></label>';

function add() {

    let exist = false;

    input2 = document.getElementById("input2").value;
    result2.innerHTML = ""

    for (let e of words) {
        if (e == input2) {
            result2.innerHTML = `${e} ist bereits vorhanden.`;
            exist = true;
        }
    }
    if (input2 == "") {
        result2.innerHTML = `Bitte gib ein Wort ein.`;
    } else if (exist == false) {
        words.push(input2)
        result2.innerHTML = `${input2} wurde hinzugefügt`;
    }
    console.log(words)
}