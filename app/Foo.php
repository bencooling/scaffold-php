<?php namespace App;

use App\Interfaces\FooInterface;
use App\Interfaces\BahInterface;

class Foo implements FooInterface {

  protected $bah;

  /**
   * [__construct description]
   * @param BahInterface $bah
   */
  public function __construct(BahInterface $bah){
    $this->bah = $bah;
  }

  /**
   * [getBah description]
   * @return [type]
   */
  public function getBah(){
    return $this->bah->getBah();
  }

}