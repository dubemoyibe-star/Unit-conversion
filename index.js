/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let mynumber = []
let massEl = document.getElementById("mass-el")
let volumeEl = document.getElementById("volume-el")
let lengthEl = document.getElementById("length-el")
let inputEl =  document.getElementById("input-el")
let buttonEl = document.getElementById("button-el")
buttonEl.addEventListener("click", function (){
    mynumber = []
    mynumber.push(inputEl.value)
    conversionLength()
    conversionvolume()
    conversionmass()
})

function conversionLength(){
    let meterFeet = mynumber[0] * 3.281
    let meterFeetRounded =  parseFloat(meterFeet.toFixed(3))
    let feetMeter = mynumber[0] / 3.281
    let feetMeterRounded = parseFloat(feetMeter.toFixed(3))
     lengthEl.innerText = `
     ${mynumber[0]} meters = ${meterFeetRounded} feet | ${mynumber[0]} feet = ${feetMeterRounded} meters
     `   
}

function conversionvolume(){
    let litresGallons = mynumber[0] * 0.264
    let litresGallonsRounded =  parseFloat(litresGallons.toFixed(3))
    let gallonsLitres = mynumber[0] / 0.264
    let gallonsLitresRounded = parseFloat(gallonsLitres.toFixed(3))
     volumeEl.innerText = `
     ${mynumber[0]} litres = ${litresGallonsRounded} gallons | ${mynumber[0]} gallons = ${gallonsLitresRounded} litres
     `   
}


function conversionmass(){
    let kilogramsPounds = mynumber[0] * 2.204
    let kilogramsPoundsRounded =  parseFloat(kilogramsPounds.toFixed(3))
    let poundsKilograms = mynumber[0] / 2.204
    let poundsKilogramsRounded = parseFloat(poundsKilograms.toFixed(3))
     massEl.innerText = `
     ${mynumber[0]} kilograms = ${kilogramsPoundsRounded} pounds | ${mynumber[0]} pounds = ${poundsKilogramsRounded} kilogram
     `   
}



