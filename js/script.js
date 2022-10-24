/////////////BURGER MENU
const ul = document.querySelector("ul")
const burgerMenu = document.querySelector(".burger-menu")
let link = document.querySelectorAll(".container ul li")

burgerMenu.addEventListener("click", function () {
  ul.classList.toggle("active")
  burgerMenu.classList.toggle("active")
  document.body.classList.toggle('no-scroll');
})

link.forEach((elem) => {
  elem.addEventListener("click", () => {
    ul.classList.remove("active")
    document.body.classList.remove('no-scroll');
  })
})



///////////// POPUP
let header = document.querySelector("header")
let btnbilet = document.querySelectorAll(".ticket")
let popUp = document.querySelector(".popup")

btnbilet.forEach((elem) => {
  elem.addEventListener("click", function () {
    popUp.classList.add("active")
    header.style.cssText = "opacity:100;"

    popUp.addEventListener("click", function (e) {
      if (e.target.matches("i")) {
        popUp.classList.remove("active")
        header.style.cssText = "opacity:0.8;"
      }
    })

  })
})



///////////// ANIMATION


function scrollAnimation() {
  const animItem = document.querySelectorAll(".animsection")
  animItem.forEach((elem) => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) elem.classList.add("active")
    })
    observer.observe(elem)
  })
}


//////////////////////  SCROLLTOP

let topscroll = document.querySelector(".scrollTop")

function scrollTop() {
  if (window.scrollY > 700) {
    topscroll.classList.add("show")

    topscroll.addEventListener("click", () => {

      window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth"
      })

    })

  }
  else topscroll.classList.remove("show")
}

window.addEventListener("scroll", (e) => {
  scrollAnimation()
  scrollTop()
})



const timeCont = () => {
  const daysVal = document.querySelector(".time-days .time-val");
  const hoursVal = document.querySelector(".time-hours .time-val");
  const minutesVal = document.querySelector(".time-minutes .time-val");
  const secondsVal = document.querySelector(".time-seconds .time-val");


  const daysText = document.querySelector(".time-text");
  const hoursText = document.querySelector(".time-text2");
  const minutesText = document.querySelector(".time-text3");
  const secondsText = document.querySelector(".time-text4");



  const leftUntil = new Date(2025, 01, 01) - new Date()

  let days = Math.floor(leftUntil / 1000 / 60 / 60 / 24);
  let hours = Math.floor(leftUntil / 1000 / 60 / 60) % 24;
  let minutes = Math.floor(leftUntil / 1000 / 60) % 60;
  let seconds = Math.floor(leftUntil / 1000) % 60;


  daysVal.textContent = days;
  hoursVal.textContent = hours < 10 ? "0" + hours : hours;
  minutesVal.textContent = minutes < 10 ? "0" + minutes : minutes;
  secondsVal.textContent = seconds < 10 ? "0" + seconds : seconds;


  function declOfNum(number, titles) {
    let cases = [2, 0, 1, 1, 1, 2];
    return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
  }

  daysText.textContent = declOfNum(days, ['день', 'дня', 'дней']);
  hoursText.textContent = declOfNum(hours, ['час', 'часа', 'часов']);
  minutesText.textContent = declOfNum(minutes, ['минута', 'минуты', 'минут']);
  secondsText.textContent = declOfNum(seconds, ['секудна', 'секудны', 'секунд']);
};

timeCont();

setInterval(timeCont, 1000)



// DROP DOWN LIST 

const li = document.querySelectorAll(".lidiv")
const drop = document.querySelectorAll(".drop")

li.forEach((el) => {

  el.addEventListener("click", (e) => {
    let showT = e.currentTarget.closest("li").nextElementSibling

    if (!e.target.matches("i")) return;

    drop.forEach((elem) => {
      if (elem !== showT) elem.classList.remove("active")
    })

    li.forEach((elem) => {
      if (elem !== e.currentTarget) elem.classList.remove("active")
    })

    showT.classList.toggle("active")
    el.classList.toggle("active")

  })
})




///////// BTNMORE

const btnMore = document.querySelector(".btт-more")
const itemsLength = document.querySelectorAll(".partnerImg").length
let items = 6

btnMore.addEventListener("click", () => {
  items += 6
  const array = Array.from(document.querySelectorAll(".partnerImg"))
  const visItem = array.slice(0, items)

  visItem.forEach(el => el.classList.add("is-visible"))

  if (visItem.length == itemsLength) btnMore.style = "display:none;"

})



link.forEach((elem) => {
  elem.addEventListener("click", (e) => {

    let s = e.target.getAttribute('href').slice(1).toLowerCase()
    let position = document.querySelector(`.${s}`).offsetTop

    window.scrollTo({
      left: 0,
      top: position,
      behavior: "smooth"
    })
  })

})
