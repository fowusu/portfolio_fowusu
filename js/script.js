window.onload = function(){


const toggle = document.querySelector('.toggle')
const navigation = document.querySelector('.navigation')
const logoImg = document.querySelector('.logoimg')

toggle.addEventListener('click', () =>  {
    toggle.classList.toggle('active')
    navigation.classList.toggle('active')
    logoImg.classList.toggle('active')
})


}