
var router = require('koa-router')()
var DB = require('../module/db.js')

/**
 * 接口测试
 */
router.get('/', async (ctx) => {
  ctx.body = 'api接口'
})

/**
 * 输出信息
 */
router.get('/export', async ctx => {
  const terms = ctx.query
  let json = eval('(' + terms.filter + ')')
  const filter = json || {}
  let data = await DB.find('userinfo', filter)

  ctx.body = {
    data
  }
})

/**
 * 检索信息
 */
router.get('/search', async ctx => {
  const terms = ctx.query

  let json = eval('(' + terms.filter + ')')
  const filter = json || {}
  let mysort = {}
  if (terms.mysort) {
    mysort[terms.mysort] = (terms.order === 'desc' ? -1 : 1)
  } else {
    mysort = {_id: -1}
  }
  let count = ((parseInt(terms.count) - 1) * parseInt(terms.pagination)) || 0
  let pagination = parseInt(terms.pagination) || 10

  let total = await DB.count('userinfo', filter)
  let data = await DB.sort(
    'userinfo',
    filter,
    mysort,
    pagination,
    count
  )

  ctx.body = {
    data,
    total
  }
})

/**
 * 增加信息
 */
router.post('/doAdd', async (ctx) => {
  const datas = ctx.request.body
  const data = await DB.insert('userinfo', datas)

  ctx.body = await {
    data
  }
})

/**
 * 数组追加信息
 */
router.post('/arrAdd', async (ctx) => {
  const datas = ctx.request.body
  console.log(datas)
  let data = await DB.arrPush(
    'userinfo',
    { '_id': DB.getObjectId(datas.id) },
    datas.superaddition
  )

  ctx.body = await {
    data
  }
})

/**
 * 拉取需要编辑的信息
 */
router.get('/edit', async ctx => {
  let id = ctx.query.id
  let data = await DB.find('userinfo', { '_id': DB.getObjectId(id) })

  ctx.body = await {
    data
  }
})

/**
 * 修改信息
 */
router.post('/doEdit', async (ctx) => {
  let id = ctx.request.body.id
  let filter = ctx.request.body.filter
  let data = await DB.update('userinfo', { '_id': DB.getObjectId(id) }, filter)

  ctx.body = await {
    data
  }
})

/**
 * 删除信息
 */
router.get('/delete', async (ctx) => {
  let id = ctx.query.id
  var data = await DB.remove('userinfo', { '_id': DB.getObjectId(id) })
  ctx.body = await {
    data
  }
})

module.exports = router.routes()
