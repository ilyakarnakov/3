let buttonAdd  = document.querySelector('#counter_add')
let buttonRemove  = document.querySelector('#counter_remove')

buttonAdd.onclick = () => {
	let counter  = document.querySelector('#counter')
	let value = Number(counter.getAttribute('value'))
	if (value < 99){
		counter.setAttribute('value', value + 1)
		change()
	}
}

buttonRemove.onclick = () => {
	let counter  = document.querySelector('#counter')
	let value = Number(counter.getAttribute('value'))
	if (value > 1){
		counter.setAttribute('value', value - 1)
		change()
	}
}

const change = () => {
	let counter  = document.querySelector('#counter')
	let value = Number(counter.getAttribute('value'))

	if (value > 1 && value < 99){
		buttonRemove.classList.remove('counter__button_disable')
		buttonAdd.classList.remove('counter__button_disable')
	}

	if(value === 1) {
		buttonRemove.classList.add('counter__button_disable')
		buttonAdd.classList.remove('counter__button_disable')
	}
	if(value === 99){
		buttonAdd.classList.add('counter__button_disable')
		buttonRemove.classList.remove('counter__button_disable')
	}

}

change()