<?php

use App\Foo;
use App\Bah;

require 'vendor/autoload.php';

$f = new Foo(new Bah);
echo $f->getBah();