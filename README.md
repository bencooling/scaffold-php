# Scaffold PHP

[![Build Status](https://travis-ci.org/bencooling/scaffold-php.svg?branch=master)](https://travis-ci.org/bencooling/scaffold-php)

Scaffold simple PHP app.

## Features

- Dependency management & autoloading with composer  
- Unit testing with phpunit
- Grunt tasks for continuous testing & simple php server
- Simple implementation of:
  - Dependency Injection
  - Interface as contract
  - Namespacing
  - PSR-4 autoloading

## installation

Install repo

    git clone git@github.com:bencooling/scaffold-php.git && rm -rf scaffold-php/.git

    composer install

Run phpunit test

    ./vendor/bin/phpunit tests

Run Grunt for continous testing & php server

    npm install
    grunt

Install composer

    curl -s http://getcomposer.org/installer | php

## TODO

* phpunit Test Suites
* git precommit See: https://chrsm.org/2013/04/25/using-grunt-for-php/ & http://viget.com/extend/grunt-getting-started-with-git-hooks
