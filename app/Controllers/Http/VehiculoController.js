'use strict'
const Vehiculo = use('App/Models/Vehiculo');
const Cliente = use('App/Models/Cliente');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with vehiculos
 */
class VehiculoController {
  /**
   * Show a list of all vehiculos.
   * GET vehiculos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let vehiculos = await Vehiculo.query().with('cliente').fetch();
    //response.json({vehiculos:vehiculos.rows});
    return view.render('vehiculos.index',{vehiculos:vehiculos.toJSON()});
  }

  /**
   * Render a form to be used for creating a new vehiculo.
   * GET vehiculos/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
    let vehiculos = await Vehiculo.all()
    let clientes = await Cliente.all()

    return view.render('vehiculos.create',{clientes:clientes.toJSON(), vehiculos:vehiculos.toJSON()});
  }

  /**   
   * Create/save a new vehiculo.
   * POST vehiculos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    await Vehiculo.create(request.all());
    return response.redirect('/vehiculos')
  }

  /**
   * Display a single vehiculo.
   * GET vehiculos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    let vehiculo = await Vehiculo.find(params.id);
    return response.json(vehiculo);
    //return view.render('vehiculos.show',vehiculo);
  }

  /**
   * Render a form to update an existing vehiculo.
   * GET vehiculos/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
    let vehiculo = await Vehiculo.find(params.id);
    let clientes = await Cliente.all();
    return view.render('vehiculos.edit',{vehiculo:vehiculo.toJSON(),clientes:clientes.toJSON()});
  }

  /**
   * Update vehiculo details.
   * PUT or PATCH vehiculos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    let vehiculo = await Vehiculo.find(params.id);

    vehiculo.merge(request.all());

    await vehiculo.save();

    return response.redirect('/vehiculos');
  }

  /**
   * Delete a vehiculo with id.
   * DELETE vehiculos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    let vehiculo = await Vehiculo.find(params.id);

    vehiculo.delete();

    return response.redirect('/vehiculos');
  }
}

module.exports = VehiculoController
