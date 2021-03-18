const { doesNotThrow } = require('assert');
const { assert } = require('console');
const { response } = require('express');
var should = require('should'),
    fs = require('fs'), 
    request = require('request');

var pages = ['games', 'events', 'contact', 'profile', 'login'];
var homepageBody;
var navbarBodies = [];

describe('GDA Website Tests', function() {

    //Stores the bodies of each page (homepage, games, events, etc.) for later use
    before(function(done) {

        request.get('http://localhost:3000', function(error, response, body) {

            homepageBody = body; 
        });
        
        pages.forEach(page => {

            request.get('http://localhost:3000/' + page, function(error, response, body) {

                navbarBodies.push(body);
            });
        });

        done();
    });

    //Tests HTTP requests
    describe('Server respondes to requests', function() {
        
        //Tests that the server is responsive 
        it('Server is responsive', function(done) {
            
            request.get('http://localhost:3000', function(error, response, body) {
                
                should.not.exist(error);
                should.exist(response);
                done();
            });
        });

        //Tests invalid GET requests
        it('Responds with 404 error to invalid GET requests', function(done) {
            
            /* 
            Visits 'nopage', a blank page on the website
            Returns status code 404, but not '404, Page Not Found' 
            */
            request.get('http://localhost:3000/nopage', function(error, response, body) {

                response.statusCode.should.be.exactly(404);
                done();
            });
        });
    });

    //Tests that all pages have the correct bodies
    describe('Webpages display correctly', function() {

        it('Homepage displays correctly', function(done) {

            request.get('http://localhost:3000', function(error, response, body) {

                body.should.be.exactly(homepageBody);
                done();
            });
        });
            
        it('Navbar pages display correctly', function(done) {

            var i = 0;
            pages.forEach(page => {
                
                request.get('http://localhost:3000/' + page, function(error, response, body) {

                    body.should.be.exactly(navbarBodies[i]);
                    i++;
                });
            });
            
            done();
        });
    });
});