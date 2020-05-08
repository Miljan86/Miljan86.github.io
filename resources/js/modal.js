$('#modal1').on('hidden.bs.modal', function (e) {
    $('#modal1 iframe').attr("src", $("#modal1 iframe").attr("src"));
});
  
$('#modal2').on('hidden.bs.modal', function (e) {
    $('#modal2 iframe').attr("src", $("#modal2 iframe").attr("src"));
});
  
$('#modal3').on('hidden.bs.modal', function (e) {
    $('#modal3 iframe').attr("src", $("#modal3 iframe").attr("src"));
});

$('[id^=modal]').on('shown.bs.modal', function (e) {
  $("video").prop('muted', true);
  $("#mute").css("background-image", "url('./resources/images/mute_btn/mute.png')");
});
