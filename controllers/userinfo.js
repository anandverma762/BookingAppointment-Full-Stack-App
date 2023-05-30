const data = require('../models/user');

exports.getuser = async (req,res,next) => {

    const userdata = await data.findAll();
   
    res.status(200).json({info:userdata});
}

exports.postdata = async (req , res, next) => {
   console.log(req.body)
    try{
    const userdata = await data.create(req.body)
    
    res.redirect('/').json({data:userdata});
    
    } 
     catch(err){
        res.status(500).json({error:err})
    }
}


exports.deleteuser = async (req , res, next) =>{
    const uid = req.params.id;

    const deleteuser = await data.destroy({where:{id:uid}});

    res.status(200).json({info:deleteuser});
}