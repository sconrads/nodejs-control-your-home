function nrkP3() {
    $.get(
        "http://10.0.1.42:9000/plugins/Favorites/index.html?action=play&index=4&player=e8:4e:06:26:d8:55",
        function(data) {
            alert('page content: ' + data);
        }
    );
}

function nrkP1() {
    $.get(
        "http://10.0.1.42:9000/plugins/Favorites/index.html?action=play&index=3&player=e8:4e:06:26:d8:55",
        function(data) {
            alert('page content: ' + data);
        }
    );
}

function nrkP1s() {
    $.get(
        "http://10.0.1.42:9000/plugins/Favorites/index.html?action=play&index=10&player=e8:4e:06:26:d8:55",
        function(data) {
            alert('page content: ' + data);
        }
    );
}

function kveldsmusikk() {
    $.get(
        "http://10.0.1.42:9000/plugins/Favorites/index.html?action=play&index=7&player=e8:4e:06:26:d8:55",
        function(data) {
            alert('page content: ' + data);
        }
    );
}

function hyggligmedfart() {
    $.get(
        "http://10.0.1.42:9000/plugins/Favorites/index.html?action=play&index=9&player=e8:4e:06:26:d8:55",
        function(data) {
            alert('page content: ' + data);
        }
    );
}

function av() {
    $.get(
        "http://10.0.1.42:9000/status.txt?p0=button&p1=power_off&player=e8:4e:06:26:d8:55",
        function(data) {
            alert('page content: ' + data);
        }
    );
}

function paa() {
    $.get(
        "http://10.0.1.42:9000/status.txt?p0=play&player=e8:4e:06:26:d8:55",
        function(data) {
            alert('page content: ' + data);
        }
    );
}