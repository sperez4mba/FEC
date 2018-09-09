<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Club extends Model
{
    public function jugadores()
    {
        return $this->hasMany('App\Jugador');
    }
}
