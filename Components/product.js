

(function() {
  $(document).on('change', '#productSelect.refresh', function(e) {
    location.search = '?variant=' + $(this).val()
  })
})()