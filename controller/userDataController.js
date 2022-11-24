const usersData=require('../models/userData')

exports.addUserpage= (req, res) => {
    res.render('addUser', {
        path: "/add-user"
    })
}

exports.postAddUser = (req, res) => {
    const userdata= new usersData(req.body.user, req.body.phone, req.body.fname,  req.body.mname,  req.body.address)
    userdata.save()
    res.redirect('/')
}

exports.getUserlist = async (req, res, next) => {
    let usersdata=await usersData.fetchAll() 
    res.render('users', {
        usersdata: usersdata,     
        path: "/"
    });
}

exports.getUserDetail=async(req,res,next)=>{
    const id=req.params.id
    const reqUser=await usersData.findById(id)
    res.render('user-details',{
        user:reqUser,
        path:'/user/:id'
    })
}

exports.addPresentUsers=(req,res,next)=>{
    const presentUsers=req.body.name
    
    console.log(req.body.name)
    res.render('attendence',{
    presentUsers:presentUsers,
    path:'/attendence'
    })
}