'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

Route.get('clientes', 'ClienteController.index');
Route.get('clientes/ver/:id', 'ClienteController.show');
Route.get('clientes/crear', 'ClienteController.create');
Route.post('clientes/crear', 'ClienteController.store');
Route.get('clientes/editar/:id', 'ClienteController.edit');
Route.post('clientes/editar/:id', 'ClienteController.update');
Route.get('clientes/eliminar/:id', 'ClienteController.destroy');

Route.get('mecanicosResponsables', 'MecanicoResponsableController.index');
Route.get('mecanicosResponsables/ver/:id', 'MecanicoResponsableController.show');
Route.get('mecanicosResponsables/crear', 'MecanicoResponsableController.create');
Route.post('mecanicosResponsables/crear', 'MecanicoResponsableController.store');
Route.get('mecanicosResponsables/editar/:id', 'MecanicoResponsableController.edit');
Route.post('mecanicosResponsables/editar/:id', 'MecanicoResponsableController.update');
Route.get('mecanicosResponsables/eliminar/:id', 'MecanicoResponsableController.destroy');

Route.get('vehiculos', 'VehiculoController.index');
Route.get('vehiculos/ver/:id', 'VehiculoController.show');
Route.get('vehiculos/crear', 'VehiculoController.create');
Route.post('vehiculos/crear', 'VehiculoController.store');
Route.get('vehiculos/editar/:id', 'VehiculoController.edit');
Route.post('vehiculos/editar/:id', 'VehiculoController.update');
Route.get('vehiculos/eliminar/:id', 'VehiculoController.destroy');

Route.get('hojaDePartes', 'HojaDeParteController.index');
Route.get('hojaDePartes/ver/:id', 'HojaDeParteController.show');
Route.get('hojaDePartes/crear', 'HojaDeParteController.create');
Route.post('hojaDePartes/crear', 'HojaDeParteController.store');
Route.get('hojaDePartes/editar/:id', 'HojaDeParteController.edit');
Route.post('hojaDePartes/editar/:id', 'HojaDeParteController.update');
Route.get('hojaDePartes/eliminar/:id', 'HojaDeParteController.destroy');

Route.get('repuestos', 'RepuestoController.index');
Route.get('repuestos/ver/:id', 'RepuestoController.show');
Route.get('repuestos/crear', 'RepuestoController.create');
Route.post('repuestos/crear', 'RepuestoController.store');
Route.get('repuestos/editar/:id', 'RepuestoController.edit');
Route.post('repuestos/editar/:id', 'RepuestoController.update');
Route.get('repuestos/eliminar/:id', 'RepuestoController.destroy');

Route.get('facturas/crear/:id', 'FacturaController.create');
Route.post('facturas/crear', 'FacturaController.store');

Route.get('mecanicoHasVehiculos/:id', 'MecanicoResponsableHasVehiculoController.show');
Route.get('mecanicoHasVehiculos/crear/:id', 'MecanicoResponsableHasVehiculoController.create');
Route.post('mecanicoHasVehiculos/crear/', 'MecanicoResponsableHasVehiculoController.store');
Route.get('mecanicoHasVehiculos/eliminar/:id', 'MecanicoResponsableHasVehiculoController.destroy');

