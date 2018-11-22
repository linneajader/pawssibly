import { Component } from 'react';
import kurt from "./pictures/cute-dog-shiba.jpg";
import chippan from "./pictures/Doggos/short-nosed-golden.jpg";
import kent from "./pictures/Doggos/tired-griffon.jpg";
import bolle from "./pictures/Doggos/sad-labrador.jpg";
import angus from "./pictures/Doggos/boxer.jpg";
import tessie from "./pictures/Doggos/tessie.jpg";
import rolex from "./pictures/Doggos/rolex.jpg";
import rambo from "./pictures/Doggos/rambo.jpg";
import diesel from "./pictures/Doggos/diesel.jpg";
import leo from "./pictures/Doggos/leo.jpg";
import loke from "./pictures/Doggos/loke.jpg";
import thuy from "./pictures/Doggos/Thuy-200x113.jpg";
import chimoon from "./pictures/Doggos/Chimoon.png";
import freja from "./pictures/Doggos/freja.jpg";
import kid from "./pictures/Doggos/kid.jpg";
import freddie from "./pictures/Doggos/freddie.jpg";
import babsan from "./pictures/Doggos/babsan.jpg";
import bobby from "./pictures/Doggos/bobby.jpg";
import jolie from "./pictures/Doggos/jolie.jpeg";
import indie from "./pictures/Doggos/indie.jpg";
import zorro from "./pictures/Doggos/zorro.jpg";

class AppState extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeStage: 3,
            dogNr: 0,
            dogDB: [
               
                {
                    image: tessie,
                    name: 'Tessie',
                    age: '1 år',
                    breed: 'Schäfer',
                    gender: 'Tik (ej kastrerad)',
                    height: 'ca 65 cm',
                    weight: '35 kg',
                    livekids: 'Ja, äldre barn',
                    livedog: 'Stabil äldre hund i liknande storlek',
                    livecat: 'Nej, jagar katter',
                    info: 'Tessie söker ett aktivt hem med tidigare hundvana. Hon är en storvuxen och stark tik, och det krävs att man själv är stark och lugn och orkar hålla i henne. Hennes nya hem jobbar aktivt med sin hund och tränar med mjuka metoder – hon behöver både fysisk och psykisk stimulans (som vilken bruksras som helst) för att må bra. Tessies nya familj bor i hus och låter henne följa på det mesta. Hon är en oslipad diamant med ett stabilt psyke och härlig personlighet. Med henne i din närhet kommer du aldrig få en tråkig stund, hon är verkligen en pärla! '
                },
                {
                    image: rolex,
                    name: 'Rolex',
                    age: '6 år',
                    breed: 'Chihuahua (regitrerad i SKK)',
                    gender: 'Hane (ej kastrerad)',
                    height: 'ca 20 cm',
                    weight: '2,5 kg',
                    livekids: 'Barn i skolåldern',
                    livedog: 'Nej',
                    livecat: 'Ja',
                    info: 'Vi söker Ett kärleksfullt hem som uppskattar gos och lek lika mycket som Rolex. Hans nya familj tar med honom på skojiga och händelsefulla promenader och erbjuder honom en självklar plats i både famn, soffa och säng. Där du är, där vill Rolex vara. I den här lilla killen kommer du att få en fantastisk kompis livet ut!' ,
                },
                {
                    image: rambo,
                    name: 'Rambo',
                    age: '7 år',
                    breed: 'Blandras',
                    gender: 'Hane (ej kastrerad)',
                    height: 'ca 25 cm',
                    weight: '6,5 kg (behöver gå ner i vikt)',
                    livekids: 'Barn i skolåldern',
                    livedog: 'Nej',
                    livecat: 'Ja',
                    info: 'Till lilla runda Rambo söker vi ett glatt hem med lite ensamtid. Någon som uppskattar ett charmtroll och ett mysigt sällskap i soffan. Hans nya familj tar med honom på det mesta och ser honom som en självklar del i familjen. Med en Rambo i ditt liv kommer du få guldkant på tillvaron.'
                },
                {
                    image: diesel,
                    name: 'Diesel',
                    age: '8 mån',
                    breed: 'Blandras',
                    gender: 'Hane (ej kastrerad)',
                    height: 'ca 60 cm',
                    weight: '28 kg',
                    livekids: 'Tonåringar',
                    livedog: 'Ja, stabil tik i liknande storlek',
                    livecat: 'Hundvan katt',
                    info: 'Till underbara Diesel söker vi efter ett hundvant hem som kan ge en pigg och glad kille ett fartfyllt liv med promenader, hjärngympa och massa kärlek! Han är en stor kille som fortfarande växer, därför är det viktigt att man har styrkan att hålla i honom i alla lägen. Han är killen som älskar att åka bil – han lägger sig snabbt tillrätta och väntar på nästa destination. Han skulle passa perfekt som en trofast kollega i lastbilen! Söker du efter en kamrat att ha med dig på utflykter? Diesel är redo! '
                },
                {
                    image: leo,
                    name: 'Leo',
                    age: '3 år',
                    breed: 'Blandras',
                    gender: 'Hane (kastrerad)',
                    height: '50 cm',
                    weight: '18 kg',
                    livekids: 'Ja',
                    livedog: 'Ja',
                    livecat: 'Nej',
                    info: 'Vi söker ett hundkunnigt hem med stort hjärta och önskan att hjälpa en liten kille att hitta sitt absolut sista hem! I och med Leos bakgrund är det enormt viktigt att det nu blir helt rätt för honom. Han ska kunna fungera med andra hundar men för säkerhets skull så ser vi gärna att ni som söker (om ni har hund) har tik eller en väldigt trygg och stabil hanhund. Vi ser gärna att du är aktiv och älskar att vara ute och röra på dig. Likaväl som du kanske gillar att mysa i soffan när det blåser kallt ute. Leo är en anpassningsbar hund, han är en guldhund! '
                },
                {
                    image: loke,
                    name: 'Loke',
                    age: '2 år',
                    breed: 'Mops (ej registrerad i SKK)',
                    gender: 'Hane (kastrerad)',
                    height: '27 cm',
                    weight: '8 kg',
                    livekids: 'Barn i skolåldern',
                    livedog: 'Ja',
                    livecat: 'Ja',
                    info: 'Till Loke söker vi ett hem med massor av humor och kärlek. Någon som kan ta aktiva promenader där han får utlopp för sin energi. Någon som låter honom sova nära i sängen om natten samt tar med honom på allehanda roliga äventyr. I Loke kommer du att få världens bästa kompis!'
                },
                {
                    image: thuy,
                    name: 'Thuy',
                    age: ' 4 år',
                    breed: 'Chinese crested (registrerad i SKK)',
                    gender: 'Hane (kastrerad)',
                    height: 'ca 30 cm',
                    weight: 'ca 6 kg',
                    livekids: 'Tonåringar',
                    livedog: 'Endast med kompisen Chimoon.',
                    livecat: 'Ja, hundvan katt',
                    info: 'Till Thuy söker vi ett mysigt och kärleksfullt hem med vana av nakenhundar sedan tidigare, eller åtminstone med förståelse för att nakenhundar behöver en del specialvård trots att de inte har någon päls. Vi söker helt enkelt någon som är påläst om rasen. Någon som i början har mycket tid för honom och hans träning. Han behöver börja från början och behandlas som en valp eftersom hon tidigare saknat rutiner. Med Thuy i ditt liv får du vara beredd på mys och gos och han vill gärna vara med dig hela tiden. Vi misstänker att han inte gärna blir lämnad ensam och du bör ha väldigt lite ensamtid för att han ska må bra.  Med rätt kläder följer han gärna med dig ut på mysiga skogspromenader.'
                },
                {
                    image: chimoon,
                    name: 'Chimoon',
                    age: '6 år',
                    breed: 'Chinese crested (registrerad i SKK)',
                    gender: 'Tik (ej kastrerad)',
                    height: 'ca 30 cm',
                    weight: 'ca 6 kg',
                    livekids: 'Tonåringar',
                    livedog: 'Ja',
                    livecat: 'Ja',
                    info: 'Till Chimoon söker vi ett mysigt och kärleksfullt hem med vana av nakenhundar sedan tidigare, eller åtminstone med förståelse för att nakenhundar behöver en del specialvård trots att de inte har någon päls. Vi söker helt enkelt någon som är påläst om rasen. Någon som i början har mycket tid för henne och hennes träning. Hon behöver börja från början och behandlas som en valp eftersom hon tidigare saknat rutiner. Med Chimoon i ditt liv får du vara beredd på mys och gos och hon vill gärna vara med dig hela tiden. Vi misstänker att hon inte gärna blir lämnad ensam och du bör ha väldigt lite ensamtid för att hon ska må bra.  Med rätt kläder följer hon gärna med dig ut på mysiga skogspromenader.'
                },
                {
                    image: freja,
                    name: 'Freja',
                    age: '3 år',
                    breed: 'Siberian Husky (ej registrerad i SKK)',
                    gender: 'Tik (ej kastrerad)',
                    height: 'ca 55 cm',
                    weight: '20 kg',
                    livekids: 'Barn i skolåldern',
                    livedog: 'Nej',
                    livecat: 'Nej',
                    info: 'Till Freja söker vi ett friluftshem! En familj som älskar att vara ute i skog och mark lika mycket som Freja. Hon följer gärna med på vandringsturer och cykelturer. Vi söker ett hem med minimal ensamhetstid då hon inte gillar att vara själv. Helst av allt noll timmar då hon i nuläget är väldigt ledsen när hon blir lämnad ensam. Freja har inga problem att promenera ihop med andra hundar men vill bo som ensamhund.'
                },
                {
                    image: kid,
                    name: 'Kid',
                    age: '1 år',
                    breed: 'Blandras',
                    gender: 'Hane (ej kastrerad)',
                    height: '55 cm',
                    weight: '25 kg',
                    livekids: 'Barn i skolåldern',
                    livedog: 'Ja, stabil och trygg tik',
                    livecat: 'Troligtbis inte',
                    info: 'Kid söker efter ett aktivt hem med mycket kärlek! För dig som vandrar, cyklar, löptränar eller bara älskar att gå långa promenader kommer Kid vara den som följer dig genom allt. Kanske skulle han fungera som jakthund, men hemmet bör inte ha för stora krav på jakten. Vi vill att det framtida hemmet inte har så mycket ensamhetstid och att ni löst dagarna bra så att han antingen kan vara med på jobbet eller om någon är hemma med honom. Kid bor gärna tillsammans med en tik men det är inget krav. Hunden i familjen ska i sådana fall vara en stabil hund som gärna är några år gammal. Du jobbar mjukt och positivt med din hund och ser den som en självklar del i din familj.'
                },
                {
                    image: freddie,
                    name: 'Freddie',
                    age: '7 år',
                    breed: 'Cavalier King Charles Spaniel',
                    gender: 'Hane (ej kastrerad)',
                    height: 'ca 30 cm',
                    weight: '11 kg',
                    livekids: 'Tonåringar',
                    livedog: 'Nej',
                    livecat: 'Vet ej',
                    info: 'Till pigga Freddie söker vi efter ett hem med mycket humor och kärlek! Freddie är en pigg kille som både syns och hörs och älskar att få all uppmärksamhet. Han söker efter ett hem där han får lugn och ro, därför ska hans hem vara barnfritt. Freddie gillar inte andra hundar och vill bo som ensamhund. Saknar ert  hem en fyrbent glädjespridare? Freddie väntar!'
                },
                {
                    image: babsan,
                    name: 'Babsan',
                    age: '6 år',
                    breed: 'Blandras',
                    gender: 'Tik (ej kastrerad)',
                    height: 'ca 30 cm',
                    weight: '7,8 kg (behöver gå ner i vikt)',
                    livekids: 'Barn över 10 år',
                    livedog: 'Nej',
                    livecat: 'Ja',
                    info: 'Babsan söker efter ett aktivt hem där hon får vara i centrum. Ett hem som gillar långpromenader och träna tricks. Denna donna älskar nämligen att få tänka och skulle verkligen uppskatta att få träna exempelvis nosework. Hon delar gärna sitt hem med katter men då hon inte tycker om andra hundar söker vi efter ett hundfritt hem. Låter Babsan som din drömhund? Tveka inte att höra av dig!'
                },
                {
                    image: bobby,
                    name: 'Bobby',
                    age: ' år',
                    breed: 'Amerikansk Cocker Spaniel',
                    gender: 'Hane (ej kastrerad)',
                    height: 'ca 35 cm',
                    weight: '13 kg (behöver gå ner i vikt)',
                    livekids: 'Barn i skolåldern',
                    livedog: 'Eventuellt stabil tik',
                    livecat: 'Vet ej',
                    info: 'Till gulliga Bobby söker vi efter ett hem med mycket kärlek och tid. Någon som gillar att traska runt i skogen och upptäcka nya promenadvägar, Bobby älskar nämligen att upptäcka nya ställen och tackar aldrig nej till en promenad. Inne vill Bobby mysa och kela, och vill ha en självklar plats i soffan. Ett piggt pensionärspar hade passat Bobby som handen i handsken! Känner ni att ert hjärta bultar lite extra för en åldrande hund som Bobby? Han väntar här – kanske just precis på dig!'
                },
                {
                    image: jolie,
                    name: 'Jolie',
                    age: '5 år',
                    breed: 'Fransk Bulldogg',
                    gender: 'Tik (kastrerad)',
                    height: 'ca 40 cm',
                    weight: 'ca 12 kg',
                    livekids: 'Nej',
                    livedog: 'Nej',
                    livecat: 'Nej',
                    info: 'Till vår härliga Jolie söker vi ett kärleksfullt hem som kan ge Jolie all den kärlek som hon förtjänar. Hon behöver en ägare som kan hjälpa henne att stärka sitt självförtroende på ett mjukt och roligt sätt. Någon som har möjlighet att ta med sig hunden på det mesta och helst inte behöver lämna sin hund något alls. Drömhemmet bor i ett lugnt område och gillar att gå härliga skogspromenader som hänga på stranden sommartid. Jolie fungerar inte med andra hundar alls, hon kan varken bo med hund eller träffa andra hundar ute. Barn trivs hon inte med och nya människor kan hon tycka är obehagliga. Helst av allt vill hon ha en matte och/eller husse som är hemma på dagarna, och som inte har som krav att hon måste fungera med andra hundar eller barn. Du som vill ge Jolie en andra chans jobbar bara positivt med din hund, och längtar efter en liten tjej att skämma bort. Du måste ha plats i både soffa och säng, för även om Jolie är liten så tar hon förvånansvärt mycket plats, både fysiskt på plats men också i ditt hjärta!'
                },
                {
                    image: indie,
                    name: 'Indie',
                    age: '8 mån',
                    breed: 'Blandras (Finsk Lapphund / Staffordshire bullterrier)',
                    gender: 'Hane (ej kastrerad)',
                    height: 'ca 50 cm',
                    weight: '20 kg (behöver gå ner i vikt)',
                    livekids: 'Tonåringar',
                    livedog: 'Ja, stabil hund av liknande storlek.',
                    livecat: 'Nej',
                    info: 'Till lilla yrvädret Indie söker vi ett hem med tidigare hundvana och en stor portion humor. Han vill komma till ett hem som gillar att ta med honom på roliga aktiviteter såsom skogspromenader och kanske en och annan kurs. Indie vill nämligen följa med på äventyr, och hans familj gillar friluftsliv, oavsett väder och vind. Hans nya familj ska ha minimal ensamtid till en början och kunna lägga ner mycket tid på ensamhetsträningen. Finns det annan hund i hemmet behöver det vara en stabil hund (i liknande storlek) som gillar brottningsmatcher. Det är nämligen Indies paradlek! När du träffat Indie promenerar han rakt in i ditt hjärta, och ger du honom en andra chans kommer du få en kompis på miljonen!'
                },
                {
                    image: zorro,
                    name: 'Zorro',
                    age: '4 år',
                    breed: 'Blandras (Labrador/Border Collie)',
                    gender: 'Hane (kastrerad)',
                    height: '55 cm',
                    weight: '24,1 kg',
                    livekids: 'Ja',
                    livedog: 'Ja, Stabil och större hund.',
                    livecat: 'Nej',
                    info: 'Zorro sökker ett aktivt hem gärna med annan hundkompis! Vi söker ett hem på landet då storstadslivet inte är något för Zorro. Nya hemmet ska vara hundvana och veta vad det innebär att ha en hund som behöver mycket fysisk som psykisk stimulans. Ger man Zorro utlopp för sitt stora energibehov så kommer man få en fantastisk vän. Gärna inhägnad tomt. Till en familj som inte lämnar honom ensam längre stunder utan har ett jobb där han kan följa med eller är hemma på dagarna.'
                },
            ],
            likedDogs: []
        };
    }

    setAppState = (updater) => {
        this.setState(updater);
    };

    render() {
        return this.props.children({
            appState: this.state,
            setAppState: this.setAppState,
            nextProp: this.props.nextProps
        });
    }
}

export default AppState;