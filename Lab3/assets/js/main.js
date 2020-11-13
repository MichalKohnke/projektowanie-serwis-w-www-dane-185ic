$(document).ready(function () {
    function zad1(txt) {
        const amount = txt.length;
        console.info("Liczba liter: " + amount)
    }
    zad1("Przykładowy tekst");

    var tab = [5, 3, 8, 1];

    function zad2(tab) {
        var sum=0;
        for (var i = 0; i < tab.length; i++) {
            sum = sum + tab[i];
        }
        console.info("Wynik zsumowanej tablicy: " + sum);
    }
    zad2(tab);

    function zad3(txt) {
        var txt2;
        for (var i = 0; i < txt.length; i=i+2) {
            txt = txt.replace(txt.charAt(i), txt.charAt(i).toUpperCase());
        }
        console.info(txt);
    }
    zad3("Ala ma kota");

    function zad4(a, b) {
        var multiply;
        if (typeof a == "number" && typeof b == "number") {
            multiply = a * b;
            console.info("Iloczyn wynosi: " + multiply);
        }
        else
            console.info("false");
    }
    zad4(7, "test")

    function zad5(name, month) {
		month = month.toLowerCase();
		switch(month){
			case 'grudzień':
			case 'styczeń':
			case 'luty':
				console.info(name + " jeździ na sankach");
				break;
			case 'marzec':
			case 'kwiecień':
			case 'maj':
				console.info(name + " chodzi po kałużach");
				break;
			case 'czerwiec':
			case 'lipiec':
			case 'sierpień':
				console.info(name + " się opala");
				break;
			case 'wrzesień':
			case 'październik':
			case 'listopad':
				console.info(name + " zbiera liście");
				break;
			default:
				console.info(name + " uczy sie JS");
		}
    }
    zad5("Michał", "Kwiecień");

    function zad6(txt, sep_sign) {
        console.info(txt);
        var tab = txt.split(sep_sign);
        var newtab = tab.sort();
        var string = newtab.join([separator = sep_sign]);
        console.info(string);
    }
    zad6("Ania|Marcin|Bartek|Piotr|Kuba|Beata|Agnieszka", "|")

    var tab2 = ["Ania", "Marcin", "Bartek", "Piotr"];

    function zad7_1(tab) {
        var string = tab.join([separator = ","]);
        var stringUpper = string.toUpperCase();
        var tabUpper = stringUpper.split(",");
        console.info(tabUpper);

    }
    function zad7_2(tab) {
        var string = tab.join([separator = ","]);
        for (var i = 3; i < string.length; i = i+2) {
            string = string.replace(string.charAt(i), string.charAt(i).toUpperCase());
        }
        var tabRandomUpper = string.split(",");
        console.info(tabRandomUpper);
    }
    zad7_1(tab2);
    zad7_2(tab2);

    function checkFemale(name) {
        var a = name.length - 1;
        var b = false;
        if (name.charAt(a) === "a") {
            console.info("checkFemale(" + name + ")" + " === true");
            b = true;
        }
        else {
            console.info("checkFemale(" + name + ")" + " === false");
            b = false;
        }
        return b;
    }
    checkFemale("Michał")

    const users = [
        "Ania Nowak",
        "Piotr Kowalski",
        "Bartek Kosecki",
        "Natalia Nowak",
        "Weronika Piotrowska",
        "Agata Beatczak",
        "Tomasz Nowak",
        "Mateusz Kowalski",
        "Marcin Kotecki",
        "Betata Lecka",
        "Katarzyna Melecka"
    ]

    function countWomanInTable(tab) {
        var a = 0,b = 0;
        for (var i = 0; i < users.length; i++) {
            a = users[i].indexOf(" ");
            if (checkFemale(users[i].slice(0, a)) == true)
                b++;
        }
        console.info("Ilosc kobiet: " + b);
    }
    countWomanInTable(users);






    const btn_click = document.getElementById('btn_click');
    btn_click.addEventListener('click', () => {
        console.log('Kilknięto w niebieski przycisk! - nr 1');
    });
	
	const btn_dblclick = document.getElementById('btn_dblclick');
    btn_dblclick.addEventListener('dblclick', () => {
        console.log('Kliknięto podwójnie w szary przycisk! - nr 2');
    });
	
	const div_copy = document.getElementById('div_copy');
    function copyEvent() {
       console.log('Skopiowano treść z okienka! - nr 3');
       div_copy.removeEventListener('copy', copyEvent);
       console.log('Właśnie usunięto EventListener z kopiowaniem! Spróbuj skopiować ponownie! - nr 3');
    }
    div_copy.addEventListener('copy', copyEvent);

    const inputt1 = document.getElementById('input1');
    input1.addEventListener('input', () => {
        console.log('Wpisano tekst w inpucie 1! - nr 4');
    });
	input1.addEventListener('paste', () => {
        console.log('Wklejono tekst do inputa 1! - nr 5');
    });
	
	const input2 = document.getElementById('input2');
    input2.addEventListener('search', () => {
        console.log('Wyszukano w inpucie 2! - nr 6');
    });
	
	const select_scroll = document.getElementById('select_scroll');
    select_scroll.addEventListener('scroll', () => {
        console.log('Scroll w okienku z liczbami! - nr 7');
    });
	
	const img1 = document.getElementById('img1');
    img1.addEventListener('mouseover', () => {
        console.log('Najechałeś na obrazek! - addEventListener nr 8');
    });
	
	const input3 = document.getElementById('input3');
    input3.addEventListener('reset', () => {
        console.log('Wykonano reset w inpucie reset! - nr 9');
    });
	input3.addEventListener('submit', () => {
        console.log('Wykonano wysłanie w inpucie submit! - nr 10');
    });
	
});