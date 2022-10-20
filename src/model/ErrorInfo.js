/**
 * @description 失败信息集合，包括 errno 和 message
 * @author jinhero
 */


module.exports = {
  // 用户名已存在
  registerUserNameExistInfo: {
    errno: 10001,
    message: '用户名已存在'
  },
  // 注册失败
  registerFailInfo: {
    errno: 10002,
    message: '注册失败，请重试'
  },
  // 用户名未存在
  registerUserNameNotExistInfo: {
    errno: 10003,
    message: '用户名未存在'
  }
}
