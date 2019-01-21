import 'normalize.css'
import './assets/sporting-grotesque/font.css'
import './style.scss'

const solutions = document.getElementById('solutions')

solutions.addEventListener('mouseover', () => {
  document.body.classList.add('hovering')
})

solutions.addEventListener('mouseleave', () => {
  document.body.classList.remove('hovering')
})
