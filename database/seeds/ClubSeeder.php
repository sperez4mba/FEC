<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ClubSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $nombres = array('Barcelona','Real Madrid','Atletico de Madrid','Valencia');

        foreach ($nombres as $nombre)
        {
        	DB::table('clubs')->insert([
        		'nombre' => $nombre,
        	]);
        }
    }
}
