const sr = ScrollReveal({
	distance: '55px',
	duration: 1400,
	reset: true
})

sr.reveal('.home-text',{delay: 300, origin:'left'})
sr.reveal('.home-img',{delay: 300, origin:'right'})

sr.reveal('.sub-saude, .receita, .especial',{delay: 100, origin:'bottom'})