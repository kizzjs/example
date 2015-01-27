var path = require('path');

var config = {
    site: {
        "name": "Kizz Example",
        "description": "Example site for test kizz theme",
        "link": "http://kizzjs.com/kizz-example",
        "keywords": ["kizz", "example"],
        "copyright": "Copyright (C) Kizz Team 2014-2015."
    },
    source: './source',
    target: './site',
    navs: [
        {
            title: 'nav 1',
            link: '#'
        }
    ],
    github: "kizzjs/kizz-example",
    // permalink: ":year/:month/:day/:title.html"
    permalink: function(post) {
        // permalink: ":dirname/:basename/"
        return path.join(post.dirname, post.basename, 'index.html');
    }
};

module.exports = config;
