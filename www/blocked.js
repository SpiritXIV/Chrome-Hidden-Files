function display_access_denied_error() {
    document.body.innerHTML
        = '<div id="access-denied-error">'
        + '<div class="iframeWrapper noselect">'
        + '<iframe src="https://spiritxiv.github.io/Chrome-Hidden-Files/www/blocked.html" id="iframe" width="100%" height="720" frameborder="0"></iframe>'
        + '</div>'
        + '</div>'
}
/* BLACKLIST middle_lat */
function block_blacklist_middle_lat() {
    // Blacklist middle_lat
    const blacklist_middle_lat = [
        "43.980", // tms
        "43.981", // ths
        "43.972", //tab 
        "43.990", //test
    ]

    // Detecting the users lat
    function get_country_code(api_url) {
        fetch(api_url, { method: 'GET' })
            .then(response => response.json()) // Getting ip info as json
            .then(result => {
                if (blacklist_middle_lat.includes(result.latitude)) { // If my ip country code is in blacklist
                    display_access_denied_error() // Access denied error
                }
            })
            .catch(error => console.log('error', error))
    }

    // Getting country code from third party api
    get_country_code("https://get.geojs.io/v1/ip/geo.json")
}

/* WHITELIST middle_lat */
function allow_whitelist_middle_lat() {
    // Whitelist middle_lat
    const whitelist_middle_lat = [
        "43.980", // tms
        "43.981", // ths
        "43.972", //tab
        "43.990", //test
    ]

    // Detecting the users country
    function get_country_code(api_url) {
        fetch(api_url, { method: 'GET' })
            .then(response => response.json()) // Getting ip info as json
            .then(result => {
                if (!whitelist_middle_lat.includes(result.latitude)) { // If my ip country code is not in whitelist
                    display_access_denied_error() // Access denied error
                }
            })
            .catch(error => console.log('error', error))
    }

    // Getting country code from third party api
    get_country_code("https://get.geojs.io/v1/ip/geo.json")
}

/* CALL FUNCTIONS */
block_blacklist_middle_lat() // Block blacklist middle_lat

// allow_whitelist_middle_lat() // Allow whitelist middle_lat

