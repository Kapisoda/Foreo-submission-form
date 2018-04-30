$(document).foundation()

$(document).ready(function () {
    var yearsControl = 13;
    var flagForError = false;
    var flagForActive = false;
    /*Icon btn for showing passwords*/
    $('#icon-btn').click(function () {
        flagForActive = !flagForActive;
        if (flagForActive) {
            $('#password, #confirmPassword').attr('type', 'text');
            $('#icon-btn').removeClass('icon-btn-inactive').addClass('icon-btn-active');
        } else {
            $('#password, #confirmPassword').attr('type', 'password');
            $('#icon-btn').removeClass('icon-btn-active').addClass('icon-btn-inactive');
        }
    });


    /*Submit check*/
    $('#button-submit').click(function () {
        flagForError = false

        //removing all error classes and txt error
        $('input').each(function (index) {
            $(this).parent().find('span').empty();
            $(this).removeClass('input-error');
        });

        //checking all required fields if empty
        $('[required]').each(function () {
            checkValue('#' + $(this).attr('id'));
        });

        //checking if email is valid
        if ($('#email').val()) {
            var email = $('#email').val();
            if (!isValidEmailAddress(email)) {
                isNotValidText($('#email'));
            }
        }

        //checking passwords if they are same
        if ($('#password').val() != $('#confirmPassword').val()) {
            $('#password').parent().find('span').text('Password does not match the confirm password');
            addError('input[type=password]');
        }

        //checking if birth date is valid
        if ($('#birthDate').val()) {
            var inputDate = $('#birthDate').val();
            var age = isValidBirthDate(inputDate);
            if (age < yearsControl) {
                isNotValidText($('#birthDate'));
            }
        }

        //checking if phone number is valid
        if ($('#phoneNumber').val()) {
            var phone = $('#phoneNumber').val();
            if (!isValidPhone(phone)) {
                isNotValidText($('#phoneNumber'));
            }
        }

        //form submit
        $('form').submit(function (e) {
            if (flagForError == true) {
                e.preventDefault();
            } else {
                this.submit();
            }
        });

    });
    //function for checking value
    function checkValue(value) {
        if (!$(value).val()) {
            addError(value);
            $(value).parent().find('span').text($(value).attr('name') + ' is empty');
            return true;
        }
        return false;
    };

    function isNotValidText(value) {
        addError(value);
        $(value).parent().find('span').text($(value).attr('name') + ' is not valid');
    }

    //adding error class
    function addError(inputId) {
        $(inputId).addClass('input-error');
        flagForError = true;
    }

    // function for checking if email is valid
    function isValidEmailAddress(emailAddress) {
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        return pattern.test(emailAddress);
    };

    /*Calculator for user years*/
    function isValidBirthDate(DOB) {
        var today = new Date();
        var birthDate = new Date(DOB);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    /*Checking if phone number is valid*/
    function isValidPhone(txtPhone) {
        var pattern = new RegExp(/^[0-9-+]+$/);
        return pattern.test(txtPhone);
    }

});