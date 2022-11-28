# Serverless AWS Lambda Quickstart with NodeJS and Dependency Injection

This template demonstrates how to deploy a NodeJS function running on AWS Lambda using the traditional Serverless Framework.

On the other hand, this example has been built using [awilix](https://github.com/jeffijoe/awilix) npm package in order to support Dependency Injection in a similar way as we used to do with [systemic](https://github.com/guidesmiths/systemic).

The main features implemented in this template are:
1. components. Injectable pieces of code with their own unit tests:
- logging injectable component (using pino library)
- config injectable component (but global, not scoped to a component)
- sample controller injectable component

2. handlers. handlers for events that trigger lambdas.
- sns sample handler
- http sample handler
- schemas. for input schema validation
- utils. standard http response generator

3. serverless. basic serverless config
- support for .env file
- support for localstack infra

4. other. this could be removed in template in case we integrate with tools like cuckoojs
- eslint
- gitignore
- a folder with fixtures for local development
- more features could be added like husky, but let's see what is implemented here and what in a final template

## Usage

In order to test it locally:
1. Setup local infra: `npm run infra:up`
2. Create your `.env` file based on the `.env.sample` file
3. run `FUNCTION=functionName INPUT=fixtureName npm run invoke:local`
