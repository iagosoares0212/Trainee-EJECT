export default function iniciarCarrossel (){
    console.log('oi')
}

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    slidesPerView: 2.7,
    spaceBetween: 10,
    

  });



