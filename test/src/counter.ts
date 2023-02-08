import main from './ciao'

export function setupCounter(element: HTMLButtonElement) {
  element.textContent = 'Click me!'
  element.addEventListener('click', () => {
    main('https://backend.yu-gi-yn.com/metadata/', 8888, 'type', 'violences').then((res) => {
        alert(res)
    })
  })
}
