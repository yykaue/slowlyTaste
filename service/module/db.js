/**
 *
 */
var MongoDB = require('mongodb')
var MongoClient = MongoDB.MongoClient
const ObjectID = MongoDB.ObjectID

var Config = require('./config.js')

class Db {
  static getInstance () {
    if (!Db.instance) {
      Db.instance = new Db()
    }
    return Db.instance
  }

  constructor () {
    this.dbClient = ''
    this.connect()
  }

  connect () {
    let _that = this
    return new Promise(
      (resolve, reject) => {
        if (!_that.dbClient) {
          MongoClient.connect(
            Config.dbUrl,
            { useNewUrlParser: true },
            (err, client) => {
              if (err) {
                reject(err)
              } else {
                _that.dbClient = client.db(Config.dbName)
                resolve(_that.dbClient)
              }
            }
          )
        } else {
          resolve(_that.dbClient)
        }
      }
    )
  }

  /****
   * 插入一条数据
   */
  insert (collectionName, json) {
    return new Promise(
      (resolve, reject) => {
        this.connect().then((db) => {
          db.collection(
            collectionName
          ).insertOne(
            json
          ).then(
            res => {
              if (res.result.ok === 1) {
                resolve(res)
              } else {
                reject(res)
              }
            }
          )
        })
      }
    )
  }

  /****
   * 查询数据
   */
  find (collectionName, filter) {
    return new Promise(
      (resolve, reject) => {
        this.connect().then((db) => {
          let result = db.collection(
            collectionName
          ).find(
            filter
          )

          result.toArray(function (err, docs) {
            if (err) {
              reject(err)
              return
            }
            resolve(docs)
          })
        })
      }
    )
  }

  /****
   * 查询数据条数
   */
  count (collectionName, filter) {
    return new Promise(
      (resolve, reject) => {
        this.connect().then((db) => {
          let result = db.collection(
            collectionName
          ).find(
            filter
          ).count(
            true
          )
          resolve(result)
        })
      }
    )
  }

  /****
   * 数据排序并分页
   */
  sort (collectionName, filter, mysort, pagination, count) {
    return new Promise(
      (resolve, reject) => {
        this.connect().then((db) => {
          let search = db.collection(
            collectionName
          ).find(
            filter
          ).sort(
            mysort
          ).skip(
            count
          ).limit(
            pagination
          )

          search.toArray((err, result) => {
            if (err) {
              reject(err)
            } else {
              resolve(result)
            }
          })
        })
      }
    )
  }

  /****
   * 数组追加数据
   */
  arrPush (collectionName, json1, json2) {
    return new Promise(
      (resolve, reject) => {
        this.connect().then((db) => {
          db.collection(
            collectionName
          ).updateOne(
            json1,
            {
              $addToSet: json2
            },
            (err, result) => {
              if (err) {
                reject(err)
              } else {
                resolve(result)
              }
            }
          )
        })
      }
    )
  }

  /****
   * 修改数据
   */
  update (collectionName, json1, json2) {
    return new Promise(
      (resolve, reject) => {
        this.connect().then((db) => {
          db.collection(
            collectionName
          ).updateOne(
            json1,
            {
              $set: json2
            },
            (err, result) => {
              if (err) {
                reject(err)
              } else {
                resolve(result)
              }
            }
          )
        })
      }
    )
  }

  /****
   * 删除数据
   */
  remove (collectionName, json) {
    return new Promise(
      (resolve, reject) => {
        this.connect().then((db) => {
          db.collection(
            collectionName
          ).removeOne(
            json,
            function (err, result) {
              if (err) {
                reject(err)
              } else {
                resolve(result)
              }
            }
          )
        })
      }
    )
  }

  getObjectId (id) {
    return new ObjectID(id)
  }
}

module.exports = Db.getInstance()
