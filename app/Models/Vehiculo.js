'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Vehiculo extends Model {
    cliente(){
        return this.belongsTo('App/Models/Cliente','cliente_id')
    }

    mecanicoHasVehiculo(){
        return this.hasMany('App/Models/MecanicoResponsableHasVehiculo')
    }

    static get dates () {
        return super.dates.concat(['fecha_ent'])
      }

    getFechaEnt(fecha_ent) {
        return fecha_ent.format('DD-MM-YYYY')
    }

}

module.exports = Vehiculo
