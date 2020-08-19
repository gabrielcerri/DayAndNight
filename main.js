


window.onload = function () {

		const container = document.querySelector('.container')
		const sun = document.querySelector('.sun')
		const moon = document.querySelector('.moon')
		const plants = document.querySelector('.plants')




		
		let day = new Date()

		let time = day.toLocaleTimeString()


		function noche () {

			container.style.background = 'black'
			sun.style.visibility = 'hidden'
			moon.classList.add('moon-animation')
			plants.classList.add('plants-pos')

		}


		function dia () {

			
			container.style.background = '#fff'
			sun.style.visibility = 'visible'
			sun.classList.add('sun-animation')
			moon.classList.remove('moon-animation')
			plants.classList.add('plants-animation')
		}


		if(time>'18:00:00') {

			noche()


		} else if (time>'09:00:00' && time<'18:00:00') {

			dia()
		}

}