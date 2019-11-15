'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class HojaDeParte extends Model {

    factura(){
        return this.hasOne('App/Models/Factura')
    }

    mecanico(){
        return this.belongsTo('App/Models/MecanicoResponsable','mecanico_responsable_id')
    }

    repuesto(){
        return this.hasMany('App/Models/Respuesto')
    }
}

module.exports = HojaDeParte
