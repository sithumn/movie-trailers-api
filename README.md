# movie-trailers-api
Returns a list of trailers for a given movie

## Setup
Execute the following commands to setup the repository.

* Get the repo from Github
    ```
    git clone https://github.com/sithumn/movie-trailers-api.git
    ```
* Navigate to the movie-trailers-api
    ```
    cd <parent_dirs>/movie-trailers-api
    ```
* Install dependencies
    ```
    npm install
    ```

## Configuration
The configurations are located in `src/config.js`

* Value of the `tmdb.queryParams.api_key` must be replaced with a production key at the deployment.
* `cacheTimeout` can be configured with a suitable value for the configuration, the current configured value is `1 day` in milliseconds.

## Commands
Following are the commands that can be used with the service during implementation and running the service.

### Testing
Test are implemented using `mocha` and `chai`. Instead of calling the actual API endpoints during tests, `nock` is used to mock the API responses from `Viaplay` and `TMDB`

To execute tests, run;
```
npm test
```
### Linting
Using static analysis tool like a linter helps improving the quality of the code by identifying potential issues and eforcing some agreed upon rules among the peers. 

`eslint` is used for the purpose in the service and some configurations are overriden in the standard configuration file `.eslintrc.yml`

To execute lint, run;
```
npm run lint
```

or to excute lint with fixes, run;
```
npm run lint-fix
```

### Tryout the service
To start the service execute the following command

```
npm start
```

Use curl, postman or a browser to send request;
```
curl -X GET http://localhost:3000/focus-2015/trailers | json_pp
```

Sample response;

```
{
   "resource" : "http://content.viaplay.se/pc-se/film/focus-2015",
   "trailers" : [
      {
         "iso_3166_1" : "US",
         "iso_639_1" : "en",
         "key" : "6vY9UPiI4eQ",
         "name" : "Focus - Official Trailer 2 [HD]",
         "official" : true,
         "published_at" : "2014-12-22T20:00:09.000Z",
         "site" : "YouTube",
         "size" : 1080,
         "type" : "Trailer",
         "url" : "https://www.youtube.com/watch?v=6vY9UPiI4eQ"
      },
      {
         "iso_3166_1" : "US",
         "iso_639_1" : "en",
         "key" : "btI7yHxn1NU",
         "name" : "Focus - Official Trailer [HD]",
         "official" : true,
         "published_at" : "2014-10-10T23:29:20.000Z",
         "site" : "YouTube",
         "size" : 1080,
         "type" : "Trailer",
         "url" : "https://www.youtube.com/watch?v=btI7yHxn1NU"
      },
      {
         "iso_3166_1" : "US",
         "iso_639_1" : "en",
         "key" : "A1PqBFHoeTA",
         "name" : "Focus â Teaser Trailer â Official UK Warner Bros.",
         "official" : true,
         "published_at" : "2014-10-09T23:31:07.000Z",
         "site" : "YouTube",
         "size" : 1080,
         "type" : "Trailer",
         "url" : "https://www.youtube.com/watch?v=A1PqBFHoeTA"
      }
   ]
}
```

## Design and implementation

* Implementation is modularized carefully so that each functionality is easily testable and composable, thus improving the quality and maintainability of the code.
* If the service should be run in a serverless environment, it could be easily adapted since the implementation is modular
* Response was designed to contain both the requested resource url, trailer video url and related meta data all associated. Metadata is important when the trailers were displayed in a user interface. Resource link is associated with the trailer data, so that if this service is extended to return trailers related to multiple resource links, the same object template can be used for all the content in an array format response.

    ```
    [
        {
            "resource": "https://content.viaplay.se/pc-se/film/arrival-2016",
            "trailers": [
                {...},
                {...},
                {...}
            ]
        },
        {
            "resource": "https://content.viaplay.se/pc-se/film/avengers-2017",
            "trailers": [
                {...},
                {...},
                {...}
            ]
        }
    ]
    ```
* Caching is implemented to cache the endpoint response. Which is more sensible, for the service is content driven. For the same resource link it should return the same content, in this case trailer urls and metadata. This unless the a new trailer for the movie is realsed. Caching is implemented to a minimal level by giving a sensible default as 1 day. This would make things work for both ways. For a certain resource the current content would cached for 1 day. If a new trailer content is added today. It would be available by tomorrow and will be cached. A more scalable solution for a production environment is to use an external caching solution or a popular nosql db like `Redis`

* When selecting a framework for a the REST API, a few options were considered, including `express js` which is battle tested and has been there for a while. But considering following aspects `fastify` is used as the framework.
    * Testability
    * Support for cross-cutting concerns like logging
    * Validation with schema
    * Performance(according to given [benchmarks](https://www.fastify.io/benchmarks/))

## Left out
* Logging comes out of the box from the framework. No additional attempt made to add log lines to the implementation, but this can be improved.
* API versioning is not added, but it is an important aspect to figure out in a production environment. Different organizations have different approaches, thus it solely depends upon the overal strategy of API versioning.
* Deployment environment is not considered as it could be different from organization to organization and within different teams. But this is quite flexble to adapt to any deployment pattern like serverless or container based.
* `/health` is not implemented, but is a very important part of a service from the monitoring aspect.
* Categorizing the different test levels was left out, but from unit level testing to more integration level tests were implemented.
