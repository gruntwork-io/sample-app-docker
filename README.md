# Demo Docker App

This folder contains a Docker app that is meant to be used for demonstration
purposes only. You should follow the example in this code in your own apps and
then remove this sample app once things are working.

This Docker container contains a simple _"Hello World!"_ [Node.js][node_js] app.

## Running the app in local development

The provided Docker Compose file allows you to run the app locally in development. To start the container, run:

```
$ docker-compose up
```

Once the stack has launched, you can test the application by navigating to:

- http://localhost:8080/ to access the "Hello World!" message.

## Executing the Tests

Simply run:

```
$ npm run test
```

## Building and pushing the Docker image to Container Registry

1. Configure Docker to use [`gcloud`][gcloud_install_docs] as a credential helper.
   Your Docker client version must be 1.13 or newer.

```
gcloud auth configure-docker
```

2. Build and tag your image.

```
docker build -t [GCP-CONTAINER-REGISTRY-HOSTNAME]/[PROJECT-ID]/sample-app-docker .
```

3. Push the Docker image

```
docker push [GCP-CONTAINER-REGISTRY-HOSTNAME]/[PROJECT-ID]/sample-app-docker
```

The Container Registry hostname will vary according to your region. For more
information, check the [Container Registry docs][cr_docs].

[gcloud_install_docs]: https://cloud.google.com/sdk/docs/
[node_js]: https://nodejs.org
[cr_docs]: https://cloud.google.com/container-registry/docs/pushing-and-pulling
