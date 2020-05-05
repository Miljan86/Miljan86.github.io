// $('.card1').mouseenter(event => {
//     $(event.currentTarget).toggleClass('d-none');
//     $(event.currentTarget.nextElementSibling).toggleClass('d-none');
// });

// $('.card2').mouseleave(event => {
//     $(event.currentTarget).toggleClass('d-none');
//     $(event.currentTarget.previousElementSibling).toggleClass('d-none');
// });

// const toggleCard = event => {
//     $(event.currentTarget).toggleClass('d-none');
//     $(event.currentTarget.nextElementSibling).toggleClass('d-none');
// };

// $('.card1').mouseenter(toggleCard);
// $('.card1').mouseleave(toggleCard);

// // TODO tap event for smartphone
// $('.card1').on('tap', toggleCard);

// $('.card1').on('tap',function(){
//     console.log(this);
//   $(this).toggleClass('d-none');
//   $(this.nextElementSibling).toggleClass('d-none');
// }); 




// Scroll - start
function goToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

$(window).scroll(function () {

    const mybutton = $('#topBtn');
    // Show back to the top icon
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        mybutton.addClass('d-sm-block');
    } else {
        mybutton.removeClass('d-sm-block');
    }

    // Show splash image
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
// Cards - end


// Cards - strat
var $cards = $('.card-object'),
    $faceButtons = $('.face');

$faceButtons.on('click', flipCard);

function flipCard(event) {
    event.preventDefault();

    var $btnFace = $(this),
        $card = $btnFace.parent('.card-object');

    if ($card.hasClass('flip-in')) {
        closeCards();
    } else {
        closeCards();
        openCard($card);
    }

}

function closeCards() {
    $cards.each(function () {
        $(this)
            .filter('.flip-in')
            .removeClass('flip-in')
            .queue(function () {
                // Force reflow hack
                var reflow = this.offsetHeight;
                $(this)
                    .addClass('flip-out')
                    .dequeue();
            })

    });
}

function openCard($card) {
    $card
        .removeClass('flip-out')
        .queue(function () {
            // Force reflow hack
            var reflow = this.offsetHeight;
            $(this)
                .addClass('flip-in')
                .dequeue();
        });

}
// Cards - end

