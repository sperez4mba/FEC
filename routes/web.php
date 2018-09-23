<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/jugadores', function () {
    return view('listar_jugadores');
});

Route::get('/jugadores/{id}', function ($id) {
    return view('detallar_jugador')->with(['jugador_id'=>$id]);
});

