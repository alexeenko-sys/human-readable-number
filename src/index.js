module.exports = function toReadable (number) {
	let numberTo20 = 
    ["zero", "one", "two", "three", "four", "five",
	"six", "seven", "eight", "nine", "ten",
	"eleven", "twelve", "thirteen", "fourteen", "fifteen",
	"sixteen", "seventeen", "eighteen", "nineteen", "twenty"];
	let numberTo90 = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

	if (number == 0){
		return numberTo20[0];
	}

	let result = "";

	if (Math.floor(number/100)){
		result += numberTo20[Math.floor(number/100)] + " hundred";
		number -= Math.floor(number/100)*100;
	}
	if (Math.floor(number/10)>1 && number != 20){

		if(result.length != 0){
			result += " ";
		}

		result += numberTo90[Math.floor(number/10)-2];
		number -= Math.floor(number/10)*10;
	}

	if (number == 0){
			return result;
	}

	if (result.length != 0){
		result += " ";
	}

	return result += numberTo20[number];
}