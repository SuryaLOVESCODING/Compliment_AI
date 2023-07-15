function compliment_function(){
    var apiUrl = 'https://8768zwfurd.execute-api.us-east-1.amazonaws.com/v1/compliments';
    
    
	var complimentSection = document.querySelector('.compliment-container');
  var getComplimentButton = document.querySelector('.get-compliment');


  var complimentParagraph = document.createElement('p');
  
  // START
  var apiUrl = 'https://8768zwfurd.execute-api.us-east-1.amazonaws.com/v1/compliments';
	fetch(apiUrl)
  .then((resp) => resp.json())
	.then(function(data) {
        speaks = [
            {
              "name": "ravi",
              "lang": "en-IN"
            },
            {
              "name": "Alice",
              "lang": "it-IT"
            },
            {
              "name": "Alva",
              "lang": "sv-SE"
            },
            {
              "name": "Amelie",
              "lang": "fr-CA"
            },
            {
              "name": "Anna",
              "lang": "de-DE"
            },
            {
              "name": "Carmit",
              "lang": "he-IL"
            },
            {
              "name": "Damayanti",
              "lang": "id-ID"
            },
            {
              "name": "Daniel",
              "lang": "en-GB"
            },
            {
              "name": "Diego",
              "lang": "es-AR"
            },
            {
              "name": "Ellen",
              "lang": "nl-BE"
            },
            {
              "name": "Fiona",
              "lang": "en"
            },
            {
              "name": "Fred",
              "lang": "en-US"
            },
            {
              "name": "Ioana",
              "lang": "ro-RO"
            },
            {
              "name": "Joana",
              "lang": "pt-PT"
            },
            {
              "name": "Jorge",
              "lang": "es-ES"
            },
            {
              "name": "Juan",
              "lang": "es-MX"
            },
            {
              "name": "Kanya",
              "lang": "th-TH"
            },
            {
              "name": "Karen",
              "lang": "en-AU"
            },
            {
              "name": "Kyoko",
              "lang": "ja-JP"
            },
            {
              "name": "Laura",
              "lang": "sk-SK"
            },
            {
              "name": "Lekha",
              "lang": "hi-IN"
            },
            {
              "name": "Luca",
              "lang": "it-IT"
            },
            {
              "name": "Luciana",
              "lang": "pt-BR"
            },
            {
              "name": "Maged",
              "lang": "ar-SA"
            },
            {
              "name": "Mariska",
              "lang": "hu-HU"
            },
            {
              "name": "Mei-Jia",
              "lang": "zh-TW"
            },
            {
              "name": "Melina",
              "lang": "el-GR"
            },
            {
              "name": "Milena",
              "lang": "ru-RU"
            },
            {
              "name": "Moira",
              "lang": "en-IE"
            },
            {
              "name": "Monica",
              "lang": "es-ES"
            },
            {
              "name": "Nora",
              "lang": "nb-NO"
            },
            {
              "name": "Paulina",
              "lang": "es-MX"
            },
            {
              "name": "Samantha",
              "lang": "en-US"
            },
            {
              "name": "Sara",
              "lang": "da-DK"
            },
            {
              "name": "Satu",
              "lang": "fi-FI"
            },
            {
              "name": "Sin-ji",
              "lang": "zh-HK"
            },
            {
              "name": "Tessa",
              "lang": "en-ZA"
            },
            {
              "name": "Thomas",
              "lang": "fr-FR"
            },
            {
              "name": "Ting-Ting",
              "lang": "zh-CN"
            },
            {
              "name": "Veena",
              "lang": "en-IN"
            },
            {
              "name": "Victoria",
              "lang": "en-US"
            },
            {
              "name": "Xander",
              "lang": "nl-NL"
            },
            {
              "name": "Yelda",
              "lang": "tr-TR"
            },
            {
              "name": "Yuna",
              "lang": "ko-KR"
            },
            {
              "name": "Yuri",
              "lang": "ru-RU"
            },
            {
              "name": "Zosia",
              "lang": "pl-PL"
            },
            {
              "name": "Ravi",
              "lang": "hi-IN"
            }
          ];
        complimentParagraph.innerText = "Surya, "+data.toLowerCase(); 
    complimentSection.appendChild(complimentParagraph); 
        var msg = new SpeechSynthesisUtterance();
        msg.text = "Surya, "+data;
        msg.volume = 1; // 0 to 1
        msg.rate = 1; // 0.1 to 10
        msg.pitch = 1.5; // 0 to 2


        const voice = speaks[2]; //47
        console.log(`Voice: ${voice.name} and Lang: ${voice.lang}`);
        msg.voiceURI = voice.name;
        msg.lang = voice.lang;
        msg.pitch=1;
        msg.volume=1;

        window.speechSynthesis.speak(msg);
	})
  // STOP
  

        
 
        
	

    

}

