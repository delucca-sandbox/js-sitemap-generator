# JS Sitemap Generator

This service receives a RabbitMQ AMQP message to generate a sitemap based on data on a database. It is integrated with a specific API service to receive the data to create the sitemap. After creating the sitemap, the service sends it to a Amazon S3 Bucket.

## 🧐 What's inside

`UPDATE_SITEMAP`

It is the queue where the service receives a message. It doesnt uses any data from the message, just get it and run the service to update the sitemap.

## 🤖 Installation Instructions

This service is based on Node. To run it you just need to install any version above Node 11.2. We use Docker to build and deploy our services, so you just need to keep the Docker's and CI files, this will trigger the CI automatically.

To install the package, just run:

```
npm i
```

And then, to start the server:

```
npm start
```

Or, you can start the server as development mode:

```
npm run dev
```

After that the server will be up and running, waiting for any API calls.

## 💀 Testing

We use Jest to test our file. Every test file should follow this pattern:

```
<nome>.test.js
```

To test it, just run:
```
npm test
```

## 💅 Versioning

We use [SemVer](https://semver.org/) for versioning.
