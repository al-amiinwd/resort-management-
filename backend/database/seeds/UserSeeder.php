<?php

use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\User::class, 10)->create();
        DB::table('users')->insert([
            'first_name' => "al",
            'last_name' => "amin",
            'phone' => "01918831525",
            'address' => "moghbazar, dhaka",
            'city' => "dhaka",
            'email' => "admin@gmail.com",
            'password' => Hash::make('password'),
            'remember_token' => Str::random(10),
            'is_admin' => 1,
        ]);
    }
}
