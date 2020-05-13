const request = require('request')

const geocode = (adress,callback) =>{
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(adress) + '.json?access_token=pk.eyJ1IjoiYWpheWxhY2hoZXRhOSIsImEiOiJjazlpbGh5c3cwbHRlM3FxNng3NzRnNjJiIn0.jgrLpt-y2YYpcKbx0LXp6Q&level=1'

    request({url,json:true},(error,{body})=>{
        if(error){
            callback('could not connect to the server')
        } else if(body.features.length === 0){
            callback('unable to find location try another search')
        } else {
            callback(undefined,{
                latitude:body.features[0].center[1],
                longitude:body.features[0].center[0],
                location:body.features[0].place_name
            })
        }
    })
}

module.exports = geocode