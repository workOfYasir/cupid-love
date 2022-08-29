$( document ).ready(function(){
     var navListItems = $('.step-form div.setup-panel div a'),
     allWells = $('.step-form .setup-content'),
     allNextBtn = $('.step-form .nextBtn');
    allWells.hide();

navListItems.on('click', function (e) {
  e.preventDefault();
  var $target = $($(this).attr('href')),
          $item = $(this);

  if (!$item.is('[disabled=disabled]')) {
      navListItems.removeClass('active');
      $item.addClass('active completed');
      allWells.hide();
      $target.show();
      $target.find('input:eq(0)').focus();
  }
   return false;
});

allNextBtn.on('click', function () {
  var curStep = $(this).closest(".setup-content"),
      curStepBtn = curStep.attr("id"),
      nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
      curInputs = curStep.find("input[type='text'],input[type='url']"),
      isValid = true;

  $(".step-form .form-group").removeClass("has-error");
  for(var i=0; i<curInputs.length; i++){
      if (!curInputs[i].validity.valid){
          isValid = false;
          $(curInputs[i]).closest(".form-group").addClass("has-error");
      }
  }

  if (isValid)
      nextStepWizard.removeAttr('disabled').trigger('click');
    return false;
    });
   $('.step-form div.setup-panel div a.btn-circle').trigger('click');
  });