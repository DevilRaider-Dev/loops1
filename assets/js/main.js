let i;

output = document.getElementById("output")
output.innerHTML = "Loops Level 1<br><br>"
output.innerHTML += "Aufgabe 1<br><br>"

for(i = 0;i<10;i++){
    output.innerHTML += `Hallo World (${i+1}), `
}

