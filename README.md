# CheckYourself

## Description

This application allows a user to add food entries for a day to catalog what they ate, how many calories it had and additional notes. The user can add and update entries.

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.28.3.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to GitHub Pages

Run `ng github-pages:deploy` to deploy to GitHub Pages.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Planning

1. Configuration/dependencies
  * NPM (Development)
    * @angular/cli (Populates  an Angular application)
    * @angular/compiler-cli (Compiles TypeScript into JavaScript in which browsers can understand)
    * Jasmine - core, spec-reporter  (Behavior-driven development framework for testing JavaScript code)
    * Node (JavaScript runtime built on Chrome's V8 JavaScript engine)
    * ts-node (TypeScript execution environment for node)
    * typescript (A superset of JavaScript that compiles to clean JavaScript output)
    * codelyzer (Helps write consistent code, and discover potential errors)
    * gulp-concat (concatenates files into one)
    * karma - chrome-launcher, cli, jasmine, jasmine-html-reporter, coverage-istanbul-reporter (Allows you to execute JavaScript code in multiple real browsers)
    * protractor (end-to-end test framework for Angular and AngularJS applications)
    * tslint (Checks your TypeScript code for readability, maintainability, and functionality errors)

  * bower (Production)
    * Bootstrap

 2. Components

  * entries: Will display all or chosen entries to user.
  * new-entries: Will allow user to enter a new entry and display it on entries view.
  * edit-entries: Will allow user to edit/update a chosen entry and display it on entries view.
  * calorie-pipe: Will allow user to only view high-calorie foods (more than 500 calories), or only lower-calorie foods (less than 500 calories).
  * entry-model: Allow all components to use Entry class.

3. UX/UI
  * Include and modify bootstrap.
  * Develop custom style

## legal

Copyright (c) 2017 Copyright Holder All Rights Reserved.
