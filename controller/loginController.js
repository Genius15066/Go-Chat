const getLogin=(req,res,next)=>{
    res.render("index",{
        title:"Login-GoChat",
    })
}

module.exports={getLogin}