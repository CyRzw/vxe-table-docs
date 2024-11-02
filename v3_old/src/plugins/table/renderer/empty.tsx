import VXETable from 'vxe-table'

// 创建一个简单的空内容渲染
VXETable.renderer.add('NotData', {
  // 空内容模板
  renderEmpty () {
    return <span>
      <img src="https://vxeui.com/resource/img/546.gif"/>
      <p>亲，没有更多数据了！</p>
    </span>
  }
})
