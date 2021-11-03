
const classService=require('./classService');
exports.list= async function(req,res){
    const  classes= await classService.list();
    if (classes){
        res.status(200).json(classes);
    }
    else{
        res.status(404).json({messsage:'No classes valiable'});
    }
}

exports.detail=async function(req,res){
    const classId=req.params.id;
    const classDetail=await classService.detail(classId);
    console.log("classdetail",classDetail);
    if (classDetail){
        res.json(classDetail)
    }
    else{
        res.status(404).json({messsage:'Class not found'});
    }
}
exports.create=async (req,res)=>{
    const classObj= {name:req.body.name};
    const classId= await classService.create(classObj);
    if (classId){
        res.status(201).json({messsage:'Class created',id:classId});
    }else{
        res.status(500).json({messsage:'Error creating class'});
    }
}