'use strict'
const MecanicoResponsable = use('App/Models/MecanicoResponsable');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with mecanicoResponsables
 */
class MecanicoResponsableController {
  /**
   * Show a list of all mecanicoResponsables.
   * GET mecanicoResponsables
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let mecanicoResponsables = await MecanicoResponsable.all();
    return view.render('mecanicosResponsables.index',{mecanicoResponsables:mecanicoResponsables.toJSON()});
  }

  /**
   * Render a form to be used for creating a new mecanicoResponsable.
   * GET mecanicoResponsables/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
    return view.render('mecanicosResponsables.create');
  }

  /**
   * Create/save a new mecanicoResponsable.
   * POST mecanicoResponsables
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    await MecanicoResponsable.create(request.all());
    return response.redirect('/mecanicosResponsables')
  }

  /**
   * Display a single mecanicoResponsable.
   * GET mecanicoResponsables/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    let mecanicoResponsable = await MecanicoResponsable.find(params.id);
    return response.json(mecanicoResponsable);
    //return view.render('mecanicoResponsables.show',mecanicoResponsable);
  }

  /**
   * Render a form to update an existing mecanicoResponsable.
   * GET mecanicoResponsables/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
    let mecanicoResponsable = await MecanicoResponsable.find(params.id);
    return view.render('mecanicosResponsables.edit',{mecanicoResponsable:mecanicoResponsable});
  }

  /**
   * Update mecanicoResponsable details.
   * PUT or PATCH mecanicoResponsables/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    let mecanicoResponsable = await MecanicoResponsable.find(params.id);

    mecanicoResponsable.merge(request.all());

    await mecanicoResponsable.save();

    return response.redirect('/mecanicosResponsables');
  }

  /**
   * Delete a mecanicoResponsable with id.
   * DELETE mecanicoResponsables/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    let mecanicoResponsable = await MecanicoResponsable.find(params.id);

    mecanicoResponsable.delete();

    return response.redirect('/mecanicosResponsables');
  }
}

module.exports = MecanicoResponsableController
