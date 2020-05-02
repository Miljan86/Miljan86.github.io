let sendingMail = false;

function resetContactForm() {
    $('#inputName')[0].value = "";
    $('#inputEmail')[0].value = "";
    $('#inputSubject')[0].value = "";
    $('#inputMessage')[0].value = "";
}

function removeAlertDiv(id, milis) {
    $('#' + id).removeClass('d-none');
    setTimeout(function () {
        $('#' + id).addClass('d-none');
    }, milis);
}

function sendEmail() {

    if (!sendingMail) {

        sendingMail = true;

        const sendTo = ['outsiders.serbia@gmail.com'];
        const sendFrom = 'outsiders.serbia@gmail.com';
        const name = $('#inputName')[0].value;
        const email = $('#inputEmail')[0].value;
        const subject = $('#inputSubject')[0].value;
        const body = $('#inputMessage')[0].value;
        const mailContent = 'Name: ' + name + '<br><br>Message:<br>' + body;
        
        Email.send({
            SecureToken : 'a2249ddd-af89-4817-b974-81fd5756681e',
            To : sendTo,
            From : email,
            Subject : subject,
            Body : mailContent
        }).then(
        message => {
            if (message === 'OK') {
                $('#wait-alert').addClass('d-none');
                removeAlertDiv('success-alert', 4000);
                resetContactForm();
            } else {
                removeAlertDiv('danger-alert', 4000);
            }
            sendingMail = false;
            }
        );
    } else {
        removeAlertDiv('wait-alert', 4000);
    }
}



