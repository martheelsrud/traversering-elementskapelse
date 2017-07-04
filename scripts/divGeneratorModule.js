    
//module pattern for DIV generator
var DIVGENERATORMODULE = (function(){
            
    var hentElementArray = function(tag, antall){
                
        var elementArray = [];
                
        for(var i = 0; i < antall; i++){
                    
            var $newElement = $("<" + tag + ">")
                .css({
                                "width": "50px",
                                "height": "50px",
                                "background-color": "rgb(150, 150, 150)",
                                "float": "left",
                                "margin": "5px",
                                "opacity": "0.5"
                });
                    
            elementArray.push($newElement);
                    
        }// end for-loop
                
        return elementArray;
                
    }//--end hentElementArray
            
    return {
        hentElementArray: hentElementArray
    }
            
}());//--end HTMLGENERATOR