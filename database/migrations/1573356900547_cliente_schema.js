'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ClienteSchema extends Schema {
  up () {
    this.create('clientes', (table) => {
      table.increments()
      table.timestamps()
      table.string('cliente',45).notNullable()
      table.string('direccion',45).notNullable()
      table.string('telefono',45).notNullable()
    })
  }

  down () {
    this.drop('clientes')
  }
}

module.exports = ClienteSchema
