

(function() {
  // Identifies duplicates in related products list and removes them
  let productIds = []
  $('.products.is-related .products-item').each(function() {
    const id = $(this).data('id')
    if (productIds.indexOf(id) > -1) {
      $(this).remove()
    } else {
      productIds.push(id)
    }
  })
})()

