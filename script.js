const expandBtns = document.querySelectorAll('.fa-chevron-down');
const collapseBtns = document.querySelectorAll('.fa-times');

expandBtns.forEach((btn) => {
	btn.addEventListener('click', (e) => {
		e.target.closest('div').classList.toggle('active');
	});
});

collapseBtns.forEach((btn) => {
	btn.addEventListener('click', (e) => {
		e.target.closest('div').classList.toggle('active');
	});
});
