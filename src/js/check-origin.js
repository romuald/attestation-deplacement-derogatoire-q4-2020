import { $ } from './dom-utils'
import { BASE_HASH } from './base-hash'

export function checkOrigin () {
  fetch('current-hash.json')
    .then((response) => {
      if (!response.ok) {
        return Promise.reject(new Error())
      }

      return response.json()
    })
    .then((data) => {
      const currentHash = data.object.sha

      if (typeof (currentHash) === 'string' && currentHash === BASE_HASH) {
        return
      }

      $('#alert-outdated').classList.remove('d-none')
    })
    .catch(err => {
      // console.error('an error occured', err)
    })
}
