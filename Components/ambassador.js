

(function() {

  $(function() {
    $('#contact_form').attr('novalidate', true)
  })

  $(document).on('submit', '#contact_form', function(e) {

    clearErrorMessages(this)
    let errors = validateForm(this)
    
    if (errors.length > 0) {
      e.preventDefault();
      insertErrorMessages(errors)
    }
  });

  
  function validateForm(form) {
    let errors = []

    $(form).find('input, textarea, select').each(function() {
      let input = $(this)

      if (input.attr('required')) {
        if (!input.val()) {
          errors.push({
            id: input.attr('id'),
            message: `Can't be empty.`
          })
        
        } else if (input.attr('type') === 'email' && !emailIsValid(input.val())) {
          errors.push({
            id: input.attr('id'),
            message: 'Please provide a valid email.'
          })
        
        }
      }

    })

    return errors
  }

  function clearErrorMessages(form) {
    let $form = $(form)
    $form.find('.form-field.has-error').removeClass('has-error')
    $form.find('.form-field-error').remove()
  }

  function insertErrorMessages(errors) {
    errors.forEach(error => {
      let input = $(`#${error.id}`)
      input.after(`<p class="form-field-error">${error.message}</p>`)
      input.closest('.form-field').addClass('has-error')
    })
  }

  function emailIsValid (email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }



})()