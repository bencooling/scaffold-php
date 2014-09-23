# Scaffold PHP

Scaffold simple PHP app.

Features:
- **Dependency management & autoloading:** composer  
- **Unit testing:** phpunit
- Simple implementation of:
  - Dependency Injection
  - Interface as contract (Program to an interface not implementation)
  - Namespacing & autoloading


## installation

Install repo

    git clone git@github.com:bencooling/scaffold-php.git && rm -rf scaffold-php/.git

    composer install

Run phpunit test

    ./vendor/bin/phpunit tests/FooTest.php

    ./vendor/bin/phpunit tests --bootstrap vendor/autoload.php


Install composer

    curl -s http://getcomposer.org/installer | php