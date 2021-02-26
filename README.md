# PokedexApp

## Setup

The first thing to do is to clone the repository:

```sh
$ git clone https://github.com/MrDavid0614/Pokedex-PokeAPI
$ cd Pokedex-PokeAPI
```

## **Backend**

Create a virtual environment to install dependencies in and activate it:

```sh
$ virtualenv2 --no-site-packages env
$ source env/bin/activate
```

Then install the dependencies:

```sh
(env)$ pip install -r requirements.txt
```
Note the `(env)` in front of the prompt. This indicates that this terminal
session operates in a virtual environment set up by `virtualenv2`.

Once `pip` has finished downloading the dependencies:
```sh
(env)$ cd backend
(env)$ python manage.py runserver
```

## **Frontend**

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.2.

## Development server

First run:

```sh
$ cd frontend
```

Then, run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

Also, you can run a docker-compose here:

## **Docker**

Run `docker-compose build` and then `docker-compose up` for start the project container in your PC or run `docker-compose up` which will do both things.

Then go to your browser and navigate to `http://localhost:4200/`, here you'll see the pokedex-app running.
