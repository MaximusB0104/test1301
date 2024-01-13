function currenTime(){
 	let date = new Date();
 	let hours = date.getHours();
 	let min = date.getMinutes();
 	let sec = date.getSeconds();
 	sec = plusZero(sec);
 	min = plusZero(min);
 	hours = plusZero(hours);
 	document.getElementById('time').innerHTML = hours +':'+ min +':'+sec; 
 	setTimeout(currenTime, 1000)
}
	currenTime()


	function plusZero(number){
		if (number < 10) {
		return "0" + number;	
		} else {
			return number;
		}
	}

