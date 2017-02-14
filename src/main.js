// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import App from './App'
import router from './router'


var counter = 0;

function uuid() {
  return 'x-panel-' + counter++
}
var active_panel_id = 'x-panel-welcome';
var menu = new Vue({
  el: '#menu',
  data: {
    menus: [{
      name: '用户管理'
    }]
  },
  methods: {
    createTab: function (menu) {
      require.ensure([], function (require) {
        var User = require( './module/User').default

        var vm = new User()
        vm.$mount()
        var el = document.createElement('div')
        var id = uuid()
        el.id = id
        el.className = 'x-panel active'
        el.appendChild(vm.$el)
        $('#' + active_panel_id).removeClass('active');
        active_panel_id = id
        document.getElementById('panels').appendChild(el)
        tabs.tabs.push({
          name: 'haha',
          id: id
        })
      })


    }
  }

})
var tabs = new Vue({
  el: '#tabs',
  data: {
    tabs: [{
      name: '首页',
      id: 'x-panel-welcome'
    }]
  },
  methods: {
    showTab() {

    }
  }

})

