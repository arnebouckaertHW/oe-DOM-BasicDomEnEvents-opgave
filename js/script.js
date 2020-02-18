"use strict";

var txtOmschrijving;
var txtVeldNaam;
// Declareer en initialiseer een variabele om de knop in bij te houden
var btnVoegToe;
// Declareer en initialiseer een variabele om divNieuweElementen in bij te houden
var divNieuweElementen;

window.addEventListener('load', Initieer);

function Initieer() {
  KoppelDomElementen();
  KoppelEvents();
  VulStandaardWaardenIn();
}

function KoppelDomElementen(){
  // Sla de DOM-elementen met id txtOmschrijving en txtVeldNaam op in hun resp. variabelen
  txtOmschrijving = document.getElementById("txtOmschrijving");
  txtVeldNaam = document.getElementById("txtVeldNaam");
  btnVoegToe = document.getElementById("btnVoegToe");
  divNieuweElementen = document.getElementById("divNieuweElementen");
}

function KoppelEvents(){
  // Voeg een eventlisteners toe aan de knop om VoegVeldToe te laten uitvoeren bij een klik
  btnVoegToe.addEventListener("click", VoegVeldToe);
}

function VulStandaardWaardenIn(){
  // Vul in txtOmschrijving en txtVeldNaam standaardwaarden in, nl. Adres en txtAdres
  txtVeldNaam.value = "txtAdres";
  txtOmschrijving.value = "Adres";
}

function VoegVeldToe() {
  // Declareer variabelen om de input in de textboxen bij te houden en sla de input erin op
  let veldNaam = txtVeldNaam.value;
  let omschrijving = txtOmschrijving.value;
  // Declareer een variabele met de naam newDiv om een nieuw div-element in op te slaan
  let newDiv = document.createElement('div');
  // Declareer een variabele met de naam newLabel om een nieuw label-element in op te slaan
  let newLabel = document.createElement('label');
  // Declareer een variabele met de naam newInput om een nieuw input-element in op te slaan
  let newInput = document.createElement('input');
  
  // De css-classes van deze variabele zijn input en accent
  newDiv.classList.add('input');
  newDiv.classList.add('accent');

  // In dit label verschijnt de omschrijving die opgegeven is door de gebruiker
  // Het for-attribuut wordt ingevuld
  // Het label wordt toegevoegd aan newDiv
  newLabel.innerHTML = omschrijving;
  newLabel.setAttribute('for', veldNaam);
  newDiv.appendChild(newLabel);

  // De id- en type-attributen worden ingevuld
  // De input wordt toegevoegd aan newDiv
  newInput.setAttribute('id', veldNaam);
  newInput.setAttribute('type', 'text');
  newDiv.appendChild(newInput);

  // De input in de textboxes wordt gewist
  txtOmschrijving.value = "";
  txtVeldNaam.value = "";

  // newDiv wordt toegevoegd aan divNieuweElementen
  divNieuweElementen.appendChild(newDiv);
}


