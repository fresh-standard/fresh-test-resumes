/**
Mount individual resumes onto the module object for convenience.
@module index.js
@license MIT. See LICENSE.md for details.
*/

(function(){

  module.exports = {
    empty: require('./src/empty.fresh.json'),
    jane: require('./src/jane-fullstacker.fresh.json'),
    johnny: require('./src/johnny-trouble.fresh.json'),
    johnnyBroken: require('./src/johnny-trouble.broken.fresh.json')
  };

}());
