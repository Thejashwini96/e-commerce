$( document ).ready(function() {    
    $('.form-search').on('submit',function(){return false;});
    $('.form-search .btn').on('click', function(e){
        var query = $.trim($(this).prevAll('.search-query').val()).toLowerCase();
        $('div.product-grid__product-wrapper .product-grid__title').each(function(){
             var $this = $(this);
             if($this.text().toLowerCase().indexOf(query) === -1)
                $this.closest('div.product-grid__product-wrapper').fadeOut();
            else 
                $this.closest('div.product-grid__product-wrapper').fadeIn();
        });
    });
});

function addCart(title, image, price) {
    localStorage.setItem("title", title);
    localStorage.setItem("image", image);
    localStorage.setItem("price", price);
    window.location.href = "./cart.html";
}