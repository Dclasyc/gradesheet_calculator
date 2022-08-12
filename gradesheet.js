// External Java Script File
//for Grade Sheet

			

		
 		

		function getgrade(scores,grades){

		if (scores >= 70 && scores <= 100){

			document.getElementById(grades).value = 'A';

		}else if(scores >= 60 && scores <= 69){

			document.getElementById(grades).value = 'B';

		}else if(scores >= 50 && scores < 60){

			document.getElementById(grades).value = 'C';

		}else if(scores >= 45 && scores < 50){

			document.getElementById(grades).value = 'D';

		}else if(scores >= 40 && scores <= 45){

			document.getElementById(grades).value = 'E';

		}else if(scores >= 0 && scores <= 39){

			document.getElementById(grades).value = 'F';

		}else{
			document.getElementById(grades).value = 'Invalid_Score'
		}

	}


// 

	function calgrade(){

	eng = Number(document.getElementById('engscore').value)
  	mts = Number(document.getElementById('mathscore').value)
  	chm = Number(document.getElementById('chemscore').value)
   	bio = Number(document.getElementById('bioscore').value)
   	frn = Number(document.getElementById('frenchscore').value)

   	english = document.getElementById('enggrade').value
	mathematics = document.getElementById('mathgrade').value
	chemistry = document.getElementById('chemgrade').value
	biology = document.getElementById('biograde').value
	french = document.getElementById('frenchgrade').value

		

	if(eng == "" || mts == "" || chm == "" || bio == "" || frn == "" && english == 'Invalid_Score' || mathematics == 'Invalid_Score' || 
		chemistry == 'Invalid_Score' || biology == 'Invalid_Score' || french == 'Invalid_Score'){

		alert("Invalid Result, Input correct range of result")
			document.getElementById('total').innerHTML = '**Error!!!'

	}else{
			var grandtotal = eng + mts + chm + bio + frn
			document.getElementById('total').innerHTML = grandtotal;
		}


		var avggrade = [english, mathematics, chemistry, biology, french]

		avgscore = grandtotal/avggrade.length
		document.getElementById('avg').innerHTML = avgscore


		verdict=""


		if (avgscore > 0 && avgscore <= 49){

			verdict = "Failed! You have dissappointed your Teacher"


		}else if(avgscore >= 50){

			verdict = "**Passed** Weldone Champ!"
		}else{
			verdict = "Check Scores input and retry"
		}

		document.getElementById('remark').innerHTML = verdict

			smiles =""


		
		if (avgscore > 0 && avgscore <= 49){

			document.getElementById('emoji').src = 'images/laughing.png'
		}else if(avgscore >= 50){

			document.getElementById('emoji').src = 'images/thumbup.png'
		}else{
			document.getElementById('emoji').src = 'images/smirk.png'
		}

		

	}

	
	

