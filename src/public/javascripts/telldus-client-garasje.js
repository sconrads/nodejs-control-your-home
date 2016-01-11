function switchOn(id) {
    $.ajax({url:'/telldus/switch/On/' + id}).done(function() {
    });
    $.ajax({url:'/telldus/switch/On/' + id}).done(function() {
        window.location.href = "/garasje";
    });
}