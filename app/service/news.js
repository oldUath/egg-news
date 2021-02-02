// app/service/news.js
const Service = require('egg').Service;

class NewsService extends Service {
  async list(page = 1) {
    // read config
    const { serverUrl, pageSize } = this.config.news;

    // use build-in http client to GET hacker-news api
    const { data: idList } = await this.ctx.curl(`${serverUrl}/api/v1/topics`, {
      data: {
        page: page,
        limit: pageSize
      },
      rejectUnauthorized:false,
      dataType: 'json',
    });

    console.log(idList);
    return [];
  }
}

module.exports = NewsService;