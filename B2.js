function merge2String(String1, String2){
	let S1 = Array.from(String(String1));
	let S2 = Array.from(String(String2));

	let newString = '';
	for(let i = 0; i < S1.length; i++){
		newString += S1[i] + S2[i];
	}
	while(S1.length < S2.length){
		S1.length++;
		newString += S2[S1.length-1];
	}
	console.log(newString);
}

merge2String(123,'abc');
merge2String(1234,'abc');
merge2String(123,'abcd');

