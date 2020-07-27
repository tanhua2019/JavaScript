const jsonp = function (url) {
  const callbackName = 'whp'
  return new Promise((resolve, reject) => {
    window[callbackName] = function (res) {
      resolve(res)
    }
    let script = document.createElement('script')
    script.setAttribute('src', `${url}` + '?callback=' + `${callbackName}`)
    document.body.appendChild(script)
  })
}

jsonp('http://localhost:3000').then(res => {
  console.log(res)
})
