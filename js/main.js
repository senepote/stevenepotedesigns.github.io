
$(() => {

    // $('.section-nav-title-profile').click((event) => {
    //   if ($('.section-content-container').is( ":hidden" )) {
    //     $('.section-content-container').slideDown( "slow", () => {
    //       $('.section-content-container').css('display', 'flex');
    //     } );
    //   } else {
    //     $('.section-content-container').slideUp( "slow" );
    //   }
    //   event.stopImmediatePropagation();
    // })
    // // Click handler to expand and contract resume section

  
    // // Click handler to expand and contract portfolio section
    // $('#portfolio-header').click((event) => {
    //   console.log('Clicked');
    //   if ($('.portfolio-content-container').is( ":hidden" )) {
    //     $('.portfolio-content-container').slideDown( "slow" );
    //   } else {
    //     $('.portfolio-content-container').slideUp( "slow" );
    //   }
    //   event.stopImmediatePropagation();
    // })
  
    // // Click handler to expand and contract art-portfolio section
    // $('#art-portfolio-header').click((event) => {
    //   console.log('Clicked');
    //   if ($('.art-portfolio-container').is( ":hidden" )) {
    //     $('.art-portfolio-container').slideDown( "slow" );
    //   } else {
    //     $('.art-portfolio-container').slideUp( "slow" );
    //   }
    //   event.stopImmediatePropagation();
    // })

    //   // Click handler to expand and contract design-portfolio section
    //   $('#design-portfolio-header').click((event) => {
    //     console.log('Clicked');
    //     if ($('.design-portfolio-container').is( ":hidden" )) {
    //       $('.design-portfolio-container').slideDown( "slow" );
    //     } else {
    //       $('.design-portfolio-container').slideUp( "slow" );
    //     }
    //     event.stopImmediatePropagation();
    //   })
  
    // Click handler to expand and contract contact section
    
    
// POSSIBLY KEEP LATER


    
    $('#resume-header').click((event) => {
      if ($('.resume-container').is( ":hidden" )) {
        $('.resume-container').slideDown( "slow", () => {
          $('.resume-container').css('display', 'flex');
        } );
      } else {
        $('.resume-container').slideUp( "slow" );
      }
      event.stopImmediatePropagation();
    })
    
    $('#contact-header').click((event) => {
      console.log('Clicked');
      if ($('.contact-container').is( ":hidden" )) {
        $('.contact-container').slideDown( "slow" );
      } else {
        $('.contact-container').slideUp( "slow" );
      }
      event.stopImmediatePropagation();
    })

  
})
 
let slideIndex = 1;
showSlides(slideIndex);function plusSlide(n) {
  showSlides(slideIndex += n);
}function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("slide");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}function prevSlide() {
  plusSlide(-1);
}function nextSlide() {
  plusSlide(1);
}