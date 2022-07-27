"use strict";
console.log(
	`Hi i'm Tommy, let's connect on linkedin <a href="www.facebook.com/"> History </a>`
);

const arrow = document.querySelector(".arrow__down");
const menuOpen = document.querySelector(".menuOpen");
const menuClose = document.querySelector(".menuClose");
const navList = document.querySelector(".nav-list");
const hamburger = document.querySelector(".hamburger");
const container = document.querySelector(".container");

gsap.set(".menuClose", {
	autoAlpha: 0,
});
gsap.set(".overlay", {
	xPercent: 100,
	autoAlpha: 0,
});

menuOpen.addEventListener("click", () => {
	const tl = gsap.timeline();

	tl.to(
		".menuOpen",
		{
			y: 20,
			opacity: 0,
		},
		0
	)
		.fromTo(
			".menuClose",
			{
				y: 20,
				autoAlpha: 0,
			},
			{
				y: 0,
				autoAlpha: 1,
			},
			0
		)
		.to([".overlay"], {
			xPercent: 0,
			autoAlpha: 1,
		})
		.to(".nav-list", {
			right: "0%",
		});
});

menuClose.addEventListener("click", () => {
	const tl = gsap.timeline();

	tl.to(
		".menuClose",
		{
			y: 20,
			autoAlpha: 0,
		},
		0
	)
		.to(
			".menuOpen",
			{
				y: 0,
				opacity: 1,
			},
			0
		)
		.to(
			".overlay",
			{
				xPercent: 100,
				autoAlpha: 0,
			},
			0
		)
		.to(
			".nav-list",
			{
				right: "-60%",
				onComplete: () => gsap.to(".nav-list", { clearProps: "all" }),
			},
			0
		);
});

navList.addEventListener("click", (e) => {
	let target = e.target.closest(".dropdown");
	if (!target) return;

	let dropdownArrow = e.target.children[0];
	let dropdownMenu = e.target.nextElementSibling;

	let isActive = e.target.nextElementSibling.classList.contains("is-active");

	!isActive
		? displayDropDown(dropdownArrow, dropdownMenu)
		: hideDropDown(dropdownArrow, dropdownMenu);
});
function displayDropDown(arrow, menu) {
	arrow.style.transform = `rotate(180deg)`;
	menu.style.display = "block";
	menu.classList.add("is-active");
}
function hideDropDown(arrow, menu) {
	arrow.style.transform = `rotate(0deg)`;
	menu.style.display = "none";
	menu.classList.remove("is-active");
}

