function naos() {
    var x = document.getElementById("hidden-naos");
    if (x.style.visibility === "visible") {
      x.style.visibility = "hidden";
    } else {
      x.style.visibility = "visible";
    }
  }



function izar() {
    var x = document.getElementById("hidden-izar");
    if (x.style.visibility === "visible") {
      x.style.visibility = "hidden";
    } else {
      x.style.visibility = "visible";
    }
}


var naos_product_white = document.getElementById("product-picture-white");
var naos_product_grey = document.getElementById("product-picture-grey");
var naos_product_black = document.getElementById("product-picture-black");

function show_white(){
    naos_product_white.style.zIndex = "9";
    naos_product_grey.style.zIndex = "8";
    naos_product_black.style.zIndex = "8";
}

function show_black(){
    naos_product_black.style.zIndex = "9";
    naos_product_grey.style.zIndex = "8";
    naos_product_white.style.zIndex = "8";
}

function show_grey(){
    naos_product_grey.style.zIndex = "9";
    naos_product_white.style.zIndex = "8";
    naos_product_black.style.zIndex = "8";
}



	  filterSelection("all")
	  function filterSelection(c) {
		var x, i;
		x = document.getElementsByClassName("filterDiv");
		/* 	if (c == "all") c = "";*/
		if (c == "") c = "";
		for (i = 0; i < x.length; i++) {
		  w3RemoveClass(x[i], "show");
		  if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
		}
	  }
	  


    function show_mobile_menu() {
      var interruptor = document.getElementById("encender");
      var menu = document.getElementById("main-menu");
      var idiomas = document.getElementById("lang");
if (interruptor.checked == true){
          menu.style.display = "block";
          idiomas.style.display = "flex";
          
  } else {
          menu.style.display = "none";
          idiomas.style.display = "none";
  }





}