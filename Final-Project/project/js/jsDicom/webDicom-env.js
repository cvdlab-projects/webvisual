var scmodel;

$(function () {
  var contactContainer = $('#webdicom-container-contact');
  var aboutContainer = $('#webdicom-container-about');

  var contactButton = $('#webdicom-link-contact');
  var aboutButton = $('#webdicom-link-about');

  var aboutClose = $('#webdicom-icon-close');
  var contactClose = $('#webdicom-icon-contact-close');

  var containers = $('.webdicom-container');
  var loading = $('#loading');

  

  /* Setup the environment */
  var clear = function () {
    contactContainer.hide();
    aboutContainer.hide();
  };

  contactButton.on('click', function () {
    clear();
    contactContainer.show();
  });

  aboutButton.on('click', function () {
    clear();
    aboutContainer.show();
  });

  aboutClose.on('click', function () {
    aboutContainer.hide();
  });

  contactClose.on('click', function () {
    contactContainer.hide();
  });

  containers.on('mousewheel', function (event) {
    event.stopPropagation();
  });

  $(document).on('keyup', function (event) {
    if(event.keyCode == 27) {
      clear();
    }
  });

});
