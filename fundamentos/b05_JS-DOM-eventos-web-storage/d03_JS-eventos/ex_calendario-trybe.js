function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
};
  
createDaysOfTheWeek();
  
/* Exercício 1: O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days". Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.

Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>

Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>

Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li> */

function dezCalendarDays () {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const dezList = document.getElementById('days');
    for (let index = 0; index < dezDaysList.length; index += 1) {
        let dezDay = document.createElement('li');
        dezDay.innerHTML = dezDaysList[index];
        dezList.appendChild(dezDay);

        switch (dezDaysList[index]) {
            case 24:
            case 31:
                dezDay.classList.add('day', 'holiday');
                break;
            case 4:
            case 11:
            case 18:
                dezDay.classList.add('day', 'friday');
                break;
            case 25:
                dezDay.classList.add('day', 'holiday', 'friday');
                break;
            default:
                dezDay.className = 'day';
        }
    }
}

dezCalendarDays ();

/* Exercício 2: Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".

Adicione a este botão a ID "btn-holiday".

Adicione este botão como filho/filha da tag <div> com classe "buttons-container". */

function createHolidayButton (holidayString) {
    const buttonsContainer = document.querySelector('.buttons-container');
    const holidayButton = document.createElement('button');
    holidayButton.innerHTML = holidayString;
    holidayButton.id = 'btn-holiday';
    buttonsContainer.appendChild(holidayButton);
}

createHolidayButton ('Feriados');

/* Exercício 3: Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday".

É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)". */

function changeHolidayColor () {
    const holidayButton = document.getElementById('btn-holiday');

    holidayButton.addEventListener('click', function () {
        const holidays = document.querySelectorAll('.holiday');
        for (let index = 0; index < holidays.length; index += 1) {
            if (holidays[index].style.backgroundColor === 'lightblue') {
                holidays[index].style.backgroundColor = 'rgb(238,238,238)';
            } else {
                holidays[index].style.backgroundColor = 'lightblue';
            }
        }
    });
}

changeHolidayColor ();

/* Exercício 4: Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".

Adicione a este botão o ID "btn-friday".

Adicione este botão como filho/filha da tag <div> com classe "buttons-container". */

function createFridayButton (fridayString) {
    const buttonsContainer = document.querySelector('.buttons-container');
    const fridayButton = document.createElement('button');
    fridayButton.innerHTML = fridayString;
    fridayButton.id = 'btn-friday';
    buttonsContainer.appendChild(fridayButton);
}

createFridayButton ('Sexta-feira');

/* Exercício 5: Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias. */

function changeDezFridayText () {
    const fridayButton = document.getElementById('btn-friday');

    fridayButton.addEventListener('click', function () {
        const fridays = document.querySelectorAll('.friday');
        const fridayDays = [4, 11, 18, 25];
        for (let index = 0; index < fridays.length; index += 1) {
            if (fridays[index].innerHTML === 'Sextou') {
                fridays[index].innerHTML = fridayDays[index];
            } else {
                fridays[index].innerHTML = 'Sextou';
            }
        }
    });
}

changeDezFridayText ();

/* Exercício 6: Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original. */

function zoomDay () {
    const days = document.querySelectorAll('.day');

    for (index = 0; index < days.length; index += 1) {
        days[index].addEventListener('mouseover', function (event) {
            event.target.style.fontSize = '2em';
            event.target.style.fontWeight = '600';
        });

        days[index].addEventListener('mouseleave', function (event) {
            event.target.style.fontSize = '20px';
            event.target.style.fontWeight = '200';
        });
    }
}

zoomDay ();

/* Exercício 7: Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.

O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks". */

function addTask (task) {
    const myTasks = document.querySelector('.my-tasks');
    const newTask = document.createElement('span');
    newTask.innerHTML = task;
    myTasks.appendChild(newTask);
}

addTask ('Projeto Trybe');

/* Exercício 8: Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task.

O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.

O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks". */

function taskLabel (colorName) {
    const label = document.createElement('div');
    const myTasks = document.querySelector('.my-tasks');
    myTasks.appendChild(label);
    label.className = 'task';
    label.style.backgroundColor = colorName;
}

taskLabel ('salmon');

/* Exercício 9: Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected, ou seja, quando sua tarefa possuir a classe task selected, ela estará selecionada.
Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task, ou seja, esta tarefa está deixando de ser uma tarefa selecionada. */

function taskSelection () {
    const taskSelector = document.querySelector('.task');
    taskSelector.addEventListener('click', function () {
        if (taskSelector.className === 'task') {
            taskSelector.classList.add('task-selected');
        } else {
            taskSelector.classList.remove('task-selected');
        }
    })
}

taskSelection ();
