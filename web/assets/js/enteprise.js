
function clickConfirm() {
	var modal = document.getElementsByClassName('modal')[0];
 	modal.classList.add('modal--show');
	var selectedCompanie = document.querySelector(".selectedData").innerText;
	if (selectedCompanie!="Seleccione..."){
	 	modal.querySelector(".message").innerHTML="Usted eligio la empresa: <br><br>"+selectedCompanie;
	} else {
	 	modal.querySelector(".message").innerHTML="Usted debe escoger una empresa. Intente de nuevo...!<br>";
	}
}


function addCompanie() {
	var modal = document.querySelector('.modal_addCompanie');
 	modal.classList.add('modal--show');
	var selectedCompanie = document.querySelector(".selectedData").innerText;

}
