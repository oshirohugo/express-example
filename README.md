# Express Example

## Geral Description
This is a simple Express Project that can be used as a guide to create your own Express Project.
This dummy project is a simple Weather API, that retrieves the weather data for certains ZipCode or city name. 
No sofisticated error treatment is used, every error is a INTERNAL SERVER ERROR.

## Run the application
This app was developed using node version 8.11.1. So once you have this, install the dependencies:

``` bash
    $ npm install
```

and run the application

``` bash
    $ npm start
```

## Run test
To run the tests:

``` bash
    $ npm test
```

## Build the docker image and run it inside a container
To build the docker image:

``` bash
    $ docker build . -t express-example
```
To run it in detached mode:

``` bash
    $ docker run -d -p <host-port>:9001 --name=<container-name> express-example
```

And if want to see the logs, just remove `-d` from above command.

After you are tired of using it:

``` bash
    $ docker stop <container-name> && docker rm <container-name>
```

## Check the Swagger docs
If you want to see a detailed version run the app and paste `<URL>/documentation` in the inpu from [Swagger UI](http://petstore.swagger.io) demo page.