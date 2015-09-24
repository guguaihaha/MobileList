/*!
 * MobileList JavaScript Library v1
 * zhangjinglin
 * http://www.wefashional.com/
 *
 */
(function( window, undefined ) {
      var html="";
      var mobileList = function(selector,options){
         return new mobileInit(selector,options);
      }
      function mobileInit(selector,options){
          this.selector = selector;
          this.default = {
                          destory:true,
                          url:"",
                          type:"get",
                          theme:"ios"
                          }
          this.options = extend(this.default,options);
          return this;
      }
      //
       mobileInit.fn = mobileInit.prototype = {
           show:function(){
              var options = this.options,
              selector = this.selector,
              element = document.querySelector(selector);
               if(!element){
                   throw "No match element";
                   return;
               }
              var n_element = element.children;
              if(n_element.length>1){
                  throw "Layout rules not match";
                  return;
              }
              var c_elements = n_element[0].children;
           },
           hide:function(){
              var options = this.options;

           },
           success:function(){

           }
       };
      //
      //

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

     window.mobileList = mobileList;

})( window );