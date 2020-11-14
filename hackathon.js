const prompt = require('prompt-sync')();

function loadData(){
       
}

function start(){
    
    var state = prompt('Enter the state code for which you would like to see disaster information(i.e. for Ohio, type \'OH\'):');
    var county = prompt('Enter the county in that state for which you would like to see disaster information:');
    console.log("You entered "+ state + " county, " + county)
    var loc = [state, county]
    return loc
}

function getLocation(loc){
    var i;
    console.log(data[1])
    for(i=0;i<data.length;i++) {
        var element = data[i]
        if(element.state == loc[0] && (element.designatedArea == loc[1] || element.designatedArea == 'Statewide')) {      
            console.log(element.incidentType)
        }
    }
}

var data = require('./weather data/DisasterDeclarationsSummaries.json'); 
var location = start()
console.log("You entered "+ location[0] + " county, " + location[1])
getLocation(location)
console.log(location)
