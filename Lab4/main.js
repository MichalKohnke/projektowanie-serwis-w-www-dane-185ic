var licznik = 0;
	
function punkty() {
	licznik++;
	document.getElementById("sum").innerHTML = "Punkty: " + licznik;
}

function test() {
	if(licznik == 6)
	{
	document.getElementById("gameover").innerHTML = "Wygrałeś!";
	}
	else
	{
	document.getElementById("gameover").innerHTML = "Przegrałeś!";
	}
}

