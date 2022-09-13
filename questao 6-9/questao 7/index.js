const express = require('express')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors({ origin: true }))

const port = process.env.PORT || 8089

app.get('/', (req, res) => {
    res.json(
        [{ "categoria": "Alimentação", "recorrencia": "Diária", "valor": 45.5, "total": 63700, "qtdBeneficiarios": 70 },
        { "categoria": "Combustível", "recorrencia": "Mensal", "valor": 100, "total": 3500, "qtdBeneficiarios": 35 },
        { "categoria": "Cultura", "recorrencia": "Mensal", "valor": 100, "total": 4200, "qtdBeneficiarios": 42 },
        { "categoria": "Educação", "recorrencia": "Anual", "valor": 1200, "total": 42000, "qtdBeneficiarios": 35 },
        { "categoria": "Flexível", "recorrencia": "Mensal", "valor": 120, "total": 7200, "qtdBeneficiarios": 60 },
        { "categoria": "Transporte", "recorrencia": "Diária", "valor": 12, "total": 8400, "qtdBeneficiarios": 35 },
        { "categoria": "Saúde", "recorrencia": "Mensal", "valor": 420, "total": 41160, "qtdBeneficiarios": 70 }]
    )
})

app.listen(port, () => {
    console.log('App listening on host')
})