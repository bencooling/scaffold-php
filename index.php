<?php

require 'vendor/autoload.php';

use App\Foo;
use App\Bah;

$f = new Foo(new Bah);
echo $f->getBah();