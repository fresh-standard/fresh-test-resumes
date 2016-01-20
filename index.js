/**
Mount individual resumes onto the module object for convenience.
@module index.js
@license MIT. See LICENSE.md for details.
*/

(function(){

  var FS = require('fs');
  var PATH = require('path');

  module.exports = {

    fresh: {
      empty: require('./src/fresh/empty.json'),
      jane: require('./src/fresh/jane-fullstacker.json'),
      johnny: require('./src/fresh/johnny-trouble.json'),
      starter: require('./src/fresh/starter-resume.json'),
      // Can't mount a broken resume (invalid JSON)
      //johnnyBroken: require('./src/johnny-trouble.broken.json')
      johnnyBroken: FS.readFileSync(
        PATH.join( __dirname, '/src/fresh/johnny-trouble.broken.json'),
        'utf8'
      )
    },

    jrs: {
      empty: require('./src/jrs/empty.json'),
      johndoe: require('./src/jrs/john-doe.json'),
      richard: require('./src/jrs/richard-hendriks'),
      jane: require('./src/jrs/jane-fullstacker')
    }

  };

}());
