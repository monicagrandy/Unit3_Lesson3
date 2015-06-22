//1 Modify the previous example to loop forward instead of backward and have the console.log() output
//the items in the array from first to last instead of last to first. You cannot use array.reverse()
//Previous Example
var tools = ["computer", "books", "text editor"];
function arrayLooper(array){
	var arr = array;
	var num = array.length-1;

	function counter(num, arr) {
		if(num < 0) {
			return "All done"
		}
		console.log(array[num])
		return counter(num -= 1);
	}
	return counter(num, arr);
}

arrayLooper(tools);

//My Example (this took me a while to figure out!!)
var tools = ["computer", "books", "text editor", "magic"];
function arrayLooper(array){
	var arr = array;
	var num = 0; //start at the beginning of the array
	function counter(num, arr) {
		if(num > array.length-1) {
			return "All done"
		}
		console.log(array[num])
		return counter(num+=1);
	}
	return counter(num, arr);
}

arrayLooper(tools);

//2
function power(base, exponent){ //declare our starter function
	if(exponent == 0){ //if we pass 0 as the exponent, we will return a value of 1
		return 1; //any number to the power of 0 = 1
	}
	else{ //otherwise we enter a recursion
		return base * power(base, exponent -1); //We take our base and multiply it by itself. 
												//The the exponent value is decreased by 1. 
												//We continue to multiply the base by itself until the exponent disappears
												
	}
}
console.log(power(2,3));
//if(3==0){
	//return 1 // 3 does not equal 0 so we keep moving to the else statement
//}
//else{
	//return 2 * power(2, (3-1)); 
	//2 *2 *2 = 8
//}
// returns 8


