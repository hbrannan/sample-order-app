# Customer Form App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Development server

Run `ng serve` for a dev server at `http://localhost:4200/`. The app utilized live reload if for any source files.

## App Layout
App -- layout, module imports, declarations, providers and bootstrapping
Components -- Box Options (box) & Form (box-detail); TODO: ea. form grouping abstracted to component both to improve flow of user experience and for repeatability between apps
Data-Services -- HTTP, mock data


##TODOs
-Increase specificity & robustness of tests
-Pull from shippingOptions, dimensions, materials at load (eventually over server)
-Pull from subsets shippingOptions, dimensions, materials as move through selections
-Calculate shipping costs, shipping costs (do this client side) as user orders

-(Moving towards websockets): check for status updates (on DB) on load. Setup webhooks that can be called when a step is completed while user is logged on.

#Testing TODOs

## Unit tests setup

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## End-to-end test setup

TODO. Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Must be serving the app via `ng serve`.

## Bitmap test setup

TODO Run `ng ` to execute bitmap & regression tests via [Backstop](https://github.com/garris/BackstopJS).
Must be serving the app via `ng serve`.(.js)

## Compatibility Testing

TODO -- Initially: manually test via [Browserstack](https://www.browserstack.com/)
Possibly upgrade to automation testing, e.g., via [Cucumber]
