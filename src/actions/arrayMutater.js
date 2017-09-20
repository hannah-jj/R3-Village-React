function doubleNShuffle (array){
	return shuffle(array.concat(array));
}

function shuffle (array) {

    for (var i = array.length-1; i >=0; i--) {
     
        var randomIndex = Math.floor(Math.random()*(i+1)); 
        var itemAtIndex = array[randomIndex]; 
         
        array[randomIndex] = array[i]; 
        array[i] = itemAtIndex;
    }
    return array;
}

//n = numbers of sets to generate
function populateArray (oneSet, n){
	var gamePieces = oneSet;
	for (let i = 0; i < n-1; i++) {
		gamePieces = gamePieces.concat(oneSet);
	}
	return shuffle(gamePieces);
}

//fill up an array with sequential number for each index
function fillArray (n){
	var array = [];
	for (let i= 0; i < n; i++){
		array.push(i);
	}
	return array;
}

function generateGameNum (n, notN = 0){
		var num = 0;
		while (num === 0 || num === notN) {
			num = Math.floor(Math.random() * (n+1) );
		}
		return num;
	}

export {
	doubleNShuffle,
	shuffle,
	populateArray,
	generateGameNum,
	fillArray
}

