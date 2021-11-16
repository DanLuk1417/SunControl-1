

(function() {
  $(function() {
    if (getParameterByName('contact_posted')) {
      $('#contactSubmittedToast').addClass('is-active')
    }

    $('.toast.is-active').each(function() {
      var toast = $(this)
      handleToast(toast)
    })
  });

  $(document).on('click', '.toast-close', function(e) {
    let toast = $(this).closest('.toast')
    removeToast(toast)
  })

  function removeToast(toast) {
    toast.removeClass('is-active')

    setTimeout(function() {
      toast.remove()
    }, 300)
  }

  function handleToast(toast) {
    if (!toast.hasClass('is-handled')) {
      setTimeout(function() {
        removeToast(toast)
      }, 10000)
      toast.addClass('is-handled')
    }
  }

  function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

})();