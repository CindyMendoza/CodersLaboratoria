//Menu hamburguesa
document.getElementById("toggle").addEventListener("click", function(){
  document.getElementById("nav-header").classList.toggle("open");
});
//nav con scroll
var c = 151;
window.addEventListener("scroll", function(){
   var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
   console.log(currentScroll);
   if (currentScroll >= 0 && currentScroll <= 150){
     document.getElementById('nav-header').style.display="block";
     document.getElementById('nav-header').classList.remove('scroll');
     document.getElementsByClassName('menu')[0].classList.remove('scroll-menu');
   } else  if (currentScroll>c) {
     document.getElementById('nav-header').style.display="none";
   }
   else {
     document.getElementById('nav-header').style.display="block";
     document.getElementById('nav-header').classList.add('scroll');
     document.getElementsByClassName('menu')[0].classList.add('scroll-menu');
   }
   c=currentScroll;
  //  }else{
  //    document.getElementById('nav-header').style.display="block";
  //    document.getElementById('nav-header').classList.add('scroll');
  //    document.getElementsByClassName('menu')[0].classList.add('scroll-menu');
  //  }

}, false);

//carga fotos coders
var showImage = document.getElementById('showImage');
var docFrac = document.createDocumentFragment();
var namesCoders=["Fiorella Quispe","Lourdes Vilchez","Rossmery Maldonado","Yessenia Huamán","Miriam Mendoza","Elizabeth Condori","Arantza Burga","Grecia Rayme","Janine Vega","Rosario Felix","Daguiana Revoredo","Jenny Velasquez","Nadia Cuadros","Michell More","Marilu Llamocca","Mariel Garcia","Fiorella Cisneros","Geraldine Chauca","Yellitza Rivera","Stephanie Hiyagon","Emma Tapia","Danna Franco","Flor Retamozo","Nathaly Pacheco",
"Ericka Vidal","Katherine Ortega","Brilly Majuan","Flor Tello","Leslie Avendaño","Cindy Mendoza","Annia Flores","Betsi Loayza","Aida Sulca","Milagros Gutierrez","Nakarid Jave","Angie Cóndor","Maricarmen Rojas","Ariana Cabana","Flor Condori","Mitch Rodríguez","Naomi Villanueva","Mari Castillo","Miriam Peralta","Karin Alejo","Liliana Peña","Ruth Salvador","Maribel Sevilla","Wendy Reyes","Cinthia",
"Maria Grecia Cutipa","Ana Durand","Glisse Jorge","Neiza Nuñez","Sandra Solorzano"];
window.addEventListener("load",function(){
  for ( var i = 1; i < namesCoders.length; i++){
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

});
