/**
 * @description json schema 验证中间件
 * @author jinhero
 */

const { ErrorModel } = require('../model/ResModel')
const { jsonSchemaFileInfo } = require('../model/ErrorInfo')

/**
 * 生成 json schema 验证的中间件
 * @param {function} validateFn 验证函数
 */
function genValidator(validateFn) {
  async function validator (ctx, next) {
    const data = ctx.request.body
    // 校验
    const error = validateFn(data)
    if (error) {
      // 验证失败
      ctx.body = new ErrorModel(jsonSchemaFileInfo)
      return
    }
    // 验证成功，继续
    await next()
  }
  return validator
}

module.exports = {
  genValidator
}
