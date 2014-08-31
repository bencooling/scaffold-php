<?php namespace App;

use App\BahInterface;

class Foo implements FooInterface {

  protected $bah;

  public function __construct(BahInterface $bah){
    $this->bah = $bah;
  }
  
  public function getBah(){
    return $this->bah->getBah();
  }
}