$(document).foundation()


$(document).ready(function () {

    $("#button-submit").click(function () {
        var flag = false;

        $("span").each(function (index) {
            $(this).empty();
        });

        $("input").each(function (index) {
            $(this).removeClass("input-error");
        });


        if (!$('#name').val()) {
            $("#spanName").text('Name is empty');
            $("#name").addClass("input-error");
            flag = true;
        }

        var email = $("#email").val();
        if (!isValidEmailAddress(email)) {
            $("#spanEmail").text('Email is not valid');
            $("#email").addClass("input-error");
            flag = true;
        }

        if (!$('#password').val()) {
            $("#spanPassword").text('Password is empty');
            $("#password").addClass("input-error");
            flag = true;
        }

        if (!$('#confirmPassword').val()) {
            $("#spanConfirmPassword").text('Confirm password is empty');
            $("#confirmPassword").addClass("input-error");
            flag = true;
        }

        if ($('#password').val() != $('#confirmPassword').val()) {
            $("input[type=password]").addClass("input-error");
            $("#spanPassword").text('Password does not match the confirm password');
            flag = true;
        }

        if ($("#birthDate").val()) {
            var inputDate = $("#birthDate").val();
            var age = isValidBirthDate(inputDate);
            if (age < 18) {
                $("#spanBirthDate").text('Birth date is not valid');
                $("#birthDate").addClass("input-error");
                flag = true;
            }
        }
        if ($("#phoneNumber").val()) {
            var phone = $("#phoneNumber").val();
            if (!isValidPhone(phone)) {
                $("#spanPhoneNumber").text('Phone number is not valid');
                $("#phoneNumber").addClass("input-error");
                flag = true;
            }
        }

        console.log(flag);

        $("form").submit(function (e) {
            if (flag == true) {
                e.preventDefault();
            } else {
                this.submit();
            }
        });

    });

    function isValidEmailAddress(emailAddress) {
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        return pattern.test(emailAddress);
    };

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

    function isValidPhone(txtPhone) {
        var pattern = new RegExp(/^[0-9-+]+$/);
        return pattern.test(txtPhone);
    }

});