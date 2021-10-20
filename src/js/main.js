const promo = document.querySelector('.promo'),
    btn = document.querySelectorAll('.card__btn'),
    exit = document.querySelector('.promo__block_exit'),
    copytxt = document.querySelector('.promo__block_copy'),
    info = document.querySelector('.promo__block_info');

exit.addEventListener('click', () => {
    promo.classList.remove('active');
    info.classList.remove('active');
});

btn.forEach(function(el) {   
     el.onclick = function(){   
        promo.classList.add('active');
        copytxt.classList.add('active');
     };
});

document.querySelector('.promo__block_copy').addEventListener('click', e => {
    let content = e.target.innerHTML;
    console.info(`Содержимое элемента: "${content}"!`);
    navigator.clipboard.writeText(content);
  });

copytxt.addEventListener('click', () => {
    info.classList.add('active');
});


