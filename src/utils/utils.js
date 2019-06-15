export const simulateRequest = data => {
  var promise = new Promise(function(resolve) {
    window.setTimeout(function() {
      resolve({ data })
    }, 5000)
  })
  return promise
}
