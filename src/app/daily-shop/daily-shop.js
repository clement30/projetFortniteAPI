    
                /*jQuery(function(){
                    $(function () {
                        $(window).scroll(function () {
                            if ($(this).scrollTop() > 200 ) { 
                                $('#scrollUp').css('right','10px');
                            } else { 
                                $('#scrollUp').removeAttr( 'style' );
                            }
     
                        });
                    });
                });*/

const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })

})
