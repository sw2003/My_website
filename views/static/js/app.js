window.addEventListener('load', ()=>{
    const app = document.getElementById("app")


    let typewriter = new Typewriter(app, {
        strings: [
            "Hi my name is Sam wen and I like to create things",
            "I enjoy coding and getting things finished",
            "Yeah",
        ], 
        autoStart: true,
        loop: true, 
        delay: 60,
        pauseFor: 3000,
    
    })
})

