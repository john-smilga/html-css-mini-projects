const getElement = (selector) => {
  const el = document.querySelector(selector)
  if (el) return el
  throw new Error(`Please double check the ${selector}`)
}

const modalBtn = getElement('.modal-btn')
const modal = getElement('.modal-overlay')
const closeBtn = getElement('.close-btn')

modalBtn.addEventListener('click', function () {
  modal.classList.add('open-modal')
})
closeBtn.addEventListener('click', function () {
  modal.classList.remove('open-modal')
})
