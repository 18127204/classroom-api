const classModel=require('./classModel');
exports.list=()=> classModel.getClasses();
exports.detail=(classId)=>classModel.getdetail(classId);
exports.create=(classObj)=>{
    return classModel.addClasses(classObj.name);
}
