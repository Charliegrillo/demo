// Modal - JS

function modal() {
  var modal = document.getElementsByClassName('modal')[0];
  var modalCompanie = document.querySelector('.modal_addCompanie');
  
  close = document.querySelectorAll('.modal_dialog .modal__close');
  closeCompanie = document.querySelectorAll('.modal_addCompanie .modal__close');

  closeModal = function() {
    modal.classList.remove('modal--show');

    modal.classList.add('modal--hide');
    // Remove hide class after animation is done
    afterAnimation = function() {
      modal.classList.remove('modal--hide');
    }
    // This listens for the CSS animations to finish and then hides the modal
    modal.addEventListener("webkitAnimationEnd", afterAnimation, false);
    modal.addEventListener("oAnimationEnd", afterAnimation, false);
    modal.addEventListener("msAnimationEnd", afterAnimation, false);
    modal.addEventListener("animationend", afterAnimation, false);
  }

  closeModalEnteprise = function() {
    modalCompanie.classList.remove('modal--show');
    
    modalCompanie.classList.add('modal--hide');

    document.querySelector('.selectedData').innerText= document.querySelector('.modal_addCompanie input[name="name"]').value;

    // Remove hide class after animation is done
    afterAnimation = function() {
      modalCompanie.classList.remove('modal--hide');
    }
    // This listens for the CSS animations to finish and then hides the modal
    modalCompanie.addEventListener("webkitAnimationEnd", afterAnimation, false);
    modalCompanie.addEventListener("oAnimationEnd", afterAnimation, false);
    modalCompanie.addEventListener("msAnimationEnd", afterAnimation, false);
    modalCompanie.addEventListener("animationend", afterAnimation, false);    
  }

  // Close the modal with any element with class 'modal__close'
  for (var i=0; i < close.length; i++) {
    close[i].onclick = function() {
      closeModal();
    }
  }
  for (var i=0; i < closeCompanie.length; i++) {
    closeCompanie[i].onclick = function() {
      closeModalEnteprise();
    }
  }

  // Click outside of the modal and close it
  window.onclick = function(e) {
    if (e.target == modal) {
      closeModal();
    }
    if (e.target == modalCompanie) {
      closeModalEnteprise();
    }    
  }

  // Use the escape key to close modal
  document.onkeyup = function(e) {
    e = e || window.event;
    if(modal.classList.contains('modal--show')) {
      if(e.keyCode == 27) {
        closeModal();
      }
    }
    if(modalCompanie.classList.contains('modal--show')) {
      if(e.keyCode == 27) {
        closeModalEnteprise();
      }
    }    
  }

}modal();