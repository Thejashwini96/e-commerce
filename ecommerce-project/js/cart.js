$( document ).ready(function() { 
   $('.product-grid__img').attr("src", localStorage.getItem("image"));
   $('.product-grid__title').html(localStorage.getItem("title"));
   $('.product-grid__price').html(localStorage.getItem("price"));
   localStorage.clear();
});