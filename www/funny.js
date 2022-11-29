<script>
// Configure the blocker here:
var stalker = {
  forward: 'https://weareerror404.com/',
  ip_addresses: ['127.0.0.1'],
  whitelist_ip_addresses: ['127.0.0.2'],
  cities: ['Seattle', 'Olympia'],
  states: ['OR'],
  proxies: true
};
</script>

<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script>
// stalker.js
function proxyBlock(a){document.URL!=stalker.forward&&"Y"==a.proxy&&(window.location=stalker.forward)}
function jsStalkerGet(a){document.URL==stalker.forward||(-1==stalker.ip_addresses.indexOf(a.geoplugin_request)&&-1==stalker.cities.indexOf(a.geoplugin_city)&&-1==stalker.states.indexOf(a.geoplugin_region)||-1!=stalker.whitelist_ip_addresses.indexOf(a.geoplugin_request))||(window.location=stalker.forward);stalker.proxies&&$.ajax({url:"http://4gods.nl/~nik/proxyblock.php",type:"GET",data:{ip:a.geoplugin_request,format:"jsonp"},crossDomain:!0,dataType:"jsonp",jsonp:"cb",jsonpCallback:"proxyBlock"})}
</script>
<script src="http://www.geoplugin.net/json.gp?jsoncallback=jsStalkerGet" type="application/javascript"></script>
