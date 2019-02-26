more = document.getElementById("more-btn");
hamBtn = document.getElementById("hamburger");
sidebar = document.getElementById("sidebar");
vitas = document.getElementById("vitas");
red  = document.getElementById("redirectBtn");
foot = document.getElementById("page-footer");
foot.innerHTML = "Apasa oriunde pentru a-ti incepe/continua sesiunea de clickuit!";

let vitArr = [
	{
		nume : "B",
		text : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi harum dolorem voluptatibus, eius beatae, unde qui nam inventore tempore reprehenderit aut sit, saepe incidunt, deleniti facere quae laborum. Accusantium, voluptatum!",
		do   : "apples, potatoes, straws",
		dont : "spit, swear, injure",
		post : false
	},
	{
		nume : "B2",
		text : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi harum dolorem voluptatibus, eius beatae, unde qui nam inventore tempore reprehenderit aut sit, saepe incidunt, deleniti facere quae laborum. Accusantium, voluptatum!",
		do   : "apples, potatoes, straws",
		dont : "spit, swear, injure",
		post : false
	},
	{
		nume : "C",
		text : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi harum dolorem voluptatibus, eius beatae, unde qui nam inventore tempore reprehenderit aut sit, saepe incidunt, deleniti facere quae laborum. Accusantium, voluptatum!",
		do   : "apples, potatoes, straws",
		dont : "spit, swear, injure",
		post : false
	},
	{
		nume : "E",
		text : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi harum dolorem voluptatibus, eius beatae, unde qui nam inventore tempore reprehenderit aut sit, saepe incidunt, deleniti facere quae laborum. Accusantium, voluptatum!",
		do   : "apples, potatoes, straws",
		dont : "spit, swear, injure",
		post : false
	},
	{
		nume : "B1",
		text : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi harum dolorem voluptatibus, eius beatae, unde qui nam inventore tempore reprehenderit aut sit, saepe incidunt, deleniti facere quae laborum. Accusantium, voluptatum!",
		do   : "apples, potatoes, straws",
		dont : "spit, swear, injure",
		post : false
	},
	{
		nume : "B6",
		text : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi harum dolorem voluptatibus, eius beatae, unde qui nam inventore tempore reprehenderit aut sit, saepe incidunt, deleniti facere quae laborum. Accusantium, voluptatum!",
		do   : "apples, potatoes, straws",
		dont : "spit, swear, injure",
		post : false
	},
	{
		nume : "D",
		text : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi harum dolorem voluptatibus, eius beatae, unde qui nam inventore tempore reprehenderit aut sit, saepe incidunt, deleniti facere quae laborum. Accusantium, voluptatum!",
		do   : "apples, potatoes, straws",
		dont : "spit, swear, injure",
		post : false
	}
];
init();
function init(){
	tabs = document.querySelectorAll(".tab");	
	//TABURILE DE LA GALERIE
	for(let i = 0; i < tabs.length; i++){
		if(tabs[i]) tabs[i].addEventListener("click", foo);
	}
	//articolele
	art = document.getElementsByClassName("article");
	for(let i = 0; i < art.length; i++){
		if(art[i]) art[i].addEventListener("click", blog);
	}

	if(more) more.addEventListener("click", moreAct);
	if(hamBtn) hamBtn.addEventListener("click", hamburgering);
	if(red) red.addEventListener("click", redirect);
	if(sessionStorage.clickcount === undefined)
		sessionStorage.setItem('clickcount', 0);
}

// ON SCROLL EVENT Hamburger background change
window.addEventListener("scroll", function(e){
	if(window.scrollY > 150){
		hamBtn.style.backgroundColor = '#93BF00';
	}else{
		hamBtn.style.backgroundColor = 'transparent';
	}
});

window.addEventListener("keydown", isenter, false);

function isenter(e){
	if(e.keyCode == 13){
		generate();
	}
}

// NAVIGATION LA GALERIE
function foo(e){
	//figuri = toate tagurile figures
	let figuri = document.getElementsByTagName("figure");
	for(let i = 0; i < figuri.length; i++){
		figuri[i].classList.remove("no");
	}
	//activ = tabul activ
	let activ = document.getElementsByClassName("active");
	//scoate clasa activ si o pune la elementul clickuit acum
	activ[0].classList.remove('active');
	this.classList.add('active');
	//luam valoarea din casuta clickuita
	let color = this.getAttribute('data-color');
	//pentru fiecare clasa ce ar casuta aia, display none pt restu
	//d = fiecare figura care nu are clasa respectiva
	let d  = document.querySelectorAll("figure:not(." + color + ")");
	for(let i = 0; i < d.length; i++){
		d[i].classList.add("no");
	}
}

//see more see less button la galerie
function moreAct(){
	let jon = document.getElementById("gallery");
	// console.log(jon.startOffset);
	if(jon.offsetHeight == 540){
		more.innerHTML = "Vezi mai putin...";
		jon.style.maxHeight  = "initial";
	}else{
		more.innerHTML = "Vezi mai mult...";
		jon.style.maxHeight = 540 + "px";
	}
}

//functie la blog pentru highlight
function blog(event){
	// e = article
	let e = event.target;
	console.log(e);
	// console.log(event.path[0].children[1].offsetHeight);
	//aux = 
	let aux = e.children[1].offsetHeight;
	if(e.attributes[0].value == ""){
			e.attributes[0].value = "opened";
		if(innerWidth > 1024){
			e.style.height = 500  + aux  + "px";
		}else{
			e.style.height = 200  + aux  + "px";
		}
	}else{
		e.attributes[0].value = "";
		e.style.height = 200 + "px";			
	}
}

//animatia de la hamburger facuta cu atribute
function hamburgering(){
	if(hamBtn.classList.contains("open")){
		hamBtn.classList.remove("open");
		sidebar.style.left = -200 + "px";
	}else{
		hamBtn.classList.add("open");
		sidebar.style.left = 0 + "px";
	}
}


//functia de generare a retetei de vitamine
function generate(){
	var ocheck = document.getElementsByClassName("checkbox");
	var checks = new Set();

	for(let i = 0 ; i < ocheck.length; i++){
		if(ocheck[i].checked){
			checks.add(ocheck[i].value);
		}
	}
	if(checks.size > 0){
		console.log(checks);
		// let printBtn = document.createElement("button");
		// printBtn.innerHTML = "Printeaza rezultatele";
		// printBtn.classList.add("printBtn");
		// printBtn.addEventListener("click", printEl, false);
		// vitas.appendChild(printBtn);
	}
	//deci, o sa se ia fiecare element din vectorul nostru de obiecte
	//stabilit de un json; daca vitamina respectiva se gaseste in 
	//checks, atunci se ia vitamina, se creaza element pentru ea
	//si se afiseaz	

	// console.log(checks.has("B2"));
	// console.log(vitArr);

	for(let i = 0; i < vitArr.length; i++){
		//in iful asta se afla daca vitamina respectiva a fost postata,
		//dar nu se afla pe checklist, atunci trebuie scoasa la generare, asa ca 
		//le scoatem pe toate 
		if(vitArr[i].post && !checks.has(vitArr[i].nume)){
			// console.log("sterg" + vitArr[i].nume);

			for(let j = 0; j < vitas.children.length; j++){
				// console.log(vitas.children.length);
				if(vitas.children[j].firstChild.innerHTML == vitArr[i].nume){
					// console.log(vitArr[i]);
					vitArr[i].post = false;
					vitas.children[j].remove();
				}
			}
		}
		if(checks.has(vitArr[i].nume) && !vitArr[i].post){
			let div = document.createElement('div');
			div.classList.add('vita');
			div.innerHTML = "<h3>" + vitArr[i].nume + "</h3><p><span>Specificatii: </span>" +
							vitArr[i].text + "</p><p><span>Ce sa mananci: </span>" +
							vitArr[i].do + "</p><p><span>Nu face asta: </span>" +
							vitArr[i].dont + '</p><button onclick="doceva(this)" class="cross"><span></span><span></span></button>';

			vitas.appendChild(div);
			vitArr[i].post = true;
		}

	}
}

// function printEl(){
// 	let restore = document.body.innerHTML;
// 	let content = vitas.innerHTML;
// 	document.body.innerHTML = content;
// 	window.print();
// 	document.body.innerHTML = restore;

// }


//o functie ajutatoare sa pot gasi intr-un vector un element
function findme(aux){
	for(let i = 0; i < vitArr.length; i++){
		if(vitArr[i].nume == aux){
			vitArr[i].post = false;
			return;
		}
	}
}

//alta functie ajutatoare care sa imi stearga vitamina atunci cand este 
//apasat x
function doceva(yo){
	// yo.parentNode.remove();
	// console.log(yo.parentNode.firstChild.innerHTML);
	//parintele X-ului, vita, are primul copil titlul, asa ca il luam
	//si ii facem atributul fals
	findme(yo.parentNode.firstChild.innerHTML);
	yo.parentNode.remove();
}


//functia pentru interval atunci cand se apsa butonul de redirect
let intervalId;

function redirect(e){
	var contor = 5;
	e.target.value = "Dar in 5 secunde! Haha!"
	intervalId = setInterval(function(){
		e.target.value = contor--;
	}, 1000);

	setTimeout(goToCanv, 5000);

}

//functia care se executa dupa timer
function goToCanv(){

	clearInterval(intervalId);
	window.location = "canv/index.html";
	console.log("Sorry");
}

//functie care contorizeaza si afiseaza in footer toate clickurile din pagina respectiva
//se face 0 dupa refresh
function clickCounter(){

	if (sessionStorage.clickcount) {
      sessionStorage.clickcount = Number(sessionStorage.clickcount)+1;
      foot.innerHTML = "Clickuri pe pagina: " + sessionStorage.clickcount;
    } else {
      sessionStorage.clickcount = 1;
      foot.innerHTML = "Clickuri pe pagina: " + sessionStorage.clickcount;
    }
}


// NOTITE
	// -pentru tastatura, pot face cu enter pntru generare direct si
	// esc pentru stergere toate chestiile de acolo