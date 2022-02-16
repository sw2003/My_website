const express = require("express") 
const app = express() 

app.set('view engine', 'ejs')
app.use(express.static("views"))

app.get("/", (req, res) => { 
    res.render("static/templates/index")
})

app.get("/projects", (req, res) =>{
    res.render("static/templates/projects")
})

app.get("/contact", (req, res) => {
    res.render("static/templates/contact")
})

app.listen(3000)
