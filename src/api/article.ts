import BaseAPI from '@/api/base'

export default class Article extends BaseAPI {
  constructor() {
    super('article')
  }

  public async findAll() {
    return await this.request({
      method: 'get',
      url: '/api/v1/article/all'
    })
  }
}
