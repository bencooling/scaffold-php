# Scaffold PHP

Scaffold simple PHP app.

Features:
- **Dependency management & autoloading:** composer  
- **Unit testing:** phpunit
- Simple implementation of design patterns:
  - Dependency Injection
  - Interface as contract (Program to an interface not implementation)


## installation

Install repo

    git clone git@github.com:bencooling/scaffold-php.git && rm -rf scaffold-php/.git

    composer install

Run phpunit test

    ./vendor/bin/phpunit tests/FooTest.php


Install composer

    curl -s http://getcomposer.org/installer | php