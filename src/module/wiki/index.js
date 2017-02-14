import Vue from 'vue'

export default Vue.extend({
  data: function () {
    return {
      msg: 'wiki'
    }
  },
  components:{
    Hello
  },
  template: require('./user.html')
});
