$(document).foundation()


$(document).ready(function () {
    $('input').blur(function () {
        if ($('#password').val() == $('#confirmPassword').val() && $('#confirmPassword').val() && $('#password').val()) {
            $("input[type=password]").removeClass("input-error").addClass("lightsaber-input");
            $("#spanPassword").empty();
            return false;
        } else if ($('#password').val() != $('#confirmPassword').val()) {
            $("input[type=password]").addClass("input-error");
            $("#spanPassword").text('Password does not match the confirm password');
        }
        $('#name, #email, #password, #confirmPassword').each(function () {
            if ($(this).val() != '') {
                $(this).removeClass("input-error").addClass("lightsaber-input");

            }
        });

    });

    $("#button-submit").click(function () {
        if (!$('#name').val()) {
            $("#spanName").text('Name is empty');
            $("#name").addClass("input-error");
        } else {
            $("#name").removeClass("input-error");
            $('#spanName').empty();
        }
        var email = $("#email").val();
        if (!isValidEmailAddress(email)) {
            $("#spanEmail").text('Email is not valid');
            $("#email").addClass("input-error");
        } else {
            $("#email").removeClass("input-error");
            $('#spanName').empty();
        }
        if (!$('#password').val()) {
            $("#spanPassword").text('Password is empty');
            $("#password").addClass("input-error");
        } else {
            $("#password").removeClass("input-error");
            $("#spanPassword").empty();
        }
        if (!$('#confirmPassword').val()) {
            $("#spanConfirmPassword").text('Confirm password is empty');
            $("#confirmPassword").addClass("input-error");
        } else {
            $("#password").removeClass("input-error");
            $("#spanConfirmPassword").empty();
        }
        if ($('#password').val() != $('#confirmPassword').val()) {
            $("form").submit(function (e) {
                e.preventDefault();
            });
            $("input[type=password]").addClass("input-error");
            $("#spanPassword").text('Password does not match the confirm password');
        }




    });

    function isValidEmailAddress(emailAddress) {
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        return pattern.test(emailAddress);
    };

    /* $("#button-submit").click(function () {
         $('#name, #email, #password, #confirmPassword').each(function () {
             if ($(this).val() == '') {
                 $(this).addClass("input-error");
             } else {
                 $(this).removeClass("input-error").addClass("lightsaber-input");
             }
         });
     }); */
});