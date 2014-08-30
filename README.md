# Scaffold PHP

Simple repository for scaffolding PHP projects.

**Dependency management:** composer  
**Unit testing:** phpunit

## installation

Install repo

    git clone git@github.com:bencooling/scaffold-php.git && rm -rf scaffold-php/.git

    composer install

Run phpunit test

    ./vendor/bin/phpunit tests/FooTest.php


Install composer

    curl -s http://getcomposer.org/installer | php