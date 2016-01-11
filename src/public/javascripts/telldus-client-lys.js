function switchOn(id) {
    $.ajax({url:'/telldus/switch/On/' + id}).done(function() {
        window.location.href = "/lys";
    });
}

function switchOff(id) {
    $.ajax({url:'/telldus/switch/Off/' + id}).done(function() {
        window.location.href = "/lys";
    });
}