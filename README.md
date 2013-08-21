# Buildpack Adventure II

The second telling of a tale of the Heroku Node.js Buildpack, presented at [BrazilJS 2013](http://braziljs.com.br/).

[ba2.herokuapp.com](http://ba2.herokuapp.com)

## Usage

Tell Grunt to watch for changes in coffee and sass source files:

```
npm install grunt-cli -g
npm install
grunt
```

Fire up a Node server in a Heroku-esque way using Foreman:

```
gem install foreman
foreman start
```

Open up [localhost:5000](http://localhost:5000). Boom.