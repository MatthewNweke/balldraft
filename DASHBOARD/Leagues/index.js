'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const navLinks = document.querySelector('.nav__links');
const hiddenLine = document.querySelectorAll('.hidden__line');



const btmLists = document.querySelectorAll('.link-text');

btmLists.forEach(list => {
  list.addEventListener('click', function (e) {
    e.preventDefault();

  })

});




tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  // Guard clause
  if (!clicked) return;

  // Remove active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));
  // Activate tab
  clicked.classList.add('operations__tab--active');

  // Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});








// upcoming

const entriesDraft = document.querySelectorAll('.entries__drafts li')



entriesDraft.forEach(e => {
  e.addEventListener('click', function (e) {
    e.preventDefault();
    //  e.target.classList.add('entry--active');
    // console.log(e);


  })
})
const draftDropdown = document.querySelector('.draft__dropdown');
const entry = document.querySelector('.entry-tab');
const draft = document.querySelector('.draft-tab');
const entryDisplayWrapper = document.querySelector('.entries__display--wrapper');

// entryDisplayWrapper.classList.add('entries__display--active');
// entry.classList.add('entry--active');




// entry.addEventListener('click', function () {
//   entryDisplayWrapper.classList.add('entries__display--active');
//   draftDropdown.classList.remove('draft__dropdown--active');
//   entry.classList.add('entry--active');
//   draft.classList.remove('entry--active');

// })

// draft.addEventListener('click', function () {
//   entryDisplayWrapper.classList.remove('entries__display--active')

//   draftDropdown.classList.add('draft__dropdown--active')
//   entry.classList.remove('entry--active')
//   draft.classList.add('entry--active');
//   entry.classList.remove('entry--active');
// })





// // fading effect

// const tab1 = document.querySelector('.operations__tab--1');
// const operationContent1 = document.querySelector('.operations__content--1');

// tab1.addEventListener('click', function () {
//   operationContent1.classList.add('fadein')
// })


// const elipsisCover = document.querySelector('.ellipsis__cover');
// const live = document.querySelector('.live');
// const liveMain = document.querySelector('.live__main');
// const liveSecondary = document.querySelector('.live__secondary');
// const nbaGameTable = document.querySelector('.NBA__game--table');
// const history = document.querySelector('.history');
// const historyLists = document.querySelector('history__lists');

// const ellipsisHistoryLists = document.querySelector('.ellipsis__history--lists');
// // const historyElipsis=documnet.querySelector('.')



// live.addEventListener('click', function () {
//   const liveTimeOut = setTimeout(function () {
//     liveSecondary.classList.add('removelivesec');
//     liveMain.classList.add('display__livemain');
//     elipsisCover.classList.add('exit__elipsisLoader');
//   }, 5000);

// })

// history.addEventListener('click', function () {
//   setTimeout(function () {
//     nbaGameTable.classList.add('NBA__game--show');
//     ellipsisHistoryLists.classList.add('remove__history--lists');
//     elipsisCover.classList.add('exit__elipsisLoader');
//   }, 5000);

// })

// const mainContest = document.querySelector('.main__context');
// const overlayContest = document.querySelector('.overlay__context');
// const createContest = document.querySelector('.create__contest');
// const overlayContextToggle = document.querySelector('.overlay__context--toggle')


// // createContest.addEventListener('click',function(){
// //   overlayContest.classList.add('show__overlay--context')
// // });

// // overlayContextToggle.addEventListener('click',function(){
// //   overlayContest.classList.remove('show__overlay--context')
// // });



// // upcoming__lobby

// const upcomingLobby = document.querySelector('.upcoming__lobby');
// const operationsContent1 = document.querySelector('.operations__content--1');
// const operationsContent2 = document.querySelector('.operations__content--2');


// // upcomingLobby.addEventListener('click',function(e){
// //   e.preventDefault();
// //   operationsContent1.classList.remove('operations__content--active');
// //   operationsContent2.classList.add('operations__content--active');

// // })
// const backDrop = document.querySelector('.backdrop');


// // nav toggle
// const primNavList = document.querySelector('.primary-nav-list__top');
// const toggler = document.querySelector('.toggler');
// const navListBtm = document.querySelector('#btm__list')


// toggler.addEventListener('click', function () {
//   primNavList.classList.toggle('display__top--nav');
//   backDrop.classList.toggle('display__backdrop');

// })


// backDrop.addEventListener('click', function () {
//   primNavList.classList.remove('display__top--nav');
//   backDrop.classList.remove('display__backdrop');
// })




// // thu leagues

// const serieA = document.querySelector('.seriea');
// const laliga = document.querySelector('.laliga');
// let epl = document.querySelector('.epl');
// const serieALink = document.querySelector('.serieA__link');
// const laligaLink = document.querySelector('.laliga__link');
// const eplLink = document.querySelector('.epl__link');

// const serieALink2 = document.querySelector('.serieA__link2');
// const laligaLink2 = document.querySelector('.laliga__link2');
// const eplLink2 = document.querySelector('.epl__link2');




// const serieAContent = document.querySelector('.serieA__content');
// const laligaContent = document.querySelector('.laliga__content');
// const eplContent = document.querySelector('.epl__content');

// const thuShotsA = document.querySelectorAll('.thu__shot a');

// // thuShotsA.forEach(function(e){
// thuShotsA.forEach(shot => {
//   console.log(shot);
//   shot.addEventListener('click', function (e) {
//     e.preventDefault();
//     console.log(shot);

//     shot.classList.add('league__active');
//     // console.log("rex")
//   })
// })

// // })


// serieA.addEventListener('click', function (e) {
//   e.preventDefault();
//   eplContent.classList.remove('display__league--contents');
//   serieAContent.classList.add('display__league--contents');
//   laligaContent.classList.remove('display__league--contents');
//   laligaLink.classList.remove('league__active');
//   eplLink.classList.remove('league__active');
//   serieALink.classList.add('league__active');



//   // e.style.backgroundColor='#1493ff'
//   // e.style.color='white'
// })


// laliga.addEventListener('click', function (e) {
//   e.preventDefault();
//   // serieA.classList.toggle('league__active');
//   laligaContent.classList.add('display__league--contents');

//   serieAContent.classList.remove('display__league--contents');
//   eplContent.classList.remove('display__league--contents');
//   serieALink.classList.remove('league__active');
//   eplLink.classList.remove('league__active');
//   laligaLink.classList.add('league__active');


// })


// epl.addEventListener('click', function (e) {
//   e.preventDefault();
//   // serieA.classList.toggle('league__active');
//   eplContent.classList.add('display__league--contents');
//   serieAContent.classList.remove('display__league--contents');
//   laligaContent.classList.remove('display__league--contents');

//   serieALink.classList.remove('league__active');
//   laligaLink.classList.remove('league__active');
//   eplLink.classList.add('league__active');


// })





// // contest timer

// const countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

// let x = setInterval(function () {
//   let now = new Date().getTime();
//   let distance = countDownDate - now;
//   let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   let seconds = Math.floor((distance % (1000 * 60)) / 1000);


//   const countDown = document.querySelectorAll('.countdown');
//   countDown.forEach(e => {
//     e.innerHTML = `${+minutes}m : ${+seconds}s left`

//     if (distance < 0) {
//       clearInterval(x);
//       e.innerHTML = "Expired";
//     }

//   })


//   // if(distance < 0){
//   //   clearInterval(x);
//   //   countDown.innerHTML="Expired";
//   // }
// }, 1000)



// // leagues__top

// const getLeaguesTopLink = document.querySelectorAll('.leagues__content--top li a');

// getLeaguesTopLink.forEach(e => {
//   console.log(e);

//   e.addEventListener('click', function (e) {
//     e.preventDefault();
//     // tableContents.forEach(e => {
//     //     e.classList.add('display__league--contents');
//     // })
//     // for (const cont of tableContents) {
//     //   cont.classList.add('display__league--contents');
//     // }


//   })
// })


// const tableContents = document.querySelectorAll('.contests__table--contents');


const remaining = document.querySelectorAll('.remaining');
// remaining.forEach(e => {
//   e.addEventListener('click', function (e) {
//     remaining.classList.toggle('fadein');
//   });
// })

const summary=document.querySelector('.summary');
const prices=document.querySelector('.prices');
const entries=document.querySelector('.entries');
const rules=document.querySelector('.rules');


const summaryLink=document.querySelector('.summary__link');
const pricesLink=document.querySelector('.prices__link');
const entriesLink=document.querySelector('.entries__link');
const rulesLink=document.querySelector('.rules__link');


summaryLink.addEventListener('click',function(){
  summary.classList.add('add__remaining');
  prices.classList.remove('add__remaining');
  entries.classList.remove('add__remaining');
  rules.classList.remove('add__remaining');
  summaryLink.classList.add('active__link');
  pricesLink.classList.remove('active__link');
  entriesLink.classList.remove('active__link');


})
pricesLink.addEventListener('click',function(){
  prices.classList.add('add__remaining');
  summary.classList.remove('add__remaining')
  entries.classList.remove('add__remaining');
  rules.classList.remove('add__remaining');
  summaryLink.classList.remove('active__link');
  pricesLink.classList.add('active__link');
  entriesLink.classList.remove('active__link');
  rulesLink.classList.remove('active__link');


})
entriesLink.addEventListener('click',function(){
  entries.classList.add('add__remaining');
  prices.classList.remove('add__remaining');
  summary.classList.remove('add__remaining');
  rules.classList.remove('add__remaining');
  summaryLink.classList.remove('active__link');
  pricesLink.classList.remove('active__link');
  entriesLink.classList.add('active__link');
  rulesLink.classList.remove('active__link');


})
rulesLink.addEventListener('click',function(){
  rules.classList.add('add__remaining');
  entries.classList.remove('add__remaining');
  prices.classList.remove('add__remaining');
  summary.classList.remove('add__remaining');
  summaryLink.classList.remove('active__link');
  pricesLink.classList.remove('active__link');
  entriesLink.classList.remove('active__link');
  rulesLink.classList.add('active__link');
})



