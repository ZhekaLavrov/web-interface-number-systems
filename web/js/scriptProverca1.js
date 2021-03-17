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

// console.log(number0ToListNumber())

let main = function() {
	let number0 = document.getElementById('input1')
	let numberSystem0 = document.getElementById('input2')
	let numberSystem1 = document.getElementById('input4')
	let number1 = document.getElementById('input3')
	// Если в строке пусто, то не выполняем
	if (number0.value == '') {
		number1.value = '';
	} else{}
}

main()

// setInterval(() => {
// 	console.log(a(number0ToListNumber(), document.getElementById('input2').value))
// }, 1000)