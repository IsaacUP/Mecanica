'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FacturaSchema extends Schema {
  up () {
    this.create('facturas', (table) => {
      table.increments()
      table.timestamps()
      table.datetime('fecha').notNullable()
      table.integer('imp_pesos').notNullable()
      table.integer('imp_dol').notNullable()
      table.integer('rfc').notNullable()
      table.integer('hoja_de_parte_id').unsigned().references('id').inTable('hoja_de_partes').onDelete('cascade')
    })
  }

  down () {
    this.drop('facturas')
  }
}

module.exports = FacturaSchema
