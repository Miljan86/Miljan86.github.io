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
$('.card1').on("tap", toggleCard);