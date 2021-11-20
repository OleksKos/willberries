const cart = function () {
  const cartBtn = document.querySelector('.button-cart');
  const cart = document.querySelector('#modal-cart');
  console.log(cart);
  const closeBtn = cart.querySelector('.modal-close');

  cartBtn.addEventListener('click', function () {
    cart.style.display = 'flex';
  })

  closeBtn.addEventListener('click', function () {
    cart.style.display = '';
  })
}
cart();