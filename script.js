const day = document.getElementById('day')
const month = document.getElementById('month')
const year = document.getElementById('year')
const label = document.querySelectorAll('label')
const required = document.querySelectorAll('.required')
const mustBeAValid = document.querySelectorAll('.must-be-valid')
const botao = document.querySelector('button')
const dataAtual = new Date()
const diaAtual = dataAtual.getDay()
const mesAtual = dataAtual.getMonth()
const anoAtual = dataAtual.getFullYear()
const span = document.querySelectorAll('span')


//Required Validation
botao.addEventListener('click', (e) => {
    e.preventDefault();
    
    //Required Day Input
    if (day.value === ""){
        label[0].style.color = 'red'
        day.style.border = '1px solid red'
        required[0].style.display = 'block'
    } else {
        label[0].style.color = '#838383'
        day.style.border = '1px solid #ccc'
        required[0].style.display = 'none'
    }

    //Required Month Input
    if (month.value === ""){
        label[1].style.color = 'red'
        month.style.border = '1px solid red'
        required[1].style.display = 'block'
    } else {
        label[1].style.color = '#838383'
        month.style.border = '1px solid #ccc'
        required[1].style.display = 'none'
    }

    //Required Year Input
    if (year.value === ""){
        label[2].style.color = 'red'
        year.style.border = '1px solid red'
        required[2].style.display = 'block'
    } else {
        label[2].style.color = '#838383'
        year.style.border = '1px solid #ccc'
        required[2].style.display = 'none'
    }
});


// Must Be Validation
botao.addEventListener('click', (e) => {
    e.preventDefault();

    //Validation Day
    if (day.value >= 32) {
        label[0].style.color = 'red'
        day.style.border = '1px solid red'
        mustBeAValid[0].style.display = 'block'
    } else {
        mustBeAValid[0].style.display = 'none'
    }

    // Validation Month
    if (month.value >= 13) {
        label[1].style.color = 'red'
        month.style.border = '1px solid red'
        mustBeAValid[1].style.display = 'block'
    } else {
        mustBeAValid[1].style.display = 'none'
    }

    // Validation Year
    if (year.value >= 2025) {
        label[2].style.color = 'red'
        year.style.border = '1px solid red'
        mustBeAValid[2].style.display = 'block'
    } else {
        mustBeAValid[2].style.display = 'none'
    }
})

// Calculation Time
botao.addEventListener('click', (e) => {
    e.preventDefault();

    if (
        day.value === "" || day.value >= 32 
        || 
        month.value === "" || month.value >= 13 
        || 
        year.value === "" || year.value >= 2025 
    ) {
        e.preventDefault();
    } else {
        
        e.preventDefault();
        calcularDiferenca();
    }

    
})


function calcularDiferenca() {

        const day = parseInt(document.getElementById('day').value, 10);
        const month = parseInt(document.getElementById('month').value, 10);
        const year = parseInt(document.getElementById('year').value, 10);
            
        // Data inserida nos campos
        const dataInserida = new Date(year, month - 1, day);

        // Calcula a diferença em milissegundos
        const diferencaMiliSegundos = dataAtual - dataInserida;

        // Converte milissegundos para dias
        const diasTotais = Math.floor(diferencaMiliSegundos / (1000 * 60 * 60 * 24));

        // Calcula os anos, meses e dias
        const anos = Math.floor(diasTotais / 365.25); // Considerando anos bissextos
        const meses = Math.floor((diasTotais % 365.25) / 30.44); // Aproximando meses
        const dias = Math.floor((diasTotais % 365.25) % 30.44);

        // Exibe o resultado
        span[0].textContent = `${anos}`;
        span[1].textContent = `${meses}`;
        span[2].textContent = `${dias}`;
}