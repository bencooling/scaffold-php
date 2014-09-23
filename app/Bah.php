<?php namespace App;

use App\Interfaces\BahInterface;

class Bah implements BahInterface {
  public function getBah(){
    return 'bah';
  }
}