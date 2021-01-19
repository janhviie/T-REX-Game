document.addEventListener('DOMContentLoaded',() =>{

  const dino = document.querySelector('.dino')
  const grid = document.querySelector('.grid')
   const text = document.getElementById('alert')
  let isJumping = false
  let isgameover = false

  function control(e){
    if (e.keyCode === 32 || e.keyCode === 38){
      if(!isJumping){
        isJumping = true
        jump()

      }

    }
  }
function jumpforPhone(){
  isJumping = true
  jump()
}
  document.addEventListener('keyup', control)
document.addEventListener('touchstart', jumpforPhone)
var position=0

function jump(){
  let upid = setInterval(function(){

    if (position === 150){
      clearInterval(upid)

      let downid = setInterval(function(){
        console.log('down')
        if (position === 30){

          clearInterval(downid)
          isJumping = false
        }
        position-=30
         dino.style.bottom=position + 'px'
      }, 20)
    }

    console.log('up')
    position+=30
    dino.style.bottom=position + 'px'
  }, 20)
}

flag=0
function createObstacles(){
  let randomTime = Math.random() * 5000
  let obstaclePos = 1000
const obstacle = document.createElement('img')
obstacle.setAttribute('src', 'cactus.png')
  if(!isgameover) {

    obstacle.classList.add('obstacle')
  grid.appendChild(obstacle)
}
  obstacle.style.left = obstaclePos + 'px'



  let obsid = setInterval(function(){

    if (obstaclePos > 0 && obstaclePos < 50 && position <45){
      clearInterval(obsid)
      isgameover = true
      text.innerHTML = "GAME OVER"

      // remove all children
      while (grid.firstChild) {
        grid.removeChild(grid.lastChild)
      }
    }
    obstaclePos-= 10
    obstacle.style.left =  obstaclePos + 'px'

  }, 20)

  if(!isgameover) setTimeout(createObstacles, randomTime)


}

createObstacles()


function clouds(){
  let cloudPos = 1000
  const cloud = document.createElement('img')
  cloud.setAttribute('src' , 'cloud.png')
  cloud.classList.add('cloud')
  cloud.style.left = "1000px"
  if(!isgameover) grid.appendChild(cloud)



  let id = setInterval(function(){
    if(isgameover){ clearInterval(id)
      while (grid.firstChild) {
        grid.removeChild(grid.lastChild)
      }}
    cloudPos-=30
    cloud.style.left =cloudPos + "px"
  }, 100)

  let randomCld = Math.random() * 10000

  setTimeout(clouds, randomCld)

}


if(!isgameover) clouds()










})
