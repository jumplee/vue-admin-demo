
import Hello from './Hello'
export default Vue.extend({
  data: function () {
    return {
      msg: '测试user'
    }
  },
  components:{
    Hello
  },
  template: require('./user.html')
});

