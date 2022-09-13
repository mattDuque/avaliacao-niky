module.exports = (sequelize, Sequelize) => {
    const Turma = sequelize.define("turma", {
        horario: {
            type: Sequelize.DATE
        },
        data_init: {
            type: Sequelize.DATE
        },
        data_final: {
            type: Sequelize.DATE
        },
        qtd_max_aluno: {
            type: Sequelize.INTEGER
        },
        tipo_atv: {
            type: Sequelize.STRING
        },
        aluno_monitor: {
            type: Sequelize.INTEGER
        }
    })
    return Turma
}