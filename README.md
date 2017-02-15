# `angular-form-test` — a form prototype built by angular

This project is just a prototype for an interview.


## Getting Started

To get you started you can simply clone the `angular-form-test` repository and install the dependencies:

### Prerequisites

You need git to clone the `angular-form-test` repository. You can get git from [here][git].

We also use a number of Node.js tools to initialize and test `angular-form-test`. You must have Node.js
and its package manager (npm) installed. You can get them from [here][node].

### Clone `angular-form-test`

Clone the `angular-form-test` repository using git:

```
git clone https://github.com/zhaotai/angular-form-test.git
cd angular-form-test
```

If you just want to start a new project without the `angular-form-test` commit history then you can do:

```
git clone --depth=1 https://github.com/zhaotai/angular-form-test.git <your-project-name>
```

The `depth=1` tells git to only pull down one commit worth of historical data.

### Install Dependencies

We have two kinds of dependencies in this project: tools and Angular framework code. The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the [Node package manager][npm].

```
npm install
```

* `node_modules` - contains the npm packages for the tools we need

### Run the Application

We have preconfigured the project with a simple development web server. The simplest way to start
this server is:

```
npm start
```

Now browse to the app at [`localhost:8000/index.html`][local-app-url].


## Directory Layout

```
app/                    --> all of the source files for the application
  app.css               --> default stylesheet
  components/           --> all app specific modules
    my-typeahead/              --> directive related components
      typeahead-directive.html     --> directive template
      typeahead-directive.js       --> custom directive
  data/                 --> data directory
    users.json          --> simulate the REST api
  form/                --> the form view template and logic
    form.html            --> the partial template
    form.css             --> the template css
    form.js              --> the controller logic
    form_test.js         --> tests of the controller
  libs/                 --> all the dependencies
    **/*.js
  app.js                --> main application module
  index.html            --> app layout file (the main html template file of the app)
karma.conf.js         --> config file for running unit tests with Karma`
```


## Testing

There are two kinds of tests in the `angular-form-test` application: Unit tests and end-to-end tests.

### Running Unit Tests

The `angular-form-test` app comes preconfigured with unit tests. These are written in [Jasmine][jasmine],
which we run with the [Karma][karma] test runner. We provide a Karma configuration file to run them.

* The configuration is found at `karma.conf.js`.
* The unit tests are found next to the code they are testing and have an `_test.js` suffix (e.g.
  `form_test.js`).

The easiest way to run the unit tests is to use the supplied npm script:

```
npm test
```

This script will start the Karma test runner to execute the unit tests. Moreover, Karma will start
watching the source and test files for changes and then re-run the tests whenever any of them
changes.
This is the recommended strategy; if your unit tests are being run every time you save a file then
you receive instant feedback on any changes that break the expected code functionality.

You can also ask Karma to do a single run of the tests and then exit. This is useful if you want to
check that a particular version of the code is operating as expected. The project contains a
predefined script to do this:

```
npm run test-single-run
```
