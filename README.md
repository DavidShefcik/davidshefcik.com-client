# davidshefcik.com client

The client for my portfolio website, [davidshefcik.com](https://www.davidshefcik.com/).

Table of contents:
- [Technology](#Technology)
- [Deployment](#Deployment)

## Technology
This was built using:
- React.js
- CSS Modules
- Apollo GraphQL client
- Webpack
- Babel
- eslint

## Deployment
This project is deployed on Amazon Web Services.
Using CodePipeline and CodeBuild to deploy to an Elastic Beanstalk instance.
CodePipeline watches this GitHub repository for changes and if any changes are detected it starts to deployment process.
Elastic Beanstalk is using all-at-once deployment since this project can afford to have down time.
