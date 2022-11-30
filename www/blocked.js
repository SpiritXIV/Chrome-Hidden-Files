function display_access_denied_error_longitude() {
    document.body.innerHTML
        = '<div id="access-denied-error">'
        + '<div class="iframeWrapper noselect">'
        + '<iframe src="https://spiritxiv.github.io/Chrome-Hidden-Files/www/blocked.html" id="iframe" width="100%" height="720" frameborder="0"></iframe>'
        + '</div>'
        + '</div>'
}
/* BLACKLIST longitude */
function block_blacklist_longitude() {
    // Blacklist longitude
    const blacklist_longitude = [
    "-90.47" //ths
    ]

    // Detecting the users longitude
    function get_longitude_code(api_url) {
        fetch(api_url, { method: 'GET' })
            .then(response => response.json()) // Getting ip info as json
            .then(result => {
                if (blacklist_longitude.includes(result.longitude)) { // If my ip longitude code is in blacklist
                    display_access_denied_error_longitude() // Access denied error
                }
            })
            .catch(error => console.log('error', error))
    }

    // Getting longitude code from third party api
    get_longitude_code("https://get.geojs.io/v1/ip/geo.json")
}

/* WHITELIST longitude */
function allow_whitelist_longitude() {
    // Whitelist longitude
    const whitelist_longitude = [
    -90.47" //ths
    ]

    // Detecting the users longitude
    function get_longitude_code(api_url) {
        fetch(api_url, { method: 'GET' })
            .then(response => response.json()) // Getting ip info as json
            .then(result => {
                if (!whitelist_longitude.includes(result.longitude)) { // If my ip longitude code is not in whitelist
                    display_access_denied_error_longitude() // Access denied error
                }
            })
            .catch(error => console.log('error', error))
    }

    // Getting longitude code from third party api
    get_longitude_code("https://get.geojs.io/v1/ip/geo.json")
}

/* CALL FUNCTIONS */
block_blacklist_longitude() // Block blacklist longitude

// allow_whitelist_longitude() // Allow whitelist longitude
