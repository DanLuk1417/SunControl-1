

$(document).on('click', '.dropdown-toggle', function(e) {
  var dropdown = $(this).closest('.dropdown');
  if (dropdown.hasClass('is-component')) {
    return;
  }
  e.preventDefault();

  if (!dropdown.hasClass('is-active')) {
    open(dropdown);
  } else {
    close(dropdown)
  }
});

$(document).on('keydown', '.dropdown-toggle', function(e) {
  var dropdown = $(this).closest('.dropdown');
  if (dropdown.hasClass('is-component')) {
    return;
  }

  if (e.keyCode == 40) {
    e.preventDefault();
    open(dropdown);
  }
});

function open(dropdown) {
  $('.dropdown:not(.is-component)').removeClass('is-active'); // Closes all active dropdowns
  dropdown.addClass('is-active');

  var items = dropdown.find('.dropdown-item');
  if (window.innerWidth >= 740) {
    items = items.not('.dropdown-item.only-mobile');
    items = items.not('.dropdown-item.only-mobile_nav');
  }
  if (items.length > 0) {
    items[0].focus()
  }
  

  $(document).on('keyup.dropdown', function(e) {
    if (e.keyCode == 27) {
      close(dropdown);
    }
  });

  setTimeout(function() {
    $(document).on('click.dropdown', function() {
      close(dropdown);
    });
  }, 100);
}

function close(dropdown) {
  dropdown.removeClass('is-active');
  $(document).off('click.dropdown');
  $(document).off('keyup.dropdown');

  var toggle = dropdown.find('.dropdown-toggle')[0]
  if (toggle) {
    toggle.focus();
  }
}


$(document).on('keydown', '.dropdown-item', function(e) {
  var items, nextIndex, prevIndex

  switch (e.keyCode) {
    case 38: // up key
    case 40: // down key
      e.preventDefault();
      e.stopPropagation();

      items = $(this).closest('.dropdown-nav').find('.dropdown-item');

      if (window.innerWidth >= 740) {
        items = items.not('.dropdown-item.only-mobile');
      }

      var currentIndex = items.index(this)
      prevIndex = currentIndex - 1
      nextIndex = currentIndex + 1

      if (prevIndex < 0) {
        prevIndex = 0
      }

      if (nextIndex >= items.length) {
        nextIndex = items.length - 1
      }

      break;
  }

  switch (e.keyCode) {

    case 9: // Tab
      e.preventDefault();
      close($(this).closest('.dropdown'))
      break;
    case 32: // Space
      e.preventDefault();
      $(this).trigger('click');
      break;
    case 38: // up key
      items[prevIndex].focus()
      break;
    case 40: // down key
      items[nextIndex].focus()
      break;
    default:
  }
});
