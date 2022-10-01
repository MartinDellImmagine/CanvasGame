



//Global Variables
const canvas = document.querySelector('#root')
const c = canvas.getContext('2d')


canvas.width = 64*16
canvas.height = 64*9


c.fillStyle = 'white'
c.fillRect(0,0,canvas.width,canvas.height)



//create collision blocks

const parsedCollisions = collisionsLevel1.parse2D()
const collisionBlocks = parsedCollisions.createObjectsFrom2D()



//create a backgrounds sprites
const backgroundLevel1 = new Sprite({
    position:{
        x: 0,
        y: 0,
    },
    imageSrc: './Assets/images/img/backgroundLevel1.png'
})

//creating player object
const player = new Player()


//creating keys object
const keys = {
    w: {
        pressed: false
    },
    a: {
        pressed: false
    },
    d: {
        pressed: false
    }
}


//functions 


//animation loop

function animate(){
    window.requestAnimationFrame(animate)
    //console.log('go');

    //cleaning the canvas
    //c.fillStyle = 'white'
    //c.fillRect(0,0,canvas.width,canvas.height)


    //drawing the background img
    backgroundLevel1.draw()
    collisionBlocks.forEach(collisionsBlock =>{
        collisionsBlock.draw()
    })


    //moving player in the x line
    player.velocity.x = 0
    if(keys.d.pressed){
        player.velocity.x = 5
    }else if (keys.a.pressed){
        player.velocity.x = -5
    }
    
    // drawing and updating player
    player.draw()
    player.update()
   
}



//Main program

animate()


