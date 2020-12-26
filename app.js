const express = require('express');
const app=express();
const path =require('path');
const acpath=path.join(__dirname,'direcs');
const hbs=require('hbs');
const partialpath=path.join(__dirname,'partials');
const geocode=require('./geocode');
const weather= require('./weather');

app.set('view engine','hbs');
app.use(express.static(acpath));
hbs.registerPartials(partialpath);


app.get('',(req,res)=>{
  res.render('index',{
    title:"Index",
    creb:"APM"
  });
});


app.get('/forecast',(req,res)=>{
  if(!req.query.addrs)
  {
    return res.send({error:"YOu must provide address"});
  }
geocode(req.query.addrs,(err,{lati,longi,place_name}={})=>{
  if(err){
    return res.send(err);
  }

    weather(lati,longi,(err,respr)=>{
      if(err){
      return  res.send(err);
      }
      else{
        res.send({temp:respr.current.temperature , weather: respr.current.weather_descriptions[0],location:req.query.addrs});
      }
    });
  
  
});
 
  });


app.get('/about',(req,res)=>{

  res.render('about',{
    title:"About",
    creb:"APM"
  });
});
app.get('/weather',(req,res)=>{

  res.render('weather',{
    title:"Weather",
    creb:"APM"
  });
});

app.get('*',(req,res)=>{
 res.render('notF');
});
app.listen(3000);

