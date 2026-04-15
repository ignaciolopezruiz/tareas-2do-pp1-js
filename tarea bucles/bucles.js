const users = [{"id":1,"first_name":"Ariel","last_name":"Clulee","email":"aclulee0@slate.com","gender":"Male","ip_address":"42.243.171.70"},
{"id":2,"first_name":"Wilone","last_name":"Perillo","email":"wperillo1@e-recht24.de","gender":"Genderfluid","ip_address":"176.113.103.228"},
{"id":3,"first_name":"Davide","last_name":"Neylon","email":"dneylon2@cornell.edu","gender":"Male","ip_address":"130.209.25.137"},
{"id":4,"first_name":"Arne","last_name":"Sydney","email":"asydney3@nymag.com","gender":"Male","ip_address":"255.55.53.80"},
{"id":5,"first_name":"Carina","last_name":"Idiens","email":"cidiens4@wordpress.com","gender":"Female","ip_address":"116.153.92.169"},
{"id":6,"first_name":"Nobie","last_name":"Lenin","email":"nlenin5@biglobe.ne.jp","gender":"Male","ip_address":"240.110.205.128"},
{"id":7,"first_name":"Kippy","last_name":"McPeeters","email":"kmcpeeters6@shop-pro.jp","gender":"Female","ip_address":"27.113.32.17"},
{"id":8,"first_name":"Bobbette","last_name":"Olesen","email":"bolesen7@jigsy.com","gender":"Female","ip_address":"150.54.34.211"},
{"id":9,"first_name":"Jenifer","last_name":"Stilwell","email":"jstilwell8@cpanel.net","gender":"Female","ip_address":"45.108.40.63"},
{"id":10,"first_name":"Ezekiel","last_name":"Pretswell","email":"epretswell9@live.com","gender":"Male","ip_address":"126.232.159.167"},
{"id":11,"first_name":"Sauncho","last_name":"Mucklestone","email":"smucklestonea@freewebs.com","gender":"Male","ip_address":"208.183.63.61"},
{"id":12,"first_name":"Millie","last_name":"Tourmell","email":"mtourmellb@sina.com.cn","gender":"Female","ip_address":"242.24.148.20"},
{"id":13,"first_name":"Charmane","last_name":"Warrier","email":"cwarrierc@yahoo.co.jp","gender":"Bigender","ip_address":"29.124.36.49"},
{"id":14,"first_name":"Chico","last_name":"Tesmond","email":"ctesmondd@illinois.edu","gender":"Male","ip_address":"182.227.9.62"},
{"id":15,"first_name":"Carey","last_name":"Vinau","email":"cvinaue@hao123.com","gender":"Male","ip_address":"101.164.70.82"},
{"id":16,"first_name":"Shane","last_name":"Portal","email":"sportalf@sfgate.com","gender":"Female","ip_address":"144.187.202.173"},
{"id":17,"first_name":"Brina","last_name":"Tuminini","email":"btumininig@wunderground.com","gender":"Female","ip_address":"29.223.59.119"},
{"id":18,"first_name":"Dorrie","last_name":"Borne","email":"dborneh@wunderground.com","gender":"Female","ip_address":"171.107.123.81"},
{"id":19,"first_name":"Cordie","last_name":"Eades","email":"ceadesi@psu.edu","gender":"Male","ip_address":"93.101.135.123"},
{"id":20,"first_name":"Gabbi","last_name":"Mora","email":"gmoraj@stanford.edu","gender":"Female","ip_address":"165.222.146.2"},
{"id":21,"first_name":"Marta","last_name":"Bartlam","email":"mbartlamk@hatena.ne.jp","gender":"Female","ip_address":"45.103.121.128"},
{"id":22,"first_name":"Nicki","last_name":"Cissen","email":"ncissenl@behance.net","gender":"Female","ip_address":"227.160.208.132"},
{"id":23,"first_name":"Olvan","last_name":"Ebrall","email":"oebrallm@buzzfeed.com","gender":"Male","ip_address":"210.157.190.19"},
{"id":24,"first_name":"Aprilette","last_name":"Heamus","email":"aheamusn@eventbrite.com","gender":"Polygender","ip_address":"181.228.174.15"},
{"id":25,"first_name":"Quincy","last_name":"Greder","email":"qgredero@google.fr","gender":"Male","ip_address":"229.26.233.167"},
{"id":26,"first_name":"Cletis","last_name":"Ringe","email":"cringep@posterous.com","gender":"Male","ip_address":"19.38.59.71"},
{"id":27,"first_name":"Erna","last_name":"Cossom","email":"ecossomq@spiegel.de","gender":"Female","ip_address":"91.153.235.142"},
{"id":28,"first_name":"Verna","last_name":"Footitt","email":"vfootittr@techcrunch.com","gender":"Female","ip_address":"193.150.59.67"},
{"id":29,"first_name":"Valida","last_name":"Markham","email":"vmarkhams@soup.io","gender":"Female","ip_address":"64.97.13.156"},
{"id":30,"first_name":"Sheffie","last_name":"Laughlan","email":"slaughlant@addtoany.com","gender":"Male","ip_address":"150.118.232.31"},
{"id":31,"first_name":"Sophi","last_name":"Shackel","email":"sshackelu@timesonline.co.uk","gender":"Female","ip_address":"117.20.54.61"},
{"id":32,"first_name":"Josias","last_name":"Reynoldson","email":"jreynoldsonv@google.com.br","gender":"Male","ip_address":"190.90.112.53"},
{"id":33,"first_name":"Berte","last_name":"Shropshire","email":"bshropshirew@redcross.org","gender":"Female","ip_address":"215.27.109.41"},
{"id":34,"first_name":"Chrissie","last_name":"Tolley","email":"ctolleyx@homestead.com","gender":"Male","ip_address":"35.27.76.244"},
{"id":35,"first_name":"Banky","last_name":"Scamal","email":"bscamaly@digg.com","gender":"Male","ip_address":"205.62.12.165"},
{"id":36,"first_name":"Goddart","last_name":"Lyver","email":"glyverz@artisteer.com","gender":"Male","ip_address":"124.78.76.120"},
{"id":37,"first_name":"Roddie","last_name":"Ferry","email":"rferry10@mail.ru","gender":"Male","ip_address":"138.238.178.92"},
{"id":38,"first_name":"Lance","last_name":"Brattan","email":"lbrattan11@forbes.com","gender":"Non-binary","ip_address":"141.118.189.71"},
{"id":39,"first_name":"Wilt","last_name":"O'Kerin","email":"wokerin12@chicagotribune.com","gender":"Male","ip_address":"74.251.4.5"},
{"id":40,"first_name":"Evaleen","last_name":"Jarry","email":"ejarry13@telegraph.co.uk","gender":"Female","ip_address":"82.205.49.36"},
{"id":41,"first_name":"Rooney","last_name":"Twiggs","email":"rtwiggs14@barnesandnoble.com","gender":"Male","ip_address":"196.161.55.47"},
{"id":42,"first_name":"Lewiss","last_name":"Keaveney","email":"lkeaveney15@google.com.au","gender":"Male","ip_address":"122.121.135.237"},
{"id":43,"first_name":"Caroline","last_name":"Ibert","email":"cibert16@cocolog-nifty.com","gender":"Female","ip_address":"75.3.19.165"},
{"id":44,"first_name":"Lanie","last_name":"Ducker","email":"lducker17@phoca.cz","gender":"Male","ip_address":"221.238.207.83"},
{"id":45,"first_name":"Cristin","last_name":"Jeffree","email":"cjeffree18@adobe.com","gender":"Female","ip_address":"74.2.86.123"},
{"id":46,"first_name":"Ulla","last_name":"Rafe","email":"urafe19@mayoclinic.com","gender":"Female","ip_address":"203.30.107.178"},
{"id":47,"first_name":"Vinnie","last_name":"Frith","email":"vfrith1a@qq.com","gender":"Male","ip_address":"169.42.80.166"},
{"id":48,"first_name":"Francene","last_name":"Natalie","email":"fnatalie1b@java.com","gender":"Female","ip_address":"134.164.11.194"},
{"id":49,"first_name":"Alyse","last_name":"Risbridge","email":"arisbridge1c@g.co","gender":"Female","ip_address":"101.185.221.51"},
{"id":50,"first_name":"Ali","last_name":"Prangley","email":"aprangley1d@imdb.com","gender":"Male","ip_address":"146.160.197.214"}]
const idBuscado = prompt("Ingrese el ID del usuario a buscar:");
const buscadorId = users.find((user) => {
    return user.id === parseInt(idBuscado);
});
const genderCount = users.reduce((acc,user) =>{
    acc[user.gender] = (acc[user.gender] || 0) + 1;
    return acc;
}, {})
if (buscadorId) {
    console.log(`Usuario encontrado: ${buscadorId.first_name} - ${buscadorId.last_name} - ${buscadorId.email} - ${buscadorId.gender} - ${buscadorId.ip_address}`);
    } else {
    alert("Usuario no encontrado");
}
console.log("Cantidad de usuarios por género:", genderCount);