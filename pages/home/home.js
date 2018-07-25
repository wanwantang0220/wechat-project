// pages/home/home.js
var helloData = {
  name: 'WeChat',
  id: 0,
  condition: true
}

Page({

  data: helloData,
  /**
   * 页面的初始数据
   */
  data: {
    a: 1,
    b: 2,
    array: [{
      message: 'foo',
    }, {
      message: 'bar'
    }],
    objectArray: [{
        id: 5,
        unique: 'unique_5'
      },
      {
        id: 4,
        unique: 'unique_4'
      },
      {
        id: 3,
        unique: 'unique_3'
      },
      {
        id: 2,
        unique: 'unique_2'
      },
      {
        id: 1,
        unique: 'unique_1'
      },
      {
        id: 0,
        unique: 'unique_0'
      },
    ],
    numberArray: [1, 2, 3, 4],
    item:{
      index: 0,
      msg: 'this is a template',
      time: '2016-09-15'
    }

  },
  switch: function() {
    const length = this.data.objectArray.length;
    for (let i = 0; i < length; i++) {
      const x = Math.floor(Math.random() * length);
      console.log('x=' + x);
      const y = Math.floor(Math.random() * length);
      console.log('y=' + y);
      const temp = this.data.objectArray[x];
      console.log('temp=' + temp);
      this.data.objectArray[x] = this.data.objectArray[y]
      this.data.objectArray[y] = temp

    }
    this.setData({
      objectArray: this.data.objectArray
    })


  },
  /**
   * 
   */
  addToFront: function() {

    const length = this.data.objectArray.length;
    this.data.objectArray = [{
      id: length,
      unique: 'unique_' + length
    }].concat(this.data.objectArray);

    this.setData({
      objectArray: this.data.objectArray
    })

  },
  /**
   * 
   */
  addNumToFront:function(){
    // this.data.numberArray = [this.data.numberArray.length + 1].concat(this.data.numberArray)
    const num = [this.data.numberArray.length + 1];
    this.data.numberArray = this.data.numberArray.concat(num);

    this.setData({
      numberArray: this.data.numberArray
    })
  },
  changeName: function() {
    this.setData({
      name: 'MINE'
    })
  },

  first: function() {
    this.setData({
      show: 'first'
    })
  },
  second: function() {
    this.setData({
      show: 'second'
    })
  },
  third: function() {
    this.setData({
      show: 'third'
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})