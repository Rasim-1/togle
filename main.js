const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')
const body = document.querySelector('body')
const img2 = document.querySelector('#img2')
const img1 = document.querySelector('#img1')
const text1 = document.querySelector('#text1')
const btn3 = document.querySelector('#btn3')


btn1.onclick = () => {
  body.classList.toggle('red')
}
btn2.onclick = () => {
  img1.classList.toggle('hidden')
  
  
}
btn3.onclick = () =>{
  text1.classList.toggle('white')
}
// btn3.onclick = () => {
  //     const maxWidth = window.innerWidth - btn3.offsetWidth
  //     const maxHeight = window.innerHeight - btn3.offsetHeight
  
  //     const radomX = Math.floor(Math.random() * maxWidth / 2)
  //     const radomY = Math.floor(Math.random() * maxHeight / 2)
  
  //     // console.log(radomX,radomY)
  //     btn3.style.transform = `translate(${radomX}px, ${radomY}px),`
  // }
  const btn4 = document.querySelector('#btn4')
  btn4.onclick = () => {
    text1.classList.toggle('hidden')
    // img2.classList.toggle('hidden')
    // img2.classList.toggle('img')
   
     
    }