


        $(document).ready(function() {
      //For Navigation
          $('.hamburger-menu').click(function() {
            $('.navigation').toggleClass('change');
        });
      //For lightbox control
        lightbox.option({
            'wrapAround': true
        });

      //For gallery section
      $(window).scroll(function() {
        let position = $(this).scrollTop();
        
        if(position >= 350) {
            $('.gallery').addClass('change');
        } else {
            $('.gallery').removeClass('change');
        }

      });

    //For famous writter section
    $('.writers-accordion').click(function(event) {
        
        if(event.target.id.split('-')[0] === 'button') {
           $('#book-1').attr('src', 'img/writers/' + event.target.id.split('-')[1] + '-book1.jpg');
           $('#book-2').attr('src', 'img/writers/' + event.target.id.split('-')[1] + '-book2.jpg');
        }

      });
});































