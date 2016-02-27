var stackedGraphic = ( function (){

    return {
        init: init 

    } 

    function init(){
        var width = 960,
            height = 500;

        var color = d3.scale.category20();

        var stack = d3.layout.stack()
            .offset("wiggle")
            .values(function(d) { return d.values; });

        var svg = d3.select("body").append("svg")
            .attr("width", width)
            .attr("height", height);

        d3.json("/static/js/miserables2.json", function(error, graph) {
          if (error) throw error;
          
          
                    
        });    
    }

})();



stackedGraphic.init();
