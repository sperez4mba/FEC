<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class JugadorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $nombres = array('Messi','Busquets','Isco','Griezmann','Rodrigo');
        $ids = array(1,1,2,3,4);
        $avatar_ids = array(34,0,0,1153,0);

        for($i = 0; $i < count($nombres); $i++)
        {
        	DB::table('jugadores')->insert([
        		'nombre' => $nombres[$i],
        		'club_id' => $ids[$i],
			'avatar_id' => $avatar_ids[$i],
        	]);
        }
    }
}
