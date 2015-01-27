var path = require('path');

var config = {
    site: {
        "name": "Kizz Example",
        "description": "Example site for test kizz theme",
        "link": "http://kizzjs.com/kizz-example",
        "copyright": "Copyright (C) Kizz Team 2014-2015."
    },
    github: "kizzjs/kizz-example",
    permalink: function(post) {
        return path.join(post.dirname, post.basename);
    }
};

module.exports = config;
