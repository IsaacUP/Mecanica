'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RepuestoSchema extends Schema {
  up () {
    this.create('repuestos', (table) => {
      table.increments()
      table.timestamps()
      table.string('descripcion',45).notNullable()
      table.integer('costounit').notNullable()
      table.integer('preciounit').notNullable()
      table.integer('imp_parcial').notNullable()
      table.integer('hoja_de_parte_id').unsigned().references('id').inTable('hoja_de_partes').onDelete('cascade')
      table.integer('mecanico_responsable_id').unsigned().references('mecanico_responsable_id').inTable('hoja_de_partes').onDelete('cascade')
    })
  }

  down () {
    this.drop('repuestos')
  }
}

module.exports = RepuestoSchema
