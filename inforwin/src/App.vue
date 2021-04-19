<template>
  <baidu-map class="map" :center="{ lng: 116.404, lat: 39.915 }" :zoom="15">
    <bm-marker
      :position="markerPoint1"
      :dragging="true"
      @click="infoWindowOpen(1)"
    >
    </bm-marker>
    <bm-marker
      :position="markerPoint2"
      :dragging="true"
      @click="infoWindowOpen(2)"
    >
    </bm-marker>
    <bm-info-window
      :position="newPoint"
      :show="show"
      @close="infoWindowClose"
      @open="opend"
      >我爱北京天安门</bm-info-window
    >
  </baidu-map>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      markerPoint1: { lng: 116.424, lat: 39.915 },
      markerPoint2: { lng: 116.404, lat: 39.915 },
      newPoint: null,
    }
  },
  methods: {
    infoWindowClose(e) {
      console.log('关闭--------------',e)
      e.returnValue = false
      this.show = false
      return false
    },
    infoWindowOpen(index) {
      console.log('开启')
      this.newPoint = this['markerPoint' + index]
      this.show = true
    },
    opend(e) {
      console.log('打开后',e)
      e.returnValue = false
      return false
    },
  },
}
</script>
<style>
.map {
  width: 2000px;
  height: 1000px;
}
</style>
