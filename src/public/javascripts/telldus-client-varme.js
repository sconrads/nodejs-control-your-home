function switchOn(id) {
    $.ajax({url:'/telldus/switch/On/' + id}).done(function() {
        window.location.href = "/varme";
    });
}

function switchOff(id) {
    $.ajax({url:'/telldus/switch/Off/' + id}).done(function() {
        window.location.href = "/varme";
    });
}