const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
// Chart layout percent
const elementInView = (el) => {
    const elementTop = el.getBoundingClientRect().top; //khoảng cách top của element với cửa sổ trình duyệt

    return (elementTop <= (window.innerHeight || document.documentElement.clientHeight)) //lấy chiều cao của cửa sổ trình duyệt
}
const per76 = $('#per-76')
const per92 = $('#per-92')
const per86 = $('#per-86')
window.onscroll = function(){
    if(elementInView(per76)){
        per76.classList.add('percent')
    }
    else{
        per76.classList.remove('percent')
    }
    if(elementInView(per92)){
        per92.classList.add('percent')
    }
    else{
        per92.classList.remove('percent')
    }
    if(elementInView(per86)){
        per86.classList.add('percent')
    }
    else{
        per86.classList.remove('percent')
    }
}

// Modal video
const playBtn = $('.video__btn-play')
const playImg =$('.video__btn-img')
const modalVideo = $('.modal-video')
const video = $('.video-player')

playBtn.onclick = function(event){
    modalVideo.style.display = "flex"
    video.style.display ="block"
    video.src = "https://player.vimeo.com/video/127347999?title=0&amp;byline=0&amp;portrait=0;autoplay=1"
    event.stopPropagation()
}

playImg.onclick = function(event){
    modalVideo.style.display = "flex"
    video.style.display ="block"
    video.src = "https://player.vimeo.com/video/127347999?title=0&amp;byline=0&amp;portrait=0;autoplay=1"
    event.stopPropagation()
}

modalVideo.onclick = function(){
    modalVideo.style.display = "none"
    video.style.display = "none"
    video.src = ""
}

// Modal login
const loginBtn = $('.header__user')
const loginBtnMT = $('.header__user-tablet-mobile')
const modal = $('.modal')
const modalContainer = $('.modal-container')

loginBtn.onclick = function(){
    modal.classList.add('modal-active')
}
loginBtnMT.onclick = function(){
    modal.classList.add('modal-active')
}

modal.onclick = function(){
    modal.classList.remove('modal-active')
}

modalContainer.onclick = function(e){
    e.stopPropagation()
}

const tabs = $$('.tab-item')
const contents = $$('.content-item')
tabs.forEach((tab, index) => {
    const content = contents[index]
    tab.onclick = function(e){
        $('.tab-item.tab-active').classList.remove('tab-active')
        $('.content-item.content-active').classList.remove('content-active')
        e.target.classList.add('tab-active')
        content.classList.add('content-active')
    }
});


//Hide, Show header on scroll 
var lastScrollTop = 0
var navbar = document.getElementById("navbar-tablet-mobile")
window.addEventListener("scroll", function(){
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop
    if (scrollTop > lastScrollTop){
        navbar.style.top = "-69px"
    } else {
        navbar.style.top = "0"
    }
    lastScrollTop = scrollTop
})

// hide / show menu item
const menuItemHeaders = $$('.mobile-menu__heading')
menuItemHeaders.forEach(item => {
    item.onclick = function(){
        const menuItemActive = $('.mobile-menu__heading.menu-item--active')
        if(menuItemActive && menuItemActive !== item){
            menuItemActive.classList.remove('menu-item--active')
            menuItemActive.nextElementSibling.style.maxHeight = 0
        }

        item.classList.toggle('menu-item--active')
        const menuItemBody = item.nextElementSibling
        if(item.classList.contains('menu-item--active')){
            menuItemBody.style.maxHeight = menuItemBody.scrollHeight + 'px'
        } else {
            menuItemBody.style.maxHeight = 0
        }
    }
})


// const menuItem = $$('.mobile-menu__item')
// menuItem.forEach(item => {
//     item.onclick = function(e){
//         if(e.target.closest('.mobile-menu__heading')){
//             const itemActive = $('.mobile-menu__item.menu-item--active')
//             item.classList.toggle('menu-item--active')
//             if(itemActive) {
//                 itemActive.classList.remove('menu-item--active')
//             }
//         }
//     }
// })


// const test = $('.mobile-sub-menu__list')
// test.onclick = function(e){
//     e.stopPropagation()
// }