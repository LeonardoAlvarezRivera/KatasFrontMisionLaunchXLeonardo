var myModal = document.getElementById('modal')
var myInput = document.getElementById('btn-shopping-cart')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})
