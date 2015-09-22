/*!
 * MobileList JavaScript Library v1
 * zhangjinglin
 * http://www.wefashional.com/
 *
 */
(function( window, undefined ) {
      var html="";
      var mobileList = function(options){
         return new mobileInit(options);
      }
      function mobileInit(options){
          this.default = {};
          this.options = extend(this.default,options);
          //



      }
      function extend(p,c){
        var i,
            toStr = Object.prototype.toString,
            astr = "[object Array]",
            child = c || {},
            parent = p || {};
        for(i in parent){
            if(parent.hasOwnProperty(i)){
                if(typeof parent[i] === "object"&&!child[i]){
                    child[i] = (toStr.call(parent[i]) === astr) ? [] : {};
                    extend(parent[i], child[i]);
                }else if(!child[i]){
                    child[i] = parent[i];
                }
            }
        }
        return child
    }

})( window );