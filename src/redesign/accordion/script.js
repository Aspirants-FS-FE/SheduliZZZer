const accordion__btn = Array.from(document.querySelectorAll('.accordion__btn'));

console.log(accordion__btn);

accordion__btn.forEach( (item) => {
  item.addEventListener('click', function() {
    this.closest('.accordion__item').classList.toggle('open_accordion');
  })
  console.log(item);
})
