<?php

use app\Foo;

class FooTest extends \PHPUnit_Framework_TestCase {
  public function testGetBah(){
    $f = new Foo();
    $this->assertEquals('bah', $f->getBah());
  }
}