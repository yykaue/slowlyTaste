
var router = require('koa-router')()

/**
 * 接口测试
 */
router.get('/', async (ctx) => {
  await ctx.render('index')
})

module.exports = router.routes()
