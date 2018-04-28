var targetUrl = "https://api.douban.com/v2"
module.exports={
  '/movie/in_theaters': {
    target: targetUrl,
    changeOrigin: true,
    pathRewrite: {
    }
  },
  '/movie/coming_soon': {
    target: targetUrl,
    changeOrigin: true,
    pathRewrite: {
    }
  },
  '/movie/top250': {
    target: targetUrl,
    changeOrigin: true,
    pathRewrite: {
    }
  },
  '/book/search': {
    target: targetUrl,
    changeOrigin: true,
    pathRewrite: {
    }
  },
  '/movie/subject/':{
    target: targetUrl,
    changeOrigin: true,
    pathRewrite: {
    }
  },
  '/book/subject/':{
    target: targetUrl,
    changeOrigin: true,
    pathRewrite: {
    }
  }
}
