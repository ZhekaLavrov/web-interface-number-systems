const numbersABC = {'A':10, 'B':11, 'C':12, 'D':13, 'E':14, 'F':15, 'G':16, 'H':17, 'I':18, 'J':19, 'K':20, 'L':21, 'M':22, 'N':23, 'O':24, 'P':25, 'Q':26, 'R':27, 'S':28, 'T':29, 'U':30, 'V':31, 'W':32, 'X':33, 'Y':34, 'Z':35}
// Проверка есть ли в списке цифра больше заданной

let isTheNumberGreaterThanTheDpecifiedOne = function (list, n) {
	let capability = true;
	for (let i = 0; i < list.length; i++){
		if (list[i] >= n) {
			capability = false;
		}
	}
	return capability
}

// Получение списка чисел из элемента 'input1'
let input1ToListNumber = function() {
	let number0 = document.getElementById('input1').value
	number0 = String(number0).toUpperCase()
	let numbers = []
	for (let i = 0; i < number0.length; i++){
		if (number0[i] in numbersABC) {
			numbers[i] = numbersABC[number0[i]]
		} else{
			numbers[i] = Number(number0[i])
		}
	}
	return numbers
}





// Перевод чисел из одной системы счисления в другую
let translationOfNumberSystem = function (number0, numberSystem0, numberSystem1) {
	let n10 = parseInt(number0, numberSystem0);
	let number1 = n10.toString(numberSystem1);
	return number1;
}

setInterval(()=>{
	let number0 = document.getElementById('input1')
	let numberSystem0 = document.getElementById('input2')
	let numberSystem1 = document.getElementById('input4')
	let number1 = document.getElementById('input3')
	if ((number0.value == '') || (numberSystem0.value == '') || (numberSystem1.value == '')) {
		number1.value = '';
	} else if (isTheNumberGreaterThanTheDpecifiedOne(input1ToListNumber(), numberSystem0.value) === false){
		number1.value = 'Неверное число'
			number1.style.color = 'red'
	} else{
		number1.value = translationOfNumberSystem(number0.value, numberSystem0.value, numberSystem1.value).toUpperCase()
		if (number1.value == 'NaN'.toUpperCase()){
			number1.style.color = 'red'
		} else{
			number1.style.color = 'green'
		}
	}
	
}, 100)