var targetUrl = "https://api.douban.com/v2"
module.exports={
  '/movie/in_theaters': {
    target: targetUrl,
    changeOrigin: true,
    pathRewrite: {
    
    }

  }
}
