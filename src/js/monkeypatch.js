import { $, $$ } from './dom-utils'

function rememer () {
  // onChange event for inputs
  const key = `saved-${this.id}`
  const value = this.value.replace(/ +$/, '')

  if (value === '') {
    window.localStorage.removeItem(key)
  } else {
    window.localStorage.setItem(key, value)
  }
}

export function rememberFields () {
  // Attach onChange event to text fields
  const NAMES = `firstname lastname birthday placeofbirth
         address city zipcode`.split(/\s+/)

  NAMES.forEach((name) => {
    const input = $(`#field-${name}`)

    input.addEventListener('change', rememer)

    const key = `saved-${input.id}`
    const value = window.localStorage.getItem(key)

    if (value !== null) {
      input.value = value
    }
  })
}

export function beautifyLabels () {
  // Add short header to each label to find them easily
  const checkboxes = $$('#reason-fieldset input[type="checkbox"]')
  checkboxes.forEach((input) => {
    const label = $(`label[for="${input.id}"]`)
    if (!label) {
      return
    }

    let value = input.value
    value = value.charAt(0).toUpperCase() + value.slice(1)
    value = value.replace(/_/, ' ')
    input.style.marginTop = '.4rem'
    label.innerHTML = `<h5>${value}</h5>${label.innerHTML}`
  })
}
