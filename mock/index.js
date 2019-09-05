const Mock = require('mockjs');
Mock.mock('/user', /post|get/i, {
  'list|1-10': [
    {
      'id|+1': 1
    }
  ]
});
