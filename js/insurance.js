$("#submit").click(function () {
    swal({
            title: "Thank You!",
            text: "Let's get started",
            type: "success",
            closeOnConfirm: false
        },
        function () {
            $(location).attr('href', 'insurance-start.html')
        });
});