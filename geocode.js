const req=require('request');
const code = (address,callback)=>{
    const geocode="https://api.mapbox.com/geocoding/v5/mapbox.places/"+encodeURIComponent(address)+".json?access_token=Your access Token"+"&limit=1";
    req({url:geocode,json:true},(error,response)=>{
        if(error){
            callback({error:'Internet Connection issue'});
        }
        else if(response.body.features.length === 0){
            callback({error:"Cannot find the location"});
        }
        else{
         const lat=(response.body.features[0].center[1]);
         const long=(response.body.features[0].center[0]);
         const place=response.body.features[0].place_name;
         callback(undefined,{
             lati:lat,
             longi:long,
             place_name:place
         });
        }
            
        
    });
};

module.exports=code;