import  Express  from 'express'

const app = Express ()

// const server = createServer((requisicao, resposta) => {
//     console.log('ta funcionando')
//     resposta.write('essa e a resposta do meu servidor atualizado ')

//     return resposta.end()
// })

app.get('/pegar', function (req, res){
    res.send('enviar esta mensagem')
})

app.get('/pegaroutracoisa', function (req, res){
    res.send('esta é mensagem')
})

app.listen(8000)