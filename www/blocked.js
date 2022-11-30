function display_access_denied_error_ip() {
    document.body.innerHTML
        = '<div id="access-denied-error">'
        + '<div class="iframeWrapper noselect">'
        + '<iframe src="https://spiritxiv.github.io/Chrome-Hidden-Files/www/blocked.html" id="iframe" width="100%" height="720" frameborder="0"></iframe>'
        + '</div>'
        + '</div>'
}
/* BLACKLIST ip */
function block_blacklist_ip() {
    // Blacklist ip
    const blacklist_ip = [
        "207.190.88.66", // test
    ]

    // Detecting the users ip
    function get_ip_code(api_url) {
        fetch(api_url, { method: 'GET' })
            .then(response => response.json()) // Getting ip info as json
            .then(result => {
                if (blacklist_ip.includes(result.ip)) { // If my ip ip code is in blacklist
                    display_access_denied_error_ip() // Access denied error
                }
            })
            .catch(error => console.log('error', error))
    }

    // Getting ip code from third party api
    get_ip_code("https://get.geojs.io/v1/ip/geo.json")
}

/* WHITELIST ip */
function allow_whitelist_ip() {
    // Whitelist ip
    const whitelist_ip = [
        "207.190.88.66", // test
    ]

    // Detecting the users ip
    function get_ip_code(api_url) {
        fetch(api_url, { method: 'GET' })
            .then(response => response.json()) // Getting ip info as json
            .then(result => {
                if (!whitelist_ip.includes(result.ip)) { // If my ip ip code is not in whitelist
                    display_access_denied_error_ip() // Access denied error
                }
            })
            .catch(error => console.log('error', error))
    }

    // Getting ip code from third party api
    get_ip_code("https://get.geojs.io/v1/ip/geo.json")
}

/* CALL FUNCTIONS */
block_blacklist_ip() // Block blacklist ip

// allow_whitelist_ip() // Allow whitelist ip
