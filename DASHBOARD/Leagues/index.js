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



