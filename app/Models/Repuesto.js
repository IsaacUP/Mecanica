'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Repuesto extends Model {
    hojaDeParte(){
        return this.belongsTo('App/Models/HojaDeParte','hoja_de_parte_id')
    }  
    
    mecanico(){
        return this.belongsTo('App/Models/HojaDeParte','mecanico_responsable_id')
    }
}

module.exports = Repuesto
