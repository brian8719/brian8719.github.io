	/*  Show Drop Down Menu on press */
function openDropDown() { 
	document.getElementById("DropDown").classList.toggle("show");
	} 
 
 
	/*  Nav bar or drop down menu is loaded based on screen width.
		Same width used in CSS media queries */
function checkScreenWidth(){
	if (document.documentElement.clientWidth < 767) {
		document.getElementById("dropDownContent").style.display = "inline-block";
		document.getElementById("nav").style.display = "none";
		}	
	else{
		document.getElementById("dropDownContent").style.display = "none";
		document.getElementById("nav").style.display = "inline-block";
		}
}