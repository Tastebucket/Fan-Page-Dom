const bioButtons = document.getElementsByClassName('bio')
const bioButtonsArray = [...bioButtons]
const statusButtons = document.getElementsByClassName('status')
const statusButtonsArray = [...statusButtons]
const searchButton = document.getElementById('search-button')
const reset = document.getElementById('reset')

const displayBio = (event) =>{
    const bio = event.target.className
    const charBios= document.getElementsByClassName(bio)
    const charBio= charBios[1]
    charBio.style.display = 'inline-block'
    charBio.addEventListener('click', hideText)
}

const displayStatus = (event) =>{
    const status = event.target.className
    const charStati= document.getElementsByClassName(status)
    const charStatus= charStati[1]
    charStatus.style.display = 'block'
    charStatus.addEventListener('click', hideText)
}
const search = () => {
    const input = document.getElementById('char-search')
    //console.log(input)
    const upperSearch = input.value.toUpperCase()
    //console.log(upperSearch)

    const chars = document.getElementsByClassName('character')
    //console.log(chars)
  
    for (i = 0; i < chars.length; i++) {
      h3 = chars[i].getElementsByTagName('h3')[0]
      let txtValue = h3.textContent || h3.innerText
      //console.log(txtValue.toUpperCase().indexOf(upperSearch))
      if (txtValue.toUpperCase().indexOf(upperSearch) > -1) {
        chars[i].style.display = ''
      } else {
        chars[i].style.display = 'none'
      }
    }
    reset.style.display='inline-block'
}
// const hideBio = (event) =>{
//     const bio = event.target.className
//     const charBios= document.getElementsByClassName(bio)
//     const charBio= charBios[1]
//     charBio.style.display = 'none'
// }
const displayAll = () => {
    const chars = document.getElementsByClassName('character')
    for (i = 0; i < chars.length; i++) {
        chars[i].style.display = 'inline-block'
    }
    reset.style.display = 'none'
}
const hideText = (event) =>{
    event.target.style.display = 'none'
}
for (let i=0; i<bioButtonsArray.length; i++){
    bioButtonsArray[i].addEventListener('click', displayBio)
}

for (let i=0; i<statusButtonsArray.length; i++){
    statusButtonsArray[i].addEventListener('click', displayStatus)
}
searchButton.addEventListener('click', search)
reset.addEventListener('click',displayAll)

