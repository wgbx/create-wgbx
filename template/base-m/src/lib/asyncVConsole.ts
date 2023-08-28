if (window.location.href.includes('vconsole')) {
  const script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = '/assets/cdn/vconsole@3.5.2/vconsole.min.js'

  script.onload = function () {
    // eslint-disable-next-line no-new
    new window.VConsole()
  }
  document.body.appendChild(script)
}
