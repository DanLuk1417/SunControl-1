

(function() {
  $('.page').find('img').each(function() {
    $(this).unwrap().wrap('<figure class="page-image">')
  })
})()