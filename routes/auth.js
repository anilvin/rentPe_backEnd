const router = require("express").Router();
const passport = require("passport");


router.get("/login/success", (req, res)=>{
    if(req.user){
         console.log("in if");
        res.status(200).json({
        error:false,
        message:'logged in successfully',
        user:req.user,
             })
    } else{
        console.log("in else");
        res.status(403).json({
        error:true,
        message:'Not Authorized'
    })
    }
    // res.status(401).json({
    //     error:true,
    //     message:'Log in failure'
    // })
})

router.get("/login/failed", (req, res)=>{
    res.status(401).json({
        error:true,
        message:'Log in failure'
    })
})

router.get("/google", passport.authenticate("google",{ scope : ['profile', 'email'] }));

router.get("/logout", (req, res) => {
    req.logout();
    res.redirect(process.env.CLIENT_URL);
});

router.get(
    "/google/callback",  passport.authenticate("google", {
            successRedirect:process.env.CLIENT_URL,
            failureRedirect:"/login/failed"
        })
);

module.exports = router;