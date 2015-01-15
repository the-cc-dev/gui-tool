/*jshint node: true */
"use strict";

var express = require( 'express' );
require('colors');

// Get configured
var config = {},
    documentRoot = {};

var withoutLog = false;
exports.config = config;
if( process.argv.length >= 3) {
    var baseConfig = require( './config.js' );
    config = baseConfig.setEnvironment( process.argv[2] );
    documentRoot = process.argv[3];
} else {
    config = require( './config.js' ).parameters;
}

console.log( config );

if (process.argv.indexOf('without-log')){
    withoutLog = true;
}

var server = module.exports = express();
server.set('env', config.environment );

// Configure the middlewares
server.configure( function() {
        server.use( express.bodyParser() );
        server.use( express.methodOverride() );
        server.use( express.cookieParser() );
        server.use( express.session( {secret: 'keyboard cat'} ) );
        server.use( server.router );
        server.use( express.static( documentRoot ) );
        server.use( '/test', express.static( __dirname + '/../../test'));
    });

server.configure( 'development', function() {
        server.use( express.errorHandler( {
                    dumpExceptions: true,
                    showStack: true
                }));
    });

server.configure( 'production', function() {
        server.use( express.errorHandler() );
    });

function restrict( req, res, next ) {
    next();
}

function accessLogger( req, res, next ) {
    if (!withoutLog)
        console.log( req.method, req.url );
    next();
}

// Routes
server.all("*", accessLogger, restrict);


// Start the server to listen
server.listen( config.port );
console.log( "Express server listening on port %d in %s mode".green,
    config.port, server.settings.env );