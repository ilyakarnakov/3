document.addEventListener('DOMContentLoaded', () => {
	
	//Все картинки слайдера должны быть в формате .jpg
	//Больная картинка = маленькая картинка + '_big'
	//Путь главной большой картинки
	const mImgPath = 'images/11_big.jpg'

	//Название большой картинки состоит из: название маленькой картинки + "_big"
	document.querySelectorAll('.product-card__product-small-image').forEach((item) => {
		//При наведении на миниатюру меняем изображение большой картинки
		item.addEventListener('mouseenter', () => {
			let imgPath = item.getAttribute('src')
			let newImgPath = imgPath.substring(0, imgPath.indexOf('.jpg')) + '_big.jpg'
			document.querySelector('.product-card__product-main-image').setAttribute('src', newImgPath)
		})
		//Возвращаем стандартную картинку после того, как пользователь уберет курсор с миниатюры
		item.addEventListener('mouseleave', () => {
			document.querySelector('.product-card__product-main-image').setAttribute('src', mImgPath)
		})
	})

	const counterAdd = document.querySelector('#counter-add')
	const counterRemove = document.querySelector('#counter-remove')
	const inputCounter = document.querySelector('#counter')

	const minValue = 1
	const maxValue = 99


	//Функция стилизации кнопок
	const setStyleCounter = () => {
			counterAdd.classList.remove('counter__button_disable')
			counterRemove.classList.remove('counter__button_disable')

			let valueCounter = Number(inputCounter.getAttribute('value'))

			if (valueCounter === minValue){
				counterRemove.classList.add('counter__button_disable')
				counterAdd.classList.remove('counter__button_disable')
			}

			if (valueCounter === maxValue){
				counterAdd.classList.add('counter__button_disable')
				counterRemove.classList.remove('counter__button_disable')
			}
	}
	
	//Установка стилей для счетчика товаров при первой загрузки
	setStyleCounter()

	//Если при первой загрузке значение выходит за предел ставим 1
	let valueCounter = Number(inputCounter.getAttribute('value'))
	if (valueCounter > maxValue || valueCounter < minValue){
			inputCounter.setAttribute('value', 1)
			setStyleCounter()
		}

	//По нажатию кнопки +1 к значению
	counterAdd.addEventListener('click', () => {
		let valueCounter = Number(inputCounter.getAttribute('value'))

		if (valueCounter < maxValue)
			inputCounter.setAttribute('value', valueCounter + 1)

		setStyleCounter()
	})

	//По нажатию кнопки -1 к значению
	counterRemove.addEventListener('click', () => {

		let valueCounter = Number(inputCounter.getAttribute('value'))

		if (valueCounter > minValue)
			inputCounter.setAttribute('value', valueCounter - 1)

		setStyleCounter()
	})

	//Вывод сообщения через jQuery NotifIt Plugin
	document.querySelector('#button-buy').addEventListener('click', () => {
		let valueCounter = Number(inputCounter.getAttribute('value'))
		notif({
			type: "success",
			msg: "В корзину добавлено " + valueCounter + " товаров!",
			position: "center",
			fade: true
		});
	})


})
