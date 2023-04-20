onmessage = (e) => {
  console.log(e)
  try {
    postMessage(e.data)
  } catch (e) {
    throw new Error('Test error worker')
  }
}
