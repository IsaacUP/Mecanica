'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Factura extends Model {
    hojaDeParte(){
        return this.belongsTo('App/Models/HojaDeParte','hoja_de_parte_id')
    }
}

module.exports = Factura
