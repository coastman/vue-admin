import BaseAPI from '@/api/base'

export default class Category extends BaseAPI {
  constructor() {
    super('category')
  }

  public async findAll() {
    return await this.request({
      method: 'get',
      url: '/api/v1/category/all'
    })
  }

  public async findSome(params: any) {
    return await this.request({
      method: 'get',
      url: '/api/v1/category/some',
      params
    })
  }
}
