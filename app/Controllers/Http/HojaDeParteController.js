'use strict'
const HojaDeParte = use('App/Models/HojaDeParte');
const Mecanico = use('App/Models/MecanicoResponsable');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with hojadepartes
 */
class HojaDeParteController {
  /**
   * Show a list of all hojadepartes.
   * GET hojadepartes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let hojaDePartes = await HojaDeParte.query().with('mecanico').fetch();
    //response.json({hojaDePartes:hojaDePartes.rows});
    return view.render('hojaDePartes.index',{hojaDePartes:hojaDePartes.toJSON()});
  }

  /**
   * Render a form to be used for creating a new hojadeparte.
   * GET hojadepartes/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
    let hojaDePartes = await HojaDeParte.all()
    let mecanicos = await Mecanico.all()

    return view.render('hojaDePartes.create',{mecanicos:mecanicos.toJSON(), hojaDePartes:hojaDePartes.toJSON()});
  }

  /**
   * Create/save a new hojadeparte.
   * POST hojadepartes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    await HojaDeParte.create(request.all());
    return response.redirect('/hojaDePartes')
  }

  /**
   * Display a single hojadeparte.
   * GET hojadepartes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    let hojaDeParte = await HojaDeParte.find(params.id);
    return response.json(hojaDeParte);
  }

  /**
   * Render a form to update an existing hojadeparte.
   * GET hojadepartes/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
    let hojaDeParte = await HojaDeParte.find(params.id);
    let mecanicoAsignado = await Mecanico.find(hojaDeParte.mecanico_responsable_id);
    let mecanicos = await Mecanico.all();
    return view.render('hojaDePartes.edit',{hojaDeParte:hojaDeParte.toJSON(),mecanicos:mecanicos.toJSON(),mecanicoAsignado:mecanicoAsignado.toJSON()});
  }

  /**
   * Update hojadeparte details.
   * PUT or PATCH hojadepartes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    let hojaDeParte = await HojaDeParte.find(params.id);

    hojaDeParte.merge(request.all());

    await hojaDeParte.save();

    return response.redirect('/hojaDePartes');
  }

  /**
   * Delete a hojadeparte with id.
   * DELETE hojadepartes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    let hojaDeParte = await HojaDeParte.find(params.id);

    hojaDeParte.delete();

    return response.redirect('/hojaDePartes');
  }
}

module.exports = HojaDeParteController
