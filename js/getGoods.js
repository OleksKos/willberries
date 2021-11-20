const getGoods = () => {
  //First - discribe the varibles
  const links = document.querySelectorAll('.navigation-link');
  //The second - discribe functions
  const getData = () => {
    fetch('https://willberries-3d6c2-default-rtdb.firebaseio.com/db.json')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }
  //The third - use the function and varables
  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      getData();
    })
  })

  localStorage.setItem('goods', JSON.stringify({ name: 'all' }));

}
getGoods();