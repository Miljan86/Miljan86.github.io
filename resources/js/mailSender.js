function sendEmail() {
    
    const sendTo = ['miljan86stojanovic@yahoo.com', 'outsiders.serbia@gmail.com',
                    'ghosttdog@gmail.com', 'japi989@hotmail.com'];
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
      message => alert(message)
    );
}



