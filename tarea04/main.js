const personas = [{"id":1,"first_name":"Isobel","last_name":"Kewish","email":"ikewish0@lycos.com","gender":"Female","bank":"Volksbank Lahr eG","city":"Rožaje","country":"Montenegro","salary":10000,"expences":9500},
{"id":2,"first_name":"Maible","last_name":"Ruffli","email":"mruffli1@theglobeandmail.com","gender":"Female","bank":"FIRST NATIONAL BANK","city":"Pinhão","country":"Brazil","salary":10000,"expences":9400},
{"id":3,"first_name":"Virge","last_name":"Gagie","email":"vgagie2@dedecms.com","gender":"Male","bank":"Svenska Handelsbanken AB","city":"Sirāhā","country":"Nepal","salary":11265,"expences":1950},
{"id":4,"first_name":"Silvia","last_name":"Rosevear","email":"srosevear3@utexas.edu","gender":"Female","bank":"Clonmel Credit Union Limited","city":"Zhangjiang","country":"China","salary":6148,"expences":4795},
{"id":5,"first_name":"Meridith","last_name":"Callander","email":"mcallander4@wunderground.com","gender":"Female","bank":"COMMUNITY BANK","city":"Leshukonskoye","country":"Russia","salary":13283,"expences":1878},
{"id":6,"first_name":"Verena","last_name":"Garratt","email":"vgarratt5@1und1.de","gender":"Female","bank":"RENASANT BANK","city":"Fresno","country":"United States","salary":10847,"expences":4745},
{"id":7,"first_name":"Luise","last_name":"Crathern","email":"lcrathern6@newsvine.com","gender":"Female","bank":"XENITH BANK","city":"Belize City","country":"Belize","salary":14077,"expences":3365},
{"id":8,"first_name":"Joey","last_name":"Robbeke","email":"jrobbeke7@cyberchimps.com","gender":"Male","bank":"WHITNEY BANK","city":"Conceição da Barra","country":"Brazil","salary":12828,"expences":4080},
{"id":9,"first_name":"Filmore","last_name":"Dodds","email":"fdodds8@infoseek.co.jp","gender":"Male","bank":"Volksbank eG","city":"Heshengbao","country":"China","salary":10495,"expences":1080},
{"id":10,"first_name":"Madeline","last_name":"Swinney","email":"mswinney9@tuttocitta.it","gender":"Female","bank":"FIRST NATIONAL BANK","city":"Mŭglizh","country":"Bulgaria","salary":8847,"expences":2737},
{"id":11,"first_name":"Margarete","last_name":"Beaushaw","email":"mbeaushawa@google.com.au","gender":"Female","bank":"UMB","city":"Lom Sak","country":"Thailand","salary":7179,"expences":3473},
{"id":12,"first_name":"Corney","last_name":"Brockhurst","email":"cbrockhurstb@chron.com","gender":"Male","bank":"CAPITAL ONE","city":"Hantai","country":"China","salary":10927,"expences":2743},
{"id":13,"first_name":"Nicola","last_name":"Capell","email":"ncapellc@businessweek.com","gender":"Polygender","bank":"BANCO BPM SOCIETA' PER AZIONI","city":"Mugan","country":"China","salary":13312,"expences":1739},
{"id":14,"first_name":"Lark","last_name":"Fowell","email":"lfowelld@netlog.com","gender":"Female","bank":"Caisse régionale de crédit agricole mutuel d'Ille-et-Vilaine","city":"Richards Bay","country":"South Africa","salary":13259,"expences":1378},
{"id":15,"first_name":"Agace","last_name":"Crome","email":"acromee@shareasale.com","gender":"Female","bank":"Volksbank am Württemberg eG","city":"Jansenville","country":"South Africa","salary":11225,"expences":4053},
{"id":16,"first_name":"Daphne","last_name":"Clausius","email":"dclausiusf@icio.us","gender":"Female","bank":"Waldviertler Sparkasse Bank AG","city":"Rízoma","country":"Greece","salary":13152,"expences":1200},
{"id":17,"first_name":"Shelli","last_name":"Jezzard","email":"sjezzardg@jiathis.com","gender":"Female","bank":"Sparkasse Landsberg-Dießen","city":"Soca","country":"Uruguay","salary":8324,"expences":1668},
{"id":18,"first_name":"Vic","last_name":"Ploughwright","email":"vploughwrighth@google.co.jp","gender":"Male","bank":"Sparkasse am Niederrhein - Sparkasse des Kreises Wesel und der Städte Moers, Neukirchen- Vluyn und Rheinberg -","city":"Tuhe","country":"China","salary":6094,"expences":2806},
{"id":19,"first_name":"Phylis","last_name":"Portigall","email":"pportigalli@youku.com","gender":"Female","bank":"Arquia Bank, S.A.","city":"Jinghong","country":"China","salary":9973,"expences":3225},
{"id":20,"first_name":"Erek","last_name":"Geaney","email":"egeaneyj@icq.com","gender":"Male","bank":"Kreissparkasse Hildburghausen","city":"Perreng","country":"Indonesia","salary":11153,"expences":2162},
{"id":21,"first_name":"Costanza","last_name":"Robertsen","email":"crobertsenk@dailymotion.com","gender":"Non-binary","bank":"Volksbank eG","city":"Uyo","country":"Nigeria","salary":13845,"expences":4304},
{"id":22,"first_name":"Marsha","last_name":"Andrzejowski","email":"mandrzejowskil@soundcloud.com","gender":"Female","bank":"CAPITAL ONE","city":"Perfilovo","country":"Russia","salary":5659,"expences":1613},
{"id":23,"first_name":"Vince","last_name":"Riha","email":"vriham@shinystat.com","gender":"Male","bank":"MAINSOURCE BANK","city":"San Isidro de Lules","country":"Argentina","salary":5437,"expences":3520},
{"id":24,"first_name":"Micky","last_name":"Cleere","email":"mcleeren@weibo.com","gender":"Polygender","bank":"Hranilnica LON d.d., Kranj","city":"Ucluelet","country":"Canada","salary":10810,"expences":3128},
{"id":25,"first_name":"Brana","last_name":"Maddison","email":"bmaddisono@dion.ne.jp","gender":"Female","bank":"BYBLOS BANK EUROPE","city":"Tuba","country":"China","salary":11215,"expences":1945},
{"id":26,"first_name":"Modesta","last_name":"Poad","email":"mpoadp@ft.com","gender":"Female","bank":"VR-Bankverein Bad Hersfeld-Rotenburg eG","city":"Santa Barbara","country":"Philippines","salary":8858,"expences":2381},
{"id":27,"first_name":"Vale","last_name":"Monte","email":"vmonteq@sakura.ne.jp","gender":"Male","bank":"INDEPENDENT BANK","city":"T’et’ri Tsqaro","country":"Georgia","salary":6508,"expences":4879},
{"id":28,"first_name":"Jareb","last_name":"MacDonogh","email":"jmacdonoghr@webeden.co.uk","gender":"Male","bank":"FIRST BANK","city":"Bungereng","country":"Indonesia","salary":10154,"expences":3250},
{"id":29,"first_name":"Mei","last_name":"Maddra","email":"mmaddras@boston.com","gender":"Female","bank":"VALLEY NATIONAL BANK","city":"Cambita Garabitos","country":"Dominican Republic","salary":5107,"expences":2599},
{"id":30,"first_name":"Ilse","last_name":"Hawkins","email":"ihawkinst@baidu.com","gender":"Female","bank":"CITIZENS STATE BANK","city":"Tugdan","country":"Philippines","salary":6672,"expences":1706},
{"id":31,"first_name":"Philippa","last_name":"Fancy","email":"pfancyu@dailymail.co.uk","gender":"Female","bank":"Ayvens Bank N.V.","city":"San Juan","country":"Costa Rica","salary":5296,"expences":1920},
{"id":32,"first_name":"Delores","last_name":"Bianco","email":"dbiancov@liveinternet.ru","gender":"Female","bank":"HERITAGE BANK","city":"Vidče","country":"Czech Republic","salary":5866,"expences":4648},
{"id":33,"first_name":"Nanine","last_name":"Hick","email":"nhickw@so-net.ne.jp","gender":"Female","bank":"Mendener Bank eG","city":"Krásná Lípa","country":"Czech Republic","salary":12807,"expences":3170},
{"id":34,"first_name":"Lorelle","last_name":"Pilipets","email":"lpilipetsx@umich.edu","gender":"Female","bank":"Raiffeisenbank Aichhalden-Hardt-Sulgen eG","city":"Byala Slatina","country":"Bulgaria","salary":7356,"expences":1392},
{"id":35,"first_name":"Lucila","last_name":"Bimson","email":"lbimsony@w3.org","gender":"Bigender","bank":"BNP Paribas","city":"Huerta Grande","country":"Argentina","salary":8985,"expences":2413},
{"id":36,"first_name":"Hedvig","last_name":"Lennox","email":"hlennoxz@slashdot.org","gender":"Female","bank":"BANCO BPM SOCIETA' PER AZIONI","city":"Tambawel","country":"Nigeria","salary":13352,"expences":1091},
{"id":37,"first_name":"Kitti","last_name":"Whyatt","email":"kwhyatt10@reverbnation.com","gender":"Female","bank":"FIRST NATIONAL BANK","city":"Kourou","country":"French Guiana","salary":10000,"expences":9500},
{"id":38,"first_name":"Catie","last_name":"Filewood","email":"cfilewood11@a8.net","gender":"Female","bank":"BANCO BPM SOCIETA' PER AZIONI","city":"Paradyż","country":"Poland","salary":6844,"expences":2024},
{"id":39,"first_name":"Aleen","last_name":"Soot","email":"asoot12@cbc.ca","gender":"Female","bank":"UNITED BANK","city":"Mjamaoué","country":"Comoros","salary":14659,"expences":4032},
{"id":40,"first_name":"Kareem","last_name":"Sinkins","email":"ksinkins13@edublogs.org","gender":"Male","bank":"Raiffeisenbank München-Süd eG","city":"Foz do Arelho","country":"Portugal","salary":6347,"expences":3703},
{"id":41,"first_name":"Hubie","last_name":"Morit","email":"hmorit14@skype.com","gender":"Male","bank":"VR-Bank Ostbayern-Mitte eG","city":"Jiesheng","country":"China","salary":6936,"expences":2468},
{"id":42,"first_name":"Huey","last_name":"Bartle","email":"hbartle15@sohu.com","gender":"Male","bank":"BANCO BPM SOCIETA' PER AZIONI","city":"Chachagüí","country":"Colombia","salary":9409,"expences":3407},
{"id":43,"first_name":"Axe","last_name":"Embery","email":"aembery16@bizjournals.com","gender":"Male","bank":"BRANCH BANKING & TRUST COMPANY","city":"Lincoln","country":"Argentina","salary":14042,"expences":1163},
{"id":44,"first_name":"Cherie","last_name":"Mussen","email":"cmussen17@so-net.ne.jp","gender":"Female","bank":"BMO HARRIS BANK","city":"Đắk Mil","country":"Vietnam","salary":13872,"expences":2242},
{"id":45,"first_name":"Junina","last_name":"Harbertson","email":"jharbertson18@edublogs.org","gender":"Female","bank":"BANCO BPM SOCIETA' PER AZIONI","city":"Ayo","country":"Peru","salary":13578,"expences":3753},
{"id":46,"first_name":"Lanita","last_name":"Clearie","email":"lclearie19@reuters.com","gender":"Female","bank":"Our Lady Crowned Credit Union Limited","city":"Sanyantang","country":"China","salary":9288,"expences":2515},
{"id":47,"first_name":"Edna","last_name":"Hakonsson","email":"ehakonsson1a@salon.com","gender":"Female","bank":"COMMERCIAL BANK","city":"Nalinggou","country":"China","salary":7984,"expences":4786},
{"id":48,"first_name":"Zacharie","last_name":"Tomaello","email":"ztomaello1b@tuttocitta.it","gender":"Male","bank":"Zagrebačka banka d.d.","city":"Magallanes","country":"Philippines","salary":9073,"expences":4331},
{"id":49,"first_name":"Udell","last_name":"Petlyura","email":"upetlyura1c@skype.com","gender":"Male","bank":"BMO HARRIS BANK","city":"Feijó","country":"Brazil","salary":14517,"expences":1269},
{"id":50,"first_name":"Donnamarie","last_name":"Verman","email":"dverman1d@scientificamerican.com","gender":"Female","bank":"BANNER BANK","city":"Linglu","country":"China","salary":5936,"expences":2502}];
const calcularAhorro = (persona) => persona.salary - persona.expences;
function balanceMensual(persona_id) {
    const persona = personas.find(p => p.id === persona_id);

    if (!persona) return "Usuario no encontrado";

    return {
        nombre: `${persona.first_name} ${persona.last_name}`,
        banco: persona.bank,
        ahorro: calcularAhorro(persona)
    };
}

function clasificacionFinanciera(){
    personas.forEach(persona => {
        let balance = calcularAhorro(persona);
        const tipo = 
            balance <= 500
            ? 'ahorro bajo'
            : balance <=1500
            ? 'ahorro medio'
            : 'ahorro alto';
    console.log(`${persona.first_name} ${persona.last_name}: ${tipo}`);
    })
}
function agruparPor(campo) {
    const resultado = personas.reduce((acc, persona) => {
        const key = persona[campo];
        const ahorro = calcularAhorro(persona);

        if (!acc[key]) {
            acc[key] = {
                [campo]: key,
                cantidadUsuarios: 0,
                ahorroTotal: 0
            };
        }

        acc[key].cantidadUsuarios++;
        acc[key].ahorroTotal += ahorro;

        return acc;
    }, {});

    return Object.values(resultado);
}

let persona_id = parseInt(prompt("Ingrese el id del usuario:"));
alert(JSON.stringify(balanceMensual(persona_id), null, 2));
clasificacionFinanciera();
console.log("Ahorro por banco:");
console.log(agruparPor("bank"));
console.log("Ahorro por país:");
console.log(agruparPor("country"));