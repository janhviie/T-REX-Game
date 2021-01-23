document.addEventListener('DOMContentLoaded',() =>{

  const dino = document.querySelector('.dino')
  const grid = document.querySelector('.grid')
   const text = document.getElementById('alert')
   const btn = document.getElementById('replay')
   const ss = document.getElementById('scoreval')
const line = document.createElement('div')
let finalscore
line.classList.add("line")
line.style.width = screen.width + "px";
grid.appendChild(line)

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
var position=150

// fun to bounce the dinooo

function jump(){
  let upid = setInterval(function(){

    if (position === 300){
      clearInterval(upid)

      let downid = setInterval(function(){
        console.log('down')
        if (position === 180){

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
  }, 30)
}

// update score val

scoreval = document.createElement('h2')
scoreval.classList.add('score')
scoreval.innerText = "SCORE: 00000"
val = 0

function score() {
 let scoreid = setInterval(function(){

   if(isgameover)
     clearInterval(scoreid)

   finalscore = val


   val+=1
   scoreval.innerText = "SCORE: " +val
   grid.appendChild(scoreval)
 }, 30)
}
if(!isgameover) score()



// to create obstacles


flag=0
function createObstacles(){
  let randomTime = Math.random() * 5000
  let obstaclePos = 1000
const obstacle = document.createElement('img')
obstacle.setAttribute('src', '_cactus.png')
  if(!isgameover) {

    obstacle.classList.add('obstacle')
  grid.appendChild(obstacle)
}
  obstacle.style.left = obstaclePos + 'px'



  let obsid = setInterval(function(){

    if (obstaclePos > 0 && obstaclePos < 55 && position <170){
      clearInterval(obsid)
      isgameover = true
      text.innerHTML = "G A M E    O V E R !"
      ss.innerHTML = "S C O R E : "+ finalscore
      btn.setAttribute('src', 'button.png')
      btn.addEventListener("click", function() {
        location.reload()
      })

      // remove all children
      while (grid.firstChild) {
        grid.removeChild(grid.lastChild)
      }
    }
    obstaclePos-= 10
    obstacle.style.left =  obstaclePos + 'px'

  }, 35)
setTimeout(function(){
  if(!isgameover) setTimeout(createObstacles, randomTime)
}, 1000)



}

createObstacles()


// to create clouds

function clouds(){
  let cloudPos = 1000
  const cloud = document.createElement('img')
  cloud.setAttribute('src' , '_cloud2.png')
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
    var r = Math.random() * 1000
    if(r%2){
    cloud.style.top = "110px"
  }


}, 1000)

  let randomCld = Math.random() * 60000

  setTimeout(clouds, randomCld)

}

setTimeout(function(){
if(!isgameover) clouds()
}, 5000)







})
