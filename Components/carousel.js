
$(function() {

    $('.carousel').each(function() {
      var numberOfItems = $(this).find('.carousel-item').length
  
      $('.carousel-container').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 750,
        autoplay: false,
        autoplaySpeed: 5000,
        slidesToShow: numberOfSlidesToShow('large', numberOfItems),
      
        responsive: [
          {
            breakpoint: 1280,
            settings: {
              slidesToShow: numberOfSlidesToShow('medium', numberOfItems)
            }
          },
          {
            breakpoint: 980,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      })
    }) 
    
  })
  
  function numberOfSlidesToShow(size, count) {
    var limit = 3
    switch (size) {
      case 'large':
        limit = 3
        break
      case 'medium':
        limit = 2
        break
      case 'small':
        limit = 1
        break
    }
    
    if (count >= limit) {
      return limit
    } else {
      return count
    }
  }
  