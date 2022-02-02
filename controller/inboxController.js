const getInbox=(req,res,next)=>{
    res.render("inbox",{
        title:"Inbox-GoChat",
    })
}

module.exports={getInbox}