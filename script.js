currencies = [
    "EUR" ,
    "GBP" ,
    "USD" ,
    "AED" ,
    "AFN" ,
    "ALL" ,
    "AMD" ,
    "ANG" ,
    "AOA" ,
    "ARS" ,
    "AUD" ,
    "AWG" ,
    "AZN" ,
    "BAM" ,
    "BBD" ,
    "BDT" ,
    "BGN" ,
    "BHD" ,
    "BIF" ,
    "BMD" ,
    "BND" ,
    "BOB" ,
    "BRL" ,
    "BSD" ,
    "BTN" ,
    "BWP" ,
    "BYN" ,
    "BZD" ,
    "CAD" ,
    "CDF" ,
    "CHF" ,
    "CLP" ,
    "CNY" ,
    "COP" ,
    "CRC" ,
    "CUP" ,
    "CVE" ,
    "CZK" ,
    "DJF" ,
    "DKK" ,
    "DOP" ,
    "DZD" ,
    "EGP" ,
    "ERN" ,
    "ETB" ,
    "FJD" ,
    "FKP" ,
    "FOK" ,
    "GEL" ,
    "GGP" ,
    "GHS" ,
    "GIP" ,
    "GMD" ,
    "GNF" ,
    "GTQ" ,
    "GYD" ,
    "HKD" ,
    "HNL" ,
    "HRK" ,
    "HTG" ,
    "HUF" ,
    "IDR" ,
    "ILS" ,
    "IMP" ,
    "INR" ,
    "IQD" ,
    "IRR" ,
    "ISK" ,
    "JEP" ,
    "JMD" ,
    "JOD" ,
    "JPY" ,
    "KES" ,
    "KGS" ,
    "KHR" ,
    "KID" ,
    "KMF" ,
    "KRW" ,
    "KWD" ,
    "KYD" ,
    "KZT" ,
    "LAK" ,
    "LBP" ,
    "LKR" ,
    "LRD" ,
    "LSL" ,
    "LYD" ,
    "MAD" ,
    "MDL" ,
    "MGA" ,
    "MKD" ,
    "MMK" ,
    "MNT" ,
    "MOP" ,
    "MRU" ,
    "MUR" ,
    "MVR" ,
    "MWK" ,
    "MXN" ,
    "MYR" ,
    "MZN" ,
    "NAD" ,
    "NGN" ,
    "NIO" ,
    "NOK" ,
    "NPR" ,
    "NZD" ,
    "OMR" ,
    "PAB" ,
    "PEN" ,
    "PGK" ,
    "PHP" ,
    "PKR" ,
    "PLN" ,
    "PYG" ,
    "QAR" ,
    "RON" ,
    "RSD" ,
    "RUB" ,
    "RWF" ,
    "SAR" ,
    "SBD" ,
    "SCR" ,
    "SDG" ,
    "SEK" ,
    "SGD" ,
    "SHP" ,
    "SLE" ,
    "SLL" ,
    "SOS" ,
    "SRD" ,
    "SSP" ,
    "STN" ,
    "SYP" ,
    "SZL" ,
    "THB" ,
    "TJS" ,
    "TMT" ,
    "TND" ,
    "TOP" ,
    "TRY" ,
    "TTD" ,
    "TVD" ,
    "TWD" ,
    "TZS" ,
    "UAH" ,
    "UGX" ,
    "UYU" ,
    "UZS" ,
    "VES" ,
    "VND" ,
    "VUV" ,
    "WST" ,
    "XAF" ,
    "XCD" ,
    "XDR" ,
    "XOF" ,
    "XPF" ,
    "YER" ,
    "ZAR" ,
    "ZMW" ,
    "ZWL" 
]

const api = `https://v6.exchangerate-api.com/v6/8ec63342a7e17aff6c7898c0/latest/USD`;

const vanDropDown = document.getElementById("van-valutta");
const naarDropDown = document.getElementById("naar-valutta");

//Dom element voor het creeren van het linker dropdown menu 
currencies.forEach((currency) => {
  const option = document.createElement("option");
  option.value = currency;
  option.text = currency;
  vanDropDown.add(option);
});

//Dom element voor het creeren van het linker dropdown menu 
currencies.forEach((currency) => {
    const option = document.createElement("option");
    option.value = currency;
    option.text = currency;
    naarDropDown.add(option);
  });

//Stelt de deafault waardes in voor de dropdown menu's 
vanDropDown.value = "EUR";
naarDropDown.value = "USD";

//Haalt de op gegeven valuta's en het bedrag op
//vervolgens rekent hij het bedrag om naar de gekozen valuta 
let bedragomzetten = () => {


  const amount = document.querySelector("#amount").value;
  const vanValutta = vanDropDown.value;
  const naarValutta = naarDropDown.value;

  //fetcht de API en rekent het bedrag om
    fetch(api)
      .then((resp) => resp.json())
      .then((data) => {
        document.getElementById("update").innerHTML = data.time_last_update_utc;
        let fromExchangeRate = data.conversion_rates[vanValutta];
        let toExchangeRate = data.conversion_rates[naarValutta];
        const omgezetbedrag = (amount / fromExchangeRate) * toExchangeRate;
        result.innerHTML = `${amount} ${vanValutta} = ${omgezetbedrag.toFixed(2)} ${naarValutta}`;
      });
};



document.querySelector("#overzetten-button")
document.addEventListener("click", bedragomzetten);
window.addEventListener("load", bedragomzetten);