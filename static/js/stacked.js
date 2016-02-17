var stackedGraphic = ( function (){

    return {
        init: init 

    } 

    function init(){
        // sample data array
        var sample_data = [
        {"year": 2002, "name":"alpha", "value": 20},
        {"year": 2002, "name":"alpha", "value": 30},
        {"year": 2002, "name":"alpha", "value": 60},
        {"year": 2002, "name":"beta", "value": 40},
        {"year": 2002, "name":"beta", "value": 60},
        {"year": 2002, "name":"beta", "value": 10},
        {"year": 2003, "name":"gamma", "value": 10},
        {"year": 2003, "name":"gamma", "value": 40},
        {"year": 2003, "name":"alpha", "value": 20},
        {"year": 2003, "name":"alpha", "value": 30},
        {"year": 2006, "name":"alpha", "value": 60},          
        ]
        // instantiate d3plus
        var visualization = d3plus.viz()
        .container("#viz")  // container DIV to hold the visualization
        .data(sample_data)  // data to use with the visualization
        .type("stacked")    // visualization type
        .id("name")         // key for which our data is unique on
        .text("name")       // key to use for display text
        .y("value")         // key to use for y-axis
        .x("year")          // key to use for x-axis
        .time("year")       // key to use for time
        .active(false)
        .temp(false)
        .total(false)
        .id({"grouping": true})
        .shape("area")
        .depth(3)    
        .draw()             // finally, draw the visualization!
    }

})();

stackedGraphic.init();