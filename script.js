const items=document.querySelectorAll('.item')
const numero=document.querySelector('.number')
const lista=document.querySelectorAll('.indicators ul li')
const nextButton=document.querySelector('.arrow .next')
const backButton=document.querySelector('.arrow .back')

let indiceCar=0

function updateActive(indice){
   items.forEach((item,i)=>{
    item.classList.toggle('active',i===indice)
   })

   lista.forEach((item,i)=>{
    item.classList.toggle('active',i===indice)
   })

   numero.textContent=`0${indice + 1}`
}


nextButton.addEventListener('click',()=>{
   indiceCar=(indiceCar + 1) % items.length
   updateActive(indiceCar)
})

backButton.addEventListener('click',()=>{
    indiceCar=(indiceCar - 1 + items.length) % items.length
    updateActive(indiceCar)
})

updateActive(indiceCar)