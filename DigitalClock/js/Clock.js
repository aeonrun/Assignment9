

$(document).ready(function(){

	var counter = 2;
	var dt = new Date();
	var h = dt.getHours();
	var m = dt.getMinutes();
	var s = dt.getSeconds();
	var ms = dt. getMilliseconds();
	var timeOut;
	var timer;
	var cd; // ocounterdown interval
	var secondCounter = 0;

	$("#startClock").click(function(){
		startCountDown();
	});


	function startCountDown(){

		cd = setInterval(function(){
			console.log(counter);
			$("#startClock").html(counter);
			counter--;
		}, 1000);

		timeOut = setTimeout(function(){

		//clearInterval(timer);
		console.log ("Time is up!");
		clearInterval(cd);
		updateClockViewer();
		hideStart();
		startTimer();
		showClock();
	}, 2000);
	}

	function showClock(){
		$("#clock").show();
	}

	function hideStart(){
		$("#startClock").hide();
	}


	function startTimer(){
	  timer = setInterval(function(){
		giveMeTheTime();
		//console.log(counter)

		//if(counter===60){
			//alert("one minute has passed");
		//}
		updateClockViewer();
		counterHandler();
		handleUIUX();
		}, 1000);
	}

	function counterHandler(){
		if(secondCounter < 60){
			secondCounter++;
		}else{
			secondCounter = 0;
		}
	}

	function handleUIUX(){
		if(secondCounter % 2 ===0){
			$("#clock").css('background', 'blue');
			$("#clock").css('color', 'red');
			console.log ("it's even");
		}else{
			$("#clock").css('background', 'red');
			$("#clock").css('color', 'blue');
			console.log("it's odd");

		}

	}

	//console.log (dt.getFullYear())
	//console.log (dt.getMonth()+1)
	//console.log (dt.getDate())
	//console.log (dt.getHours())
	//console.log (dt.getMinutes())
	//console.log (dt.getSeconds())

	function giveMeTheTime(){

		dt = new Date();
		h = dt.getHours();
		m = dt.getMinutes();
		s = dt.getSeconds();
		ms = dt.getMilliseconds();
		//console.log(h);
		//console.log(m);
		//console.log(s);

	}

	function updateClockViewer(){

		$("#h").html(fixNumber(h));
		$("#m").html(fixNumber(m));
		$("#s").html(fixNumber(s));
		$("#ms").html(fixNumber(ms));

	}

	function fixNumber(num){
		if( num < 10) {
			num = "0"+num;
		}
		return num;
	}


    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var n = weekday[d.getDay()];
    document.getElementById("demo").innerHTML = n;
    
    var d = new Date();
    var y = d.getFullYear();
    document.getElementById("year").innerHTML = y;

});
