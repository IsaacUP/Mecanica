'use strict'

const Mecanico = use('App/Models/MecanicoResponsable');
const Vehiculo = use('App/Models/Vehiculo');
const MecanicoHasVehiculo = use('App/Models/MecanicoResponsableHasVehiculo')
const Database = use('Database')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with mecanicoresponsablehasvehiculos
 */
class MecanicoResponsableHasVehiculoController {
  /**
   * Show a list of all mecanicoresponsablehasvehiculos.
   * GET mecanicoresponsablehasvehiculos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new mecanicoresponsablehasvehiculo.
   * GET mecanicoresponsablehasvehiculos/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ params, request, response, view }) {
    let mecanico = await Mecanico.find(params.id)
    let vehiculos = await Vehiculo.all()

    return view.render('mecanicoHasVehiculos.create',{mecanico:mecanico.toJSON(), vehiculos:vehiculos.toJSON()})
  }

  /**
   * Create/save a new mecanicoresponsablehasvehiculo.
   * POST mecanicoresponsablehasvehiculos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    await MecanicoHasVehiculo.create(request.all());
    return response.redirect('/mecanicosResponsables')
  }

  /**
   * Display a single mecanicoresponsablehasvehiculo.
   * GET mecanicoresponsablehasvehiculos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    let mecanicos = await MecanicoHasVehiculo
      .query()
      .where('mecanico_id', params.id)
      .with('vehiculo')
      .fetch()
    return view.render('mecanicoHasVehiculos.show',{mecanicos:mecanicos.toJSON()});
  }

  /**
   * Render a form to update an existing mecanicoresponsablehasvehiculo.
   * GET mecanicoresponsablehasvehiculos/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update mecanicoresponsablehasvehiculo details.
   * PUT or PATCH mecanicoresponsablehasvehiculos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a mecanicoresponsablehasvehiculo with id.
   * DELETE mecanicoresponsablehasvehiculos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    let mecanicoHasVehiculo = await MecanicoHasVehiculo.find(params.id);

    mecanicoHasVehiculo.delete();

    return response.redirect('/mecanicosResponsables');
  }
}

module.exports = MecanicoResponsableHasVehiculoController
