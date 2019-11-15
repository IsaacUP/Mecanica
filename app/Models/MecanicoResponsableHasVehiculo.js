'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class MecanicoResponsableHasVehiculo extends Model {

    mecanico(){
        return this.belongsTo('App/Models/MecanicoResponsable','mecanico_id')
    }

    vehiculo(){
        return this.belongsTo('App/Models/Vehiculo','vehiculo_id')
    }
}

module.exports = MecanicoResponsableHasVehiculo
