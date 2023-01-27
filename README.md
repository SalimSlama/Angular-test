J'ai appliqué des validators sur les champs afin qu'elles seront obligatoirs et affiche des messages d'erreurs en cas d'échec.
j'ai essayé de faire la connexion avec firebase, mais je pense que la version Angular 11 pose des problémes avec firebase 9 d'ou j'ai rencotré
des problémes au niveau des modules importés dans app.modules.ts. (Vous pouvez visulaliser l'insertion du code pour la connexion au firebase dans le fichier environment.ts)

J'ai ajouter une fonction qui vide tous les champs du formulaires aprés l'appui sur le bouton "Save" (resetForm()).

# Test

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.17.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
