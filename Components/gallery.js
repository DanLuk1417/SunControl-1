document.addEventListener("DOMContentLoaded", function(){
    var k = document.querySelectorAll('.gallery__image');
    k.forEach(function(element){
      // Clone the image on click and make it fullscreen
      element.addEventListener("click", function(){
        
        document.body.classList.toggle('noScroll');
        
        var imgClone = this.cloneNode(true);
        imgClone.classList.toggle('fullimg');
        
        var gallery = document.querySelector('.layout__gallery');
        gallery.insertAdjacentHTML('afterbegin',imgClone.outerHTML);
        
        // Remove the element on click
        document.querySelector('.gallery__image').addEventListener("click", function(){
          document.body.classList.toggle('noScroll');
          this.remove();
        });
      });
    });
  });