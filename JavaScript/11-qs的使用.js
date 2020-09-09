
//qs.parse()将URL解析成对象的形式
const Qs = require('qs');
let url = 'method=query_sql_dataset_data&projectId=85&appToken=7d22e38e-5717-11e7-907b-a6006ad3dba0';
console.log(Qs.parse(url));

//qs.stringify()将对象 序列化成URL的形式，以&进行拼接
let obj= {
     method: "query_sql_dataset_data",
     projectId: "85",
     appToken: "7d22e38e-5717-11e7-907b-a6006ad3dba0",
     datasetId: " 12564701"
   };
console.log(Qs.stringify(obj));