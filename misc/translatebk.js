// Get the content of a meta tag with http-equiv="Content-Language" and name="eng"
const contentLanguageMetaTag = document.querySelector('meta[http-equiv="Content-Language"][name="fr"]');
const nameAttributeValue = contentLanguageMetaTag ? contentLanguageMetaTag.getAttribute('name') : null;

console.log('Value of name attribute:', nameAttributeValue);

let userLanguage = "pl";
console.log(userLanguage);
	
function translate(text, language) {
        const translations = {
	en: {
		"Commercial Loan Application Form": "Commercial Loan Application Form",
		"Applicant Information": "Applicant Information",
		"Name": "Name",
		"First Name": "First Name",
		"Last Name": "Last Name",
		"Address*": "Address*",
		"Street Address": "Street Address",
		"Street Address Line 2": "Street Address Line 2",
		"City": "City",
		"State / Province": "State / Province",
		"Postal / Zip Code": "Postal / Zip Code",
		"Applicant Status*": "Applicant Status*",
		"New Client": "New Client",
		"Existing Client": "Existing Client",
		"Other": "Other",
		"Job / Occupation": "Job / Occupation",
		"Job Classification": "Job Classification",
		"Please Select": "Please Select",
		"Email Address": "Email Address",
		"example@example.com": "example@example.com",
		"Loan Information": "Loan Information",
		"Loan Amount*": "Loan Amount*",
		"Loan/Credit Term*": "Loan/Credit Term*",
		"Type of Loan Facility*": "Type of Loan Facility*",
		"Overdraft": "Overdraft",
		"Commercial Property": "Commercial Property",
		"Industrial Property": "Industrial Property",
		"Micro Loans": "Micro Loans",
		"Revolving Credit": "Revolving Credit",
		"Equipment Financing": "Equipment Financing",
		"Other": "Other",
		"Purpose of your Loan*": "Purpose of your Loan*",
		"ID card front*": "ID card front*",
		"Browse Files": "Browse Files",
		"No file chosen": "No file chosen",
		"ID card back*": "ID card back*",
		"I/We hereby affirm this application...": "I/We hereby affirm this application...",
		"This field is required.": "This field is required.",
		"I/We agree that the Lender is authorized...": "I/We agree that the Lender is authorized...",
		"Signature": "Signature"
	},
	pl: {
		"Commercial Loan Application Form": "Formularz Wniosku o Kredyt Handlowy",
		"Applicant Information": "Informacje o Wnioskodawcy",
		"Name": "Imię",
		"First Name": "Imię",
		"Last Name": "Nazwisko",
		"Address*": "Adres*",
		"Street Address": "Adres ulicy",
		"Street Address Line 2": "Adres ulicy, część 2",
		"City": "Miasto",
		"State / Province": "Województwo",
		"Postal / Zip Code": "Kod pocztowy",
		"Applicant Status*": "Status Wnioskodawcy*",
		"New Client": "Nowy Klient",
		"Existing Client": "Istniejący Klient",
		"Other": "Inny",
		"Job / Occupation": "Praca / Zawód",
		"Job Classification": "Klasyfikacja Zawodu",
		"Please Select": "Proszę Wybrać",
		"Email Address": "Adres Email",
		"example@example.com": "przyklad@przyklad.com",
		"Loan Information": "Informacje o Pożyczce",
		"Loan Amount*": "Kwota Pożyczki*",
		"Loan/Credit Term*": "Okres Pożyczki/Kredytu*",
		"Type of Loan Facility*": "Rodzaj Udogodnienia Kredytowego*",
		"Overdraft": "Debet",
		"Commercial Property": "Nieruchomość Handlowa",
		"Industrial Property": "Nieruchomość Przemysłowa",
		"Micro Loans": "Mikropożyczki",
		"Revolving Credit": "Kredyt Obracający się",
		"Equipment Financing": "Finansowanie Sprzętu",
		"Other": "Inny",
		"Purpose of your Loan*": "Cel Twojej Pożyczki*",
		"ID card front*": "Przód dowodu osobistego*",
		"Browse Files": "Przeglądaj Pliki",
		"No file chosen": "Brak wybranego pliku",
		"ID card back*": "Tył dowodu osobistego*",
		"I/We hereby affirm this application...": "Oświadczam, że niniejszy wniosek o pożyczkę lub kredyt został złożony w imieniu przedsiębiorcy. Podane powyżej informacje są prawdziwe i poprawne według mojej/naszej najlepszej wiedzy, bez zamiaru popełnienia czynów wprowadzenia w błąd. Nie dokonano dodatków ani pominięć, które mogłyby prowadzić do działań oszukańczych lub jakiejkolwiek formy nieprawidłowości.",
		"This field is required.": "To pole jest wymagane.",
		"I/We agree that the Lender is authorized...": "Zgadzam się, że Pożyczkodawca ma uprawnienie do przeprowadzenia wszelkich form badań w celu zweryfikowania i potwierdzenia naszych oświadczeń i wniosków, w tym, ale nie tylko, badania mojej/naszej zdolności kredytowej. Pod warunkiem, że po otrzymaniu powiadomienia Pożyczkodawca może ujawnić informacje finansowe dotyczące naszego konta innemu pożyczkodawcy lub zainteresowanej stronie, której może być potrzebne do ujawnienia w związku z dochodzeniem kredytowym.",
		"Signature": "Podpis"
	},
	fr: { 
		"Commercial Loan Application Form": "Formulaire de demande de prêt commercial",
		"Applicant Information": "Informations sur le demandeur",
		"Name": "Nom",
		"First Name": "Prénom",
		"Last Name": "Nom de famille",
		"Address*": "Adresse*",
		"Street Address": "Adresse",
		"Street Address Line 2": "Adresse ligne 2",
		"City": "Ville",
		"State / Province": "État / Province",
		"Postal / Zip Code": "Code postal / ZIP",
		"Applicant Status*": "Statut du demandeur*",
		"New Client": "Nouveau client",
		"Existing Client": "Client existant",
		"Other": "Autre",
		"Job / Occupation": "Emploi / Occupation",
		"Job Classification": "Classification de l'emploi",
		"Please Select": "Veuillez sélectionner",
		"Email Address": "Adresse e-mail",
		"example@example.com": "exemple@exemple.com",
		"Loan Information": "Informations sur le prêt",
		"Loan Amount*": "Montant du prêt*",
		"Loan/Credit Term*": "Durée du prêt/crédit*",
		"Type of Loan Facility*": "Type de facilité de prêt*",
		"Overdraft": "Découvert",
		"Commercial Property": "Bien commercial",
		"Industrial Property": "Bien industriel",
		"Micro Loans": "Micro-prêts",
		"Revolving Credit": "Crédit renouvelable",
		"Equipment Financing": "Financement d'équipement",
		"Other": "Autre",
		"Purpose of your Loan*": "But de votre prêt*",
		"ID card front*": "Carte d'identité (recto)*",
		"Browse Files": "Parcourir les fichiers",
		"No file chosen": "Aucun fichier sélectionné",
		"ID card back*": "Carte d'identité (verso)*",
		"I/We hereby affirm this application...": "Par la présente, je/nous affirmons cette demande de prêt ou de crédit telle que spécifiée ci-dessus dans ce formulaire de demande, au nom du demandeur commercial. Les informations spécifiées ci-dessus sont vraies et correctes selon ma/notre connaissance et sans intention de commettre",
		"This field is required.": "Ce champ est obligatoire.",
		"I/We agree that the Lender is authorized...": "Je/nous convenons que le prêteur est autorisé à effectuer toute forme d'enquête afin de vérifier et confirmer nos déclarations et demandes, y compris, mais sans s'y limiter, toute enquête sur ma/notre solvabilité. À condition d'un préavis donné, le prêteur peut divulguer des informations financières de notre compte à tout autre prêteur ou partie intéressée par les informations nécessaires à la divulgation en relation avec l'enquête de crédit.",
		"Signature": "Signature"
	},
	
  da: {
    "Commercial Loan Application Form": "Erhvervslån Ansøgningsskema",
    "Applicant Information": "Ansøgerinformation",
    "Name": "Navn",
    "First Name": "Fornavn",
    "Last Name": "Efternavn",
    "Address*": "Adresse*",
    "Street Address": "Vejadresse",
    "Street Address Line 2": "Vejadresse Linje 2",
    "City": "By",
    "State / Province": "Stat / Region",
    "Postal / Zip Code": "Postnummer / ZIP-kode",
    "Applicant Status*": "Ansøgerstatus*",
    "New Client": "Ny Kunde",
    "Existing Client": "Eksisterende Kunde",
    "Other": "Andet",
    "Job / Occupation": "Job / Beskæftigelse",
    "Job Classification": "Jobklassifikation",
    "Please Select": "Vælg venligst",
    "Email Address": "E-mailadresse",
    "example@example.com": "eksempel@eksempel.com",
    "Loan Information": "Låneoplysninger",
    "Loan Amount*": "Lånebeløb*",
    "Loan/Credit Term*": "Lån/Kreditperiode*",
    "Type of Loan Facility*": "Type af Lånefacilitet*",
    "Overdraft": "Overtræk",
    "Commercial Property": "Erhvervsejendom",
    "Industrial Property": "Industriejendom",
    "Micro Loans": "Mikrolån",
    "Revolving Credit": "Roterende Kredit",
    "Equipment Financing": "Udstyrsfinansiering",
    "Other": "Andet",
    "Purpose of your Loan*": "Formålet med dit Lån*",
    "ID card front*": "ID-kort forside*",
    "Browse Files": "Gennemse Filer",
    "No file chosen": "Ingen fil valgt",
    "ID card back*": "ID-kort bagside*",
    "I/We hereby affirm this application...": "Jeg/Vi bekræfter hermed denne ansøgning om lån eller kredit som angivet ovenfor i denne ansøgningsformular, på vegne af forretningsansøgeren. De angivne oplysninger er sande og korrekte efter bedste viden og uden hensigt at begå handlinger af vildledning. Der er ikke foretaget tilføjelser eller udeladelser, der kan føre til handlinger af svig eller enhver form for uregelmæssighed.",
    "This field is required.": "Dette felt er påkrævet.",
    "I/We agree that the Lender is authorized...": "Jeg/Vi er enige om, at långiveren er bemyndiget til at foretage enhver form for undersøgelse for at verificere og bekræfte vores erklæringer og anmodninger, herunder, men ikke begrænset til at foretage undersøgelse af min/vores kreditvurdering. Forudsat med forudgående varsel kan långiveren offentliggøre finansielle oplysninger om vores konto til en anden långiver eller parter interesseret i oplysningerne, som kan være nødvendige for offentliggørelse i forbindelse med kreditundersøgelsen.",
    "Signature": "Underskrift"
  },
  ro: {
    "Commercial Loan Application Form": "Formular de Cerere pentru Împrumut Comercial",
    "Applicant Information": "Informații despre Solicitant",
    "Name": "Nume",
    "First Name": "Prenume",
    "Last Name": "Nume de Familie",
    "Address*": "Adresă*",
    "Street Address": "Adresă Stradală",
    "Street Address Line 2": "Adresă Stradală Linia 2",
    "City": "Oraș",
    "State / Province": "Stat / Provincie",
    "Postal / Zip Code": "Cod Poștal / ZIP",
    "Applicant Status*": "Stare Solicitant*",
    "New Client": "Client Nou",
    "Existing Client": "Client Există",
    "Other": "Altele",
    "Job / Occupation": "Loc de Muncă / Ocupație",
    "Job Classification": "Clasificare Ocupațională",
    "Please Select": "Vă Rugăm Selectați",
    "Email Address": "Adresă de Email",
    "example@example.com": "exemplu@exemplu.com",
    "Loan Information": "Informații Împrumut",
    "Loan Amount*": "Suma Împrumutului*",
    "Loan/Credit Term*": "Termen Împrumut / Credit*",
    "Type of Loan Facility*": "Tipul de Facilitate de Împrumut*",
    "Overdraft": "Descoperit",
    "Commercial Property": "Proprietate Comercială",
    "Industrial Property": "Proprietate Industrială",
    "Micro Loans": "Microîmprumuturi",
    "Revolving Credit": "Credit Rotativ",
    "Equipment Financing": "Finanțare Echipament",
    "Other": "Altele",
    "Purpose of your Loan*": "Scopul Împrumutului Tău*",
    "ID card front*": "Carte de Identitate Față*",
    "Browse Files": "Răsfoiește Fișiere",
    "No file chosen": "Niciun fișier selectat",
    "ID card back*": "Carte de Identitate Spate*",
    "I/We hereby affirm this application...": "Prin prezenta, afirmăm această cerere de împrumut sau credit așa cum este specificată mai sus în acest formular de cerere, în numele solicitantului comercial. Informațiile specificate mai sus sunt adevărate și corecte în cunoștința noastră și fără intenția de a comite acte de vătămare. Nu s-a făcut nicio adăugare sau omisiune care ar putea duce la acte de fraudă sau orice formă de impropriu.",
    "This field is required.": "Acest câmp este obligatoriu.",
    "I/We agree that the Lender is authorized...": "Sunt de acord că creditorul este autorizat să efectueze orice formă de investigație pentru a verifica și confirma declarațiile și solicitările noastre, inclusiv, dar fără a se limita la, efectuarea oricărei investigații asupra situației noastre de credit. Cu condiția de a primi notificare prealabilă, creditorul poate divulga informații financiare despre contul nostru oricărui alt creditor sau părți interesate la informațiile care pot fi necesare pentru divulgare în legătură cu investigația de credit.",
    "Signature": "Semnătură"
  },
  
  
  };
  
const translation = translations[language] || translations.en; // Default to English
		    return translation[text] || text;
		}
		
		
		
		
		document.addEventListener("DOMContentLoaded", function() {
		    // Define the IDs of the elements to translate
		    const elementsToTranslate = ["header_1", "label_45",  "sublabel_45_first", "label_6", "label_12", "sublabel_12_addr_line2", "error", "sign-in-opt", "signin", "cancel", "loadmess", "submit-btn", "Terms" ];
			const placeHolder = ["ai","pr"];
		    
		    // Translate each element based on the user's language
		    elementsToTranslate.forEach(elementId => {
		        const element = document.getElementById(elementId);
		        if (element) {
		        	console.log(element.textContent);
		        	console.log(translate(element.innerText, userLanguage));
		            element.innerText = translate(element.innerText, userLanguage); 
		        }
		        
		        
		        
		  // Assuming userLanguage is defined elsewhere in your code

const formId = 'form'; // Change this to your form ID
const form = document.getElementById(formId);

if (form) {
    form.querySelectorAll('*').forEach(element => {
        if (element.textContent.trim() !== '') {
        	element.innerText = translate(element.innerText, userLanguage); 
            const originalText = element.innerText;
            const translatedText = translate(originalText, userLanguage);
            
            console.log('Original Text Content:', originalText);
            console.log('ID:', element.id || 'No ID'); // Log the ID or "No ID" if not present
            console.log('Translated Text:', translatedText);
            
            // Optionally, you can update the element's text content with the translation
            // element.textContent = translatedText;
        }
    });
} else {
    console.error(`Form with ID '${formId}' not found.`);
}
		        
					
		        placeHolder.forEach(placeHolderId => {
		        const PlaceH = document.getElementById(placeHolderId);
		        if (PlaceH) {
		        	console.log(PlaceH.placeholder);
		            PlaceH.placeholder = translate(PlaceH.placeholder, userLanguage); 
		        	}
		        }); 
		        
		        document.getElementById('form-pagebreak-next_54').addEventListener("click", function() {
		        console.log('subbut-clicked');
		       // msg.innerHTML = translate(msg.textContent, userLanguage);
		        setTimeout(function() {
			    msg.innerHTML = translate(msg.textContent, userLanguage);
			}, 2000);
			
		});
		    });
		});
		
		