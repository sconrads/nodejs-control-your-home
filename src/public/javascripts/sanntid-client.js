
function avganger(id) {
    $.ajax({
        type: "GET",
        url: '/sanntid/avganger/' + id,
        success: function (data) {
            console.log('Ok');
            console.log(data);
        },
        error: function(data) {
            console.log('Feil');
            console.log(data);
        }
    });
}