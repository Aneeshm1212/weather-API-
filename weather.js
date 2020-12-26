const req=require('request');
const weather=(lat,long,callback)=>{
    const url="http://api.weatherstack.com/current?access_key=Yor aceess tokrn"+"&query="+lat+","+long;
    req({url:url,  json:true}, function (error, response){
 
        if(error){
            callback({error:'Internet Connection issue'});
        }
        else if(response.body.error){
            callback({error:"Cannot find the location"});
        }
        else{
            callback(undefined,response.body);
        }
    
    });
}
module.exports=weather;