let database = [
  
    {id:"هدفون", category:[
      {id:1 , name:"samsumg" , price : 22550000},
      {id:2 , name:"apple" , price : 26550000},
      {id:3 , name:"xiaomi" , price : 22770000},
      {id:4 , name:"huawi" , price : 23550000},
      {id:5 , name:"motorolla" , price : 12550000},
    ]},
    
     {id:"کیس", category:[
      {id:1 , name:"samsumg" , price : 12550000},
      {id:2 , name:"apple" , price : 26550000},
      {id:3 , name:"xiaomi" , price : 32770000},
      {id:4 , name:"huawi" , price : 43550000},
      {id:5 , name:"motorolla" , price : 52550000},
    ]},
    
    
     {id:"فروشگاه", category:[
      {id:1 , name:"samsumg" , price : 22550000},
      {id:2 , name:"apple" , price : 26550000},
      {id:3 , name:"xiaomi" , price : 22770000},
      {id:4 , name:"huawi" , price : 23550000},
      {id:5 , name:"motorolla" , price : 12550000},
      {id:6 , name:"samsumg" , price : 12550000},
      {id:7 , name:"apple" , price : 26550000},
      {id:8 , name:"xiaomi" , price : 32770000},
      {id:9 , name:"huawi" , price : 43550000},
      {id:10 , name:"motorolla" , price : 52550000},
    ]},
  
];


localStorage.setItem("database",JSON.stringify(database));