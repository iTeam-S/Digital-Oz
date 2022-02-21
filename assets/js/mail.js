$( "#send_mail" ).click( function() {

    nom = document.getElementById("form_name").value
    mail = document.getElementById("form_email").value
    numero = document.getElementById("form_numero").value
    entreprise = document.getElementById("form_entreprise").value
    subject = document.getElementById("form_subject").value
    message = document.getElementById("form_message").value

    checked = $("#check").is(':checked')

    if (nom && mail && numero && entreprise && subject && message) {
        if (checked) {
            $(this).attr('href', 'mailto:landry.apsa@gmail.com?subject='+subject+'&body='+message+"%0d%0a%0d%0a%0d%0aNom%3a "+nom+"%0d%0aMail%3a "+mail+"%0d%0aNumero%3a "+numero+"%0d%0aEntreprise%3a "+entreprise);
        }
        else {
            // show Modal check
            $('#errorModal_2').modal('show');
        }
    }
    else{
        // show Modal field
        $('#errorModal_1').modal('show');
    }

});
