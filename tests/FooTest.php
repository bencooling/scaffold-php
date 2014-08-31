<?php

use App\Foo;
use App\Bah;

class FooTest extends \PHPUnit_Framework_TestCase {
  public function testGetBah(){
    $f = new Foo(new Bah);
    $this->assertEquals('bah', $f->getBah());
  }
}