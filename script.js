console.clear();

/**
 * Update of secondary numeric pagination
 * @this {object}  - swiper instance
 */
function updSwiperNumericPagination() {
  this.el.querySelector( '.swiper-counter' )
    .innerHTML = '<span class="count">'+ (this.realIndex + 1) +'</span>/<span class="total">'+ this.el.slidesQuantity +'</span>';
}


document.addEventListener( 'DOMContentLoaded', function () {
  document.querySelectorAll( '.swiper-container' ).forEach( function( node ) {
    // Getting slides quantity before slider clones them
    node.slidesQuantity = node.querySelectorAll( '.swiper-slide' ).length;
    
    // Swiper initialization
    new Swiper( node, {
      speed:         1000,
      loop:          true,
      autoplay:      { delay: 1000, },
      pagination:    { el: node.querySelector('.swiper-pagination') },
      on: { // Secondary pagination is update after initialization and after slide change
        init:        updSwiperNumericPagination,
        slideChange: updSwiperNumericPagination
      }
    });
  });
});