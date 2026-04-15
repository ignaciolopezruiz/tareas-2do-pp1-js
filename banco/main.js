const users = [{"id":1,"first_name":"Sebastiano","last_name":"Hutchison","email":"shutchison0@wufoo.com","gender":"Male","ip_address":"196.186.9.97","bank":"Raiffeisenbank Dietersheim und Umgebung eG","bep20_address":"1LjeNmQvpsJ9w4R2zfcbhetwvyyiyQEVGk","btc":93,"city":"Xinle","country":"China"},
{"id":2,"first_name":"Cal","last_name":"Lawtey","email":"clawtey1@washingtonpost.com","gender":"Female","ip_address":"156.233.26.0","bank":"PSD Bank Nord eG","bep20_address":"1LfRzche4yphZTa8auETJ5e8zcuLdi3Ax2","btc":43,"city":"Basa","country":"Indonesia"},
{"id":3,"first_name":"Cross","last_name":"Armitt","email":"carmitt2@wufoo.com","gender":"Male","ip_address":"219.87.201.63","bank":"CASSA RAIFFEISEN VAL BADIA SOCIETA' COOPERATIVA - GENOSSENSCHAFT","bep20_address":"1FbmJDgKteXF5DPWiPCJ4vG5rz9n8D1nkZ","btc":61,"city":"San Agustin","country":"Philippines"},
{"id":4,"first_name":"Dillon","last_name":"Weale","email":"dweale3@cyberchimps.com","gender":"Genderfluid","ip_address":"53.5.157.18","bank":"FIRST SECURITY BANK","bep20_address":"1P4K1F3kuprYaK2aT1sMrHGg8TDAYkzwYY","btc":71,"city":"Hamburg Bramfeld","country":"Germany"},
{"id":5,"first_name":"Aldus","last_name":"O'Mohun","email":"aomohun4@bbc.co.uk","gender":"Male","ip_address":"22.11.235.233","bank":"SOUTH STATE BANK","bep20_address":"13TZ2jTvu4ng7Nf456AsvQAQMMZerCbfz9","btc":37,"city":"Lobuni","country":"Ethiopia"},
{"id":6,"first_name":"Hamel","last_name":"Jellyman","email":"hjellyman5@indiatimes.com","gender":"Male","ip_address":"176.141.33.149","bank":"DELEN PRIVATE BANK","bep20_address":"19DDv87adECn1ZJFWHkzz7XwkcMK7ZX46Z","btc":10,"city":"Pajé","country":"Comoros"},
{"id":7,"first_name":"Tris","last_name":"Luthwood","email":"tluthwood6@cbsnews.com","gender":"Male","ip_address":"151.204.165.162","bank":"SECURITY STATE BANK","bep20_address":"1D4k9FXic6M3ryeHtQfr55Vs2VCFBdf3tC","btc":92,"city":"San Fernando","country":"Philippines"},
{"id":8,"first_name":"Rob","last_name":"Rosenwald","email":"rrosenwald7@aboutads.info","gender":"Male","ip_address":"67.131.156.181","bank":"BANCO BPM SOCIETA' PER AZIONI","bep20_address":"1BSHzWvuwJp5pHW6uWLDCRHPhRhoK31HUB","btc":6,"city":"Noupoort","country":"South Africa"},
{"id":9,"first_name":"Jorie","last_name":"McNair","email":"jmcnair8@weather.com","gender":"Female","ip_address":"141.36.123.65","bank":"Caisse régionale de crédit agricole mutuel du Morbihan","bep20_address":"1Mc6dwhJLKsCcWNKFSvy9Yxzyrm3pzNHva","btc":22,"city":"Lương Bằng","country":"Vietnam"},
{"id":10,"first_name":"Iorgo","last_name":"Lawland","email":"ilawland9@marriott.com","gender":"Male","ip_address":"225.230.36.243","bank":"SANTANDER BANK","bep20_address":"1oyaeufm2vyYDSYVJqX8bAnmkigaTGYvv","btc":31,"city":"San Cristóbal","country":"Dominican Republic"},
{"id":11,"first_name":"Delano","last_name":"Southway","email":"dsouthwaya@mtv.com","gender":"Male","ip_address":"137.156.55.91","bank":"FIRST NATIONAL BANK","bep20_address":"1JDRSZhv6ubnaPtfV7gcWydo7csSD4xSDN","btc":95,"city":"Guitang","country":"China"},
{"id":12,"first_name":"Jayne","last_name":"Carillo","email":"jcarillob@rambler.ru","gender":"Female","ip_address":"89.152.148.139","bank":"FIRST TENNESSEE BANK","bep20_address":"17taRzLb5DTeMFDdzVmtj8kShrjLkbpWTj","btc":39,"city":"Amieiro","country":"Portugal"},
{"id":13,"first_name":"Morry","last_name":"Shulem","email":"mshulemc@google.ca","gender":"Male","ip_address":"14.109.5.230","bank":"FIRST NATIONAL BANK OF PENNSYLVANIA","bep20_address":"12mA7zQBSgqvAh1Nrut7uDZx9MymnXAtZq","btc":86,"city":"Diourbel","country":"Senegal"},
{"id":14,"first_name":"Kakalina","last_name":"Burbidge","email":"kburbidged@vkontakte.ru","gender":"Female","ip_address":"232.245.225.156","bank":"Volksbank Daaden eG","bep20_address":"1KYSPmk4C9zxrFMSzxLonyKXKnKYF7o2Lk","btc":65,"city":"Sens","country":"France"},
{"id":15,"first_name":"Prescott","last_name":"Tudhope","email":"ptudhopee@freewebs.com","gender":"Male","ip_address":"166.69.144.70","bank":"TRUSTMARK NATIONAL BANK","bep20_address":"18yqNZh8mLQ6xKDTbWRz9pZgjcRawDnug4","btc":47,"city":"Kalamáta","country":"Greece"},
{"id":16,"first_name":"Ronda","last_name":"Lezemore","email":"rlezemoref@miitbeian.gov.cn","gender":"Female","ip_address":"143.52.46.3","bank":"Sparkasse Donnersberg","bep20_address":"13Yy2sYhotxZESXuGSQfRhF9hknauff7tZ","btc":11,"city":"Saint-Denis","country":"Reunion"},
{"id":17,"first_name":"Babita","last_name":"Ferrieres","email":"bferrieresg@mit.edu","gender":"Female","ip_address":"24.90.108.50","bank":"Raiffeisenbank Wienerwald eGen","bep20_address":"1KhdRt9vPGfaNaty484xhJNMJDxt7oioNX","btc":3,"city":"Soweto","country":"South Africa"},
{"id":18,"first_name":"Wendie","last_name":"Costellow","email":"wcostellowh@jiathis.com","gender":"Polygender","ip_address":"75.94.100.26","bank":"CASSA RAIFFEISEN TURES-AURINA SOCIETA' COOPERATIVA (IN LINGUA TEDESCA RAIFFEISENKASSE TAUFERER-AHRNTAL GENOSSENSCHAFT)","bep20_address":"1CqK2bfvGFKCAd5B9XQSWfjhwus8ar4wam","btc":7,"city":"Kaabong","country":"Uganda"},
{"id":19,"first_name":"Nickolai","last_name":"Bayne","email":"nbaynei@harvard.edu","gender":"Male","ip_address":"2.220.155.203","bank":"Standard Chartered Bank AG","bep20_address":"1Byi3ToWy9udhJ8V5pRta93AEkCMscgnaY","btc":65,"city":"Washington","country":"United States"},
{"id":20,"first_name":"Kareem","last_name":"Halso","email":"khalsoj@moonfruit.com","gender":"Male","ip_address":"239.46.7.67","bank":"B & S Credit Union Limited","bep20_address":"1JX8x5gZX2YGZy3bZC5BF4tVingLhV4XSS","btc":91,"city":"Knyaginino","country":"Russia"},
{"id":21,"first_name":"Paco","last_name":"McFadin","email":"pmcfadink@berkeley.edu","gender":"Male","ip_address":"39.137.3.182","bank":"CENTENNIAL BANK","bep20_address":"1GGHxBhdi9wzHjokUfdu5adNxsjX3kZXTm","btc":70,"city":"Bieqiao","country":"China"},
{"id":22,"first_name":"Rawley","last_name":"Abercromby","email":"rabercrombyl@linkedin.com","gender":"Male","ip_address":"226.232.39.178","bank":"FIRSTBANK","bep20_address":"1MWMKPSRzx9KPxCiVpGoUtAE1a6bQK4Tqb","btc":98,"city":"Przelewice","country":"Poland"},
{"id":23,"first_name":"Glen","last_name":"Meron","email":"gmeronm@google.it","gender":"Male","ip_address":"136.72.246.241","bank":"KBC bank","bep20_address":"1H4Wch7wSveKhoc5WNk2Cu2bUAF7A7Qvrx","btc":17,"city":"Yamada","country":"Japan"},
{"id":24,"first_name":"Rosmunda","last_name":"Tollerton","email":"rtollertonn@wufoo.com","gender":"Female","ip_address":"102.87.224.170","bank":"FIRST NATIONAL BANK","bep20_address":"1BTYpJPSFfGM9tqxwNLpb9XYQQRBQnGhua","btc":70,"city":"Chimbas","country":"Argentina"},
{"id":25,"first_name":"Dael","last_name":"Loverock","email":"dloverocko@mediafire.com","gender":"Male","ip_address":"180.132.201.225","bank":"Adyen N.V.","bep20_address":"1PpkjBm2KiYE9QxYxfffKCtSjzYf8A8Hot","btc":35,"city":"Soissons","country":"France"},
{"id":26,"first_name":"Betsy","last_name":"Caig","email":"bcaigp@google.co.uk","gender":"Female","ip_address":"154.178.11.110","bank":"Western Union International Bank GmbH","bep20_address":"1NJYskDcGWvmNewuQ67XMUAzNZwfWmV7Ec","btc":42,"city":"Toulouse","country":"France"},
{"id":27,"first_name":"Maggee","last_name":"Caney","email":"mcaneyq@time.com","gender":"Female","ip_address":"221.58.177.71","bank":"CENTRAL BANK","bep20_address":"19rvfb6dmTwenjrRYcUoEunUTJ51siLqp5","btc":92,"city":"Bodzentyn","country":"Poland"},
{"id":28,"first_name":"Nara","last_name":"Gretton","email":"ngrettonr@edublogs.org","gender":"Female","ip_address":"15.10.252.142","bank":"WHITNEY BANK","bep20_address":"14jHWJoZ3dfLefgpdX8HWaFrgMrmhGjonz","btc":80,"city":"Qunsheng","country":"China"},
{"id":29,"first_name":"Ethel","last_name":"Guthrum","email":"eguthrums@netscape.com","gender":"Female","ip_address":"252.19.50.83","bank":"Sparkasse Neu-Ulm-Illertissen","bep20_address":"1BjKYpkF35QjstJjeoAzukW9yPR7VRifzQ","btc":44,"city":"Kuching","country":"Malaysia"},
{"id":30,"first_name":"Kelley","last_name":"Cory","email":"kcoryt@google.com","gender":"Female","ip_address":"221.166.241.167","bank":"Raiffeisenbank Ehekirchen-Oberhausen eG","bep20_address":"135yEDJmrT33bogKCdkjuWSvqnws94ydx1","btc":20,"city":"Gobernador Ingeniero Valentín Virasoro","country":"Argentina"},
{"id":31,"first_name":"Guthrey","last_name":"Hornig","email":"ghornigu@ameblo.jp","gender":"Male","ip_address":"239.91.227.186","bank":"Kredito unija „Neris“","bep20_address":"1JXVaEcEU75ANLJd2zscm5CCeUwrsaP7P1","btc":85,"city":"Maloco","country":"Philippines"},
{"id":32,"first_name":"Killie","last_name":"Dove","email":"kdovev@stanford.edu","gender":"Male","ip_address":"34.229.87.194","bank":"FARMERS STATE BANK","bep20_address":"143UxjTiTiNumyeuqCF75YUmDN8Ab9oFyT","btc":94,"city":"Draguignan","country":"France"},
{"id":33,"first_name":"Ruy","last_name":"Trobey","email":"rtrobeyw@thetimes.co.uk","gender":"Male","ip_address":"193.204.188.235","bank":"Aareal Bank AG","bep20_address":"13LUGf4wCNDNCvx6uBjj4mXMUXNGti2Kax","btc":15,"city":"Kut Chap","country":"Thailand"},
{"id":34,"first_name":"Rodrigo","last_name":"Tarzey","email":"rtarzeyx@php.net","gender":"Male","ip_address":"152.52.45.27","bank":"FIRST STATE BANK","bep20_address":"1EchNivRF7vn9BGdfr621uPLWHxnnBafC5","btc":37,"city":"Luftinjë","country":"Albania"},
{"id":35,"first_name":"Anna-diane","last_name":"Durrington","email":"adurringtony@51.la","gender":"Female","ip_address":"190.169.68.247","bank":"Vereinigte Volksbank eG Ganderkesee-Hude-Bookholzberg-Lemwerder","bep20_address":"1DZBnsd9DEfjsWvrtjkdJ6Md24EajHS7nT","btc":16,"city":"Longyearbyen","country":"Svalbard and Jan Mayen"},
{"id":36,"first_name":"Wenona","last_name":"Cosans","email":"wcosansz@google.co.uk","gender":"Polygender","ip_address":"195.37.105.196","bank":"PEOPLES STATE BANK","bep20_address":"1GjwFBUkf5sa9Nr5PsZxBVayuK85cKgwtr","btc":71,"city":"Haozigang","country":"China"},
{"id":37,"first_name":"Larry","last_name":"Townsley","email":"ltownsley10@gov.uk","gender":"Male","ip_address":"254.19.212.165","bank":"PEOPLES BANK","bep20_address":"1E43WBqoEzaDheqKkwpBCJaFkEtRGjs9un","btc":81,"city":"Budta","country":"Philippines"},
{"id":38,"first_name":"Valina","last_name":"Mortlock","email":"vmortlock11@telegraph.co.uk","gender":"Female","ip_address":"239.116.138.102","bank":"Caisse régionale de crédit agricole mutuel Sud Rhône-Alpes","bep20_address":"1NDMBNzWGig7w9WZkWzHeJxnxekFvWgMCn","btc":91,"city":"Själevad","country":"Sweden"},
{"id":39,"first_name":"Shelagh","last_name":"Lockart","email":"slockart12@stanford.edu","gender":"Female","ip_address":"138.214.6.20","bank":"DEUTSCHE BANK S.P.A.","bep20_address":"1MVoUdZkDvdXKc8gvRpzr1uEp5rGEvFAGb","btc":61,"city":"Oslo","country":"Norway"},
{"id":40,"first_name":"Belvia","last_name":"Abrahamian","email":"babrahamian13@etsy.com","gender":"Female","ip_address":"84.18.204.137","bank":"WHITNEY BANK","bep20_address":"1LTJYL4bgMbQk1wuhDs9MUUtKnGaHSPd46","btc":70,"city":"Vouani","country":"Comoros"},
{"id":41,"first_name":"Griffith","last_name":"Wisbey","email":"gwisbey14@constantcontact.com","gender":"Male","ip_address":"82.190.91.39","bank":"GLACIER BANK","bep20_address":"1JrMdriFg4sKSHyHdThbUNfJ7JGgwnkzGy","btc":6,"city":"Dulyapino","country":"Russia"},
{"id":42,"first_name":"Karol","last_name":"Harburtson","email":"kharburtson15@foxnews.com","gender":"Female","ip_address":"84.114.55.4","bank":"WELLS FARGO BANK","bep20_address":"1AFQis8qXxL5JvBq3aMnwvUp8KUfVnyefH","btc":57,"city":"Kiiminki","country":"Finland"},
{"id":43,"first_name":"Tanney","last_name":"Marfell","email":"tmarfell16@walmart.com","gender":"Male","ip_address":"240.211.102.218","bank":"CITIZENS STATE BANK","bep20_address":"1GyRErEypta4Tatq7Mwwt5gv5MrYekrgCp","btc":86,"city":"Mahuta","country":"Nigeria"},
{"id":44,"first_name":"Alphard","last_name":"Dossetter","email":"adossetter17@cisco.com","gender":"Male","ip_address":"109.118.154.54","bank":"GREAT SOUTHERN BANK","bep20_address":"1MgELPCBsm7x8GTPUvNr7FMNP8Cqsie6Qy","btc":52,"city":"Zhouxi","country":"China"},
{"id":45,"first_name":"Bobby","last_name":"Selborne","email":"bselborne18@time.com","gender":"Male","ip_address":"86.167.69.166","bank":"VR Bank Oberfranken Mitte eG","bep20_address":"1AS2h1UCKLT4XQ6Pr1TrbZsrJx3YJd6HQp","btc":78,"city":"Delodpeken","country":"Indonesia"},
{"id":46,"first_name":"Jermain","last_name":"Gelardi","email":"jgelardi19@miitbeian.gov.cn","gender":"Male","ip_address":"60.155.15.13","bank":"Volksbank Schlangen e.G.","bep20_address":"16yXVDd4WQntzywQ61MGsdj5ZYRTErUDTz","btc":70,"city":"Örebro","country":"Sweden"},
{"id":47,"first_name":"Ashton","last_name":"Allwell","email":"aallwell1a@hugedomains.com","gender":"Male","ip_address":"82.187.155.47","bank":"Hauck Aufhäuser Lampe Privatbank AG","bep20_address":"1NHeVh2r8JyQzNrMYsW6btaccFbADPyJNN","btc":95,"city":"Murindó","country":"Colombia"},
{"id":48,"first_name":"Abigail","last_name":"Iley","email":"ailey1b@nymag.com","gender":"Female","ip_address":"254.229.12.198","bank":"CITIZENS BANK","bep20_address":"13kYZipP4997dEyKuveuQ5RYtEN1UCtEU5","btc":44,"city":"Terbangan","country":"Indonesia"},
{"id":49,"first_name":"Jayne","last_name":"Perri","email":"jperri1c@360.cn","gender":"Female","ip_address":"212.180.73.145","bank":"JPMORGAN CHASE","bep20_address":"1ACEWXuLidUUjzdqe1qT8sV1zHKbS7kuEB","btc":73,"city":"Serra de Água","country":"Portugal"},
{"id":50,"first_name":"Elia","last_name":"Featonby","email":"efeatonby1d@diigo.com","gender":"Agender","ip_address":"253.175.63.1","bank":"Raiffeisenlandesbank Burgenland und Revisionsverband eGen","bep20_address":"1LaqJipQHkrFCAcmEdjgVVkRhsgHYvqQgM","btc":6,"city":"Houston","country":"United States"},
{"id":51,"first_name":"Iris","last_name":"Losty","email":"ilosty1e@europa.eu","gender":"Female","ip_address":"15.64.160.146","bank":"SECURITY BANK","bep20_address":"1JrTmHorBzzYnrfRduGHM1GkYCUgvtw1xM","btc":62,"city":"Idrija","country":"Slovenia"},
{"id":52,"first_name":"Dag","last_name":"Shitliffe","email":"dshitliffe1f@1und1.de","gender":"Male","ip_address":"167.47.67.221","bank":"BNP Paribas","bep20_address":"158AMTWXsuHcp9e437SzTFDzPHWQMEoGUz","btc":52,"city":"Temryuk","country":"Russia"},
{"id":53,"first_name":"Godard","last_name":"Lanston","email":"glanston1g@google.nl","gender":"Male","ip_address":"228.16.175.171","bank":"FARMERS & MERCHANTS BANK","bep20_address":"15XPdRXQDXKp2kUWonGnNVEbPjQxWGkyUG","btc":38,"city":"Palhais","country":"Portugal"},
{"id":54,"first_name":"Aldis","last_name":"Collumbine","email":"acollumbine1h@ox.ac.uk","gender":"Genderfluid","ip_address":"233.210.75.245","bank":"FIRST STATE BANK","bep20_address":"1EZkCztWS8VoLMXhyK4iM38XAak5XES9pz","btc":86,"city":"Níkaia","country":"Greece"},
{"id":55,"first_name":"Anthia","last_name":"Connor","email":"aconnor1i@unblog.fr","gender":"Female","ip_address":"203.158.7.207","bank":"BANCORPSOUTH","bep20_address":"1Ah2iz84bEScBN4QkJg7XFet3aoYXhhhzV","btc":39,"city":"Pau","country":"Philippines"},
{"id":56,"first_name":"Shae","last_name":"Corre","email":"scorre1j@spotify.com","gender":"Female","ip_address":"44.60.149.168","bank":"FIRST NATIONAL BANK","bep20_address":"1LppkddUyorZpNJHrnqUNxBggUHwBtey5p","btc":33,"city":"Lobão","country":"Portugal"},
{"id":57,"first_name":"Holly","last_name":"Sapsed","email":"hsapsed1k@livejournal.com","gender":"Female","ip_address":"105.196.20.245","bank":"FIRST NATIONAL BANK","bep20_address":"12cowsZS4FvQ52ogsajPphSCaYzyG2Rnhr","btc":85,"city":"Tranås","country":"Sweden"},
{"id":58,"first_name":"Ritchie","last_name":"Dufoure","email":"rdufoure1l@prlog.org","gender":"Male","ip_address":"109.187.26.110","bank":"Raiffeisenbank Aschau-Samerberg eG","bep20_address":"1xxhAdEPhSiLhnRYJ12gunRboGANhSY6o","btc":13,"city":"Tamberías","country":"Argentina"},
{"id":59,"first_name":"Merla","last_name":"Kinlock","email":"mkinlock1m@jimdo.com","gender":"Female","ip_address":"138.105.212.60","bank":"BANK OF AMERICA","bep20_address":"1PnLhKagjXbNM8PKMuyxtxRmRZcJHY4pbF","btc":49,"city":"Nossa Senhora do Socorro","country":"Brazil"},
{"id":60,"first_name":"Eugene","last_name":"Sansun","email":"esansun1n@indiatimes.com","gender":"Male","ip_address":"92.142.167.197","bank":"BANK OF AMERICA","bep20_address":"13BkoQ1eQC16moWwTmJ7oWrZpKvt76j2Xk","btc":99,"city":"Arāk","country":"Iran"},
{"id":61,"first_name":"Malory","last_name":"Chessell","email":"mchessell1o@go.com","gender":"Female","ip_address":"194.111.70.110","bank":"FIRST BANK & TRUST","bep20_address":"1CxDwyHxxJ2agYmFkXZhxcFZQ1dQp1cpws","btc":62,"city":"Gondar","country":"Ethiopia"},
{"id":62,"first_name":"Ogdan","last_name":"Lyven","email":"olyven1p@msn.com","gender":"Male","ip_address":"120.11.250.14","bank":"FIRST NATIONAL BANK","bep20_address":"1ADFqkxrNPpqgpoVmijCkycFB3oT9Ba96P","btc":67,"city":"Haninge","country":"Sweden"},
{"id":63,"first_name":"Cristal","last_name":"Chesworth","email":"cchesworth1q@stumbleupon.com","gender":"Female","ip_address":"53.128.53.240","bank":"Południowo-Mazowiecki Bank Spółdzielczy w Jedlińsku","bep20_address":"1MenTrXjL3GPYgBMJPQr57YiWPVhv2sZyF","btc":82,"city":"Vredenburg","country":"South Africa"},
{"id":64,"first_name":"Shaylah","last_name":"Banger","email":"sbanger1r@flickr.com","gender":"Female","ip_address":"179.169.144.193","bank":"BANK OF AMERICA","bep20_address":"1JRy7kckVmdNiuLtq9dwTekXnKjrirctk3","btc":70,"city":"Si Prachan","country":"Thailand"},
{"id":65,"first_name":"Lorens","last_name":"Shrieves","email":"lshrieves1s@blogs.com","gender":"Genderqueer","ip_address":"79.212.141.139","bank":"TD BANK","bep20_address":"13NDqZtCFdQP9nyr12cwv46NfsTn8TN47C","btc":37,"city":"Salām Khēl","country":"Afghanistan"},
{"id":66,"first_name":"Orion","last_name":"Broz","email":"obroz1t@g.co","gender":"Male","ip_address":"154.28.12.224","bank":"WELLS FARGO BANK","bep20_address":"1NMF1bmhwW6KHA3prkGeAE1bfhausM4VLL","btc":62,"city":"Wangong","country":"China"},
{"id":67,"first_name":"Humfrey","last_name":"Ulyet","email":"hulyet1u@google.ru","gender":"Male","ip_address":"175.43.89.97","bank":"INTERNATIONAL BANK OF COMMERCE","bep20_address":"1L59LESZeY5bpVyafYiWGwdFDkDbpq6ie4","btc":7,"city":"Lazaro Cardenas","country":"Mexico"},
{"id":68,"first_name":"Tedmund","last_name":"Edelmann","email":"tedelmann1v@techcrunch.com","gender":"Male","ip_address":"127.25.92.141","bank":"CAPITAL CITY BANK","bep20_address":"1JSrz79Vhx9x78JrRCzXpPHGnP8ZvDh4hF","btc":23,"city":"Moulins","country":"France"},
{"id":69,"first_name":"Auberon","last_name":"Tollerfield","email":"atollerfield1w@jugem.jp","gender":"Male","ip_address":"204.86.141.187","bank":"CENTRAL BANK","bep20_address":"13rPhcUDtS3M7iiMahuYdU9CJho6uuG4Jj","btc":42,"city":"Juripiranga","country":"Brazil"},
{"id":70,"first_name":"Mina","last_name":"Colmer","email":"mcolmer1x@wunderground.com","gender":"Female","ip_address":"155.16.178.174","bank":"RENASANT BANK","bep20_address":"1NnzLtsSgXBSSKbP8kZukPABBZn8bmJ93N","btc":35,"city":"Belén","country":"Paraguay"},
{"id":71,"first_name":"Lin","last_name":"Sempill","email":"lsempill1y@mysql.com","gender":"Male","ip_address":"187.133.73.144","bank":"PNC BANK","bep20_address":"1MgfqrMhXNxRQCcy6fZEfoGdw1SdsYbvP6","btc":22,"city":"San José","country":"Honduras"},
{"id":72,"first_name":"Gerladina","last_name":"Moquin","email":"gmoquin1z@ihg.com","gender":"Female","ip_address":"200.141.136.74","bank":"CORNERSTONE BANK","bep20_address":"1DmeRnty9amEcacnhh2TSKmt7v7QsDmVAq","btc":8,"city":"Nila Dua","country":"Indonesia"},
{"id":73,"first_name":"Valaria","last_name":"Scudder","email":"vscudder20@soup.io","gender":"Genderqueer","ip_address":"16.60.41.15","bank":"FIRST NATIONAL BANK","bep20_address":"19sqvQnnVrS7oBjwpqv9mkzp33H98douqS","btc":70,"city":"Guanshan","country":"China"},
{"id":74,"first_name":"Crin","last_name":"Goodinson","email":"cgoodinson21@slate.com","gender":"Female","ip_address":"93.78.245.186","bank":"FARMERS STATE BANK","bep20_address":"12p7QLfduipVqHgjU8Pgi22USdTwZwkaBq","btc":69,"city":"Gros Morne","country":"Haiti"},
{"id":75,"first_name":"Quintina","last_name":"Atter","email":"qatter22@cdc.gov","gender":"Female","ip_address":"94.141.22.55","bank":"NBH BANK","bep20_address":"1GhLjYvv6e3agRqVwMjdqKbwSkp9FhUrVQ","btc":3,"city":"Geta","country":"Aland Islands"},
{"id":76,"first_name":"Sabina","last_name":"Goodale","email":"sgoodale23@elpais.com","gender":"Female","ip_address":"212.106.69.26","bank":"FARMERS STATE BANK","bep20_address":"1PQp7iAceHFZWtKmdbTA2g59FKQdZnwW2n","btc":76,"city":"Shestakovo","country":"Russia"},
{"id":77,"first_name":"Annalise","last_name":"Rubert","email":"arubert24@time.com","gender":"Polygender","ip_address":"228.243.6.186","bank":"BANCO BPM SOCIETA' PER AZIONI","bep20_address":"113pfufhzHDKwhW9AYuQm8J4JxfHbKEFhY","btc":8,"city":"Kolyvan’","country":"Russia"},
{"id":78,"first_name":"Leontyne","last_name":"Wilde","email":"lwilde25@indiatimes.com","gender":"Female","ip_address":"176.1.130.32","bank":"PEOPLES BANK","bep20_address":"18z32ka9Ycnj6Lq6NcDR5f4wqY4eoMivLP","btc":59,"city":"Casal do Conde","country":"Portugal"},
{"id":79,"first_name":"Nathan","last_name":"Rains","email":"nrains26@pcworld.com","gender":"Genderqueer","ip_address":"2.143.185.23","bank":"BANK OF AMERICA","bep20_address":"1FikAGnmdWkdXPWhkfAiHmUPdt6mxTQrTf","btc":27,"city":"Sande São Lourenço","country":"Portugal"},
{"id":80,"first_name":"Fabien","last_name":"Kivits","email":"fkivits27@biblegateway.com","gender":"Male","ip_address":"215.104.127.247","bank":"WELLS FARGO BANK","bep20_address":"1Dk1iBQMqNigEZu4RKP4BDCbruFCJ14zGZ","btc":33,"city":"Hradec Králové","country":"Czech Republic"},
{"id":81,"first_name":"Patrizio","last_name":"Rysdale","email":"prysdale28@cam.ac.uk","gender":"Male","ip_address":"231.169.16.188","bank":"Akciju sabiedrība \"Citadele banka\"","bep20_address":"1HEKxf5VNq4uCGezUUqX3WZExpRWVhqbbe","btc":19,"city":"Sañgay","country":"Philippines"},
{"id":82,"first_name":"Zenia","last_name":"Perico","email":"zperico29@over-blog.com","gender":"Female","ip_address":"28.165.42.124","bank":"MAINSOURCE BANK","bep20_address":"1Grm1Vs12drMWB6DpHwoq1qT6Z4dQqGyHX","btc":57,"city":"Purong","country":"China"},
{"id":83,"first_name":"Miguel","last_name":"Decker","email":"mdecker2a@freewebs.com","gender":"Male","ip_address":"212.88.51.255","bank":"INDEPENDENT BANK","bep20_address":"1KhRZvfv1X2qTbhrbHKoiSU4iGMgoT5ALY","btc":23,"city":"Ḩadādah","country":"Yemen"},
{"id":84,"first_name":"Bruis","last_name":"Van Castele","email":"bvancastele2b@globo.com","gender":"Male","ip_address":"150.116.19.246","bank":"Crédit Agricole S.A.","bep20_address":"1rLgHWCTUFGNFPU5GNShxN3hDw9Ewx4qc","btc":49,"city":"Stockholm","country":"Sweden"},
{"id":85,"first_name":"Morley","last_name":"Gabler","email":"mgabler2c@discovery.com","gender":"Male","ip_address":"250.233.103.49","bank":"SOUTH STATE BANK","bep20_address":"13Gqh9ToAaYqrdHU1ihoZUwXRHRwSKRTeA","btc":97,"city":"Segoro","country":"Indonesia"},
{"id":86,"first_name":"Clareta","last_name":"Withringten","email":"cwithringten2d@baidu.com","gender":"Female","ip_address":"37.221.137.177","bank":"UNION STATE BANK","bep20_address":"1BKrkggVgieYWa2vstDpV4Wf53feSMReyV","btc":38,"city":"Rosaspata","country":"Peru"},
{"id":87,"first_name":"Nigel","last_name":"Stokell","email":"nstokell2e@theatlantic.com","gender":"Male","ip_address":"43.111.89.40","bank":"JYSKE BANK A/S","bep20_address":"1FkityF9nCUJ8oKdRReqw3djMRPpjZ5Fje","btc":82,"city":"Shuizhai","country":"China"},
{"id":88,"first_name":"Tabor","last_name":"Scopes","email":"tscopes2f@bloglines.com","gender":"Male","ip_address":"191.22.222.79","bank":"CITIZENS STATE BANK","bep20_address":"1ARFHAyiXvcgnuxDaxk7yJK5Pu5YtM52Pk","btc":5,"city":"Kalabo","country":"Zambia"},
{"id":89,"first_name":"Tiffany","last_name":"Muddiman","email":"tmuddiman2g@stanford.edu","gender":"Female","ip_address":"183.225.9.16","bank":"Macquarie Bank Europe Designated Activity Company","bep20_address":"1GUFSsPeMk9kdCh42aFS7SCgKLkx82LYoE","btc":36,"city":"São Luís","country":"Brazil"},
{"id":90,"first_name":"Johan","last_name":"Cornels","email":"jcornels2h@nbcnews.com","gender":"Male","ip_address":"157.5.214.209","bank":"Raiffeisenbank Burgenland Mitte eGen","bep20_address":"1FuQT1Li7D3aFpZ2NHTpGHCZ4UMKQ1pAQU","btc":14,"city":"Menglie","country":"China"},
{"id":91,"first_name":"Gus","last_name":"Lithcow","email":"glithcow2i@elpais.com","gender":"Female","ip_address":"166.123.77.135","bank":"RENASANT BANK","bep20_address":"1NJXvrMnzNssfB4bBVnBFuFTAgTgWyaGQ4","btc":75,"city":"Al ‘Azīzīyah","country":"Libya"},
{"id":92,"first_name":"Gus","last_name":"Ortsmann","email":"gortsmann2j@theguardian.com","gender":"Male","ip_address":"52.152.105.152","bank":"Caixa Rural Sant Vicent Ferrer de La Vall D'Uixó, Coop. de Credit V.","bep20_address":"19FJ2CskV3oThXgDYdX22tV8dCV3uiAUpq","btc":15,"city":"Sumurnanjung","country":"Indonesia"},
{"id":93,"first_name":"Nathalia","last_name":"Linke","email":"nlinke2k@ed.gov","gender":"Female","ip_address":"125.211.177.53","bank":"FIRST NATIONAL BANK","bep20_address":"15Hi4TL1BspsBMrjrJtUgVF8uQYwQ2djnu","btc":98,"city":"Debre Sīna","country":"Ethiopia"},
{"id":94,"first_name":"Chane","last_name":"Wordesworth","email":"cwordesworth2l@google.es","gender":"Male","ip_address":"196.20.11.54","bank":"Volksbank Baumberge eG","bep20_address":"136TJRu52gvwq9cdXkauXbZV4agTMAmhh3","btc":68,"city":"Bondy","country":"France"},
{"id":95,"first_name":"Arni","last_name":"Comford","email":"acomford2m@shareasale.com","gender":"Male","ip_address":"213.171.151.230","bank":"ING Bank N.V.","bep20_address":"1D8QN2Ky7UDNAVibm33ujP2QkjqEfC6MLy","btc":26,"city":"Březí","country":"Czech Republic"},
{"id":96,"first_name":"Ignace","last_name":"Kilfether","email":"ikilfether2n@tripadvisor.com","gender":"Male","ip_address":"25.98.59.56","bank":"BANCA NAZIONALE DEL LAVORO S.P.A. (IN FORMA CONTRATTA BNL S.P.A.)","bep20_address":"1LTDGHS94pwuPkUUXC1ruN1YfNoZc5vncV","btc":14,"city":"Xucheng","country":"China"},
{"id":97,"first_name":"Kimmi","last_name":"Aslott","email":"kaslott2o@hao123.com","gender":"Genderfluid","ip_address":"79.140.214.126","bank":"Raiffeisenbank Region Rohrbach eGen","bep20_address":"1PKsSvYhBSyt24H2tiKFUfNH3AscBBsNVg","btc":6,"city":"Sukamaju","country":"Indonesia"},
{"id":98,"first_name":"Jilleen","last_name":"Hawkings","email":"jhawkings2p@google.nl","gender":"Female","ip_address":"29.58.36.190","bank":"BNP Paribas","bep20_address":"1QBuNfrqJ2Qu1rFHAqNPLtBjCKTHrP8pcy","btc":86,"city":"Brylivka","country":"Ukraine"},
{"id":99,"first_name":"Portia","last_name":"Galloway","email":"pgalloway2q@cisco.com","gender":"Non-binary","ip_address":"88.97.52.130","bank":"BANCO BPM SOCIETA' PER AZIONI","bep20_address":"16oGjacztNAFUd3Pwr3YCqbYHRF8DCQvah","btc":80,"city":"Ranua","country":"Finland"},
{"id":100,"first_name":"Costa","last_name":"Powney","email":"cpowney2r@yellowpages.com","gender":"Male","ip_address":"42.152.248.81","bank":"FIRST FINANCIAL BANK","bep20_address":"1EtdcabCoD87SDMW2xK8tb4yEWtLgyTHri","btc":93,"city":"Krajan Pakel","country":"Indonesia"}]
for (let i = 0; i < users.length; i++){
    const user = users[i];
    msg = `el usuario ${user.first_name} tiene una cuenta de banco en ${user.bank}`;
    //console.log(msg)
}
for (const user of users){
    msg = `el usuario ${user.first_name} tiene una cuenta de banco en ${user.bank}`;
    //console.log(msg)
}
for (const user in users){
    const msg = `el usuario ${users[user].first_name} tiene una cuenta de banco en ${users[user].bank}`;
    //console.log(msg)
}
let i = 0
while(i < users.length){
    //console.log(`procesando el usuario ${i}`)
    const user = users[i];
    const msg = `bienvenido usuario ${user.first_name} ${user.last_name}`;
    //console.log(msg);
    i++;
}
do{
    let NuevoUsuario = prompt(`ingrese un nueo usuario`)
    //console.log(`nuevo usuario agregado exitosamente: ${NuevoUsuario}`);
    opcion = prompt(`desea agregar otro usuario`);
}while(opcion === `si`);

// Foreach map find filter reduce

users.forEach((user) => {
    const msg = `User ${user.email} - btc: ${user.btc} - location ${user.city} - ${user.country}`
    //console.log(msg)
})

const nombres = users.map((user) => {
    //console.log(`Procesando el usuario: ${user.first_name} ${user.last_name}`)
    return user.first_name;
})
const ip_address = "196.186.9.97";
const usuarioencontrado= users.find((user) => {
    return user.ip_address === ip_address;
})
//console.log(usuarioencontrado)
//console.log(nombres)
//console.log(users)
const usuariosMujeres = users.filter((user) => {
    return user.gender==="Female";
})
//console.log(usuariosMujeres)
const conteoBancos = users.reduce((acc, user) => {
    const bank = user.bank;
    if (acc[bank]){
        acc[bank]++;
    }else{
        acc[bank] = 1;
    }
    return acc;
}, {});
//console.log(conteoBancos);