Dear Candidate,
You are requested to build a working web page based on the requirements of the provided design, which is included as both a sketch file and a series of PNGs in this directory.
Please note: The design targets mobile only.


You are given the freedom of choosing whichever method of technologies / frameworks / libraries etc you wish to use.  Please feel free to only target one browser for the purposes of this test.
We look forward to discussing your choices, and possible alternatives, during the next interview.

The designed form has 3 input fields - source, destination, and time frame.

There are a number of (info) buttons on the table.  It is intended that when pressed, this shows more information about what the field information means, as can be seen at the bottom of DEV_TEST_3.png.



Data used to build out the table is made available via a API endpoint, the specifications of which are:

Endpoint:
* https://perfapi.perf-data-api.top10vpn-data.prod.top10vpn.co/sdata/results?src=<SRC>&dest=<DST>tpd=<TPD>

Where:
<SRC> - Source Location
 * fra
 * lon
 * nyc
 * sfo
 * sgp
 * syd
 
<DST> - Destination Location
 * fra
 * lon
 * nyc
 * sfo
 * sgp
 * syd

<TPD> - TimePeriodDays
 * 0
 * 7
 * 14

The endpoint is unauthenticated, and responds only to GET requests.
The endpoint returns JSON.

Example Request:
https://perfapi.perf-data-api.top10vpn-data.prod.top10vpn.co/sdata/results?src=lon&dest=nyc&tpd=14

Returns:
{"expressvpn":{"src":"lon","dest":"nyc","pingAvg":81,"displayName":"ExpressVPN","dlMbps":34.0003},"hidemyass":{"src":"lon","dest":"nyc","pingAvg":92,"displayName":"HideMyAss","dlMbps":32.0047},"ipvanish":{"src":"lon","dest":"nyc","pingAvg":94,"displayName":"IPVanish","dlMbps":35.5},"nordvpn":{"src":"lon","dest":"nyc","pingAvg":78,"displayName":"NordVPN","dlMbps":155.5042},"purevpn":{"src":"lon","dest":"nyc","pingAvg":705,"displayName":"PureVPN","dlMbps":4096}}


Data Provided in the endpoint response

  "<providername>": {
    "src": <Three Letters denoting source city>
    "dest": <Three Letters denoting destination city>,
    "pingAvg": <Ping Response Time in ms>,
    "displayName": <Display name in English>,
    "dlMbps": <Download Speed in Mb/s>

  
Your resulting HTML / asset files are to be made available either via GIT repository, or provided back to us zipped via email.
If you are able to host the end product on a URL of your choosing, then we'd be happy to view your work via this too.

If you have any questions, please email jp@metriclabs.co.uk.


