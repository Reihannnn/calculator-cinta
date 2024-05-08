
const submitButton = document.querySelector(".submit-btn")
const mainDiv = document.querySelector(".main-div")

document.addEventListener("DOMContentLoaded",function(){
  
  submitButton.addEventListener("submit", (e) => {
    e.preventDefault()
    const numberPercent = generatePercent()
    // inisiate the varibale for read value from input element
    const inputNamaPria =  document.getElementById("priaName").value
    const inputNamaWanita = document.getElementById("wanitaName").value
  
    
    
    
    
    let value = ``
    if(numberPercent <= 40) {
      value = `tidak cocok , kasiann`
    }
    else if(numberPercent <= 60) {
      value =  `sedikit cocok`
    } else if (numberPercent <= 80) {
      value = `cocok`
    } else{
      value = `cocok banget langsung nikah ga si`
    }
    // build html elemnt 

    const namePlace = document.querySelector(".tempat")
    namePlace.innerHTML = ` <div class="tempat font-extrabold">${inputNamaPria} ❤️ ${inputNamaWanita}</div>`

    
    putar();
    
    
    setTimeout(() => {
      const percentPlace = document.querySelector(".angka")
      percentPlace.innerHTML = `<div class="tempat1 font-extrabold text-red-600">${numberPercent}</div>`
      console.log(numberPercent)
      
      const ket = document.querySelector(".ket")
      ket.innerHTML = `<div class="tempat ket font-extrabold text-black-600">${value}</div>`

    }, 2000);

    submitButton.reset()
  }) 
})

function putar(){
  const numberPercent = document.querySelector(".angka")

  const arrayNumberPercent = [12,1,30,13,90,42,35,53,63,61,56,77,85,44,21,33,46,78,77,34,23,78]
  
  let i = 0;
  const waktuMulai = new Date().getTime()
  setInterval(function () {
    if(new Date().getTime() - waktuMulai > 2000){
      clearInterval;
      return
    }
    numberPercent.innerHTML = arrayNumberPercent[i++];
    if(i == arrayNumberPercent.length) i = 0;
  }, 1);
 
}

function generatePercent(){
  let randomNumber = Math.random()
  randomNumber = randomNumber * 100
  randomNumber = Math.floor(randomNumber)

  return randomNumber
}


