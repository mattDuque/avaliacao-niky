const db = require("../models")
const Turma = db.turmas
const Op = db.Sequelize.Op

// Criar e salvar uma nova turma
exports.create = (req, res) => {
    // Definir a turma
    const turma = {
        horario: req.body.horario,
        data_init: req.body.data_init,
        data_final: req.body.data_final,
        qtd_max_aluno: req.body.qtd_max_aluno,
        tipo_atv: req.body.tipo_atv,
        aluno_monitor: req.body.aluno_monitor
    }
    // Salvar Turma no banco de dados
    Turma.create(turma)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Um erro occorreu durante a requisição"
            })
        })
}
// Pesquisa todas as turmas no banco de dados
exports.findAll = (req, res) => {
    Turma.findAll()
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Um erro occorreu durante a requisição"
            })
        })
}
// Pesquisa uma turma por id
exports.findOne = (req, res) => {
    const id = req.params.id
    Turma.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data)
            } else {
                res.status(404).send({
                    message: `Não foi possível econtrar turma com id ${id}.`
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || `Um ocorreu erro ao pesquisar turma com id ${id}`
            })
        })
}
// Atualiza uma turma de acordo com id
exports.update = (req, res) => {
    const id = req.params.id
    Turma.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Turma foi atualizada com sucesso"
                })
            } else {
                res.send({
                    message: `Não foi possível atualizar turma com id ${id}. Talver a turma não foi encontrada ou req.body esta vazio`
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || `Um ocorreu erro ao atualizar turma com id ${id}`
            })
        })
}
// Apaga uma turma de acordo com id
exports.delete = (req, res) => {
    const id = req.params.id
    Turma.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Turma foi apagada com sucesso"
                })
            } else {
                res.send({
                    message: `Não foi possível apgar turam com id ${id}. Talver a turma não foi encontrada`
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || `Um ocorreu erro ao apagar turma com id ${id}`
            })
        })
}
// Apaga todas as turmas do banco de dados
exports.deleteAll = (req, res) => {
    Turma.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} turmas foram apagadas com sucesso` })
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || `Um ocorreu erro ao apagar as turmas`
            })
        })
}
