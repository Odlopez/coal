// Массив для внесения данных
var totalArray = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];

// Массив с температурами наружного воздуха
var temperature = [1.6, 5.1, 9.3, 9.2, 6.1, 5.4, 6.0, 5.3, 3.4, 2.9, 3.3, 8.1, 10, 11.7, 4.2, 0.8, 1.7, 1.4, 4.1, 7.7, 2.1, -1.4, -1.6, -4.4, -5.5, -2.1, -3, -4.4, -2.4, 0.6];

// Массив с датами месяца
var days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

// Вносим дни и температуры в массив
totalArray[0] = days;
totalArray[1] = temperature;

// Асс. массив с данными котельных
var specificFuelConsumption = [{name: "кв. 17", amout: 250.4, losses: 9.4},
							   {name: "Индонезия", amout: 213.5, losses: 4.6}];
// var obj = {};
// for (var i = 0; i < 2; i++) {
// 	obj.name = prompt ("Название котельной");
// 	obj.amout = +prompt ("Удельный расход");
// 	obj.losses = +prompt ("Потери");
// 	specificFuelConsumption[i] = obj;
// }
