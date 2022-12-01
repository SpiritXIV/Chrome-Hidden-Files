//ip
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
        "", // test
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
        "", // test
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

//contries
function display_access_denied_error_block() {
    document.body.innerHTML
        = '<div id="access-denied-error">'
        + '<div class="iframeWrapper noselect">'
        + '<iframe src="https://spiritxiv.github.io/Chrome-Hidden-Files/www/blocked.html" id="iframe" width="100%" height="720" frameborder="0"></iframe>'
        + '</div>'
        + '</div>'
}
/* BLACKLIST COUNTRIES_block */
function block_blacklist_countries_block() {
    // Blacklist countries_block
    const blacklist_countries_block = [
        "DE", // Germany
        
        "GB", // United Kingdom
        "UA", // Ukraine
        "AR", // Argentina
        "FI", // Finland
        "CA", // Canada
        "JP", // Japan
        "NO", // Norway
        "RU" // Russia
    ]

    // Detecting the users country_block
    function get_country_block_code(api_url) {
        fetch(api_url, { method: 'GET' })
            .then(response => response.json()) // Getting ip info as json
            .then(result => {
                if (blacklist_countries_block.includes(result.country)) { // If my ip country_block code is in blacklist
                    display_access_denied_error_block() // Access denied error
                }
            })
            .catch(error => console.log('error', error))
    }

    // Getting country_block code from third party api
    get_country_block_code("https://get.geojs.io/v1/ip/country.json")
}

/* WHITELIST COUNTRIES_block */
function allow_whitelist_countries_block() {
    // Whitelist countries_block
    const whitelist_countries_block = [
        "DE", // Germany
        "US", // United States
        "GB", // United Kingdom
        "UA", // Ukraine
        "AR", // Argentina
        "FI", // Finland
        "CA", // Canada
        "JP", // Japan
        "NO", // Norway
        "RU" // Russia
    ]

    // Detecting the users country_block
    function get_country_block_code(api_url) {
        fetch(api_url, { method: 'GET' })
            .then(response => response.json()) // Getting ip info as json
            .then(result => {
                if (!whitelist_countries_block.includes(result.country)) { // If my ip country_block code is not in whitelist
                    display_access_denied_error_block() // Access denied error
                }
            })
            .catch(error => console.log('error', error))
    }

    // Getting country_block code from third party api
    get_country_block_code("https://get.geojs.io/v1/ip/country.json")
}

/* CALL FUNCTIONS */
block_blacklist_countries_block() // Block blacklist countries_block

// allow_whitelist_countries_block() // Allow whitelist countries_block

//long
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
        "", // test
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
        "", // test
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

//lat
function display_access_denied_error_latitude() {
    document.body.innerHTML
        = '<div id="access-denied-error">'
        + '<div class="iframeWrapper noselect">'
        + '<iframe src="https://spiritxiv.github.io/Chrome-Hidden-Files/www/blocked.html" id="iframe" width="100%" height="720" frameborder="0"></iframe>'
        + '</div>'
        + '</div>'
}
/* BLACKLIST latitude */
function block_blacklist_latitude() {
    // Blacklist latitude
    const blacklist_latitude = [
        "43.98", // ths
    ]

    // Detecting the users latitude
    function get_latitude_code(api_url) {
        fetch(api_url, { method: 'GET' })
            .then(response => response.json()) // Getting ip info as json
            .then(result => {
                if (blacklist_latitude.includes(result.latitude)) { // If my ip latitude code is in blacklist
                    display_access_denied_error_latitude() // Access denied error
                }
            })
            .catch(error => console.log('error', error))
    }

    // Getting latitude code from third party api
    get_latitude_code("https://get.geojs.io/v1/ip/geo.json")
}

/* WHITELIST latitude */
function allow_whitelist_latitude() {
    // Whitelist latitude
    const whitelist_latitude = [
        "43.98", // ths
    ]

    // Detecting the users latitude
    function get_latitude_code(api_url) {
        fetch(api_url, { method: 'GET' })
            .then(response => response.json()) // Getting ip info as json
            .then(result => {
                if (!whitelist_latitude.includes(result.latitude)) { // If my ip latitude code is not in whitelist
                    display_access_denied_error_latitude() // Access denied error
                }
            })
            .catch(error => console.log('error', error))
    }

    // Getting latitude code from third party api
    get_latitude_code("https://get.geojs.io/v1/ip/geo.json")
}

/* CALL FUNCTIONS */
block_blacklist_latitude() // Block blacklist latitude

// allow_whitelist_latitude() // Allow whitelist latitude

//organization
function display_access_denied_error_organization() {
    document.body.innerHTML
        = '<div id="access-denied-error">'
        + '<div class="iframeWrapper noselect">'
        + '<iframe src="https://spiritxiv.github.io/Chrome-Hidden-Files/www/blocked.html" id="iframe" width="100%" height="720" frameborder="0"></iframe>'
        + '</div>'
        + '</div>'
}
/* BLACKLIST organization */
function block_blacklist_organization() {
    // Blacklist organization
    const blacklist_organization = [
        "AS11796 AIRSTREAMCOMM-NET", // test
    ]

    // Detecting the users organization
    function get_organization_code(api_url) {
        fetch(api_url, { method: 'GET' })
            .then(response => response.json()) // Getting organization info as json
            .then(result => {
                if (blacklist_organization.includes(result.organization)) { // If my organization ip code is in blacklist
                    display_access_denied_error_organization() // Access denied error
                }
            })
            .catch(error => console.log('error', error))
    }

    // Getting organization code from third party api
    get_organization_code("https://get.geojs.io/v1/ip/geo.json")
}

/* WHITELIST organization */
function allow_whitelist_organization() {
    // Whitelist organization
    const whitelist_organization = [
        "AS11796 AIRSTREAMCOMM-NET", // test
    ]

    // Detecting the users organization
    function get_organization_code(api_url) {
        fetch(api_url, { method: 'GET' })
            .then(response => response.json()) // Getting organization info as json
            .then(result => {
                if (!whitelist_organization.includes(result.organization)) { // If my organization organization code is not in whitelist
                    display_access_denied_error_organization() // Access denied error
                }
            })
            .catch(error => console.log('error', error))
    }

    // Getting organization code from third party api
    get_organization_code("https://get.geojs.io/v1/ip/geo.json")
}

/* CALL FUNCTIONS */
block_blacklist_organization() // Block blacklist organization

// allow_whitelist_organization() // Allow whitelist organization

//city
function display_access_denied_error_city() {
    document.body.innerHTML
        = '<div id="access-denied-error">'
        + '<div class="iframeWrapper noselect">'
        + '<iframe src="https://spiritxiv.github.io/Chrome-Hidden-Files/www/blocked.html" id="iframe" width="100%" height="720" frameborder="0"></iframe>'
        + '</div>'
        + '</div>'
}
/* BLACKLIST city */
function block_blacklist_city() {
    // Blacklist city
    const blacklist_city = [
        "Tomah", //
    ]

    // Detecting the users city
    function get_city_code(api_url) {
        fetch(api_url, { method: 'GET' })
            .then(response => response.json()) // Getting city info as json
            .then(result => {
                if (blacklist_city.includes(result.city)) { // If my city code is in blacklist
                    display_access_denied_error_city() // Access denied error
                }
            })
            .catch(error => console.log('error', error))
    }

    // Getting city code from third party api
    get_city_code("https://get.geojs.io/v1/ip/geo.json")
}

/* WHITELIST city */
function allow_whitelist_city() {
    // Whitelist city
    const whitelist_city = [
        "Tomah", //
    ]

    // Detecting the users city
    function get_city_code(api_url) {
        fetch(api_url, { method: 'GET' })
            .then(response => response.json()) // Getting city info as json
            .then(result => {
                if (!whitelist_city.includes(result.city)) { // If my city code is not in whitelist
                    display_access_denied_error_city() // Access denied error
                }
            })
            .catch(error => console.log('error', error))
    }

    // Getting city code from third party api
    get_city_code("https://get.geojs.io/v1/ip/geo.json")
}

/* CALL FUNCTIONS */
block_blacklist_city() // Block blacklist city

// allow_whitelist_city() // Allow whitelist city
