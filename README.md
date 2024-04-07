# PollWidget

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.18.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.



# Angular Poll Widget

## Overview

The Angular Poll Widget is a simple and customizable polling component built with Angular. It allows users to create and display polls with configurable questions and options. Users can vote on their preferred options, and the widget displays the results in real-time. The widget is designed to be easily integrated into Angular applications and provides a responsive and visually appealing user interface.

## Features

- Display polls with configurable questions and options.
- Allow users to vote on their preferred options.
- Display real-time results with percentages.
- Support for multiple questions in a single poll.
- Responsive design for optimal viewing on different devices.
- Customizable styles and animations.

## Setup Instructions

To use the Angular Poll Widget in your Angular application, follow these steps:

1. Install Angular CLI if you haven't already:

   ```bash
   npm install -g @angular/cli

2. Navigate to the project directory:
    ```bash
    cd angular-poll-widget
    npm install
    ng-serve

3. Open your browser and navigate to http://localhost:4200/ to view the poll widget in action.



## Usage

To integrate the poll widget into your Angular application, follow these steps:

1. Import the `PollComponent` into your module:

   ```typescript
   import { PollComponent } from './poll/poll.component';

   @NgModule({
     declarations: [
       PollComponent
     ],
     // Other module configurations
   })
   export class AppModule { }

2. Use the <app-poll> selector in your component's template to display the poll widget:
    ```typescript
    <app-poll></app-poll>

3. Customize the questions and options by modifying the questions array in the PollComponent.
