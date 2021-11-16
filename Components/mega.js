

(function() {
  var isClosing = false

  setTimeout(function() {
    $('body').addClass('js')
  }, 500)
  

  $(document).on('click', '.siteheader-nav-item.is-products, .siteheader-toggle', function(e) {
    e.preventDefault();
    e.stopPropagation()
    var mega = $('.mega')
    if (mega.hasClass('is-active')) {
      close(mega)
      $(this).removeClass('is-active')
    } else {
      open(mega)
      $(this).addClass('is-active')
    }
  })

   document.querySelector('.mega-backdrop').addEventListener('click', function(e) {
    e.preventDefault();
    var mega = $('.mega')
    close(mega)
  })
 

  var megaClose = document.querySelector('.mega-close')
  if (megaClose) {
    megaClose.addEventListener('click', function(e) {
      e.preventDefault();
      var mega = $('.mega')
      close(mega)
    })
  }
  


  $(document).on('mouseover', '.mega-nav-link', function() {
    //getProduct(e.target.href)
    let productId = $(this).attr('data-id')
    showProduct(productId)
  })

  $(document).on('focus', '.mega-nav-link', function() {
    //getProduct(e.target.href)
    let productId = $(this).attr('data-id')
    showProduct(productId)
  })

  function showProduct(productId) {
    $('.mega-promo').hide()
    $(`#product_${productId}`).show()
  }


  function open(mega) {
    if (isClosing) {
      return
    }
    
    $('body').addClass('has-modal');
    mega.addClass('is-active')

    $(document).on('keydown.mega', function(e) {
      if (e.keyCode === 27) {
        close(mega)
      }
    })
    
    setTimeout(function() {
      $('.mega').on('click.mega', function(e) {
        e.stopPropagation()
      })

      $('body').on('click.megaBackground', function() {
        close(mega)
      })
      
    }, 100)
  }
  
  function close(mega) {
    isClosing = true
    
    mega.removeClass('is-active')
    $('body').removeClass('has-modal');
    $('body').off('click.megaBackground')
    $(document).off('keydown.mega')
    $(document).off('click.mega')
    setTimeout(function() {
      isClosing = false
    }, 100)
  }
})()