 const database=require('../../database');
exports.getClasses=()=>database.connectted("SELECT * FROM classroom")
exports.getdetail=(classId)=>database.connectted(`SELECT * FROM classroom WHERE id = '${classId}'`)
exports.addClasses=name=> {
    const id = Date.now();
    return database.connectted(`INSERT INTO classroom (id,name) VALUES ('${id}','${name}')`)
}