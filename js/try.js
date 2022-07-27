"use strict";
const link = "facebook.com";
console.log(`Hi i'm Tommy, you can connect with me on facebook ${link}`);

const arrow = document.querySelector(".arrow__down");
const menuOpen = document.querySelector(".menuOpen");
const menuClose = document.querySelector(".menuClose");
const navList = document.querySelector(".nav-list");

// arrow.addEventListener("click", () => {
// 	arrow.classList.contains("is-active")
// 		? arrow.classList.remove("is-active")
// 		: arrow.classList.add("is-active");
// });

gsap.set(".menuClose", {
	autoAlpha: 0,
});

menuOpen.addEventListener("click", () => {
	const tl = gsap.timeline();

	tl.to(".menuOpen", {
		y: 20,
		opacity: 0,
	}, 0)
		.fromTo(
			".menuClose",
			{
				y: 20,
				autoAlpha: 0,
			},
			{
				y: 0,
				// opacity: 1,
				autoAlpha: 1,
			}, 0
		)
		.to(".nav-list", {
			// x: 0,
			// xPercent: 0,
			// yPercent: 0,
      width: '60%',
      // onComplete: ()=>{
      //   gsap.to('.nav-list', {clearProps: 'all'})
      // }
		}, 0);
});
menuClose.addEventListener("click", () => {
	const tl = gsap.timeline();

	tl.to(".menuClose", {
		y: 20,
		// opacity: 0,
		autoAlpha: 0,
	}, 0)
		.to(".menuOpen", {
			y: 0,
			opacity: 1,
		}, 0)
		.to(".nav-list", {
			// x: 250,
      width: '0%',
      // xPercent: 100,
      // yPercent: 100,
      onComplete: ()=>{
        gsap.to('.nav-list', {clearProps: 'all'})
      }
		}, 0);
});

gsap.set('.sub-nav-list', {
})
navList.addEventListener('click', (e) => {
  const target = e.target.closest('.dropdown__target');
  if (!target) return;
})

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const menuBar = gsap.timeline({paused: true, clearProps: 'all'});

// menuBar.to(".menuOpen", {
// 		y: 20,
// 		opacity: 0,
// 	}, 0)
// 		.fromTo(
// 			".menuClose",
// 			{
// 				y: 20,
// 				autoAlpha: 0,
// 			},
// 			{
// 				y: 0,
// 				autoAlpha: 1,
// 			}, 0
// )
// .to(['.overlay', '.nav-list'], {
// 	xPercent: 0,
// })
// .fromTo('.nav-item', {
// 	y: -20,
// 	opacity: 0,
// }, {
// 	y: 0,
// 	opacity: 1,
// 	stagger: .2,
// })

// menuBar.timeScale(3)
menuBar.reverse();
// gsap.set(['.overlay', '.nav-list'], {
// 	xPercent: 100,
// })

hamburger.addEventListener('click', () => {
	menuBar.reversed(!menuBar.reversed());
})