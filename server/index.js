//Require Express
const express = require('express')


//Create App Instance
const app = express()
const PORT = 4204

//Import Controllers
const characterCtrl = require('./controllers/characterController')

//Top Level Middleware
app.use(express.json())

//EndPoints
app.get('/api/characters', characterCtrl.getCharacter)
app.get('/api/team', characterCtrl.getTeam)
app.post('/api/characters', characterCtrl.addCharacter)
app.delete('/api/characters/:id', characterCtrl.deleteCharacter)
app.put('/api/characters/', characterCtrl.editTeamName)

app.listen(PORT, () => console.log(`Server is running ${PORT}`))