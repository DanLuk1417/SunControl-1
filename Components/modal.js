
(function() {
    
  $(document).on('click', '[data-modal-id]', function(e) {
    e.preventDefault()
    
    let id = $(this).attr('data-modal-id')
    let modal = null
    
    if (id) {
      if (id[0] !== '#') {
        id = '#' + id
      }
      modal = $(id)
    } else {
      console.warn('No id was passed to modal')
      return
    }

    if (modal.length > 0) {
      modal.addClass('is-active')
      $('body').addClass('has-modal');
    } else {
      console.warn(`No modal with id ${id} was found.`)
    }
    
  })

  $(document).on('click', '.modal-close, .modal-cancel', function(e) {
    e.preventDefault();
    $(this).closest('.modal').removeClass('is-active');
    $('body').removeClass('has-modal');
  })

})()