const express= require( 'express');
const app = express()

const porta= 3000

app.get('/',(req,res)=>
{
  res.send('Bem vindo a tela inicial do nosso site')
})
app.get('/api/produtos',(req,res) => {
  res.json([
    {"id":1
"produto":"Fone",
"estoque":10,},

{"id":2,
"produto":"pc",
"estoque":3,},

{"id":3,
"produto":"notebook",
"estoque":5,},

{"id":4,
"produto":"mouse",
"estoque":1,},
])})

app.listen(portal):