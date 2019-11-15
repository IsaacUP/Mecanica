'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class MecanicoResponsable extends Model {
    hojaDeParte(){
        return this.hasMany('App/Models/HojaDeParte')
    }
    mecanicoHasVehiculo(){
        return this.hasMany('App/Models/MecanicoResponsableHasVehiculo')
    }
}

module.exports = MecanicoResponsable
