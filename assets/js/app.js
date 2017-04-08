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
var namesCoders=["Fiorella Quispe","Lourdes Vilchez","Rossmery Maldonado","Yessenia Huamán","Miriam Mendoza","Elizabeth Condori","Arantza Burga","Grecia Rayme","Janine Vega","Rosario Felix","Daguiana Revoredo","Jenny Velasquez","Nadia Cuadros","Michell More","Marilu Llamocca","Mariel Garcia","Fiorella Cisneros","Geraldine Chauca","Yellitza Rivera","Stephanie Hiyagon","Emma Tapia","Danna Franco","Flor Retamozo","Nathaly Pacheco",
"Ericka Vidal","Katherine Ortega","Brilly Majuan","Flor Tello","Leslie Avendaño","Cindy Mendoza","Annia Flores","Betsi Loayza","Aida Sulca","Milagros Gutierrez","Nakarid Jave","Angie Cóndor","Maricarmen Rojas","Ariana Cabana","Flor Condori","Mitch Rodríguez","Naomi Villanueva","Mari Castillo","Miriam Peralta","Karin Alejo","Liliana Peña","Ruth Salvador","Maribel Sevilla","Wendy Reyes","Cinthia",
"Maria Grecia Cutipa","Ana Durand","Glisse Jorge","Neiza Nuñez","Sandra Solorzano"];
for ( var i = 1; i < 55; i++){
  var img = document.createElement("img");
  var div = document.createElement("div");
  var spantxt = document.createElement("span");
  var txtName = document.createTextNode(namesCoders[i-1]);
  img.setAttribute("src","assets/img/students/"+i+".png");
  img.setAttribute("class","img");
  div.setAttribute("class","containerImg");
  spantxt.setAttribute("class","txt");
  spantxt.appendChild(txtName);
  div.appendChild(img);
  div.appendChild(spantxt);
  docFrac.appendChild(div);
}
showImage.appendChild(docFrac);
