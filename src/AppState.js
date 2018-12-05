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
import kalix from "./pictures/Doggos/kalix.jpg";
import mando from "./pictures/Doggos/mando.jpg";
import image6 from "./pictures/Doggos/amerikansk_eskimo.jpg";
import image7 from "./pictures/Doggos/canine_pup.jpg";
import image8 from "./pictures/Doggos/chow_chow.jpg";
import image9 from "./pictures/Doggos/glen_of_imaal.jpg";
import image10 from "./pictures/Doggos/irish_setter.jpg";
import image11 from "./pictures/Doggos/jamte.jpg";
import image12 from "./pictures/Doggos/Maltese.jpg";
import image13 from "./pictures/Doggos/old_english_sheepdog.jpg";
import image14 from "./pictures/Doggos/prazsky_krysarik.jpg";
import image15 from "./pictures/Doggos/saluki.jpg";
import image16 from "./pictures/Doggos/shiloh_shepherd.jpg";
import image17 from "./pictures/Doggos/tax.jpg";
import image18 from "./pictures/Doggos/turkisk_akbash.jpg";
import image19 from "./pictures/Doggos/alaskan_malador.jpg";
import image20 from "./pictures/Doggos/corgi.jpg";
import image21 from "./pictures/Doggos/english_bulldog.jpg";
import image22 from "./pictures/Doggos/Finnish_lapphund.jpg";
import image23 from "./pictures/Doggos/islansk_farhund_finsk_spets.jpg";
import image24 from "./pictures/Doggos/kawalier_king_charles.jpg";
import image25 from "./pictures/Doggos/papillion.jpeg";
import image26 from "./pictures/Doggos/Pekingese.jpg";
import image27 from "./pictures/Doggos/dvarg_pudel.jpg";

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
                    breed: 'Boxer',
                    gender: 'Hona',
                    info: 'Boxers were originally bred to be medium-size guard dogs. Today, although they are a part of the AKC’s Working Group, they mostly find homes as loving family companions. They’ve got the muscular build of the guard dogs they were bred to be, and they can look imposing until you realize that within those sturdy bodies, they’re bursting with playful joie de vivre.'
                },
                {
                    image: image6,
                    name: 'Betty',
                    age: '1 år',
                    breed: 'Amerikansk Eskimo',
                    gender: 'Hona',
                    info: 'Called “the dog beautiful” by his admirers, the American Eskimo Dog, or “Eskie,” is a striking fellow with his white coat, sweet expression, and black eyes. He’s a Nordic dog breed, a member of the Spitz family. Eskies are lively, active companion dogs who love to entertain and join in on all family activities. They are outgoing and friendly with family and friends, but reserved with strangers. Although the Eskie is a small dog — 10 to 30 pounds — he has a big-dog attitude.'
                },
                {
                    image: image7,
                    name: 'Caroline',
                    age: '4 mån',
                    breed: 'Unknown',
                    gender: 'Hona',
                    info: 'There is no more info to read about this dog.'
                },
                {
                    image: image8,
                    name: 'Texas',
                    age: '3 år',
                    breed: 'Chow Chow',
                    gender: 'Hane',
                    info: 'This distinctive-looking dog breed has a proud, independent spirit that some describe as catlike. He can be aloof — if you’re looking for a cuddle buddy, this probably isn’t the best breed for you — and downright suspicious of strangers. But for the right person, he’s a fiercely loyal companion.'
                },
                {
                    image: image9,
                    name: 'Pixel',
                    age: '7 år',
                    breed: 'Glen of Imaal',
                    gender: 'Hane',
                    info: 'The Glen of Imaal Terrier is a strong, independent dog breed named for the remote valley in Ireland where he originated. Bred to hunt fox and badger, and to keep homes free of rodents, the Glen is a skilled and cunning hunter. He’s also an affectionate family dog, gentle and loving with his people.'
                },
                {
                    image: image10,
                    name: 'Dublin',
                    age: '4 år',
                    breed: 'Irlänsk setter',
                    gender: 'Hane',
                    info: 'Irish Setters originated as gundogs in their native Ireland, and the dog breed‘s popularity soon spread, thanks to the beauty of their rich mahogany coat and their enthusiasm as bird dogs. They’re friendly, mischievous, and inquisitive, with a high energy level. This is a bold and boisterous family friend with the potential to do well in many canine sports and activities.'
                },
                {
                    image: image11,
                    name: 'Bosse',
                    age: '6 år',
                    breed: 'Jämthund',
                    gender: 'Hane',
                    info: 'Also known as the Jämthund and Moosehound, the Swedish Elkhound has a wolf-like appearance with a long tapered snout and a dark gray-and-white body. In fact, this breed of dog was developed to hunt moose so they may share more than just their looks with wild wolves. The Swedish Elkhound is an active and intelligent breed that requires a lot of exercise and attention but, if you are able to dedicate the time, they are a unique and wonderful breed.'
                },
                {
                    image: image12,
                    name: 'Tusse',
                    age: '5 mån',
                    breed: 'Malteser',
                    gender: 'Hane',
                    info: 'A dog breed who’s gentle and fearless, the Maltese greets everyone as a friend. His glamorous white coat gives him a look of haughty nobility, but looks can be deceiving. This is a sprightly, vigorous dog who excels not only as a companion but also as a therapy dog and competitor in such dog sports as agility, obedience, rally, and tracking. But most of all, he loves to be with his people.'
                },
                {
                    image: image13,
                    name: 'Cody',
                    age: '9 år',
                    breed: 'Old English Sheepdog',
                    gender: 'Hane',
                    info: 'The Old English Sheepdog is a large, athletic dog breed with an unmistakable shaggy coat. The Old English Sheepdog was historically a drover, helping farmers drive cattle and sheep to the market. Today, the good-natured Old English Sheepdog enjoys the comfort of home life and still competes in conformation, obedience, agility, and herding trials. He’s an adaptable, intelligent dog with an easygoing disposition.'
                },
                {
                    image: image14,
                    name: 'Roxy',
                    age: '2 år',
                    breed: 'Prazsky Krysarik',
                    gender: 'Hona',
                    info: 'The Prazsky Krysarik is said to be the smallest breed in the world. The chest is broad, but not at all deep and descends only partly to the elbows. It has a lean, delicate body, which is covered with thin skin. The neck is moderately long and narrow, supporting its delicate head. The muzzle is narrow and fox-like, with straight but crowded teeth. Its coat is short with very thin, glossy fur. Coat color is mostly black and tan. The Prazky Krysarik is 2 cm shorter in maximum height than the Miniature Pinscher is in minimum height. Best known for its active and lively nature, the Prague Ratter is a spunky breed that is full of original character. These tiny dogs thrive on strong and dependable relationships with humans, love to receive affection and play the role of lap dog during down time. This breed is highly intelligent and generally responds well to basic training and commands. As a pet, the Prague Ratter is obedient, loyal, loving, and very affectionate. The Prague Ratter adapts well to full-time indoor and apartment living, yet still enjoys spending time outdoors, playing games such as fetch, and taking long and leisurely walks. They are also known to be a very quiet dog unlike many other small dogs who tend to be very yappy. Like any small dog one should be wary of allowing them to develop Small Dog Syndrome as they can become aggressive if they are not well-socialized from an early age.'
                },
                {
                    image: image15,
                    name: 'Daisy',
                    age: '7 år',
                    breed: 'Saluki',
                    gender: 'Hona',
                    info: 'One of the oldest of dog breeds, Salukis were once considered a gift from Allah. They’re fast as the wind, skinny as a supermodel, and quietly devoted to their people. A Saluki is easy to groom, challenging to train, and not to be trusted off leash.'
                },
                {
                    image: image16,
                    name: 'Bella',
                    age: '4 år',
                    breed: 'Shiloh Shepherd',
                    gender: 'Hona',
                    info: 'The Shiloh Shepherds overall appearance is rather heavy. The back is broad, strong and solid. The head is broad and noble, slightly domed and in proportion to the body. The width and length of the skull are approximately equal with a gently defined stop, strong developed cheekbones, and a gradually tapering muzzle. The muzzle should be predominantly black, the length being equal to that of the forehead, with the lips firmly fitted and solid black. The muzzle should not be long, narrow or snipey in appearance. Both upper and lower thighs are well muscled. The tail is quite long and thickly covered with dense hair, hanging down like a plume. The coat comes in two varieties: smooth and plush. The plush coat is medium-length with a dense undercoat and has a distinct mane from the neck to the chest. Hair should not be more than 12 cm in length. The smooth coat is thick and medium-length with the outer hair being harsh to the touch.'
                },
                {
                    image: image17,
                    name: 'Hollie',
                    age: '1 år',
                    breed: 'Långhårig tax',
                    gender: 'Hona',
                    info: 'The longhaired Dachshound is of old German origin and was formed at the middle of the 16th century through the crossbreeding between the short-haired Dachshund and long-haired German pointers. It is considered the most beautiful variety of Dachshund in Germany. Its fur is similar to that the of the Irish Setter.'
                },
                {
                    image: image18,
                    name: 'Snowball',
                    age: '3 år',
                    breed: 'Akbash',
                    gender: 'Hane',
                    info: 'The tall, lean, white-coated Akbash is a livestock guardian breed from Turkey. He is also a flock guardian in this country, but he can be a family companion or show dog as well. The Akbash has many good qualities, but he is not the easiest dog to live with. If you want the calm, confident dog that is the Akbash at his best, be prepared to do a lot of homework to locate him and even more work to train and socialize him once you bring him home.'
                },
                {
                    image: image19,
                    name: 'Greta',
                    age: '9 år',
                    breed: 'Alaskan Malador',
                    gender: 'Hona',
                    info: 'Alaskan Maladors are active and affectionate family pets that get along with almost everyone. They require quite a bit of exercise, attention, and maintenance. In return, however, pet owners get a loyal dog that will accompany them on all sorts of outdoor adventures. Alaskan Maladors are also easy to train and great at learning commands and tricks due to their intelligence. This breed is likely to have originated in the early 1800s when its parent breeds, the Alaskan Malamute and Labrador Retriever, were present and popular in the United States. Though great family companions, this breed is uncommon in most parts of the world and not recognized by the American Kennel Club roster of purebred dogs.'
                },
                {
                    image: image20,
                    name: 'Cardi',
                    age: '2 år',
                    breed: 'Corgi',
                    gender: 'Hona',
                    info: 'Lorem ipsum öjashdföjasd öasdjfölasd asd ölksadflkasdfj sa klö'
                },
                {
                    image: image21,
                    name: 'YaBark',
                    age: '3 år',
                    breed: 'Engelsk Bulldog',
                    gender: 'Hane',
                    info: 'Lorem ipsum öjashdföjasd öasdjfölasd asd ölksadflkasdfj sa klö'
                },
                {
                    image: image22,
                    name: 'Iza',
                    age: '4 år',
                    breed: 'Finsk Lapphund',
                    gender: 'Hona',
                    info: 'Lorem ipsum öjashdföjasd öasdjfölasd asd ölksadflkasdfj sa klö'
                },
                {
                    image: image23,
                    name: 'Frank Zappa',
                    age: '2 mån',
                    breed: 'Islänsk fårhund / Finsk spets',
                    gender: 'Hane',
                    info: 'Lorem ipsum öjashdföjasd öasdjfölasd asd ölksadflkasdfj sa klö'
                },
                {
                    image: image24,
                    name: 'Gunnar',
                    age: '5 år',
                    breed: 'Kawalier King Chares',
                    gender: 'Hane',
                    info: 'Lorem ipsum öjashdföjasd öasdjfölasd asd ölksadflkasdfj sa klö'
                },
                {
                    image: image25,
                    name: 'Scruffy',
                    age: '2 år',
                    breed: 'Papillion',
                    gender: 'Hane',
                    info: 'Lorem ipsum öjashdföjasd öasdjfölasd asd ölksadflkasdfj sa klö'
                },
                {
                    image: image26,
                    name: 'Potter',
                    age: '4 år',
                    breed: 'Pekingese',
                    gender: 'Hane',
                    info: 'Lorem ipsum öjashdföjasd öasdjfölasd asd ölksadflkasdfj sa klö'
                },
                {
                    image: image27,
                    name: 'Winnie the Poodle',
                    age: '11 mån',
                    breed: 'Dvärgpudel',
                    gender: 'Hane',
                    info: 'Lorem ipsum öjashdföjasd öasdjfölasd asd ölksadflkasdfj sa klö'
                },
                {
                    image: kurt,
                    name: 'Kurt',
                    age: '5 år',
                    breed: 'Shiba Inu',
                    gender: 'Hane',
                    info: 'Brought to America from Japan as recently as 60 years ago, Shibas are growing in popularity in the West and are already the most popular breed in their homeland. Their white markings combined with their coloring (red, red sesame, or black and tan) and their alert expression and smooth stride makes them almost foxlike. They’re sturdy, muscular dogs with a bold, confident personality to match.'
                },
                {
                    image: chippan,
                    name: 'Chippan',
                    age: '3 mån',
                    breed: 'Golden Retriver',
                    gender: 'Hona',
                    info: 'The Golden Retriever is one of the most popular dog breeds in the U.S. The breed’s friendly, tolerant attitude makes him a fabulous family pet, and his intelligence makes him a highly capable working dog. Golden Retrievers excel at retrieving game for hunters, tracking, sniffing out drugs, and as therapy and assistance dogs. They’re also natural athletes, and do well in dog sports such as agility and competitive obedience.'
                },
                {
                    image: kent,
                    name: 'Kent',
                    age: '2 år',
                    breed: 'Griffon',
                    gender: 'Hane',
                    info: 'För tillfället finns ingen mer info om denna hund.'
                },
                {
                    image: bolle,
                    name: 'Bolle',
                    age: '8 år',
                    breed: 'Labrador',
                    gender: 'Hane',
                    info: 'The Labrador Retriever was bred to be both a friendly companion and a useful working dog breed. Historically, he earned his keep as a fisherman’s helper: hauling nets, fetching ropes, and retrieving fish from the chilly North Atlantic. Today’s Labrador Retriever is as good-natured and hard working as his ancestors, and he’s America’s most popular breed. These days the Lab works as a retriever for hunters, assistance dog to the handicapped, show competitor, and search and rescue dog, among other canine jobs.'
                },
                {
                    image: angus,
                    name: 'Angus',
                    age: '3 år',
                    breed: 'Boxer',
                    gender: 'Hona',
                    info: 'Boxers were originally bred to be medium-size guard dogs. Today, although they are a part of the AKC’s Working Group, they mostly find homes as loving family companions. They’ve got the muscular build of the guard dogs they were bred to be, and they can look imposing until you realize that within those sturdy bodies, they’re bursting with playful joie de vivre.'
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
                    breed: 'Finsk Lapphund / Staffordshire bullterrier',
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
                    breed: 'Labrador/Border Collie',
                    gender: 'Hane (kastrerad)',
                    height: '55 cm',
                    weight: '24,1 kg',
                    livekids: 'Ja',
                    livedog: 'Ja, Stabil och större hund.',
                    livecat: 'Nej',
                    info: 'Zorro sökker ett aktivt hem gärna med annan hundkompis! Vi söker ett hem på landet då storstadslivet inte är något för Zorro. Nya hemmet ska vara hundvana och veta vad det innebär att ha en hund som behöver mycket fysisk som psykisk stimulans. Ger man Zorro utlopp för sitt stora energibehov så kommer man få en fantastisk vän. Gärna inhägnad tomt. Till en familj som inte lämnar honom ensam längre stunder utan har ett jobb där han kan följa med eller är hemma på dagarna.'
                },
                {
                    image: kalix,
                    name: 'Kalix',
                    age: '2 år',
                    breed: 'Blandras',
                    gender: 'Hane (ej kastrerad)',
                    height: 'ca 60 cm',
                    weight: '25 kg',
                    livekids: 'Tonåringar',
                    livedog: 'Ja, stabil tik.',
                    livecat: 'Troligtvis inte',
                    info: 'Till underbara Kalix söker vi efter ett hem som älskar utevistelse – denna kille älskar nämligen att röra på sig! Han vill komma till någon som bor ute på landet då storstadslivet inte är någonting för honom. Hans drömhem skulle vara någon vill aktivera sin hund genom drag men som har en mysig plats i soffan vid kvällens slut. Då Kalix är en försiktig själ söker vi efter ett hem utan småbarn, där han kan få vara i centrum. Känner du att just du är rätt hem för Kalix? Tveka inte att höra av dig!'
                },
                {
                    image: mando,
                    name: 'Mando',
                    age: '2 år',
                    breed: 'Karelsk björnhund/Laika',
                    gender: 'Hane (ej kastrerad)',
                    height: 'ca 55 cm',
                    weight: '23 kg',
                    livekids: 'Nej',
                    livedog: 'Ja, trygg och stabil tik.',
                    livecat: 'Nej',
                    info: 'Vi söker ett hem med fokus på jakt och/eller eftersök. Mando vill komma till ett hem som föredrar skogsturer framför stadspromenader. Han älskar viltspår.  De djurslag han är mest intresserad av är älg och vildsvin. De flesta av Mandos syskon bor i jakthem och ”arbetar” som jakthundar under säsong och i vill gärna att den här killen hamnar i ett liknande hem. Vi ser att hans framtida familj har tidigare erfarenhet av jakthundar och gärna har haft liknande raser. Är du en jägare som ser hunden som en självklar del i din familj och låter hunden få vara din bästa vän även mellan jaktpassen, hör av dig till oss!'
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