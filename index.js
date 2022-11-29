const personalbtn = document.querySelector('.button1')
const businessbtn = document.querySelector('.button2')
const personalbtn2 = document.querySelector('.button3')
const businessbtn2 = document.querySelector('.button4')
const personalmenu= document.querySelector('.personalmenu')
const businessmenu= document.querySelector('.businessmenu')
const overlay = document.querySelector('.overlay')
const mobnav = document.querySelector('.mobileNav')
const openmenu = document.querySelector('.openmenu')
const closemenu = document.querySelector('.closemenu')
const section = document.querySelectorAll('section')



personalbtn.addEventListener('click' , ()=>{

personalmenu.classList.toggle('open')
overlay.classList.add('remove')
businessmenu.classList.remove('open')

})
personalbtn2.addEventListener('click' , ()=>{

personalmenu.classList.toggle('open')
overlay.classList.add('remove')
businessmenu.classList.remove('open')

})
businessbtn.addEventListener('click' , ()=>{

businessmenu.classList.toggle('open')
overlay.classList.add('remove')
personalmenu.classList.remove('open')

})
businessbtn2.addEventListener('click' , ()=>{

businessmenu.classList.toggle('open')
overlay.classList.add('remove')
personalmenu.classList.remove('open')

})
overlay.addEventListener('click' , ()=>{

    businessmenu.classList.remove('open')
    overlay.classList.remove('remove')
    personalmenu.classList.remove('open')
    
    })


   openmenu.addEventListener('click' , ()=>{

   mobnav.classList.add('open')
    
    })
   closemenu.addEventListener('click' , ()=>{

   mobnav.classList.remove('open')
    
    })

    personalmenu.addEventListener('click' , ()=>{
        mobnav.classList.remove('open')
    })
    businessmenu.addEventListener('click' , ()=>{
        mobnav.classList.remove('open')
    })

    for(let i=0; i <= section.length; i++){

        section[i].addEventListener('click' , ()=>{
             mobnav.classList.remove('open')
         })

    }
