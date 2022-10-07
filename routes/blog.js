const express=require('express');
const app= express();
const router = express.Router();
const path=require('path')
const blogs= require('../data/blogs')

router.get('/',(req,res)=>{
   // res.sendFile(path.join(__dirname,'../templates/index.html'))
   res.render('home');
})

router.get('/blogs',(req,res)=>{
  res.render('blog',{
    blogs:blogs
  });
   //res.sendFile(path.join(__dirname,'../templates/blogs.html'));
})

router.get('/blogpost/:slug',(req,res)=>{
  myBlog=blogs.filter((e)=>{
    return e.slug==req.params.slug;
  })
   //res.sendFile(path.join(__dirname,'../views/blogpage.html'));
   res.render('blogPage',{blog:myBlog[0]})
})

module.exports=router;