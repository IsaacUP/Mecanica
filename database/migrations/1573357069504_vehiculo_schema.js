'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class VehiculoSchema extends Schema {
  up () {
    this.create('vehiculos', (table) => {
      table.increments()
      table.timestamps()
      table.string('modelo',45).notNullable()
      table.string('color',45).notNullable()
      table.datetime('fecha_ent').notNullable()
      table.time('hora_ent').notNullable()
      table.integer('cliente_id').unsigned().references('id').inTable('clientes').onDelete('cascade')
    })
  }

  down () {
    this.drop('vehiculos')
  }
}

module.exports = VehiculoSchema
