/*document.getElementById('toggle').addEventListener("click",function(event) {
  event.preventDefault();
  document.getElementById('nav-header').classList.toggle("open");
  document.getElementById('body').classList.toggle("overflow-hidden");

});
 var currentScroll = window.pageYOffset || document.body.scrollTop;
 var lastScrollTop = 0;

 window.addEventListener("scroll",function(){
   var currentScroll = window.pageYOffset || document.body.scrollTop;
   if(currentScroll > lastScrollTop){
     document.getElementById('nav-header').classList.remove("header-in");
     document.getElementById('nav-header').style.opacity = 0;
   }else{
     document.getElementById('nav-header').classList.add("header-in");
     document.getElementById('nav-header').classList.add("solid");
     document.getElementById('nav-header').style.opacity= 1;
     if (currentScroll<=3){
       document.getElementById('nav-header').classList.remove("solid");
       document.getElementById('nav-header').classList.remove("header-in");
     }
   }
   lastScrollTop = currentScroll;
 },false);

document.getElementById('toggle').addEventListener("click",function(event){
  event.preventDefault();
  document.getElementById('header').classList.toggle("open");
  document.getElementById('body').classList.toggle("overflow-hidden");

});
*/
var showImage = document.getElementById('showImage');
var docFrac = document.createDocumentFragment();
var namesCoders = ["Marilu Llamocca Junco",
"RUTH MERY CARDENAS PEREZ",
"Maria Lourdes Vilchez Palomino",
"Glisse Lisbeth Jorge Malca",
"Ana de los Angeles Durand Calle",
"Ruth Abigail Salvador Zorrilla",
"Leslie Ashley AvendaÃ±o Lopez",
"Flor de Cantuta Tello Sarmiento",
"Miriam Peralta CastaÃ±eda",
"Fiorella Quispe Arotinco",
"Annia Jasenka Flores PÃ©rez",
"LEIDY ROSMERY MALDONADO CHAUCA",
"Rosario Felix Tasayco",
"Liliana Fiorela PeÃ±a Cueva",
"Miriam Gisella Mendoza Pilco",
"Flor Marina Condori Huamani",
"Naomi Villanueva Ajito",
"Luz Milagros Gutierrez Malca",
"Karin Alejo Campos",
"Ingrid Michelle More Flores",
"Monica Fiorella Cisneros Romero",
"Betsi Ana Loayza Flores",
"Mariel del Rosario GarcÃ­a Lara",
"Ruth Eliana Silva Castillo",
"Erika Diana Vidal Capillo",
"Angie Gesenia Condor Macuri",
"Stephanie Pamela Hiyagon Arroyo",
"Grecia Leticia Rayme Pumacayo",
"Cindy Deisy Mendoza Ibarra",
"Mitchell RodrÃ­guez LeÃ³n",
"Maria Grecia Cutipa GonzÃ¡les",
"Geraldine Chauca Escobar",
"Mary katherine Castillo Baygorrea",
"Nadia Cuadros Prieto",
"Elizabeth Condori Gonzales",
"Rocio Emma Tapia Alva",
"Neiza Luz NuÃ±ez Pfoccoalata",
"ARANTZA BURGA VALDERRAMA",
"Schelsen Brilly Majuan Lopez",
"Sandra Vanessa SolÃ³rzano Vargas",
"Yelitza Choque Rivera",
"Katherine Cecilia Ortega Ramos",
"Maricarmen Rojas Tinco",
"Aslheys Ariana Nicholle Cabana Cahuana",
"Nathaly Grace Pacheco Asto",
"Janine Vega Uribe",
"WENDY SHIRLEY REYES SANTANA",
"Milagros Gonzales Ore",
"Jenny Mishel Velasquez Mamani",
"Dana Lissete Franco Pittman",
"Maria Nakarid Jave Sagastegui",
"AYDA Sulca Urpay",
"Magali Zambrano Neri",
"Flor Retamozo Marengo"];
for ( var i = 1; i < 55; i++){
  var img = document.createElement("img");
  var div = document.createElement("div");
  var txtName = document.createTextNode("")
  img.setAttribute("src","assets/img/students/"+i+".png");
  img.setAttribute("class","img");
  div.setAttribute("class","containerImg");
  div.appendChild(img);
  docFrac.appendChild(div);
}
showImage.appendChild(docFrac);
