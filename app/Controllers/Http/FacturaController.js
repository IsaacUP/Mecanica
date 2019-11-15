'use strict'
const Factura = use('App/Models/Factura');
const HojaDeParte = use('App/Models/HojaDeParte');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with facturas
 */
class FacturaController {
  /**
   * Show a list of all facturas.
   * GET facturas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let facturas = await Factura.query().with('hojaDeParte').fetch();
    //response.json({facturas:facturas.rows});
    return view.render('facturas.index',{facturas:facturas.toJSON()});
  }

  /**
   * Render a form to be used for creating a new factura.
   * GET facturas/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ params, request, response, view }) {
    let hojaAsignada = await HojaDeParte.find(params.id)

    return view.render('facturas.create',{hojaAsignada:hojaAsignada.toJSON()});
  }

  /**   
   * Create/save a new factura.
   * POST facturas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    await Factura.create(request.all());
    return response.redirect('/hojaDePartes')
  }

  /**
   * Display a single factura.
   * GET facturas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing factura.
   * GET facturas/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
    let factura = await Factura.find(params.id);
    let hojaAsignada = await HojaDeParte.find(factura.hoja_de_parte_id)
    let hojaDePartes = await HojaDeParte.all()
    return view.render('facturas.edit',{factura:factura.toJSON(),hojaDePartes:hojaDePartes.toJSON(),hojaAsignada:hojaAsignada.toJSON()})
  }

  /**
   * Update factura details.
   * PUT or PATCH facturas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    let factura = await Factura.find(params.id);

    factura.merge(request.all());

    await factura.save();

    return response.redirect('/facturas');
  }

  /**
   * Delete a factura with id.
   * DELETE facturas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    let factura = await Factura.find(params.id);

    factura.delete();

    return response.redirect('/facturas');
  }
}

module.exports = FacturaController
