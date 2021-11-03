const mysql = require('mysql');
const con = mysql.createConnection({
  host: "sql5.freemysqlhosting.net",
  user: "sql5448297",
  password: "9eI27q5WEq",
  database: "sql5448297"
});
exports.connectted=(option)=>{
  
  return new Promise((resolve,reject)=>
  {
    console.log('op', option)
    con.query(option, function (err, result, fields) 
    {
      if (err) reject(err);
      console.log(result);
      resolve(result);

    })}
  )

  
};
exports.Connect=()=>con.connect(function(err) {
    // if (err) throw err;
  })
;
