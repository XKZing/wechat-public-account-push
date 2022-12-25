/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxcfebd8033575cb5d',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'f02fa2f31c48b509b8d46d5ebf062cc5',

  PROVINCE: '河南',
  CITY: '安阳',

  USERS: [
    {
      // 想要发送的人的名字
      name: '小可宝宝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o8GRF6sV7FmP0Wm5GZ9ELVsO3-YY',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'yl0oI9LbYOQc-ljCVDtIQuhqNgHj9asZfuBYS0QFKGw',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '11-04',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝宝', year: '2001', date: '09-19',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
//           type: '生日', name: '宝宝阳历', year: '2001', date: '11-04',
        },
        {
          type: '节日', name: '我们的相恋纪念日', year: '2021', date: '06-16',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2021-06-16' },
        // 结婚纪念日
//         { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'XsRtFrGtPS01XwvMVDSP88RlV9SsQTbAsiS3p5bvPeI',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o8GRF6gNVmE1iZ9sIBiIZkOTY83U',
      }
  ],
}

module.exports = USER_CONFIG

