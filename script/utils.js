function shuffle(array){
	var index = array.length;
	var temp;
	var randomIndex;

	while(index !== 0){
		randomIndex = Math.floor(Math.random() * index);
		index -= 1;

		temp = array[index];
		array[index] = array[randomIndex];
		array[randomIndex] = temp;
	}

	return array;
}

function range(length){
	if(length <= 0){
		throw "length must be greater than 0";
	}
	return Array.from(Array(length), (x, index) => index);
}