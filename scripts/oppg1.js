//APP/module pattern
var MANGEDIV_APP = {
            
    //HTML-objekter
    $divSection: null,
    divArray: null,
            
    //init
    init: function(){
                
        var setElements = function(){
                    
            MANGEDIV_APP.$divSection = $("#divSection");

        }();

        var divGenerering = function(){

            //generering av div-boksene
            $("#generereDivBtn") 
                .click(function(){
                    var MD = MANGEDIV_APP;
                    var divInput = $("#antallDivTxt").val(); 

                    for (i = 0; i < divInput; i++){
                        MD.divArray = DIVGENERATORMODULE.hentElementArray("div", 1); 
                        MD.$divSection.append(MD.divArray);
                    }

                });

        }(); //end divGenerering
                
        var setEvents = function(){

            $("div", MANGEDIV_APP.$divSection)

                .mouseenter(function(){
                    $(this)
                        .css({
                            "opacity": "1"
                            });
                }) //end MANGEDIV mouseenter

                .mouseleave(function(){
                    $(this)
                        .css({
                            "opacity": "0.5"
                        });
                }) //end MANGEDIV mouseleave

    
                .click(function(){
                    $(this)
                        .prev().andSelf().next()
                            .css({
                                "background-color": "rgb(100, 100, 100)"
                            });
                        }) //end MANGEDIV click next

                .dblclick(function(){
                    $(this)
                        .prevAll().andSelf().nextAll()
                            .css({
                                "background-color": "rgb(75, 28, 100)"
                            });
                });

        }(); //END setEvents


                
    }//--end init            
            
};//--end MANGEDIV_APP
MANGEDIV_APP.init();

