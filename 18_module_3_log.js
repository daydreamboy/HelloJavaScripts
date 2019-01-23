define(['logModule'], function(){
    // export (expose) foo for other modules
    return {
        log: function(){
          console.log('Example of AMD module system');    
      }
    };
 });