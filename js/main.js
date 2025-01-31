'use strict'

let btnStart = document.getElementById("start"),

    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],

    expensesItem = document.getElementsByClassName('expenses-item'),

    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],

    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),

    incomeItem = document.querySelector('.choose-income'),
	  checkSavings = document.querySelector('#savings'),
	  sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');



    let money, time;

    expensesBtn.disabled = true;
    optionalExpensesBtn.disabled = true;
    countBtn.disabled = true;
    checkSavings.disabled = true;


    btnStart.addEventListener('click', function(){
      time = prompt ("Введите дату в формате YYYY-MM-DD", "");
      money = +prompt ("Ваш бюджет на месяц?", "");

      while ( isNaN(money) || money == "" || money == null) {
        money = +prompt ("Ваш бюджет на месяц?", "");
      }
      appData.budget = money;
      appData.timeData = time;
      budgetValue.textContent = money.toFixed()
      yearValue.value = new Date(Date.parse(time)).getFullYear();
      monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
      dayValue.value = new Date(Date.parse(time)).getDate();

      expensesBtn.disabled = false;
      optionalExpensesBtn.disabled = false;
      countBtn.disabled = false;
      checkSavings.disabled = false;
    });

    expensesBtn.addEventListener('click', function(){
      let sum = 0;
      for (let i = 0; i < expensesItem.length; i++) {
          let a = expensesItem[i].value,
              b = expensesItem[++i].value;

              console.log ("done");
              appData.expenses[a] = b;
              sum += +b;

      };
        expensesValue.textContent = sum;
    });

    optionalExpensesBtn.addEventListener('click', function(){
      for (let i = 0; i < optionalExpensesItem.length; i++) {
          let opt = optionalExpensesItem[i].value;
          appData.optionalExpenses[i] = opt;
          optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
            };
    });

    countBtn.addEventListener('click', function(){
    if (appData.budget != undefined) {
        appData.moneyPerDay = ((appData.budget - +expensesValue.textContent) / 30).toFixed();
        dayBudgetValue.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100) {
            levelValue.textContent = "Минимальный уровень достатка";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = "Средний уровень достатка";
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = "Высокий уровень достатка";
        } else {
            levelValue.textContent = "Что-то пошло не так!";
        };
    }
        else {
          dayBudgetValue.textContent = "Произошла ошибка! Введите ваш бюджет.";
        }
    });

    incomeItem.addEventListener('input', function(){
      let items = incomeItem.value;
      appData.income = items;
      incomeValue.textContent = appData.income;
    });
    checkSavings.addEventListener('click', function() {
      if (appData.savings == true) {
        appData.savings = false;
      } else {
        appData.savings = true;
      }
    });

    sumValue.addEventListener('input', function () {
      if (appData.savings == true) {
          let sum = +sumValue.value,
              percent = +percentValue.value;
          appData.monthIncome = sum/100/12*percent;
          appData.yearIncome = sum/100*percent;

          monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
          yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
      }
    });

    percentValue.addEventListener('input', function () {
      if (appData.savings == true) {
          let sum = +sumValue.value,
              percent = +percentValue.value;
          appData.monthIncome = sum/100/12*percent;
          appData.yearIncome = sum/100*percent;

          monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
          yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
      }
    });
    let appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: false
      };


      // function alphabetPosition(text) {
      //   let string = [];
      //   let num;
      //   let numbers = [];
      //   for (var i = 0; i < text.length; i++) {
      //   string = text.split([]);
      //   numbers[i] = (text[i].charCodeAt(0)) - 96;
      //   num = numbers.join();
      //   }
      //
      //   alert(num);
      //
        // alert()
        // return string;
      };
      let string = alphabetPosition("a bcd");
