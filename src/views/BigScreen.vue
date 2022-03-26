<template>
  <iframe id="big-screen"></iframe>
</template>

<script>
import bigScreen from '@/utils/bigscreen.js'

export default {
  name: 'BigScreen',

  mounted() {
    this.init()
  },

  methods: {
    init() {
      bigScreen('big-screen')
      
      const bridge = new window.CityGis.Bridge({
        id: 'big-screen',
        url: `${process.env.VUE_APP_BASE_URL}/WidgetPages/WidgetGIS.html?code=city&themeid=Gis&devicetype=lg`,
        onReady: function () {
          //定位闪烁
          bridge.Invoke({
            'ActionName': 'goToPosition',
            'Parameters': {
              positon: {
                x: 0,
                y: 0,
                z: 10
              }
            }
          })

          /* bridge.Invoke({
            'ActionName': 'userMenu',
            'Parameters': {
              url: `${process.env.VUE_APP_BASE_URL}/MapUI/mapmeun/mapmeun.html?code=city`,
              visible: true,
              position: 'top-right'
            }
          }) */
        }
      })

      bridge.addEventListener((arg) => {
        console.log(arg);
        switch(arg.action) {
          case 'mapclick':
            //地图点选消息
            break
          case 'ResetMap':
            //地图重置完成消息
            break
          case 'changeTheme':
            //地图主题切换消息
            break
          case 'Clear':
            //地图清空消息
            break
        }
      })
    }
  }
}
</script>

<style lang="scss">
</style>
