# Harlan Family of America website

Repository for [The Harlan Family of America](http://www.harlanfamily.org).

Site is built with [Eleventy](https://www.11ty.dev).

## Development

Run `npm start` to start development server (11ty with rollup.js for bundling).

Go to localhost:8080

Refresh site to see code chagnes

## Production

Run `npm run build`

On FTP server, delete the `img` directory. (These files have unique names, so when you copy over the newly built site, it will just keep adding more and more files to the `img` directory and eat up space).

Copy contents of `_site` to `httpdocs` on the FTP server

## Directory structure

## Permalinks


