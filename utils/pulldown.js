function getSearchMusic(keyword, pageindex, callbackcount, callback) {
  wx.request({
    url: 'https://xiaoce-timeline-api-ms.juejin.im/v1/getListByLastTime?pageNum=' + pageindex,
    data: [],
    method: 'GET',
    header: {
      'content-Type': 'application/json'
    },
    success: function(res) {
      if (res.statusCode == 200) {
        callback(res.data);
      }
    }
  })
}

module.exports = {
  getSearchMusic: getSearchMusic
}