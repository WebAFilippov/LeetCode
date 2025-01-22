/**
 * @param {number} millis
 * @return {Promise}
 */

let t = Date.now()

async function sleep(millis) {
  return new Promise((res, rej) => {
    try {
      setTimeout(() => {
        res(millis)
      }, millis)
    } catch (error) {
      rej(error)
    }
  })
}