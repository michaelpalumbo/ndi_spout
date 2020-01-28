const grandiose = require('grandiose');
 
grandiose.find({
    // Should sources on the same system be found?
    showLocalSources: true
})
  .then(console.log)
  .catch(console.error);