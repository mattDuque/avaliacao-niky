module.exports = app => {
    const turmas = require("../controllers/turma.controller.js")
    var router = require("express").Router()

    router.post("/", turmas.create)       // Criar nova turma
    router.get("/", turmas.findAll)       // Pesquisar todas as turmas
    router.get("/:id", turmas.findOne)    // Pesquisa turma por id
    router.put("/:id", turmas.update)     // Autualiza turma por id
    router.delete("/:id", turmas.delete)  // Apaga turma por id
    router.delete("/", turmas.deleteAll)  // Apaga todas as turmas
    app.use('/api/turmas', router)
}