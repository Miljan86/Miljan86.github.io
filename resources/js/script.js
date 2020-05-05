// $('.card1').mouseenter(event => {
//     $(event.currentTarget).toggleClass('d-none');
//     $(event.currentTarget.nextElementSibling).toggleClass('d-none');
// });

// $('.card2').mouseleave(event => {
//     $(event.currentTarget).toggleClass('d-none');
//     $(event.currentTarget.previousElementSibling).toggleClass('d-none');
// });

const toggleCard = event => {
    $(event.currentTarget).toggleClass('d-none');
    $(event.currentTarget.nextElementSibling).toggleClass('d-none');
};

$('.card1').mouseenter(toggleCard);
$('.card1').mouseleave(toggleCard);

// TODO tap event for smartphone
$('.card1').on('tap', toggleCard);

// $(document).on("pagecreate", function(){
//     $(".card1").on("tap",function(){
//         console.log(this);
//       $(this).toggleClass('d-none');
//       $(this.nextElementSibling).toggleClass('d-none');
//     });  
//     // $(".card2").on("tap",function(){
//     //     console.log(this);
//     //     $(this).toggleClass('d-none');
//     //     $(this.previousElementSibling).toggleClass('d-none');
//     // });                         
//   }); 

$('.card1').on('tap',function(){
    console.log(this);
  $(this).toggleClass('d-none');
  $(this.nextElementSibling).toggleClass('d-none');
}); 




// When the user clicks on the button, scroll to the top of the document
function goToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

$(window).scroll(function () {

    const mybutton = $('#topBtn');

    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        // mybutton.style.display = "block";
        mybutton.addClass('d-sm-block');
    } else {
        // mybutton.style.display = "none";
        mybutton.removeClass('d-sm-block');
    }

    $('.splash>').each(function () {
        var imagePos = $(this).offset().top;
        var imageHeight = $(this).height();
        var topOfWindow = $(window).scrollTop();

        if (imagePos < topOfWindow + imageHeight && imagePos + imageHeight > topOfWindow) {
            $(this).removeClass("visible");
        } else {
            $(this).addClass("visible");
        }

    });
});





