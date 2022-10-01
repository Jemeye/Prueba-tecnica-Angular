# PruebaTecnica

## Descripción

Este repositorio es creado con el propósito de alojar el software de prueba para la empresa Smartsoft Labs, realizado con el framework Angular, el cual le facilita al usuario las funcionalidades de un CRUD de producto, haciendo peticiones a la API Yard Store.

## API

La API usada en el proyecto es **Yard Store**. Esta API permite peticiones de tipo *GET, POST, PUT y DELETE* a productos, los cuales tienen la siguiente estructura. 

```
{
    "id": 2,
    "title": "Gorgeous Soft Ball X2",
    "price": 535,
    "description": "The Football Is Good For Training And Recreational Purposes",
    "category": {
      "id": 5,
      "name": "Others",
      "typeImg": "animals"
    },
    "images": [
      "https://ibb.co/y886K9w"
    ],
    "categoryId": 5
  }
```

* [Documentación de la API](https://young-sands-07814.herokuapp.com/docs/#/users/UsersController_create)

## ¿Cómo usar?

### Clonar repositorio

Para clonar el repositorio se debe usar el siguiente comando
```
git clone https://github.com/Jemeye/Prueba-tecnica-Angular.git
```
**Es impotarte tener en que la rama usada en el proyecto es la _master_**. 


### Usuario

Para poder ingresar el sistema se deben usar las siguientes credenciales: 

* Username: 
```
admin
```
* Password: 
```
admin**
```

## Funcionamiento General

El proyeto cuenta con dos vistas importante, la vista dashboard y productos. En la primera, se encuentra información resumida de los productos junto con una imagen de este, en la segunda vista, está un matTable con la información de cada uno de los productos y los botones para las funciones de editar, eliminar, y agregar. 

## Protección de rutas

Las rutas del proyecto están protegidas mediante GUARDS, que es una forma de proteger las rutas de acuerdo a una condición en un proyecto Angular. Se usó un Guard de tipo **CanActivate**, que analiza la condición previo a la carga de los componentes de la ruta, la condición usada consiste en verificar si existe un token en el **localstorage**, el cual es generado en el momento en que el usuario inicia sesión. Si el token existe se mustran las rutas, de lo contrario no será posible ingresar a ellas. 

## Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.6.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
