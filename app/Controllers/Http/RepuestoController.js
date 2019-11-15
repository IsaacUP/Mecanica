'use strict'
const Repuesto = use('App/Models/Repuesto');
const HojaDeParte = use('App/Models/HojaDeParte');
const Mecanico = use('App/Models/MecanicoResponsable');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with repuestos
 */
class RepuestoController {
  /**
   * Show a list of all repuestos.
   * GET repuestos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let repuestos = await Repuesto.query().with('hojaDeParte').with('mecanico').fetch();
    //response.json({repuestos:repuestos.rows});
    return view.render('repuestos.index',{repuestos:repuestos.toJSON()});
  }

  /**
   * Render a form to be used for creating a new repuesto.
   * GET repuestos/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
    let hojaDePartes = await HojaDeParte.all()
    let mecanicos = await Mecanico.all();

    return view.render('repuestos.create',{hojaDePartes:hojaDePartes.toJSON(), mecanicos:mecanicos.toJSON()});
  }

  /**   
   * Create/save a new repuesto.
   * POST repuestos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    await Repuesto.create(request.all());
    return response.redirect('/repuestos')
  }

  /**
   * Display a single repuesto.
   * GET repuestos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    let repuesto = await Repuesto.find(params.id);
    return response.json(repuesto);
    //return view.render('repuestos.show',repuesto);
  }

  /**
   * Render a form to update an existing repuesto.
   * GET repuestos/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
    let repuesto = await Repuesto.find(params.id);
    let hojaAsignada = await HojaDeParte.find(repuesto.hoja_de_parte_id)
    let mecanicoAsignado = await Mecanico.find(repuesto.mecanico_responsable_id)
    let mecanicos = await Mecanico.all()
    let hojaDePartes = await HojaDeParte.all()
    return view.render('repuestos.edit',{repuesto:repuesto.toJSON(),hojaDePartes:hojaDePartes.toJSON(),hojaAsignada:hojaAsignada.toJSON(), mecanicoAsignado:mecanicoAsignado.toJSON(), mecanicos:mecanicos.toJSON()})
  }

  /**
   * Update repuesto details.
   * PUT or PATCH repuestos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    let repuesto = await Repuesto.find(params.id);

    repuesto.merge(request.all());

    await repuesto.save();

    return response.redirect('/repuestos');
  }

  /**
   * Delete a repuesto with id.
   * DELETE repuestos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    let repuesto = await Repuesto.find(params.id);

    repuesto.delete();

    return response.redirect('/repuestos');
  }
}

module.exports = RepuestoController
