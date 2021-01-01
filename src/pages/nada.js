function deleteSpecificCookies() {
    var cookies = document.cookie.split(';');
    var all_cookies = '';
    for (var i = 0; i < cookies.length; i++) {
        var cookie_name = cookies[i].split('=')[0];
        var cookie_value = cookies[i].split('=')[1];
        if (cookie_name.trim() != '__utmb') {
            all_cookies = all_cookies + cookies[i] + ';';
        }
    }
    if (!document.__defineGetter__) {
        Object.defineProperty(document, 'cookie', {
            get: function () {
                return all_cookies;
            },
            set: function () {
                return true;
            },
        });
    } else {
        document.__defineGetter__('cookie', function () {
            return all_cookies;
        });
        document.__defineSetter__('cookie', function () {
            return true;
        });
    }
}
