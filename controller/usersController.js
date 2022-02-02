const getUsers=(req,res,next)=>{
    res.render("users",{
        title:"Users-GoChat",
    })
}

module.exports={getUsers}