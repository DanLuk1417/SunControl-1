

(function() {
  var oldScrollPosition = 0

  $(function() {
    oldScrollPosition = window.scrollY
  })
  
  // $(document).on('click', '.siteheader-toggle', function() {
  //   $(this).toggleClass('is-toggled')
  // })

  $(window).on('scroll', function() {
    $('body').toggleClass('scrolled-down', window.scrollY > 30)

    if (window.scrollY > 60) {
      $('.siteheader').toggleClass('is-gone', scrollDirection() === 'down')
    }
    
  })

  function scrollDirection() {
    var direction = null
    if (window.scrollY > oldScrollPosition) {
      direction = 'down'
    } else {
      direction = 'up'
    }
    oldScrollPosition = window.scrollY
    return direction
  }

})()