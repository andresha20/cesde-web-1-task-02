let useWhile = true;

const runScript = (e) => {
    if (e.target.id == "while-button") {
        useWhile = !useWhile;
        let whileButton = document.getElementById("while-button");
        let whileStatus = document.getElementById("while-status");
        whileStatus.textContent = useWhile ? "Activado" : "Desactivado";
        whileButton.innerHTML = useWhile ? "Desactivar" : "Activar";
        console.log('WHILE Status: ' + useWhile);
        return false;
    }
    console.log('WHILE Status: ' + useWhile);
    switch (parseInt(e.target.value)) {
        case 1:
            const input = prompt("Número máximo de números naturales");
            let acc = 0;
            for (let i = 1; i <= input; i++) {
                console.log(i)
                acc += i;
            }
            console.log(`Total is: ${acc}`)
            break;
        case 2:
            const name = prompt("Nombre");
            const notas = prompt("Número de notas");
            const notasTotales = []
            let acc1 = 0;
            for (let i = 1; i <= notas; i++) {
                notasTotales[i] = prompt("Nota " + i);
                console.log(notasTotales[i])
                acc1 += parseInt(notasTotales[i]);
            }
            let wins = acc1/notas >= 3 ? true : false;
            console.log(`El estudiante ${name} ${wins ? "ganó" : "perdió"}`)
            break;
        case 3:
            let end = false;
            let acc2 = 0;
            while (end == false) {
                const number = prompt(`Number`)
                if (number.toLowerCase() == 'fin') {
                    end = true;
                } else {
                    acc2 += parseInt(number);
                }
            }
            console.log(`Accumulator is ${acc2}`)
            break;
        case 4:
            let acc3 = 0;
            while (acc3 <= 30) {
                currNumber = parseInt(prompt("Number"));
                if (acc3 > 0) {
                    acc3 *= currNumber;
                } else {
                    acc3 = currNumber;
                }
                console.log(`Multiplication is ${acc3}`)
            }
            console.log(`Total is ${acc3}`)
            break;
        case 5:
            let num1 = parseInt(prompt("Number"));
            let acc4 = parseInt(num1);
            for (let i = acc4; i > 1; i--) {
                acc4 *= i - 1;
            }
            console.log(`Factorial is ${acc4}`)
            break;
        case 6:
            let seconds = parseInt(prompt("Seconds"));
            let acc5 = 0;
            while (acc5 <= 30) {
                setInterval(() => {
                    acc5++;
                    console.log(acc5)
                }, seconds * 1000);
            }
            break;
        case 7:
            let seconds1 = parseInt(prompt("Seconds"));
            let acc6 = 30;
            while(acc6 > 0) {
                setInterval(() => {
                    acc6--;
                    console.log(acc6)
                }, seconds1 * 1000);
            }
            break;
        case 8:
            let num2 = parseInt(prompt("Altura"));
            if (useWhile) {
                let i = 1;
                while (i <= num2) {
                    let acc = '*';
                    while (acc.length < i) {
                        acc += '*';
                    }
                    console.log(acc)
                    i++;
                }
            } else {
                for (let i = 1; i <= num2; i++) {
                    let acc = '*';
                    for (let ii = 1; acc.length < i; ii++) {
                        acc += '*';
                    }
                    console.log(acc)
                }
            }
            break;
        case 9:
            let num3 = parseInt(prompt("Altura"));
            if (useWhile) {
                let i = num3;
                while (i > 0) {
                    let acc = '*';
                    while (acc.length < i) {
                        acc += '*';
                    }
                    console.log(acc)
                    i--
                }
            } else {
                for (let i = num3; i > 0; i--) {
                    let acc = '*';
                    while (acc.length < i) {
                        acc += '*'
                    }
                    console.log(acc)
                }
            }
            break;
        case 10:
            let addClient = true;
            if (useWhile) {
                while (addClient) {
                    let userName = prompt("Nombre cliente");
                    if (!userName) return;
                    if (userName == "fin") {
                        addClient = false;
                        return false;
                    }
                    let productsAmount = parseInt(prompt("Cantidad de productos"));
                    let total = 0;
                    let i = 1;
                    while (i <= productsAmount) {
                        let product = parseInt(prompt("Precio unitario"))
                        total += product;
                        i++;
                    }
                    console.log(total)
                }
            } else {
                let clientes = parseInt(prompt("Cantidad de clientes"));
                for (let i = 1; i <= clientes; i++) {
                    let userName = prompt("Nombre cliente");
                    if (!userName) return;
                    if (userName == "fin") {
                        addClient = false;
                        return false;
                    }
                    let productsAmount = parseInt(prompt("Cantidad de productos"));
                    let total = 0;
                    let i = 1;
                    for (let i = 1; i <= productsAmount; i++) {
                        let product = parseInt(prompt("Precio unitario"))
                        total += product;
                    }
                    console.log(total)
                }
            }
            break;
        case 11:
            let studentsNumber = parseInt(prompt("Número de estudiantes"));
            if (useWhile) {
                let i = 1;
                while (i <= studentsNumber) {
                    let name = prompt("Nombre del estudiante");
                    let materia = prompt("Materia");
                    let acc7 = 0;
                    let totalNotes = 3;
                    let i2 = 1;
                    while (i2 <= totalNotes) {
                        let nota = parseInt(prompt(`Nota ${i2}`));
                        acc7 += nota;
                        i2++;
                    }
                    let average = (acc7/totalNotes).toFixed(2);
                    console.log(`El estudiante ${name} de la materia ${materia} tiene un promedio de ${average}`)
                    i++;
                }
            } else {
                for (let i = 1; i <= studentsNumber; i++) {
                    let name = prompt("Nombre del estudiante");
                    let materia = prompt("Materia");
                    let acc7 = 0;
                    let totalNotes = 3;
                    for (let i = 1; i <= totalNotes; i++) {
                        let nota = parseInt(prompt(`Nota ${i}`));
                        acc7 += nota;
                    }
                    let average = (acc7/totalNotes).toFixed(2);
                    console.log(`El estudiante ${name} de la materia ${materia} tiene un promedio de ${average}`)
                }
            }
            break;
        case 12:
            let table = document.createElement("table");
            table.setAttribute("style", "border-collapse:collapse;");
            table.setAttribute("border", "1");
            let tbody = document.createElement("tbody");
            table.appendChild(tbody);
            let targetDiv = document.getElementById("#12");
            targetDiv.innerHTML = "" 
            targetDiv.setAttribute("style", "margin-top: 10px");
            targetDiv.appendChild(table);
            if (useWhile) {
                let i = 0;
                while (i <= 3) {
                    let tr = document.createElement("tr");
                    tbody.appendChild(tr);
                    let lastIndex = i * 5;
                    let i = lastIndex - 5 + 1;
                    while (i <= lastIndex) {
                        let td = document.createElement("td");
                        td.innerHTML = i;
                        tr.appendChild(td);
                    }
                    i++;
                }
            } else {
                for (let i = 1; i <= 3; i++) {
                    let tr = document.createElement("tr");
                    tbody.appendChild(tr);
                    let lastIndex = i * 5;
                    for (let i = lastIndex - 5 + 1; i <= lastIndex; i++) {
                        let td = document.createElement("td");
                        td.innerHTML = i;
                        tr.appendChild(td);
                    }
                }
            }
            break;
        case 13:
            let underage = 0;
            let adult = 0;
            if (useWhile) {
                let i = 1;
                while (i <= 10) {
                    let edad = parseInt(prompt(`Edad estudiante ${i}`));
                    if (edad >= 18) {
                        adult += 1;
                    } else {
                        underage += 1;
                    }
                    i++;
                }
                console.log(`Hay ${underage} estudiantes menores de edad y ${adult} estudiantes mayores de edad.`);
            } else {
                for (let i = 1; i <= 10; i++) {
                    let edad = parseInt(prompt(`Edad estudiante ${i}`));
                    if (edad >= 18) {
                        adult += 1;
                    } else {
                        underage += 1;
                    }
                }
                console.log(`Hay ${underage} estudiantes menores de edad y ${adult} estudiantes mayores de edad.`);
            }
            break;
        case 14:
            let quit = false;
            if (useWhile) {
                let i = 1;
                while (i <= 3 && !quit) {
                    if (quit) return false;
                    let randomNumber = Math.floor(Math.random() * 10) + 1;
                    let userNumber = parseInt(prompt("Ingresa un número de 1 a 10"));
                    console.log(randomNumber, userNumber)
                    if (randomNumber == userNumber) {
                        console.log(`Number ${userNumber} matches!`)
                        quit = true;
                        break;
                    } else {
                        console.log(`Number ${userNumber} doesn't match. Try again!`)
                    }
                    i++;                               
                }
            } else {
                for (let i = 1; i <= 3; i++) {
                    if (quit) return false;
                    let randomNumber = Math.floor(Math.random() * 10) + 1;
                    let userNumber = parseInt(prompt("Ingresa un número de 1 a 10"));
                    console.log(randomNumber, userNumber)
                    if (randomNumber == userNumber) {
                        console.log(`Number ${userNumber} matches!`)
                        quit = true;
                        break;
                    } else {
                        console.log(`Number ${userNumber} doesn't match. Try again!`)
                    }
                }
            }
            break;
        default:
            break;
    }
}

addEventListener("click", runScript)


