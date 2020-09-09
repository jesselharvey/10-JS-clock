// let d = new Date()
// console.log(d)
// let clock = document.querySelector(".container")
// console.log(clock)
// let minutes = d.getMinutes
// console.log(minutes)
//------------------------------------------------------------------------------------------------

// function clock() {
//   let time = new Date()
//   let hours = time.getHours()
//   let minutes = time.getMinutes()
//   let seconds = time.getSeconds()
//   setInterval(seconds => {

//   })
//   console.log(time)
// }
//
setInterval(clock, 1000)

function clock() {
  let time = new Date()
  console.log(time)
  let hour = time.getHours()
  let hours = hour == 0 ? 12 : hour > 12 ? hour - 12 : hour
  let minute = time.getMinutes()
  let second = time.getSeconds()
  if (hours <= 9) {
    hours = `0` + hours
  }
  if (minute <= 9) {
    minute = `0` + minute
  }
  if (second <= 9) {
    second = `0` + second
  }

  // if (minute.length < 2) {
  //   hours = "0" + minute
  // }

  // if (second.length < 2) {
  //   hours = "0" + second
  // }
  let finalClock = `${hours}:${minute}:${second}`
  let hexClock = `#${hours}${minute}${second}`
  document.body.style.backgroundColor = hexClock

  // return `${hours}` + ":" + `${minutes}` + ":" + `${seconds}`
  document.querySelector(".clock").innerHTML = finalClock
  document.querySelector(".hex").innerHTML = hexClock
}
// if (hours > 13) {
//   let hours = hours - 12
// }
// document.querySelector(".container").innerHTML = clock()
