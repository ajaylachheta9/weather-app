const request = require('request')


const forecast =(latitude,longitude,callback) =>{
    const url='http://api.weatherstack.com/current?access_key=64855f7aaa05b0141ce1cc1d0dac597a&query=' + latitude + ',' + longitude + '&units=f'

    request({url,json:true},(error,{body})=>{
        if(error){
            callback('could not connect to the server')
        } else if(body.error){
            callback('unable to find location')
        } else {
            callback(undefined,body.current.weather_descriptions + ' It is currently ' + body.current.temperature + ' degress out. There is a ' + body.current.precip + '% chance of rain. And the humidity of that area ' + body.current.humidity + '% And is day there ' + body.current.is_day)
        }
    })
}

module.exports = forecast

