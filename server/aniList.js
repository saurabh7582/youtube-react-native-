const port = process.env.PORT || 3000;
const express = require('express')
const app = express()
const bodyParser = require('body-parser')


var unirest = require("unirest");

var req = unirest("POST", "https://anilistmikilior1v1.p.rapidapi.com/getAnimeList");

req.headers({
	"x-rapidapi-host": "Anilistmikilior1V1.p.rapidapi.com",
	"x-rapidapi-key": "ecff49af0fmsh9e46e5f34aee87ap1a2a1ejsnf4c9b5f426c0",
	"content-type": "application/x-www-form-urlencoded",
	"useQueryString": true
});

req.form({});

req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});
