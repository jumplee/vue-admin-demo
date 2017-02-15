// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import User from './app/User'

var counter = 0
var uuid_tpl = 'x-panel-'

function uuid() {
  return uuid_tpl + counter++
}
var ele=document.getElementById;
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
        var vm = new Vue(User)
        var id = uuid()
        vm.msg = 'hello ' + id
        vm.$mount()
        var el = document.createElement('div')
        el.id = id
        el.className = 'x-panel active'
        el.appendChild(vm.$el)
        document.getElementById('panels').appendChild(el)
        tabs.tabs.push({
          name: 'haha',
          id: id,
          vm: vm
        })
        tabs.active_panel_index = tabs.tabs.length-1
      })
    }
  }

})
var tabs = new Vue({
  el: '#tabs',
  data: {
    tabs: [{
      name: '首页',
      id: 'x-panel-welcome',
      always: true,
      active:true
    }],
    active_panel_index:0
  },
  watch:{
    active_panel_index:function(val,old){

      $('#' + this.tabs[old].id).removeClass('active')
      $('#' + this.tabs[val].id).addClass('active')
    }
  },
  methods: {
    showTab(tab,index) {
      this.active_panel_index  = index
    },
    closeTab(tab, index) {
      var tabs = this.tabs
      if (!tab.always) {
        tab.vm.$destroy()
        if (index ===  this.active_panel_index) {
          this.active_panel_index = tabs.length-2
        }
        $('#' + tab.id).remove()
        tabs.splice(index, 1)
      }

    }
  }

})

