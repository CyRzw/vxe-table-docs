import XEUtils from 'xe-utils'

const contextMenuAPI = [
  {
    name: 'disabled',
    desc: '是否禁用右键',
    version: '',
    type: 'boolean',
    enum: '',
    defVal: 'false',
    list: []
  },
  {
    name: 'options',
    desc: '菜单配置',
    version: '',
    type: 'any[][]',
    enum: '',
    defVal: '',
    list: [
      {
        name: 'code',
        desc: '菜单键值',
        version: '',
        type: 'string',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'name',
        desc: '菜单名称（支持开启国际化）',
        version: '',
        type: 'string',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'prefixConfig',
        desc: '前缀配置项',
        version: '3.8.23',
        type: 'string',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'prefixIcon',
        disabled: true,
        desc: '已废弃，请使用 prefixConfig',
        version: '',
        type: 'string',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'suffixConfig',
        desc: '后缀配置项',
        version: '3.8.23',
        type: 'string',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'suffixIcon',
        disabled: true,
        desc: '已废弃，请使用 suffixConfig',
        version: '',
        type: 'string',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'className',
        desc: '菜单项的 className',
        version: '',
        type: 'string',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'visible',
        desc: '是否可视',
        version: '',
        type: 'boolean',
        enum: '',
        defVal: 'true',
        list: []
      },
      {
        name: 'disabled',
        desc: '是否禁用',
        version: '',
        type: 'boolean',
        enum: '',
        defVal: 'false',
        list: []
      },
      {
        name: 'children',
        desc: '二级菜单（最多只允许有二级）',
        version: '',
        type: 'any[]',
        enum: '',
        defVal: '',
        list: [
          {
            name: 'code',
            desc: '菜单键值',
            version: '',
            type: 'string',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'name',
            desc: '菜单名称',
            version: '',
            type: 'string',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'prefixConfig',
            desc: '前缀配置项',
            version: '3.8.23',
            type: 'string',
            enum: '',
            defVal: '',
            list: [
              {
                name: 'icon',
                version: '',
                type: 'string',
                enum: '',
                defVal: '',
                list: []
              },
              {
                name: 'content',
                version: '',
                type: 'string',
                enum: '',
                defVal: '',
                list: []
              },
              {
                name: 'className',
                version: '',
                type: 'string',
                enum: '',
                defVal: '',
                list: []
              }
            ]
          },
          {
            name: 'prefixIcon',
            disabled: true,
            desc: '已废弃，请使用 prefixConfig',
            version: '',
            type: 'string',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'suffixConfig',
            desc: '后缀配置项',
            version: '3.8.23',
            type: 'string',
            enum: '',
            defVal: '',
            list: [
              {
                name: 'icon',
                version: '',
                type: 'string',
                enum: '',
                defVal: '',
                list: []
              },
              {
                name: 'content',
                version: '',
                type: 'string',
                enum: '',
                defVal: '',
                list: []
              },
              {
                name: 'className',
                version: '',
                type: 'string',
                enum: '',
                defVal: '',
                list: []
              }
            ]
          },
          {
            name: 'visible ',
            desc: '是否可视',
            version: '',
            type: 'boolean',
            enum: '',
            defVal: 'true',
            list: []
          },
          {
            name: 'disabled ',
            desc: '是否禁用',
            version: '',
            type: 'boolean',
            enum: '',
            defVal: 'false',
            list: []
          }
        ]
      }
    ]
  }
]

const exportDataAPI = [
  {
    name: 'filename',
    desc: '文件名',
    version: '',
    type: 'string',
    enum: '',
    defVal: '',
    list: []
  },
  {
    name: 'sheetName',
    desc: '表名（只对支持的文档类型有效）',
    version: '',
    type: 'string',
    enum: '',
    defVal: '',
    list: []
  },
  {
    name: 'type',
    desc: '文件类型',
    version: '',
    type: 'string',
    enum: 'csv, html, xml, txt',
    defVal: 'csv',
    list: []
  },
  {
    name: 'types',
    desc: '可选文件类型列表',
    version: '',
    type: 'string[]',
    enum: 'csv, html, xml, txt',
    defVal: 'csv, html, xml, txt',
    list: []
  },
  {
    name: 'mode',
    desc: '输出数据的方式',
    version: '',
    type: 'string',
    enum: 'current, selected, all',
    defVal: 'current',
    list: []
  },
  {
    name: 'modes',
    desc: '输出数据的方式列表',
    version: '',
    type: 'string[]',
    enum: 'current, selected, all',
    defVal: 'current, selected',
    list: []
  },
  {
    name: 'original',
    desc: '是否为源数据（某些场景下支持 true， 比如虚拟滚动、优化的固定列..，如果需要支持导入，则必须设置为 true）',
    version: '',
    type: 'boolean',
    enum: '',
    defVal: 'false',
    list: []
  },
  {
    name: 'message',
    desc: '是否显示内置的消息提示',
    version: '',
    type: 'boolean',
    enum: '',
    defVal: 'true',
    list: []
  },
  {
    name: 'isHeader',
    desc: '是否需要表头',
    version: '',
    type: 'boolean',
    enum: '',
    defVal: 'true',
    list: []
  },
  {
    name: 'isColgroup',
    desc: '如果存在，则支持带有分组结构的表头',
    version: '',
    type: 'boolean',
    enum: '',
    defVal: 'true',
    list: []
  },
  {
    name: 'isFooter',
    desc: '是否需要表尾',
    version: '',
    type: 'boolean',
    enum: '',
    defVal: 'true',
    list: []
  },
  {
    name: 'isMerge',
    desc: '如果存在，则支持临时合并的单元格',
    version: '',
    type: 'boolean',
    enum: '',
    defVal: 'false',
    list: []
  },
  {
    name: 'isAllExpand',
    desc: '如果存在，则展开所有树层级',
    version: '3.0.1',
    type: 'boolean',
    enum: '',
    defVal: 'false',
    list: []
  },
  {
    name: 'download',
    desc: '是否马上下载，如果设置为 false 则通过返回结果为内容的 Promise',
    version: '',
    type: 'boolean',
    enum: '',
    defVal: 'true',
    list: []
  },
  {
    name: 'data',
    desc: '指定数据',
    version: '',
    type: 'any[]',
    enum: '',
    defVal: '',
    list: []
  },
  {
    name: 'columns',
    desc: '指定列',
    version: '',
    type: 'Array<{ colId?: number; field:? string; type?: string }>',
    enum: '',
    defVal: '',
    list: []
  },
  {
    name: 'columnFilterMethod',
    desc: '列过滤方法，该函数的返回值用来决定是否过滤掉列',
    version: '',
    type: '({ column, $columnIndex }) > boolean',
    enum: '',
    defVal: '默认过滤掉 type=seq,checkbox,radio 和 field 为空的列',
    list: []
  },
  {
    name: 'dataFilterMethod',
    desc: '数据过滤方法，该函数的返回值用来决定是否过滤掉数据行',
    version: '',
    type: '({ row, $rowIndex }) => boolean',
    enum: '',
    defVal: '',
    list: []
  },
  {
    name: 'footerFilterMethod',
    desc: '表尾过滤方法，该函数的返回值用来决定是否过滤掉表尾行',
    version: '',
    type: '({ items, $rowIndex }) => boolean',
    enum: '',
    defVal: '',
    list: []
  },
  {
    name: 'remote',
    desc: '是否服务端导出',
    version: '',
    type: 'boolean',
    enum: '',
    defVal: 'false',
    list: []
  },
  {
    name: 'style',
    desc: '只对 type=html 有效，自定义文档的 css 样式信息',
    version: '',
    type: 'string',
    enum: '',
    defVal: '',
    list: []
  },
  {
    name: 'useStyle',
    desc: '只对 type=html,xlsx 有效，支持带样式',
    version: '3.0.18',
    type: 'Boolean',
    enum: '',
    defVal: 'false',
    list: []
  },
  {
    name: 'sheetMethod',
    desc: '只对 type=xlsx 有效，该函数用于自定义工作簿的单元格',
    version: '3.0.18',
    type: '({ options, workbook, worksheet }) => void',
    enum: '',
    defVal: '',
    list: []
  },
  {
    name: 'exportMethod',
    desc: '只对 remote=true 有效，该函数用于自定义导出或服务端导出，返回 Promise',
    version: '',
    type: '({ options }) => Promise<any>',
    enum: '',
    defVal: '',
    list: []
  },
  {
    name: 'beforeExportMethod',
    desc: '该方法会在导出之前触发',
    version: '',
    type: '({ options }) => void',
    enum: '',
    defVal: '',
    list: []
  },
  {
    name: 'afterExportMethod',
    desc: '该方法会在导出之后触发',
    version: '',
    type: '({ options }) => viod',
    enum: '',
    defVal: '',
    list: []
  }
]

const importDataAPI = [
  {
    name: 'mode',
    desc: '导入数据的方式',
    version: '3.8.10 | 3.8.16',
    type: 'string',
    enum: 'covering, insertBottom, insertTop',
    defVal: 'covering',
    list: []
  },
  // {
  //   name: 'modes',
  //   desc: '导入数据的方式列表',
  //   version: '3.8.16',
  //   type: 'string',
  //   enum: 'covering, insertBottom, insertTop',
  //   defVal: '["insertTop", "covering"]',
  //   list: []
  // },
  {
    name: 'message',
    desc: '是否显示内置的消息提示',
    version: '',
    type: 'boolean',
    enum: '',
    defVal: 'true',
    list: []
  },
  {
    name: 'types',
    desc: '导入的文件类型列表',
    version: '',
    type: 'string[]',
    enum: 'csv, html, xml, txt',
    defVal: '[\'csv\', \'html\', \'xml\', \'txt\']',
    list: []
  },
  {
    name: 'encoding',
    desc: '导入的文件的编码类型',
    version: '3.5.0',
    type: 'string',
    enum: '',
    defVal: 'utf-8',
    list: []
  },
  {
    name: 'remote',
    desc: '是否服务端导入',
    version: '',
    type: 'boolean',
    enum: '',
    defVal: 'false',
    list: []
  },
  {
    name: 'importMethod',
    desc: '只对 remote=true 有效，该函数用于自定义导入或服务端导入，返回 Promise',
    version: '',
    type: '({ file, options }) => Promise<any>',
    enum: '',
    defVal: '',
    list: []
  },
  {
    name: 'beforeImportMethod',
    desc: '该方法会在导入之前触发',
    version: '',
    type: '({ options }) => void',
    enum: '',
    defVal: '',
    list: []
  },
  {
    name: 'afterImportMethod',
    desc: '该方法会在导入之后触发',
    version: '',
    type: '({ options }) => viod',
    enum: '',
    defVal: '',
    list: []
  }
]

const printAPI = exportDataAPI.filter(item => !['filename', 'type', 'types', 'download', 'message', 'remote', 'sheetMethod', 'exportMethod', 'beforeExportMethod', 'afterExportMethod'].includes(item.name)).concat([
  {
    name: 'content',
    desc: '自定义打印的内容',
    version: '',
    type: 'string',
    enum: '',
    defVal: '',
    list: []
  },
  {
    name: 'beforePrintMethod',
    desc: '该函数会在打印之前触发，可以通过返回自定义打印的内容',
    version: '',
    type: '({ content, options }) => string',
    enum: '',
    defVal: '',
    list: []
  }
])

const apis = [
  {
    name: 'Props',
    descKey: 'app.api.title.props',
    version: '',
    type: '',
    enum: '',
    defVal: '',
    list: [
      {
        name: 'id',
        descKey: 'app.api.table.desc.id',
        version: '',
        type: 'string',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'data',
        descKey: 'app.api.table.desc.data',
        version: '',
        type: 'any[]',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'height',
        descKey: 'app.api.table.desc.height',
        version: '',
        type: 'number | string',
        enum: '%, px',
        defVal: '',
        list: []
      },
      {
        name: 'min-height',
        desc: '表格最小高度',
        version: '3.7.0',
        type: 'number | string',
        enum: '%, px',
        defVal: '默认 144，继承 setConfig.table.minHeight',
        list: []
      },
      {
        name: 'max-height',
        descKey: 'app.api.table.desc.maxHeight',
        version: '',
        type: 'number | string',
        enum: '%, px',
        defVal: 'e',
        list: []
      },
      {
        name: 'auto-resize',
        descKey: 'app.api.table.desc.autoResize',
        version: '',
        type: 'boolean',
        enum: '',
        defVal: 'false',
        list: []
      },
      {
        name: 'sync-resize',
        descKey: 'app.api.table.desc.syncResize',
        version: '',
        type: 'boolean | string | number',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'resizable',
        disabled: true,
        desc: '已废弃，被 column-config.resizable 替换',
        version: '',
        type: 'boolean',
        enum: '',
        defVal: '默认 false，继承 setConfig.table.resizable',
        list: []
      },
      {
        name: 'stripe',
        descKey: 'app.api.table.desc.stripe',
        version: '',
        type: 'boolean',
        enum: '',
        defVal: '默认 false，继承 setConfig.table.stripe',
        list: []
      },
      {
        name: 'border',
        descKey: 'app.api.table.desc.border',
        version: '',
        type: 'boolean | string',
        enum: 'default（默认）, full（完整边框）, outer（外边框）, inner（内边框）, none（无边框）',
        defVal: '默认 false，继承 setConfig.table.border',
        list: []
      },
      {
        name: 'round',
        descKey: 'app.api.table.desc.round',
        version: '',
        type: 'boolean',
        enum: '',
        defVal: '默认 false，继承 setConfig.table.round',
        list: []
      },
      {
        name: 'size',
        descKey: 'app.api.table.desc.size',
        version: '',
        type: 'string',
        enum: 'medium, small, mini',
        defVal: '继承上下文',
        list: []
      },
      // {
      //   name: 'fit',
      //   descKey: 'app.api.table.desc.fit',
      //   version: '',
      //   type: 'boolean',
      //   enum: '',
      //   defVal: 'true',
      //   list: []
      // },
      {
        name: 'loading',
        descKey: 'app.api.table.desc.loading',
        version: '',
        type: 'boolean',
        enum: '',
        defVal: 'true',
        list: []
      },
      {
        name: 'align',
        descKey: 'app.api.table.desc.align',
        version: '',
        type: 'string',
        enum: 'left（左对齐）, center（居中对齐）, right（右对齐）',
        defVal: 'left',
        list: []
      },
      {
        name: 'header-align',
        descKey: 'app.api.table.desc.headerAlign',
        version: '',
        type: 'string',
        enum: 'left（左对齐）, center（居中对齐）, right（右对齐）',
        defVal: '继承 align',
        list: []
      },
      {
        name: 'footer-align',
        descKey: 'app.api.table.desc.footerAlign',
        version: '',
        type: 'string',
        enum: 'left（左对齐）, center（居中对齐）, right（右对齐）',
        defVal: '继承 align',
        list: []
      },
      {
        name: 'show-header',
        descKey: 'app.api.table.desc.showHeader',
        version: '',
        type: 'boolean',
        enum: '',
        defVal: 'false',
        list: []
      },
      {
        name: 'highlight-current-row',
        disabled: true,
        desc: '已废弃，被 row-config.isCurrent 替换',
        version: '',
        type: 'boolean',
        enum: '',
        defVal: 'false',
        list: []
      },
      {
        name: 'highlight-hover-row',
        disabled: true,
        desc: '已废弃，被 row-config.isHover 替换',
        version: '',
        type: 'boolean',
        enum: '',
        defVal: 'false',
        list: []
      },
      {
        name: 'highlight-current-column',
        disabled: true,
        desc: '已废弃，被 column-config.isCurrent 替换',
        version: '',
        type: 'boolean',
        enum: '',
        defVal: 'false',
        list: []
      },
      {
        name: 'highlight-hover-column',
        disabled: true,
        desc: '已废弃，被 column-config.isHover 替换',
        version: '',
        type: 'boolean',
        enum: '',
        defVal: 'false',
        list: []
      },
      // {
      //   name: 'highlight-cell',
      //   disabled: true,
      //   descKey: 'app.api.table.desc.highlightCell',
      //   version: '',
      //   type: 'boolean',
      //   enum: '',
      //   defVal: 'false',
      //   list: []
      // },
      {
        name: 'row-class-name',
        descKey: 'app.api.table.desc.rowClassName',
        version: '',
        type: 'string | (({ row, rowIndex, $rowIndex }) => any)',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'cell-class-name',
        descKey: 'app.api.table.desc.cellClassName',
        version: '',
        type: 'string | (({ row, rowIndex, $rowIndex, column, columnIndex, $columnIndex }) => any)',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'header-row-class-name',
        descKey: 'app.api.table.desc.headerRowClassName',
        version: '',
        type: 'string | (({ $rowIndex }) => any)',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'header-cell-class-name',
        descKey: 'app.api.table.desc.headerCellClassName',
        version: '',
        type: 'string | (({ $rowIndex, column, columnIndex, $columnIndex }) => any)',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'footer-row-class-name',
        descKey: 'app.api.table.desc.footerRowClassName',
        version: '',
        type: 'string | (({ $rowIndex }) => any)',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'footer-cell-class-name',
        descKey: 'app.api.table.desc.footerCellClassName',
        version: '',
        type: 'string | (({ $rowIndex, column, columnIndex, $columnIndex }) => any)',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'cell-style',
        abandoned: true,
        descKey: 'app.api.table.desc.cellStyle',
        version: '',
        type: 'any | (({ row, rowIndex, $rowIndex, column, columnIndex, $columnIndex }) => any)',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'header-cell-style',
        abandoned: true,
        descKey: 'app.api.table.desc.headerCellStyle',
        version: '',
        type: 'any | (({ $rowIndex, column, columnIndex, $columnIndex }) => any)',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'footer-cell-style',
        abandoned: true,
        descKey: 'app.api.table.desc.footerCellStyle',
        version: '',
        type: 'any | (({ $rowIndex, column, columnIndex, $columnIndex }) => any)',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'row-style',
        abandoned: true,
        descKey: 'app.api.table.desc.rowStyle',
        version: '',
        type: 'any | (({ row, rowIndex, $rowIndex }) => any)',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'header-row-style',
        abandoned: true,
        descKey: 'app.api.table.desc.headerRowStyle',
        version: '',
        type: 'any | (({ $rowIndex, column, columnIndex, $columnIndex }) => any)',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'footer-row-style',
        abandoned: true,
        descKey: 'app.api.table.desc.footerRowStyle',
        version: '',
        type: 'any | (({ $rowIndex }) => any)',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'show-footer',
        descKey: 'app.api.table.desc.showFooter',
        version: '',
        type: 'boolean',
        enum: '',
        defVal: 'false',
        list: []
      },
      {
        name: 'footer-data',
        descKey: 'app.api.table.desc.footerData',
        version: '3.7.10',
        type: 'any[]',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'footer-method',
        abandoned: true,
        descKey: 'app.api.table.desc.footerMethod',
        version: '',
        type: '({ columns, data }) => any[][]',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'merge-cells',
        descKey: 'app.api.table.desc.mergeCells',
        version: '',
        type: 'Array<{ row: number, col: number, rowspan: number, colspan: number }>',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'merge-footer-items',
        descKey: 'app.api.table.desc.mergeFooterItems',
        version: '',
        type: 'Array<{ row: number, col: number, rowspan: number, colspan: number }>',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'span-method',
        abandoned: true,
        descKey: 'app.api.table.desc.spanMethod',
        version: '',
        type: '({ row, rowIndex, $rowIndex, _rowIndex, column, columnIndex, $columnIndex, _columnIndex, data }) => { rowspan: number, colspan: number}',
        enum: '',
        defVal: '{ rowspan: 1, colspan: 1}',
        list: []
      },
      {
        name: 'footer-span-method',
        abandoned: true,
        descKey: 'app.api.table.desc.footerSpanMethod',
        version: '',
        type: '({ $rowIndex, column, columnIndex, $columnIndex, _columnIndex, data }) => { rowspan: number, colspan: number}',
        enum: '',
        defVal: '{ rowspan: 1, colspan: 1}',
        list: []
      },
      {
        name: 'show-overflow',
        descKey: 'app.api.table.desc.showOverflow',
        version: '',
        type: 'boolean | string',
        enum: 'ellipsis（只显示省略号）,title（并且显示为原生 title）,tooltip（并且显示为 tooltip 提示）',
        defVal: '',
        list: []
      },
      {
        name: 'show-header-overflow',
        descKey: 'app.api.table.desc.showHeaderOverflow',
        version: '',
        type: 'boolean | string',
        enum: 'ellipsis（只显示省略号）,title（并且显示为原生 title）,tooltip（并且显示为 tooltip 提示）',
        defVal: '',
        list: []
      },
      {
        name: 'show-footer-overflow',
        descKey: 'app.api.table.desc.showFooterOverflow',
        version: '',
        type: 'boolean | string',
        enum: 'ellipsis（只显示省略号）,title（并且显示为原生 title）,tooltip（并且显示为 tooltip 提示）',
        defVal: '',
        list: []
      },
      {
        name: 'column-key',
        disabled: true,
        desc: '已废弃，被 column-config.useKey 替换',
        version: '',
        type: 'boolean',
        enum: '',
        defVal: 'false',
        list: []
      },
      {
        name: 'row-key',
        disabled: true,
        desc: '已废弃，被 row-config.useKey 替换',
        version: '',
        type: 'boolean',
        enum: '',
        defVal: 'false',
        list: []
      },
      {
        name: 'row-id',
        disabled: true,
        desc: '已废弃，被 row-config.keyField 替换',
        version: '',
        type: 'string',
        enum: '',
        defVal: '默认 X_ROW_KEY，继承 setConfig.table.rowId',
        list: []
      },
      {
        name: 'keep-source',
        descKey: 'app.api.table.desc.keepSource',
        version: '',
        type: 'boolean',
        enum: '',
        defVal: '默认 false，继承 setConfig.table.keepSource',
        list: []
      },
      // {
      //   name: 'z-index',
      //   abandoned: true,
      //   descKey: 'app.api.table.desc.zIndex',
      //   version: '',
      //   type: 'number',
      //   enum: '',
      //   defVal: '继承 setConfig.table.zIndex',
      //   list: []
      // },
      {
        name: 'column-config',
        desc: '列的默认参数',
        version: '',
        type: 'any',
        enum: '',
        defVal: '',
        list: [
          {
            name: 'useKey',
            desc: '是否需要为每一列的 VNode 设置 key 属性',
            version: '3.5.0',
            type: 'boolean',
            enum: '',
            defVal: 'false',
            list: []
          },
          {
            name: 'isCurrent',
            desc: '当鼠标点击列头时，是否要高亮当前列',
            version: '3.4.3',
            type: 'boolean',
            enum: '',
            defVal: 'false',
            list: []
          },
          {
            name: 'isHover',
            desc: '当鼠标移到列头时，是否要高亮当前列头',
            version: '3.4.3',
            type: 'boolean',
            enum: '',
            defVal: 'false',
            list: []
          },
          {
            name: 'resizable',
            desc: '每一列是否启用列宽调整',
            version: '3.4.0',
            type: 'boolean',
            enum: 'false',
            defVal: '',
            list: []
          },
          {
            name: 'width',
            desc: '每一列的宽度',
            version: '',
            type: 'number, string',
            enum: 'auto, px, %',
            defVal: '',
            list: []
          },
          {
            name: 'minWidth',
            desc: '每一列的最小宽度',
            version: '',
            type: 'number, string',
            enum: 'auto, px, %',
            defVal: '',
            list: []
          },
          {
            name: 'maxFixedSize',
            desc: '冻结列允许设置的最大数量（如果是分组，则一个分组算一个',
            version: '4.5.0',
            type: 'number',
            enum: '',
            defVal: '4',
            list: []
          },
          // {
          //   name: 'maxWidth',
          //   desc: '每一列的最大宽度',
          //   version: '',
          //   type: 'number, string',
          //   enum: 'auto, px, %',
          //   defVal: '',
          //   list: []
          // },
          {
            name: 'header-export-method',
            desc: '每一列的自定义表头单元格数据导出方法，返回自定义的标题',
            version: '3.7.0',
            type: '({ column, options }) => string',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'export-method',
            desc: '每一列的自定义单元格数据导出方法，返回自定义的值',
            version: '3.7.0',
            type: '({ row, column, options }) => string',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'footer-export-method',
            desc: '每一列的自定义表尾单元格数据导出方法，返回自定义的值',
            version: '3.7.0',
            type: '({ items, _columnIndex, options }) => string',
            enum: '',
            defVal: '',
            list: []
          }
        ]
      },
      {
        name: 'row-config',
        desc: '行配置信息',
        version: '3.4.0',
        type: 'any',
        enum: '',
        defVal: '继承 setConfig.table.rowConfig',
        list: [
          {
            name: 'useKey',
            desc: '是否需要为每一行的 VNode 设置 key 属性',
            version: '3.5.0',
            type: 'boolean',
            enum: '',
            defVal: 'false',
            list: []
          },
          {
            name: 'keyField',
            desc: '自定义行数据唯一主键的字段名（默认自动生成）',
            version: '3.5.0',
            type: 'string',
            enum: '',
            defVal: '_X_ROW_KEY',
            list: []
          },
          {
            name: 'isCurrent',
            desc: '当鼠标点击行时，是否要高亮当前行',
            version: '3.4.3',
            type: 'boolean',
            enum: '',
            defVal: 'false',
            list: []
          },
          {
            name: 'isHover',
            desc: '当鼠标移到行时，是否要高亮当前行',
            version: '3.4.3',
            type: 'boolean',
            enum: '',
            defVal: 'false',
            list: []
          },
          {
            name: 'height',
            desc: '只对 show-overflow 有效，每一行的高度',
            version: '',
            type: 'number',
            enum: '',
            defVal: '',
            list: []
          }
        ]
      },
      {
        name: 'resize-config',
        desc: '响应式布局配置项',
        version: '3.6.12',
        type: 'Object',
        enum: '',
        defVal: '继承 setConfig.table.resizeConfig',
        list: [
          {
            name: 'refreshDelay',
            desc: '只对 auto-resize 有效，刷新延时，当父容器发生变化时，至少多少毫秒刷新布局',
            version: '',
            type: 'number',
            enum: '',
            defVal: '250',
            list: []
          }
        ]
      },
      {
        name: 'resizable-config',
        descKey: 'app.api.table.desc.resizableConfig',
        version: '3.0.20',
        type: 'Object',
        enum: '',
        defVal: '继承 setConfig.table.resizableConfig',
        list: [
          {
            name: 'minWidth',
            desc: '列宽拖动的最小宽度',
            version: '',
            type: 'number | string | (({ $table, column, columnIndex, cell }) => number | string)',
            enum: '',
            defVal: 'auto',
            list: []
          // },
          // {
          //   name: 'maxWidth',
          //   desc: '列宽拖动的最大宽度',
          //   version: '',
          //   type: 'number | string | (({ $table, column, columnIndex, cell }) => number | string)',
          //   enum: '',
          //   defVal: 'auto',
          //   list: []
          }
        ]
      },
      {
        name: 'seq-config',
        descKey: 'app.api.table.desc.seqConfig',
        version: '',
        type: 'any',
        enum: '',
        defVal: '继承 setConfig.table.seqConfig',
        list: [
          {
            name: 'startIndex',
            disabled: true,
            desc: '已废弃，请使用 seqMethod',
            version: '',
            type: 'number',
            enum: '',
            defVal: '0',
            list: []
          },
          {
            name: 'seqMethod',
            desc: '自定义序号的方法返回处理后的值',
            version: '',
            type: '({ row, rowIndex, column, columnIndex }) => boolean',
            enum: '',
            defVal: '',
            list: []
          }
        ]
      },
      {
        name: 'sort-config',
        descKey: 'app.api.table.desc.sortConfig',
        version: '',
        type: 'any',
        enum: '',
        defVal: '继承 setConfig.table.sortConfig',
        list: [
          {
            name: 'defaultSort',
            desc: '默认排序（只会在初始化时被触发一次）',
            version: '',
            type: 'any | any[]',
            enum: '',
            defVal: '',
            list: [
              {
                name: 'field',
                desc: '列字段名',
                version: '',
                type: 'string',
                enum: '',
                defVal: '',
                list: []
              },
              {
                name: 'order',
                desc: '排序方式',
                version: '',
                type: 'string',
                enum: 'asc（升序）,desc（降序）, null',
                defVal: '',
                list: []
              }
            ]
          },
          {
            name: 'orders',
            desc: '自定义轮转顺序',
            version: '',
            type: 'string[]',
            enum: 'asc, desc, null',
            defVal: '[\'asc\', \'desc\', \'null\']',
            list: []
          },
          {
            name: 'sortMethod',
            desc: '全局排序方法，当触发排序时会调用该函数返回排序后的列表',
            version: '',
            type: '({ data, column, field, order }) => any[]',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'multiple',
            desc: '是否启用多列组合筛选',
            version: '3.4.0',
            type: 'boolean',
            enum: '',
            defVal: 'false',
            list: []
          },
          {
            name: 'chronological',
            desc: '只对 multiple 有效，是否按照先后触发顺序进行排序',
            version: '3.5.0',
            type: 'boolean',
            enum: '',
            defVal: 'false',
            list: []
          },
          {
            name: 'remote',
            desc: '所有列是否使用服务端排序，如果设置为 true 则不会对数据进行处理',
            version: '',
            type: 'boolean',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'trigger',
            desc: '触发方式（注：当多种功能重叠时，会同时触发）',
            version: '',
            type: 'string',
            enum: 'default（点击按钮触发）, cell（点击表头触发）',
            defVal: 'default',
            list: []
          },
          {
            name: 'showIcon',
            desc: '是否显示列头排序图标',
            version: '',
            type: 'boolean',
            enum: '',
            defVal: 'true',
            list: []
          },
          {
            name: 'iconLayout',
            desc: '图标布局方式，支持纵向和横向',
            version: '3.7.9',
            type: 'string',
            enum: 'vertical,horizontal',
            defVal: 'vertical',
            list: []
          },
          {
            name: 'iconAsc',
            desc: '自定义升序的图标',
            version: '',
            type: 'string',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'iconDesc',
            desc: '自定义降序的图标',
            version: '',
            type: 'string',
            enum: '',
            defVal: '',
            list: []
          }
        ]
      },
      {
        name: 'filter-config',
        descKey: 'app.api.table.desc.filterConfig',
        version: '',
        type: 'any',
        enum: '',
        defVal: '继承 setConfig.table.filterConfig',
        list: [
          {
            name: 'remote',
            desc: '所有列是否使用服务端筛选，如果设置为 true 则不会对数据进行处理',
            version: '',
            type: 'boolean',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'filterMethod',
            desc: '全局筛选方法，当触发筛选时会调用该函数返回是否有效',
            version: '',
            type: '({ options, values, cellValue, row, column }) => boolean',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'showIcon',
            desc: '是否显示列头筛选图标',
            version: '',
            type: 'boolean',
            enum: '',
            defVal: 'true',
            list: []
          },
          {
            name: 'iconNone',
            desc: '自定义无条件时显示的图标',
            version: '',
            type: 'string',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'iconMatch',
            desc: '自定义带条件时显示的图标',
            version: '',
            type: 'string',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'confirmButtonText',
            desc: '自定义确认按钮文本',
            version: '3.7.8',
            type: 'string',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'resetButtonText',
            desc: '自定义重置按钮文本',
            version: '3.7.8',
            type: 'string',
            enum: '',
            defVal: '',
            list: []
          }
        ]
      },
      {
        name: 'export-config',
        descKey: 'app.api.table.desc.exportConfig',
        version: '',
        type: 'any',
        enum: '',
        defVal: '继承 setConfig.table.exportConfig',
        list: XEUtils.clone(exportDataAPI, true)
      },
      {
        name: 'import-config',
        descKey: 'app.api.table.desc.importConfig',
        version: '',
        type: 'any',
        enum: '',
        defVal: '继承 setConfig.table.importConfig',
        list: XEUtils.clone(importDataAPI, true)
      },
      {
        name: 'print-config',
        descKey: 'app.api.table.desc.printConfig',
        version: '',
        type: 'any',
        enum: '',
        defVal: '继承 setConfig.table.printConfig',
        list: XEUtils.clone(printAPI, true)
      },
      {
        name: 'radio-config',
        descKey: 'app.api.table.desc.radioConfig',
        version: '',
        type: 'any',
        enum: '',
        defVal: '继承 setConfig.table.radioConfig',
        list: [
          {
            name: 'strict',
            desc: '严格模式，选中后不能取消',
            version: '3.3.9',
            type: 'Boolean',
            enum: '',
            defVal: 'true',
            list: []
          },
          {
            name: 'reserve',
            desc: '是否保留勾选状态，例如：数据被刷新或者分页之后还保留之前选中的状态（需要有 row-config.keyField）',
            version: '',
            type: 'boolean',
            enum: '',
            defVal: 'false',
            list: []
          },
          {
            name: 'labelField',
            desc: '单选框显示的字段名，可以直接显示在单选框中',
            version: '',
            type: 'string',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'checkRowKey',
            desc: '默认选中指定行（只会在初始化时被触发一次，需要有 row-config.keyField）',
            version: '',
            type: 'string',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'visibleMethod',
            desc: '是否允许勾选的方法，该方法，的返回值用来决定这一行的 radio 是否显示',
            version: '3.4.2',
            type: '({ row }) => boolean',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'checkMethod',
            desc: '是否允许选中的方法，该方法的返回值用来决定这一行的 radio 是否可以选中',
            version: '',
            type: '({ row }) => boolean',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'trigger',
            desc: '触发方式（注：当多种功能重叠时，会同时触发）',
            version: '',
            type: 'string',
            enum: 'default（默认）, cell（点击单元格触发）, row（点击行触发）',
            defVal: 'default',
            list: []
          },
          {
            name: 'highlight',
            desc: '高亮选中行',
            version: '',
            type: 'boolean',
            enum: '',
            defVal: 'false',
            list: []
          }
        ]
      },
      {
        name: 'checkbox-config',
        descKey: 'app.api.table.desc.checkboxConfig',
        version: '',
        type: 'any',
        enum: '',
        defVal: '继承 setConfig.table.checkboxConfig',
        list: [
          {
            name: 'labelField',
            desc: '复选框显示的字段名，可以直接显示在复选框中',
            version: '',
            type: 'string',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'checkField',
            desc: '绑定选中属性（行数据中必须存在该字段，否则无效）',
            version: '',
            type: 'string',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'indeterminateField',
            desc: '绑定半选属性（行数据中必须存在该字段，否则无效）',
            version: '3.7.0',
            type: 'string',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'showHeader',
            desc: '是否显示全选按钮（如果 checkStrictly=true 则默认为 false）',
            version: '',
            type: 'boolean',
            enum: '',
            defVal: 'true',
            list: []
          },
          {
            name: 'checkAll',
            desc: '默认勾选所有（只会在初始化时被触发一次）',
            version: '',
            type: 'boolean',
            enum: '',
            defVal: 'false',
            list: []
          },
          {
            name: 'checkRowKeys',
            desc: '默认勾选指定行（只会在初始化时被触发一次，需要有 row-config.keyField）',
            version: '',
            type: 'string[]',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'checkStrictly',
            desc: '是否严格的遵循父子不互相关联的做法',
            version: '',
            type: 'boolean',
            enum: '',
            defVal: 'false',
            list: []
          },
          {
            name: 'strict',
            desc: '严格模式，当数据为空或全部禁用时，列头的复选框为禁用状态',
            version: '',
            type: 'boolean',
            enum: '',
            defVal: 'true',
            list: []
          },
          {
            name: 'visibleMethod',
            desc: '是否允许勾选的方法，该方法，的返回值用来决定这一行的 checkbox 是否显示',
            version: '3.4.2',
            type: '({ row }) => boolean',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'checkMethod',
            desc: '是否允许勾选的方法，该方法的返回值用来决定这一行的 checkbox 是否可以勾选',
            version: '',
            type: '({ row }) => boolean',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'trigger',
            desc: '触发方式（注：当多种功能重叠时，会同时触发）',
            version: '',
            type: 'string',
            enum: 'default（默认）, cell（点击单元格触发）, row（点击行触发）',
            defVal: 'default',
            list: []
          },
          {
            name: 'highlight',
            desc: '高亮勾选行',
            version: '',
            type: 'boolean',
            enum: '',
            defVal: 'false',
            list: []
          },
          {
            name: 'reserve',
            desc: '是否保留勾选状态，对于某些场景可能会用到，比如数据被刷新之后还保留之前选中的状态（需要有 row-config.keyField）',
            version: '',
            type: 'boolean',
            enum: '',
            defVal: 'false',
            list: []
          },
          {
            name: 'range',
            desc: '开启复选框范围选择功能（启用后通过鼠标在复选框的列内滑动选中或取消指定行）',
            version: '',
            type: 'boolean',
            enum: '',
            defVal: 'false',
            list: []
          },
          {
            name: 'isShiftKey',
            desc: '开启复选框指定行选择功能（启用后通过鼠标点击和 shift 键选取指定范围的行）',
            version: '3.7',
            type: 'boolean',
            enum: '',
            defVal: 'false',
            list: []
          }
        ]
      },
      {
        name: 'tooltip-config',
        descKey: 'app.api.table.desc.tooltipConfig',
        version: '',
        type: 'any',
        enum: '',
        defVal: '继承 setConfig.table.tooltipConfig',
        list: [
          {
            name: 'showAll',
            desc: '所有单元格开启工具提示',
            version: '',
            type: 'boolean',
            enum: '',
            defVal: 'false',
            list: []
          },
          {
            name: 'theme',
            desc: 'tooltip 的主题颜色',
            version: '',
            type: 'string',
            enum: 'dark,light',
            defVal: 'dark',
            list: []
          },
          {
            name: 'enterable',
            desc: '鼠标是否可进入到工具提示中',
            version: '',
            type: 'boolean',
            enum: '',
            defVal: 'false',
            list: []
          },
          {
            name: 'enterDelay',
            desc: '鼠标移入后延时多少才显示工具提示',
            version: '3.4.15',
            type: 'number',
            enum: '',
            defVal: '500',
            list: []
          },
          {
            name: 'leaveDelay',
            desc: '鼠标移出后延时多少才隐藏工具提示',
            version: '',
            type: 'number',
            enum: '',
            defVal: '300',
            list: []
          },
          {
            name: 'contentMethod',
            desc: '该方法可以通过返回值来重写默认的提示内容，可以返回 null 使用默认的提示内容，可以返回空内容去掉指定单元格的提示内容',
            version: '',
            type: '({ items?, row?, rowIndex?, $rowIndex, column, columnIndex, $columnIndex, type, cell, $event }) => string',
            enum: '',
            defVal: '',
            list: []
          }
        ]
      },
      {
        name: 'expand-config',
        descKey: 'app.api.table.desc.expandConfig',
        version: '',
        type: 'any',
        enum: '',
        defVal: '继承 setConfig.table.expandConfig',
        list: [
          {
            name: 'labelField',
            desc: '展开列显示的字段名，可以直接显示在单元格中',
            version: '',
            type: 'string',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'expandAll',
            desc: '默认展开所有行（只会在初始化时被触发一次）',
            version: '',
            type: 'boolean',
            enum: '',
            defVal: 'false',
            list: []
          },
          {
            name: 'expandRowKeys',
            desc: '默认展开指定行（只会在初始化时被触发一次，需要有 row-config.keyField）',
            version: '',
            type: 'string[]',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'accordion',
            desc: '每次只能展开一行',
            version: '',
            type: 'boolean',
            enum: '',
            defVal: 'false',
            list: []
          },
          {
            name: 'height',
            desc: '展开内容的高度，默认自适应高度',
            version: '3.6.0',
            type: 'number',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'trigger',
            desc: '触发方式（注：当多种功能重叠时，会同时触发）',
            version: '',
            type: 'string',
            enum: 'default（点击按钮触发）, cell（点击单元格触发）, row（点击行触发）',
            defVal: 'default',
            list: []
          },
          {
            name: 'lazy',
            desc: '是否使用懒加载',
            version: '',
            type: 'boolean',
            enum: '',
            defVal: 'false',
            list: []
          },
          {
            name: 'loadMethod',
            desc: '该方法用于异步加载展开后的内容（必须返回 Promise<any[]> 对象）',
            version: '',
            type: '({ row, rowIndex?, $rowIndex? }) => Promise<any[]',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'toggleMethod',
            desc: '该方法在展开或关闭触发之前调用，可以通过返回值来决定是否允许继续执行',
            version: '',
            type: '({ expanded, column, columnIndex, row, rowIndex? }) => boolean',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'visibleMethod',
            desc: '该函数的返回值用来决定是否允许显示展开按钮',
            version: '',
            type: '({ column, columnIndex, row, rowIndex? }) => boolean',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'reserve',
            desc: '是否保留展开状态，对于某些场景可能会用到，比如数据被刷新之后还保留之前展开的状态（需要有 row-config.keyField）',
            version: '',
            type: 'boolean',
            enum: '',
            defVal: 'false',
            list: []
          },
          {
            name: 'showIcon',
            desc: '是否显示图标按钮',
            version: '',
            type: 'boolean',
            enum: '',
            defVal: 'true',
            list: []
          },
          {
            name: 'iconOpen',
            desc: '自定义展开后显示的图标',
            version: '',
            type: 'string',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'iconClose',
            desc: '自定义收起后显示的图标',
            version: '',
            type: 'string',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'iconLoaded',
            desc: '自定义懒加载中显示的图标',
            version: '',
            type: 'string',
            enum: '',
            defVal: '',
            list: []
          }
        ]
      },
      {
        name: 'tree-config',
        descKey: 'app.api.table.desc.treeConfig',
        version: '',
        type: 'any',
        enum: '',
        defVal: '继承 setConfig.table.treeConfig',
        list: [
          {
            name: 'transform',
            desc: '自动将列表转为树结构（支持虚拟滚动）',
            version: '3.3.16',
            type: 'string',
            enum: '',
            defVal: 'false',
            list: []
          },
          {
            name: 'rowField',
            desc: '用于 tree-config.transform，树节点的字段名',
            version: '3.3.16',
            type: 'string',
            enum: '',
            defVal: 'id',
            list: []
          },
          {
            name: 'parentField',
            desc: '用于 tree-config.transform，树父节点的字段名',
            version: '3.3.16',
            type: 'string',
            enum: '',
            defVal: 'parentId',
            list: []
          },
          {
            name: 'childrenField',
            desc: '树子节点的字段名',
            version: '3.7.0',
            type: 'string',
            enum: '',
            defVal: 'children',
            list: []
          },
          {
            name: 'children',
            disabled: true,
            desc: '已废弃，请使用 childrenField',
            version: '',
            type: 'string',
            enum: '',
            defVal: 'children',
            list: []
          },
          {
            name: 'indent',
            desc: '树节点的缩进',
            version: '',
            type: 'number',
            enum: '',
            defVal: '20',
            list: []
          },
          {
            name: 'showLine',
            desc: '树节点的连接线（启用连接线会降低渲染性能）',
            version: '3.7.0',
            type: 'boolean',
            enum: '',
            defVal: 'false',
            list: []
          },
          {
            name: 'line',
            disabled: true,
            desc: '已废弃，请使用 showLine',
            version: '',
            type: 'boolean',
            enum: '',
            defVal: 'false',
            list: []
          },
          {
            name: 'expandAll',
            desc: '默认展开所有子孙树节点（只会在初始化时被触发一次）',
            version: '',
            type: 'boolean',
            enum: '',
            defVal: 'false',
            list: []
          },
          {
            name: 'expandRowKeys',
            desc: '默认展开指定树节点（只会在初始化时被触发一次，需要有 row-config.keyField）',
            version: '',
            type: 'string[]',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'accordion',
            desc: '对于同一级的节点，每次只能展开一个',
            version: '',
            type: 'boolean',
            enum: '',
            defVal: 'false',
            list: []
          },
          {
            name: 'trigger',
            desc: '触发方式（注：当多种功能重叠时，会同时触发）',
            version: '',
            type: 'string',
            enum: 'default（点击按钮触发）, cell（点击单元格触发）, row（点击行触发）',
            defVal: 'default',
            list: []
          },
          {
            name: 'lazy',
            desc: '是否使用懒加载（启用后只有指定 hasChild 字段的节点才允许被点击）',
            version: '',
            type: 'boolean',
            enum: '',
            defVal: 'false',
            list: []
          },
          {
            name: 'hasChildField',
            desc: '只对 lazy 启用后有效，标识是否存在子节点，从而控制是否允许被点击',
            version: '3.7.0',
            type: 'string',
            enum: '',
            defVal: 'hasChild',
            list: []
          },
          {
            name: 'hasChild',
            disabled: true,
            desc: '已废弃，请使用 hasChildField',
            version: '',
            type: 'string',
            enum: '',
            defVal: 'hasChild',
            list: []
          },
          {
            name: 'loadMethod',
            desc: '该方法用于异步加载子节点（必须返回 Promise<any[]> 对象）',
            version: '',
            type: '({ row }) => Promise<any[]>',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'toggleMethod',
            desc: '该方法在展开或关闭触发之前调用，可以通过返回值来决定是否允许继续执行',
            version: '',
            type: '({ expanded, row, column, columnIndex }) => boolean',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'reserve',
            desc: '是否保留展开状态，对于某些场景可能会用到，比如数据被刷新之后还保留之前展开的状态（需要有 row-config.keyField）',
            version: '',
            type: 'boolean',
            enum: '',
            defVal: 'false',
            list: []
          },
          {
            name: 'showIcon',
            desc: '是否显示图标按钮',
            version: '',
            type: 'boolean',
            enum: '',
            defVal: 'true',
            list: []
          },
          {
            name: 'iconOpen',
            desc: '自定义展开后显示的图标',
            version: '',
            type: 'string',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'iconClose',
            desc: '自定义收起后显示的图标',
            version: '',
            type: 'string',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'iconLoaded',
            desc: '自定义懒加载中显示的图标',
            version: '',
            type: 'string',
            enum: '',
            defVal: '',
            list: []
          }
        ]
      },
      {
        name: 'menu-config',
        descKey: 'app.api.table.desc.menuConfig',
        version: '',
        type: 'any',
        enum: '',
        defVal: '继承 setConfig.table.menuConfig',
        list: [
          {
            name: 'enabled',
            desc: '是否启用',
            version: '3.0.19',
            type: 'boolean',
            enum: '',
            defVal: 'true',
            list: []
          },
          {
            name: 'header',
            desc: '表头的右键菜单',
            version: '',
            type: 'any',
            enum: '',
            defVal: '',
            list: XEUtils.clone(contextMenuAPI, true)
          },
          {
            name: 'body',
            desc: '内容的右键菜单',
            version: '',
            type: 'any',
            enum: '',
            defVal: '',
            list: XEUtils.clone(contextMenuAPI, true)
          },
          {
            name: 'footer',
            desc: '表尾的右键菜单',
            version: '',
            type: 'any',
            enum: '',
            defVal: '',
            list: XEUtils.clone(contextMenuAPI, true)
          },
          {
            name: 'trigger',
            desc: '触发方式',
            version: '',
            type: 'string',
            enum: 'default（默认右键表格触发）, cell（右键单元格触发）',
            defVal: 'default',
            list: []
          },
          {
            name: 'visibleMethod',
            desc: '该函数的返回值用来决定是否允许显示右键菜单（对于需要对菜单进行权限控制时可能会用到）',
            version: '',
            type: '({ type, options, columns, row?, rowIndex?, column?, columnIndex? }) => boolean',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'className',
            desc: '菜单面板的 className',
            version: '',
            type: 'string',
            enum: '',
            defVal: '',
            list: []
          }
        ]
      },
      {
        name: 'clip-config',
        descKey: 'app.api.table.desc.clipConfig',
        version: 'extend-cell-area',
        type: 'any',
        enum: '',
        defVal: '继承 setConfig.table.clipConfig',
        list: [
          {
            name: 'isCopy',
            desc: '是否启用复制功能',
            version: 'extend-cell-area',
            type: 'boolean',
            enum: '',
            defVal: 'true',
            list: []
          },
          {
            name: 'isCut',
            desc: '是否启用剪贴功能',
            version: 'extend-cell-area',
            type: 'boolean',
            enum: '',
            defVal: 'true',
            list: []
          },
          {
            name: 'isPaste',
            desc: '是否启用粘贴功能',
            version: 'extend-cell-area',
            type: 'boolean',
            enum: '',
            defVal: 'true',
            list: []
          },
          {
            name: 'isFillPaste',
            desc: '是否填充粘贴，如果启用了，当被选取的粘贴单元格与粘贴单元格的行与列数量不匹配时，会将内容强制粘贴所选的单元格',
            version: 'extend-cell-area',
            type: 'boolean',
            enum: '',
            defVal: 'false',
            list: []
          },
          {
            name: 'isRowIncrement',
            desc: '是否启用行自增，当粘贴的行数超出表格时自动插入新行',
            version: 'extend-cell-area',
            type: 'boolean',
            enum: '',
            defVal: 'false',
            list: []
          },
          {
            name: 'isColumnIncrement',
            desc: '是否启用列自增，当粘贴的列数超出表格时自动插入新列（需要注意自增的列自字段是否定义，否则将无法响应）',
            version: 'extend-cell-area',
            type: 'boolean',
            enum: '',
            defVal: 'false',
            list: []
          },
          {
            name: 'includeFields',
            desc: '用于指定哪些列允许被复制粘贴',
            version: 'extend-cell-area',
            type: 'string[]',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'excludeFields',
            desc: '用于排除指定列允许不允许被复制粘贴',
            version: 'extend-cell-area',
            type: 'string[]',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'copyMethod',
            desc: '重写单元格复制取值的方法，将单元格复制到剪贴板',
            version: 'extend-cell-area',
            type: '({ isCut, row, column, cellValue }) => string',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'beforeCopyMethod',
            desc: '自定义单元格复制取值之前的方法，可以通过返回 false 阻止复制行为',
            version: 'extend-cell-area',
            type: '({ isCut, activeArea, targetAreas }) => boolean',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'afterCopyMethod',
            desc: '自定义单元格复制到剪贴板之后的方法',
            version: 'extend-cell-area',
            type: '({ isCut, targetAreas }) => void',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'cutMethod',
            desc: '重写单元格剪贴值清除的方法，将剪贴单元格的值清除',
            version: 'extend-cell-area',
            type: '({ row, column, cellValue }) => void',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'beforeCutMethod',
            desc: '自定义单元格剪贴值清除之前的方法，可以通过返回 false 阻止清除行为',
            version: 'extend-cell-area',
            type: '({ activeArea, cutAreas, currentAreas }) => boolean',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'afterCutMethod',
            desc: '自定义单元格剪贴值清除之后的方法',
            version: 'extend-cell-area',
            type: '({ cutAreas, currentAreas }) => void',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'pasteMethod',
            desc: '重写单元格粘贴赋值的方法，从剪贴板赋值到单元格',
            version: 'extend-cell-area',
            type: '({ isCut, row, column, cellValue }) => void',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'beforePasteMethod',
            desc: '自定义单元格粘贴赋值之前的方法，可以通过返回 false 阻止复制行为',
            version: 'extend-cell-area',
            type: '({ isCut, activeArea, cutAreas, currentAreas, targetAreas, cellValues, pasteCells }) => boolean',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'afterPasteMethod',
            desc: '自定义单元格粘贴赋值之后的方法',
            version: 'extend-cell-area',
            type: '({ isCut, cutAreas, currentAreas, targetAreas, cellValues, pasteCells, insertRows, insertColumns }) => void',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'createRowsMethod',
            desc: '只对 isRowIncrement 有效，自定义创建自增行数据的方法',
            version: 'extend-cell-area',
            type: '({ isCut, cutAreas, currentAreas, targetAreas, cellValues, pasteCells, insertRows }) => any[]',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'createColumnsMethod',
            desc: '只对 isColumnIncrement 有效，自定义创建自增列配置的方法',
            version: 'extend-cell-area',
            type: '({ isCut, cutAreas, currentAreas, targetAreas, cellValues, pasteCells, insertColumns }) => any[]',
            enum: '',
            defVal: '',
            list: []
          }
        ]
      },
      {
        name: 'fnr-config',
        descKey: 'app.api.table.desc.fnrConfig',
        version: 'extend-cell-area',
        type: 'any',
        enum: '',
        defVal: '继承 setConfig.table.fnrConfig',
        list: [
          {
            name: 'isFind',
            desc: '是否启用查找功能',
            version: 'extend-cell-area',
            type: 'boolean',
            enum: '',
            defVal: 'true',
            list: []
          },
          {
            name: 'findMethod',
            desc: '自定义单元格查找方法',
            version: 'extend-cell-area',
            type: '({ cellValue, isWhole, isRE, isSensitive, findValue: findCellValue, findRE }) => boolean',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'beforeFindMethod',
            desc: '自定义单元格查找之前的方法，可以通过返回 false 阻止查找行为',
            version: 'extend-cell-area',
            type: '({ isAll, findValue }) => boolean',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'afterFindMethod',
            desc: '自定义单元格查找之后的方法',
            version: 'extend-cell-area',
            type: '({ isAll, findValue, result }) => void',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'isReplace',
            desc: '是否启用替换功能',
            version: 'extend-cell-area',
            type: 'boolean',
            enum: '',
            defVal: 'true',
            list: []
          },
          {
            name: 'replaceMethod',
            desc: '自定义单元格替换方法',
            version: 'extend-cell-area',
            type: '({ row, column, cellValue }) => void',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'beforeReplaceMethod',
            desc: '自定义单元格替换之前的方法，可以通过返回 false 阻止替换行为',
            version: 'extend-cell-area',
            type: '({ isAll, findValue, replaceValue }) => boolean',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'afterReplaceMethod',
            desc: '自定义单元格替换之后的方法',
            version: 'extend-cell-area',
            type: '({ isAll, findValue, replaceValue, result }) => void',
            enum: '',
            defVal: '',
            list: []
          }
        ]
      },
      {
        name: 'mouse-config',
        descKey: 'app.api.table.desc.mouseConfig',
        version: '',
        type: 'any',
        enum: '',
        defVal: '继承 setConfig.table.mouseConfig',
        list: [
          {
            name: 'selected',
            desc: '开启单元格选中功能（只对 edit-config.mode=cell 有效）',
            version: '',
            type: 'boolean',
            enum: '',
            defVal: 'false',
            list: []
          },
          {
            name: 'area',
            desc: '如果功能被支持，则开启鼠标左键单元格区域选取功能，非连续的区域，同时按住 鼠标左键 + Ctrl 键，用鼠标逐一选取',
            version: 'extend-cell-area',
            type: 'boolean',
            enum: '',
            defVal: 'false',
            list: []
          },
          {
            name: 'extension',
            desc: '只对 area 启用后有效，是否开启区域扩展选取功能，开启后可以通过鼠标左键按住区域内右下角扩展按钮，将区域横向或纵向扩大（支持扩大区域并复制值）',
            version: 'extend-cell-area',
            type: 'boolean',
            enum: '',
            defVal: 'true',
            list: []
          }
        ]
      },
      {
        name: 'area-config',
        descKey: 'app.api.table.desc.areaConfig',
        version: 'extend-cell-area',
        type: 'any',
        enum: '',
        defVal: '继承 setConfig.table.areaConfig',
        list: [
          {
            name: 'show-column-status',
            desc: '只对 mouse-config.area 启用后有效，显示选取单元格所对应列的状态',
            version: 'extend-cell-area',
            type: 'boolean',
            enum: '',
            defVal: 'false',
            list: []
          },
          {
            name: 'show-row-status',
            desc: '只对 mouse-config.area 启用后有效，显示选取单元格所对应行的状态',
            version: 'extend-cell-area',
            type: 'boolean',
            enum: '',
            defVal: 'false',
            list: []
          },
          {
            name: 'multiple',
            desc: '只对 mouse-config.area 启用后有效，启用多区域选取功能',
            version: 'extend-cell-area',
            type: 'boolean',
            enum: '',
            defVal: 'false',
            list: []
          },
          {
            name: 'includeFields',
            desc: '用于指定哪些列允许被选取',
            version: 'extend-cell-area',
            type: 'string[]',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'excludeFields',
            desc: '用于排除指定列允许不允许被选取',
            version: 'extend-cell-area',
            type: 'string[]',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'selectCellByHeader',
            desc: '只对 mouse-config.area 启用后有效，点击列头是否选取当前列的所有单元格',
            version: 'extend-cell-area',
            type: 'boolean',
            enum: '',
            defVal: 'true',
            list: []
          },
          {
            name: 'extendByCopy',
            desc: '只对 mouse-config.extension 启用后有效，将被选取区域的值复制到扩展区域中（同时按住 shift 键可取消值复制功能）',
            version: 'extend-cell-area',
            type: 'boolean',
            enum: '',
            defVal: 'true',
            list: []
          },
          {
            name: 'extendByCalc',
            desc: '只对 mouse-config.extension 启用后有效，当选取大于两行或两列时，自动识别最近两行或两列数据运算规则进行计算（同时按住 ctrl 键可取消值自动识别数字功能）',
            version: 'extend-cell-area',
            type: 'boolean',
            enum: '',
            defVal: 'false',
            list: []
          },
          {
            name: 'extendCalcMethod',
            desc: '只对 extendByCalc 启用后有效，重写单元格扩展区域计算值的方法',
            version: 'extend-cell-area',
            type: '({ rows, cols, targetValues, targetRows, targetCols, extendRows, extendCols, direction }) => any[][]',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'extendSetMethod',
            desc: '只对 extendByCopy | extendByCalc 启用后有效，重写单元格扩展区域赋值的方法',
            version: 'extend-cell-area',
            type: '({ cellValue, row, column, rows, cols, targetValues, targetRows, targetCols, extendRows, extendCols, direction }) => void',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'autoClear',
            desc: '当点击表格之外，是否自动清除单元格的选取状态',
            version: '3.8.7',
            type: 'boolean',
            enum: '',
            defVal: 'true',
            list: []
          },
          {
            name: 'beforeExtendSetMethod',
            desc: '只对 extendByCopy | extendByCalc 启用后有效，自定义单元格扩展区域赋值之前的方法，可以通过返回 false 阻止扩展区域赋值行为',
            version: 'extend-cell-area',
            type: '({ rows, cols, targetValues, targetRows, targetCols, extendRows, extendCols, direction }) => boolean',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'afterExtendSetMethod',
            desc: '只对 extendByCopy | extendByCalc 启用后有效，自定义单元格扩展区域赋值之后的方法',
            version: 'extend-cell-area',
            type: '(params: { rows, cols, targetValues, targetRows, targetCols, extendValues, extendRows, extendCols, direction }) => void',
            enum: '',
            defVal: '',
            list: []
          }
        ]
      },
      {
        name: 'keyboard-config',
        descKey: 'app.api.table.desc.keyboardConfig',
        version: '',
        type: 'any',
        enum: '',
        defVal: '继承 setConfig.table.keyboardConfig',
        list: [
          {
            name: 'isArrow',
            desc: '开启方向键功能',
            version: '',
            type: 'boolean',
            enum: '',
            defVal: 'false',
            list: []
          },
          {
            name: 'isEsc',
            desc: '开启Esc键关闭编辑功能',
            version: '3.4.6',
            type: 'boolean',
            enum: '',
            defVal: 'true',
            list: []
          },
          {
            name: 'isDel',
            desc: '开启删除键功能，用于 edit-config.mode 和 column.editRender 编辑模式',
            version: '',
            type: 'boolean',
            enum: '',
            defVal: 'false',
            list: []
          },
          {
            name: 'isBack',
            desc: '开启回退键功能，用于 edit-config 编辑模式或者树形结构回退到上一级节点',
            version: '3.8.8',
            type: 'boolean',
            enum: '',
            defVal: 'false',
            list: []
          },
          {
            name: 'isEnter',
            desc: '开启回车键功能',
            version: '',
            type: 'boolean',
            enum: '',
            defVal: 'false',
            list: []
          },
          {
            name: 'isTab',
            desc: '开启 Tab 键功能',
            version: '',
            type: 'boolean',
            enum: '',
            defVal: 'false',
            list: []
          },
          {
            name: 'isShift',
            desc: '如果功能被支持，用于 mouse-config.area，开启同时按住方向键以活动区域为起始，向指定方向延伸单元格区域',
            version: 'extend-cell-area',
            type: 'boolean',
            enum: '',
            defVal: 'false',
            list: []
          },
          {
            name: 'isEdit',
            desc: '开启任意键进入编辑（功能键除外），用于 edit-config.mode 和 column.editRender 编辑模式',
            version: '',
            type: 'boolean',
            enum: '',
            defVal: 'false',
            list: []
          },
          {
            name: 'isMerge',
            desc: '如果功能被支持，用于 mouse-config.area，开启合并和取消合并功能',
            version: 'extend-cell-area',
            type: 'Boolean',
            enum: '',
            defVal: 'false',
            list: []
          },
          {
            name: 'isClip',
            desc: '如果功能被支持，用于 mouse-config.area，开启复制、剪贴、粘贴功能',
            version: 'extend-cell-area',
            type: 'Boolean',
            enum: '',
            defVal: 'false',
            list: []
          },
          {
            name: 'isFNR',
            desc: '如果功能被支持，用于 mouse-config.area，开启查找和替换功能',
            version: 'extend-cell-area',
            type: 'Boolean',
            enum: '',
            defVal: 'false',
            list: []
          },
          {
            name: 'isChecked',
            desc: '如果功能被支持，用于 column.type=checkbox|radio，开启空格键切换复选框或单选框状态功能',
            version: '3.0.14',
            type: 'Boolean',
            enum: '',
            defVal: 'false',
            list: []
          },
          {
            name: 'arrowCursorLock',
            desc: '用于 mouse-config.area 与 edit-config.mode=cell，方向键光标锁，开启后处于非聚焦式编辑状态，将支持在编辑状态中通过方向键切换单元格。（切换为聚焦编辑状态，可以按 F2 键或者鼠标左键点击输入框，就可以用方向键左右移动输入框的光标）',
            version: 'extend-cell-area',
            type: 'boolean',
            enum: '',
            defVal: 'false',
            list: []
          },
          {
            name: 'enterToTab',
            desc: '是否将回车键行为改成 Tab 键行为',
            version: '',
            type: 'Boolean',
            enum: '',
            defVal: 'false',
            list: []
          },
          {
            name: 'delMethod',
            desc: '只对 isDel=true 有效，用于删除键清空单元格内容方法',
            version: '3.0.14',
            type: '({ row, rowIndex, column, columnIndex }) => void',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'backMethod',
            desc: '只对 isDel=true 有效，用于重写回退键清空单元格内容并激活为编辑状态方法',
            version: '3.0.14',
            type: '({ row, rowIndex, column, columnIndex }) => void',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'editMethod',
            desc: '只对 isEdit=true 有效，用于重写编辑单元格方法',
            version: '',
            type: '({ row, rowIndex, column, columnIndex }) => void',
            enum: '',
            defVal: '',
            list: []
          }
        ]
      },
      {
        name: 'edit-config',
        descKey: 'app.api.table.desc.editConfig',
        version: '',
        type: 'any',
        enum: '',
        defVal: '继承 setConfig.table.editConfig',
        list: [
          {
            name: 'trigger',
            desc: '触发方式',
            version: '',
            type: 'string',
            enum: 'manual（手动触发方式，只能用于 mode=row）,click（点击触发编辑）,dblclick（双击触发编辑）',
            defVal: 'click',
            list: []
          },
          {
            name: 'enabled',
            desc: '是否启用',
            version: '3.3.4',
            type: 'boolean',
            enum: '',
            defVal: 'true',
            list: []
          },
          {
            name: 'mode',
            desc: '编辑模式',
            version: '',
            type: 'string',
            enum: 'cell（单元格编辑模式）,row（行编辑模式）',
            defVal: 'cell',
            list: []
          },
          {
            name: 'showIcon',
            desc: '是否显示列头编辑图标',
            version: '',
            type: 'boolean',
            enum: '',
            defVal: 'true',
            list: []
          },
          {
            name: 'showStatus',
            desc: '只对 keep-source 开启有效，是否显示单元格新增与修改状态',
            version: '',
            type: 'boolean',
            enum: '',
            defVal: 'false',
            list: []
          },
          {
            name: 'showUpdateStatus',
            desc: '只对 keep-source 开启有效，是否显示单元格修改状态',
            version: '3.1.9',
            type: 'boolean',
            enum: '',
            defVal: 'false',
            list: []
          },
          {
            name: 'showInsertStatus',
            desc: '只对 keep-source 开启有效，是否显示单元格新增状态',
            version: '3.1.9',
            type: 'boolean',
            enum: '',
            defVal: 'false',
            list: []
          },
          {
            name: 'showAsterisk',
            desc: '是否显示必填字段的红色星号',
            version: '',
            type: 'boolean',
            enum: '',
            defVal: 'true',
            list: []
          },
          {
            name: 'autoClear',
            desc: '当点击非编辑列之后，是否自动清除单元格的激活状态',
            version: '',
            type: 'boolean',
            enum: '',
            defVal: 'true',
            list: []
          },
          {
            name: 'activeMethod',
            disabled: true,
            desc: '请使用 beforeEditMethod',
            version: '',
            type: '({ row, rowIndex, column, columnIndex }) => boolean',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'beforeEditMethod',
            desc: '自定义编辑之前逻辑，该方法的返回值用来决定该单元格是否允许编辑',
            version: '3.5.9',
            type: '({ row, rowIndex, column, columnIndex }) => boolean',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'afterEditMethod',
            desc: '自定义激活编辑之后逻辑（激活编辑是单元格转为编辑状态之后，并不是指编辑完成）',
            version: '3.8.0',
            type: '({ row, rowIndex, column, columnIndex }) => void',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'icon',
            desc: '自定义可编辑列的状态图标',
            version: '',
            type: 'string',
            enum: '',
            defVal: '',
            list: []
          }
        ]
      },
      {
        name: 'valid-config',
        descKey: 'app.api.table.desc.validConfig',
        version: '',
        type: 'any',
        enum: '',
        defVal: '',
        list: [
          {
            name: 'autoPos',
            desc: '是否自动定位到校验不通过的单元格',
            version: '',
            type: 'bolean',
            enum: '',
            defVal: 'true',
            list: []
          },
          {
            name: 'showMessage',
            desc: '是否显示错误显示',
            version: '3.0.10',
            type: 'bolean',
            enum: '',
            defVal: 'true',
            list: []
          },
          // {
          //   name: 'message',
          //   abandoned: true,
          //   desc: '校验提示框的方式',
          //   version: '',
          //   type: 'string',
          //   enum: 'default（如果不设置高度，则默认第一行使用 tooltip，之后使用 inline）, none（关闭提示）, inline（强制使用内联的提示）, tooltip（强制使用 tooltip 提示）',
          //   defVal: 'default',
          //   list: []
          // },
          {
            name: 'maxWidth',
            abandoned: true,
            desc: '校验提示框的最大宽度（对于某些特殊场景可能会用到）',
            version: '',
            type: 'string | number',
            enum: '',
            defVal: '320',
            list: []
          },
          {
            name: 'className',
            desc: '给校验提示框附加 calss',
            version: '3.7.9',
            type: 'string | ((params) => {})',
            enum: '',
            defVal: '',
            list: []
          }
        ]
      },
      {
        name: 'edit-rules',
        descKey: 'app.api.table.desc.editRules',
        version: '',
        type: '{ [field: string]: ColumnEditRule[] }',
        enum: '',
        defVal: '',
        list: [
          {
            name: 'required',
            desc: '是否必填',
            version: '',
            type: 'boolean',
            enum: '',
            defVal: 'false',
            list: []
          },
          {
            name: 'min',
            desc: '校验值最小长度（如果 type=number 则比较值大小）',
            version: '',
            type: 'number',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'max',
            desc: '校验值最大长度（如果 type=number 则比较值大小）',
            version: '',
            type: 'number',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'type',
            desc: '数据校验的类型',
            version: '',
            type: 'string',
            enum: 'number, string, array',
            defVal: 'string',
            list: []
          },
          {
            name: 'pattern',
            desc: '正则校验',
            version: '',
            type: 'RegExp | string',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'validator',
            desc: '自定义校验方法返回一个 Error 或者 Promise<new Error("提示消息")>',
            version: '',
            type: '({ cellValue, rule, rules, row, rowIndex，column, columnIndex }) => Error | Promise<any>',
            enum: '',
            defVal: '',
            list: []
          },
          // {
          //   name: 'content',
          //   desc: '校验提示内容（支持开启国际化）',
          //   version: '3.4.0',
          //   type: 'string',
          //   enum: '',
          //   defVal: '',
          //   list: []
          // },
          {
            name: 'message',
            desc: '校验提示内容（支持开启国际化）',
            version: '',
            type: 'string',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'trigger',
            abandoned: true,
            desc: '触发校验方式（如果为空，则正常校验；如果为manual，则永远不会被自动触发；除非明确知道自定义目标的触发方式，否则设置后将导致不会被触发）',
            version: '',
            type: 'string',
            enum: 'blur,change,manual',
            defVal: '',
            list: []
          },
          {
            name: 'maxWidth',
            abandoned: true,
            desc: '提示框的最大宽度（对于某些特殊场景可能会用到）',
            version: '',
            type: 'number',
            enum: '',
            defVal: '320',
            list: []
          }
        ]
      },
      {
        name: 'empty-text',
        descKey: 'app.api.table.desc.emptyText',
        version: '',
        type: 'string',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'empty-render',
        descKey: 'app.api.table.desc.emptyRender',
        version: '',
        type: 'any',
        enum: '',
        defVal: '继承 setConfig.table.emptyRender',
        list: [
          {
            name: 'name',
            desc: '渲染器名称',
            version: '',
            type: 'string',
            enum: '',
            defVal: '',
            list: []
          // },
          // {
          //   name: 'props',
          //   desc: '渲染的参数（请查看自定义的 Props）',
          //   version: '',
          //   type: 'any',
          //   enum: '',
          //   defVal: '',
          //   list: []
          // },
          // {
          //   name: 'attrs',
          //   desc: '渲染的属性（请查看自定义的 Attribute）',
          //   version: '',
          //   type: 'any',
          //   enum: '',
          //   defVal: '',
          //   list: []
          // },
          // {
          //   name: 'events',
          //   desc: '渲染组件的事件（请查看自定义的 Events）',
          //   version: '',
          //   type: 'any',
          //   enum: '',
          //   defVal: '{}, ...[自定义的 arguments]',
          //   list: []
          // },
          // {
          //   name: 'nativeEvents',
          //   abandoned: true,
          //   desc: '渲染组件的原生事件（请查看自定义的 Events）',
          //   version: '',
          //   type: 'any',
          //   enum: '',
          //   defVal: '{}, ...[自定义的 arguments]',
          //   list: []
          }
        ]
      },
      {
        name: 'loading-config',
        desc: '加载中配置项',
        version: '3.6.0',
        type: 'any',
        enum: '',
        defVal: '继承 setConfig.table.loadingConfig',
        list: [
          {
            name: 'icon',
            desc: '显示图标',
            version: '',
            type: 'string',
            enum: '',
            defVal: ''
          },
          {
            name: 'text',
            desc: '显示文字',
            version: '',
            type: 'string',
            enum: '',
            defVal: ''
          }
        ]
      },
      {
        name: 'custom-config',
        descKey: 'app.api.table.desc.customConfig',
        version: '',
        type: 'any',
        enum: '',
        defVal: '继承 setConfig.table.customConfig',
        list: [
          {
            name: 'storage',
            desc: '是否启用 localStorage 本地保存，会将列操作状态保留在本地（需要有 id）',
            version: '',
            type: 'any',
            enum: '',
            defVal: '',
            list: [
              {
                name: 'visible',
                desc: '启用显示/隐藏列状态缓存',
                version: '',
                type: 'boolean',
                enum: '',
                defVal: '',
                list: []
              },
              {
                name: 'resizable',
                desc: '启用列宽状态缓存',
                version: '',
                type: 'boolean',
                enum: '',
                defVal: '',
                list: []
              },
              {
                name: 'sort',
                desc: '启用列顺序缓存',
                version: '3.8.3',
                type: 'boolean',
                enum: '',
                defVal: '',
                list: []
              },
              {
                name: 'fixed',
                desc: '启用冻结列状态缓存',
                version: '3.6.14',
                type: 'boolean',
                enum: '',
                defVal: '',
                list: []
              }
            ]
          },
          {
            name: 'mode',
            desc: '操作模式，default默认模式；modal 窗口模式（只对 trigger=click 有效）；drawer 抽屉模式（只对 trigger=click 有效）',
            version: '3.8.10',
            type: 'string',
            enum: 'default,modal,drawer',
            defVal: 'default',
            list: []
          },
          {
            name: 'trigger',
            abandoned: true,
            desc: '触发方式',
            version: '3.8.0',
            type: 'string',
            enum: 'manual,click,hover',
            defVal: 'click',
            list: []
          },
          {
            name: 'immediate',
            desc: '列勾选之后是否实时同步',
            version: '3.8.0',
            type: 'boolean',
            enum: '',
            defVal: 'false',
            list: []
          },
          {
            name: 'showFooter',
            desc: '是否显示底部操作按钮',
            version: '3.8.0',
            type: 'boolean',
            enum: '',
            defVal: 'true',
            list: []
          },
          {
            name: 'allowVisible',
            desc: '是否允许自定义列显示与隐藏',
            version: '3.8.8',
            type: 'boolean',
            enum: '',
            defVal: 'true',
            list: []
          },
          {
            name: 'allowFixed',
            desc: '是否允许自定义冻结列',
            version: '3.8.0',
            type: 'boolean',
            enum: '',
            defVal: 'true',
            list: []
          },
          {
            name: 'allowSort',
            desc: '只对 mode=popup 有效，是否允许自定义排序',
            version: '3.8.3',
            type: 'boolean',
            enum: '',
            defVal: 'true',
            list: []
          },
          {
            name: 'allowResizable',
            desc: '是否允许自定义调整列宽',
            version: '3.8.8',
            type: 'boolean',
            enum: '',
            defVal: 'true',
            list: []
          },
          {
            name: 'restoreStore',
            desc: '只对 storage 有效，用于重写默认的恢复自定义配置逻辑，比如需要将服务器保持的个性化信息恢复到本地时可能会用到',
            version: '3.8.9',
            type: '(params: {id, type, storeData}) => Promise<storeData>',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'updateStore',
            desc: '只对 storage 有效，重写默认的保存方法，比如需要将自定义列信息保持到服务器时可能会用到',
            version: '3.8.9',
            type: '(params: {id, type, storeData}) => Promise<any>',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'placement',
            desc: '设置自定义弹窗面板的位置',
            version: '3.8.8',
            type: 'string',
            enum: 'left, right, topLeft, topRight, bottomLeft, bottomRight',
            defVal: 'topRight',
            list: []
          },
          {
            name: 'confirmButtonText',
            desc: '确定按钮的文本内容',
            version: '3.8.0',
            type: 'string',
            enum: '',
            defVal: '确定',
            list: []
          },
          {
            name: 'resetButtonText',
            desc: '重置按钮的文本内容',
            version: '3.8.0',
            type: 'string',
            enum: '',
            defVal: '重置',
            list: []
          },
          {
            name: 'checkMethod',
            desc: '自定义列是否允许列选中的方法，该方法的返回值用来决定这一列的 checkbox 是否可以选中',
            version: '',
            type: '({ column }) => boolean',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'visibleMethod',
            desc: '自定义列是否的方法，该方法的返回值用来决定这一列是否显示',
            version: '3.8.0',
            type: '({ column }) => boolean',
            enum: '',
            defVal: '',
            list: []
          }
        ]
      },
      // {
      //   name: 'animat',
      //   abandoned: true,
      //   desc: '表格动画效果开关（关闭后视觉效果更快）',
      //   version: '',
      //   type: 'boolean',
      //   enum: '',
      //   defVal: '默认 true，继承 setConfig.table.animat',
      //   list: []
      // },
      // {
      //   name: 'delay-hover',
      //   abandoned: true,
      //   desc: '当表格发生拖动、滚动...等行为时，至少多少毫秒之后才允许触发 hover 事件',
      //   version: '',
      //   type: 'number',
      //   enum: '',
      //   defVal: '默认 250，继承 setConfig.table.delayHover',
      //   list: []
      // },
      {
        name: 'scroll-x',
        desc: '横向虚拟滚动配置（不支持展开行）',
        version: '',
        type: 'any',
        enum: '',
        defVal: '继承 setConfig.table.scrollX',
        list: [
          {
            name: 'enabled',
            desc: '是否启用',
            version: '3.0.12',
            type: 'boolean',
            enum: '',
            defVal: 'false',
            list: []
          },
          {
            name: 'gt',
            desc: '指定大于指定列时自动启动横向虚拟滚动，如果为 0 则总是启用；如果需要关闭，可以设置 enabled 为 false',
            version: '',
            type: 'number',
            enum: '',
            defVal: '60',
            list: []
          },
          {
            name: 'oSize',
            desc: '指定每次渲染的数据偏移量，偏移量越大渲染次数就越少，但每次渲染耗时就越久（对于古老IE浏览器可以稍微设置大一点，减低渲染次数）',
            version: '',
            type: 'number',
            enum: '',
            defVal: '0',
            list: []
          },
          {
            name: 'scrollToLeftOnChange',
            desc: '当数据源被更改时，自动将横向滚动条滚动到左侧',
            version: '3.5.9',
            type: 'boolean',
            enum: '',
            defVal: 'false',
            list: []
          }
        ]
      },
      {
        name: 'scroll-y',
        desc: '纵向虚拟滚动配置（不支持展开行）',
        version: '',
        type: 'any',
        enum: '',
        defVal: '继承 setConfig.table.scrollY',
        list: [
          {
            name: 'enabled',
            desc: '是否启用',
            version: '3.0.12',
            type: 'boolean',
            enum: '',
            defVal: 'false',
            list: []
          },
          {
            name: 'mode',
            desc: '滚动模式',
            version: '3.2.10',
            type: 'string',
            enum: 'default,wheel',
            defVal: 'default',
            list: []
          },
          {
            name: 'gt',
            desc: '指定大于指定行时自动启动纵向虚拟滚动，如果为 0 则总是启用；如果需要关闭，可以设置 enabled 为 false（注：启用纵向虚拟滚动之后将不能支持动态行高）',
            version: '',
            type: 'number',
            enum: '',
            defVal: '100',
            list: []
          },
          {
            name: 'oSize',
            desc: '指定每次渲染的数据偏移量，偏移量越大渲染次数就越少，但每次渲染耗时就越久（对于古老IE浏览器可以稍微设置大一点，减低渲染次数）',
            version: '',
            type: 'number',
            enum: '',
            defVal: '0',
            list: []
          // },
          // {
          //   name: 'rHeight',
          //   desc: '当启用虚拟滚动后，该参数用于设置每一行的固定高度',
          //   version: '3.3.11',
          //   type: 'number',
          //   enum: '',
          //   defVal: '',
          //   list: []
          },
          {
            name: 'scrollToTopOnChange',
            desc: '当数据源被更改时，自动将纵向滚动条滚动到顶部',
            version: '3.5.9',
            type: 'boolean',
            enum: '',
            defVal: 'false',
            list: []
          }
          // {
          //   name: 'adaptive',
          //   desc: '自动适配最优的渲染方式',
          //   version: '',
          //   type: 'boolean',
          //   enum: '',
          //   defVal: 'true',
          //   list: []
          // }
        ]
      // },
      // {
      //   name: 'rHeights',
      //   desc: '重写表格默认高度,必须和 scss 中的变量一致（用于重写表格默认行高的场景，谨慎使用，99%场景不需要更改）',
      //   version: '',
      //   type: 'any',
      //   enum: '',
      //   defVal: '',
      //   list: [
      //     {
      //       name: 'default',
      //       desc: '表格 default size',
      //       version: '',
      //       type: 'number',
      //       enum: '',
      //       defVal: '48',
      //       list: []
      //     },
      //     {
      //       name: 'medium',
      //       desc: '表格 medium size',
      //       version: '',
      //       type: 'number',
      //       enum: '',
      //       defVal: '44',
      //       list: []
      //     },
      //     {
      //       name: 'small',
      //       desc: '表格 small size',
      //       version: '',
      //       type: 'number',
      //       enum: '',
      //       defVal: '40',
      //       list: []
      //     },
      //     {
      //       name: 'mini',
      //       desc: '表格 mini size',
      //       version: '',
      //       type: 'number',
      //       enum: '',
      //       defVal: '36',
      //       list: []
      //     }
      //   ]
      },
      {
        name: 'params',
        descKey: 'app.api.table.desc.params',
        version: '',
        type: 'any',
        enum: '',
        defVal: '',
        list: []
      }
    ]
  },
  {
    name: 'Slots',
    descKey: 'app.api.title.slots',
    version: '',
    type: '',
    enum: '',
    defVal: '',
    list: [
      {
        name: 'empty',
        descKey: 'app.api.table.desc.empty',
        version: '',
        type: '',
        enum: '',
        defVal: '{}',
        list: []
      },
      {
        name: 'loading',
        desc: '自定义加载中模板',
        version: '3.6.9',
        type: '',
        enum: '',
        defVal: '{}',
        list: []
      }
    ]
  },
  {
    name: 'Events',
    descKey: 'app.api.title.events',
    version: '',
    type: '',
    enum: '',
    defVal: '',
    list: [
      {
        name: 'keydown-start',
        abandoned: true,
        desc: '当表格被激活且键盘被按下开始时会触发的事件',
        version: '3.5.0',
        type: '',
        enum: '',
        defVal: '{ $event }',
        list: []
      },
      {
        name: 'keydown',
        desc: '当表格被激活且键盘被按下时会触发的事件',
        version: '',
        type: '',
        enum: '',
        defVal: '{ $event }',
        list: []
      },
      {
        name: 'keydown-end',
        abandoned: true,
        desc: '当表格被激活且键盘被按下结束时会触发的事件',
        version: '3.5.0',
        type: '',
        enum: '',
        defVal: '{ $event }',
        list: []
      },
      {
        name: 'current-change',
        descKey: 'app.api.table.desc.currentChange',
        version: '',
        type: '',
        enum: '',
        defVal: '{ newValue, oldValue, row, rowIndex, $rowIndex, column, columnIndex, $columnIndex, $event }',
        list: []
      },
      {
        name: 'radio-change',
        descKey: 'app.api.table.desc.radioChange',
        version: '',
        type: '',
        enum: '',
        defVal: '{ newValue, oldValue, row, rowIndex, $rowIndex, column, columnIndex, $columnIndex, $event }',
        list: []
      },
      {
        name: 'checkbox-change',
        descKey: 'app.api.table.desc.checkboxChange',
        version: '',
        type: '',
        enum: '',
        defVal: '{ checked, row, rowIndex, $rowIndex, column, columnIndex, $columnIndex, $event }',
        list: []
      },
      {
        name: 'checkbox-all',
        descKey: 'app.api.table.desc.checkboxAll',
        version: '',
        type: '',
        enum: '',
        defVal: '{ checked, $event }',
        list: []
      },
      {
        name: 'checkbox-range-start',
        desc: '只对 checkbox-config.range 有效，当鼠标范围选择开始时会触发的事件',
        version: '',
        type: '',
        enum: '',
        defVal: '{ $event }',
        list: []
      },
      {
        name: 'checkbox-range-change',
        desc: '只对 checkbox-config.range 有效，当鼠标范围选择内的行数发生变化时会触发的事件',
        version: '',
        type: '',
        enum: '',
        defVal: '{ $event }',
        list: []
      },
      {
        name: 'checkbox-range-end',
        desc: '只对 checkbox-config.range 有效，当鼠标范围选择结束时会触发的事件',
        version: '',
        type: '',
        enum: '',
        defVal: '{ $event }',
        list: []
      },
      {
        name: 'cell-click',
        descKey: 'app.api.table.desc.cellClick',
        version: '',
        type: '',
        enum: '',
        defVal: '{ row, rowIndex, $rowIndex, column, columnIndex, $columnIndex, triggerRadio, triggerCheckbox, triggerTreeNode, triggerExpandNode, $event }',
        list: []
      },
      {
        name: 'cell-dblclick',
        descKey: 'app.api.table.desc.cellDblclick',
        version: '',
        type: '',
        enum: '',
        defVal: '{ row, rowIndex, $rowIndex, column, columnIndex, $columnIndex, $event }',
        list: []
      },
      {
        name: 'cell-menu',
        descKey: 'app.api.table.desc.cellMenu',
        version: '',
        type: '',
        enum: '',
        defVal: '{ type, row, rowIndex, $rowIndex, column, columnIndex, $columnIndex, $event }',
        list: []
      },
      {
        name: 'cell-mouseenter',
        descKey: 'app.api.table.desc.cellMouseenter',
        version: '',
        type: '',
        enum: '',
        defVal: '{ row, rowIndex, $rowIndex, column, columnIndex, $columnIndex, $event }',
        list: []
      },
      {
        name: 'cell-mouseleave',
        descKey: 'app.api.table.desc.cellMouseleave',
        version: '',
        type: '',
        enum: '',
        defVal: '{ row, rowIndex, $rowIndex, column, columnIndex, $columnIndex, $event }',
        list: []
      },
      {
        name: 'cell-delete-value',
        desc: '只对 keyboard-config.isDel 有效，当按下删除键指定清空单元格值时会触发该事件',
        version: '3.8.7',
        type: '',
        enum: '',
        defVal: '{ row, rowIndex, column, columnIndex, activeArea, cellAreas, $event }',
        list: []
      },
      {
        name: 'header-cell-click',
        descKey: 'app.api.table.desc.headerCellClick',
        version: '',
        type: '',
        enum: '',
        defVal: '{ $rowIndex, column, columnIndex, $columnIndex, triggerResizable, triggerSort, triggerFilter, $event }',
        list: []
      },
      {
        name: 'header-cell-dblclick',
        descKey: 'app.api.table.desc.headerCellDblclick',
        version: '',
        type: '',
        enum: '',
        defVal: '{ $rowIndex, column, columnIndex, $columnIndex, $event }',
        list: []
      },
      {
        name: 'header-cell-menu',
        descKey: 'app.api.table.desc.headerCellMenu',
        version: '',
        type: '',
        enum: '',
        defVal: '{ type, column, columnIndex, $event }',
        list: []
      },
      {
        name: 'footer-cell-click',
        descKey: 'app.api.table.desc.footerCellClick',
        version: '',
        type: '',
        enum: '',
        defVal: '{ items, $rowIndex, column, columnIndex, $columnIndex, $event }',
        list: []
      },
      {
        name: 'footer-cell-dblclick',
        descKey: 'app.api.table.desc.footerCellDblclick',
        version: '',
        type: '',
        enum: '',
        defVal: '{ items, $rowIndex, column, columnIndex, $columnIndex, $event }',
        list: []
      },
      {
        name: 'footer-cell-menu',
        descKey: 'app.api.table.desc.footerCellMenu',
        version: '',
        type: '',
        enum: '',
        defVal: '{ type, column, columnIndex, $event }',
        list: []
      },
      {
        name: 'clear-merge',
        desc: '当用户点击取消所有临时合并时会触发该事件',
        version: '3.3.5',
        type: '',
        enum: '',
        defVal: '{ mergeCells, mergeFooterItems, $event }',
        list: []
      },
      {
        name: 'sort-change',
        descKey: 'app.api.table.desc.sortChange',
        version: '',
        type: '',
        enum: '',
        defVal: '{ column, field, order, sortBy, sortList, $event }',
        list: []
      },
      {
        name: 'clear-sort',
        desc: '当用户点击清除所有排序时会触发该事件',
        version: '3.3.5',
        type: '',
        enum: '',
        defVal: '{ sortList, $event }',
        list: []
      },
      {
        name: 'filter-visible',
        desc: '当筛选面板被触发时会触发该事件',
        version: '3.3.16',
        type: '',
        enum: '',
        defVal: '{ column, field, visible, filterList, $event }',
        list: []
      },
      {
        name: 'filter-change',
        descKey: 'app.api.table.desc.filterChange',
        version: '',
        type: '',
        enum: '',
        defVal: '{ column, field, values, datas, filterList, $event }',
        list: []
      },
      {
        name: 'clear-filter',
        desc: '当用户点击清除所有筛选条件时会触发该事件',
        version: '3.3.5',
        type: '',
        enum: '',
        defVal: '{ filterList, $event }',
        list: []
      },
      {
        name: 'resizable-change',
        descKey: 'app.api.table.desc.resizableChange',
        version: '',
        type: '',
        enum: '',
        defVal: '{ $rowIndex, column, columnIndex, $columnIndex, $event }',
        list: []
      },
      {
        name: 'toggle-row-expand',
        descKey: 'app.api.table.desc.toggleExpandChange',
        version: '',
        type: '',
        enum: '',
        defVal: '{ expanded, row, rowIndex, $rowIndex, column, columnIndex, $columnIndex, $event }',
        list: []
      },
      {
        name: 'toggle-tree-expand',
        descKey: 'app.api.table.desc.toggleTreeChange',
        version: '',
        type: '',
        enum: '',
        defVal: '{ expanded, row, column, columnIndex, $columnIndex, $event }',
        list: []
      },
      {
        name: 'menu-click',
        descKey: 'app.api.table.desc.menuClick',
        version: '',
        type: '',
        enum: '',
        defVal: '{ menu, type, row, rowIndex, column, columnIndex, $event }',
        list: []
      },
      {
        name: 'cell-selected',
        descKey: 'app.api.table.desc.cellSelected',
        version: '',
        type: '',
        enum: '',
        defVal: '{ row, rowIndex, $rowIndex, column, columnIndex, $columnIndex }',
        list: []
      },
      {
        name: 'edit-closed',
        descKey: 'app.api.table.desc.editClosed',
        version: '',
        type: '',
        enum: '',
        defVal: '{ row, rowIndex, $rowIndex, column, columnIndex, $columnIndex }',
        list: []
      },
      {
        name: 'edit-actived',
        disabled: true,
        desc: '已废弃，使用 edit-activated',
        version: '',
        type: '',
        enum: '',
        defVal: '{ row, rowIndex, $rowIndex, column, columnIndex, $columnIndex }',
        list: []
      },
      {
        name: 'edit-activated',
        descKey: 'app.api.table.desc.editActived',
        version: '3.7.7',
        type: '',
        enum: '',
        defVal: '{ row, rowIndex, $rowIndex, column, columnIndex, $columnIndex }',
        list: []
      },
      {
        name: 'edit-disabled',
        descKey: 'app.api.table.desc.editDisabled',
        version: '',
        type: '',
        enum: '',
        defVal: '{ row, rowIndex, $rowIndex, column, columnIndex, $columnIndex }',
        list: []
      },
      {
        name: 'valid-error',
        descKey: 'app.api.table.desc.validError',
        version: '',
        type: '',
        enum: '',
        defVal: '{ rule, row, rowIndex, $rowIndex, column, columnIndex, $columnIndex }',
        list: []
      },
      {
        name: 'scroll',
        descKey: 'app.api.table.desc.scroll',
        version: '',
        type: '',
        enum: '',
        defVal: '{ type, scrollTop, scrollLeft, scrollHeight, scrollWidth, bodyWidth, bodyHeight, isX, isY, $event }',
        list: []
      },
      {
        name: 'custom',
        desc: '如果与工具栏关联，在自定义列按钮被手动点击后会触发该事件',
        version: '',
        type: '',
        enum: '',
        defVal: '{ type, $event }',
        list: []
      },
      {
        name: 'open-fnr',
        desc: '只对 keyboard-config.isFNR 配置时有效，在查找与替换弹框被打开时会触发该事件',
        version: 'extend-cell-area',
        type: '',
        enum: '',
        defVal: '{ tab, $event }',
        list: []
      },
      {
        name: 'hide-fnr',
        desc: '只对 keyboard-config.isFNR 配置时有效，在查找与替换弹框被隐藏时会触发该事件',
        version: 'extend-cell-area',
        type: '',
        enum: '',
        defVal: '{ tab }',
        list: []
      },
      {
        name: 'show-fnr',
        desc: '只对 keyboard-config.isFNR 配置时有效，在查找与替换弹框被打显示时会触发该事件',
        version: 'extend-cell-area',
        type: '',
        enum: '',
        defVal: '{ tab }',
        list: []
      },
      {
        name: 'fnr-change',
        desc: '只对 keyboard-config.isFNR 配置时有效，在查找与替换弹框的 Tab 页被切换时会触发该事件',
        version: 'extend-cell-area',
        type: '',
        enum: '',
        defVal: '{ tab, $event }',
        list: []
      },
      {
        name: 'fnr-find',
        desc: '只对 keyboard-config.isFNR 配置时有效，在点击查找时会触发该事件',
        version: 'extend-cell-area',
        type: '',
        enum: '',
        defVal: '{ findValue, row, column, $event }',
        list: []
      },
      {
        name: 'fnr-find-all',
        desc: '只对 keyboard-config.isFNR 配置时有效，在点击查找所有时会触发该事件',
        version: 'extend-cell-area',
        type: '',
        enum: '',
        defVal: '{ findValue, result, $event }',
        list: []
      },
      {
        name: 'fnr-replace',
        desc: '只对 keyboard-config.isFNR 配置时有效，在点击替换时会触发该事件',
        version: 'extend-cell-area',
        type: '',
        enum: '',
        defVal: '{ findValue, replaceValue, row, column, $event }',
        list: []
      },
      {
        name: 'fnr-replace-all',
        desc: '只对 keyboard-config.isFNR 配置时有效，在点击替换所有时会触发该事件',
        version: 'extend-cell-area',
        type: '',
        enum: '',
        defVal: '{ findValue, replaceValue, result, $event }',
        list: []
      },
      {
        name: 'cell-area-copy',
        desc: '只对 keyboard-config.isClip 配置时有效，在单元格被复制时会触发该事件',
        version: 'extend-cell-area',
        type: '',
        enum: '',
        defVal: '{ status, invalid, targetAreas, cellValues, $event }',
        list: []
      },
      {
        name: 'cell-area-cut',
        desc: '只对 keyboard-config.isClip 配置时有效，在单元格被剪贴时会触发该事件',
        version: 'extend-cell-area',
        type: '',
        enum: '',
        defVal: '{ status, invalid, targetAreas, cellValues, $event }',
        list: []
      },
      {
        name: 'cell-area-paste',
        desc: '只对 keyboard-config.isClip 配置时有效，在单元格被粘贴时会触发该事件',
        version: 'extend-cell-area',
        type: '',
        enum: '',
        defVal: '{ status, invalid, targetAreas, $event }',
        list: []
      },
      {
        name: 'cell-area-merge',
        desc: '只对 keyboard-config.isMerge 配置时有效，在单元格临时合并、取消时会触发该事件',
        version: 'extend-cell-area',
        type: '',
        enum: '',
        defVal: '{ status, targetAreas, $event }',
        list: []
      },
      {
        name: 'clear-cell-area-merge',
        desc: '只对 keyboard-config.isMerge 配置时有效，用户点击单元格取消时会触发该事件',
        version: 'extend-cell-area',
        type: '',
        enum: '',
        defVal: '{ mergeCells, $event }',
        list: []
      },
      {
        name: 'clear-cell-area-selection',
        desc: '只对 mouse-config.area 配置时有效，用户点击表格之外选取区域被清除时会触发该事件',
        version: 'extend-cell-area',
        type: '',
        enum: '',
        defVal: '{ cellAreas, $event }',
        list: []
      },
      {
        name: 'header-cell-area-selection',
        desc: '只对 area-config.selectCellByHeader 配置时有效，点击列头选取当前列的所有单元格时会触发该事件',
        version: 'extend-cell-area',
        type: '',
        enum: '',
        defVal: '{ row, rowIndex, $rowIndex, column, columnIndex, $columnIndex, cell, targetRows, targetCols, $event }',
        list: []
      },
      {
        name: 'cell-area-selection-start',
        desc: '只对 mouse-config.area 配置时有效，鼠标在单元格区域选取开始时会触发该事件',
        version: 'extend-cell-area',
        type: '',
        enum: '',
        defVal: '{ row, rowIndex, $rowIndex, column, columnIndex, $columnIndex, cell, $event }',
        list: []
      },
      {
        name: 'cell-area-selection-drag',
        desc: '只对 mouse-config.area 配置时有效，鼠标在单元格区域选取过程中持续触发该事件',
        version: 'extend-cell-area',
        type: '',
        enum: '',
        defVal: '{ rows, cols, $event }',
        list: []
      },
      {
        name: 'cell-area-selection-end',
        desc: '只对 mouse-config.area 配置时有效，鼠标在单元格区域选取结束时会触发该事件',
        version: 'extend-cell-area',
        type: '',
        enum: '',
        defVal: '{ rows, cols, $event }',
        list: []
      },
      {
        name: 'cell-area-selection-invalid',
        desc: '用于 area-config.excludeFields | area-config.includeFields 配置是否禁用，鼠标在单元格区域选取被禁用时会触发该事件',
        version: 'extend-cell-area',
        type: '',
        enum: '',
        defVal: '{ row, column, $event }',
        list: []
      },
      {
        name: 'cell-area-extension-start',
        desc: '只对 mouse-config.extension 配置时有效，鼠标在单元格区域扩展开始时会触发该事件',
        version: 'extend-cell-area',
        type: '',
        enum: '',
        defVal: '{ row, rowIndex, $rowIndex, column, columnIndex, $columnIndex, cell, $event }',
        list: []
      },
      {
        name: 'cell-area-extension-drag',
        desc: '只对 mouse-config.extension 配置时有效，鼠标在单元格区域扩展过程中持续触发该事件',
        version: 'extend-cell-area',
        type: '',
        enum: '',
        defVal: '{ rows, cols, targetRows, targetCols, $event }',
        list: []
      },
      {
        name: 'cell-area-extension-end',
        desc: '只对 mouse-config.extension 配置时有效，在单元格区域扩展结束时会触发该事件',
        version: 'extend-cell-area',
        type: '',
        enum: '',
        defVal: '{ rows, cols, targetRows, targetCols, $event }',
        list: []
      },
      {
        name: 'cell-area-selection-all-start',
        desc: '只对 mouse-config.area 配置时有效，按快捷键全选所有单元格开始时会触发该事件',
        version: 'extend-cell-area',
        type: '',
        enum: '',
        defVal: '{ $event }',
        list: []
      },
      {
        name: 'cell-area-selection-all-end',
        desc: '只对 mouse-config.area 配置时有效，按快捷键全选所有单元格结束时会触发该事件',
        version: 'extend-cell-area',
        type: '',
        enum: '',
        defVal: '{ rows, cols, $event }',
        list: []
      },
      {
        name: 'cell-area-arrows-start',
        desc: '只对 mouse-config.area 配置时有效，通过 Shift 键向指定方向移动选取区域开始时会触发该事件',
        version: 'extend-cell-area',
        type: '',
        enum: '',
        defVal: '{ rows, cols, targetRows, targetCols, isLeft, isUp, isRight, isDown, $event }',
        list: []
      },
      {
        name: 'cell-area-arrows-end',
        desc: '只对 mouse-config.area 配置时有效，通过 Shift 键向指定方向移动选取区域结束时会触发该事件',
        version: 'extend-cell-area',
        type: '',
        enum: '',
        defVal: '{ rows, cols, targetRows, targetCols, isLeft, isUp, isRight, isDown, $event }',
        list: []
      },
      {
        name: 'active-cell-change-start',
        desc: '只对 mouse-config.area 与 keyboard-config.isArrow|isEnter|isTab 配置时有效，通过按键或鼠标切换活动单元格开始时会触发该事件',
        version: 'extend-cell-area',
        type: '',
        enum: '',
        defVal: '{ row, column, activeArea, isTab, isEnter, isLeft, isUp, isRight, isDown, $event }',
        list: []
      },
      {
        name: 'active-cell-change-end',
        desc: '只对 mouse-config.area 与 keyboard-config.isArrow|isEnter|isTab 配置时有效，通过按键或鼠标切换活动单元格结束时会触发该事件',
        version: 'extend-cell-area',
        type: '',
        enum: '',
        defVal: '{ row, column, activeArea, beforeActiveArea, isTab, isEnter, isLeft, isUp, isRight, isDown, $event }',
        list: []
      }
    ]
  },
  {
    name: 'Methods',
    descKey: 'app.api.title.methods',
    version: '',
    type: '',
    enum: '',
    defVal: '',
    list: [
      {
        name: 'loadData(data)',
        desc: '加载数据（对于表格数据需要重载、局部递增场景下可能会用到）',
        version: '',
        type: 'Promise<any>',
        enum: '',
        defVal: 'data: array',
        list: []
      },
      {
        name: 'reloadData(data)',
        desc: '加载数据并清除所有状态（对于表格数据需要重载、局部更新被修改的数据）',
        version: '',
        type: 'Promise<any>',
        enum: '',
        defVal: 'data: array',
        list: []
      },
      {
        name: 'updateData()',
        abandoned: true,
        desc: '手动处理数据，用于手动排序与筛选（对于手动更改了排序、筛选...等条件后需要重新处理数据时可能会用到）',
        version: '',
        type: 'Promise<any>',
        enum: '',
        defVal: '',
        list: []
      },
      // {
      //   name: 'syncData()',
      //   desc: '同步 data 数据；如果用了该方法，那么组件将不再记录增删改的状态，只能自行实现对应逻辑（对于某些特殊的场景，比如深层树节点元素发生变动时可能会用到）',
      //   version: '',
      //   type: 'Promise<any>',
      //   enum: '',
      //   defVal: '',
      //   list: []
      // },
      {
        name: 'reloadRow(rows, record, field)',
        desc: '局部加载行数据并恢复到初始状态，仅用于修改的数据，对新增的临时数据无效（对于行数据需要局部更改的场景中可能会用到）',
        version: '',
        type: 'Promise<any>',
        enum: '',
        defVal: 'rows: Row | Row[], record: object, field?: string',
        list: []
      },
      {
        name: 'reloadExpandContent(row)',
        disabled: true,
        desc: '即将废弃，请使用 reloadRowExpand',
        version: '',
        type: 'Promise<any>',
        enum: '',
        defVal: 'rows: Row',
        list: []
      },
      {
        name: 'reloadRowExpand(row)',
        desc: '用于懒加载展开行，重新加载展开行的内容',
        version: '3.4.0',
        type: 'Promise<any>',
        enum: '',
        defVal: 'rows: Row',
        list: []
      },
      {
        name: 'reloadTreeExpand(row)',
        desc: '用于懒加载树表格，重新加载子节点',
        version: '3.4.0',
        type: 'Promise<any>',
        enum: '',
        defVal: 'rows: Row',
        list: []
      },
      {
        name: 'reloadTreeChilds(row)',
        desc: '即将废弃，请使用 reloadTreeExpand',
        disabled: true,
        version: '',
        type: 'Promise<any>',
        enum: '',
        defVal: 'rows: Row',
        list: []
      },
      // {
      //   name: 'loadChildren(row, children)',
      //   desc: '用于树结构，给行数据加载子节点',
      //   version: '3.0.1',
      //   type: 'Promise<any>',
      //   enum: '',
      //   defVal: 'row: Row, children: any[]',
      //   list: []
      // },
      {
        name: 'loadColumn(columns)',
        desc: '加载列配置（对于表格列需要重载、局部递增场景下可能会用到）',
        version: '',
        type: 'Promise<any>',
        enum: '',
        defVal: 'columns: array',
        list: []
      },
      {
        name: 'reloadColumn(columns)',
        desc: '加载列配置并恢复到初始状态（对于表格列需要重载、局部递增场景下可能会用到）',
        version: '',
        type: 'Promise<any>',
        enum: '',
        defVal: 'columns: array',
        list: []
      },
      {
        name: 'refreshColumn()',
        desc: '刷新列配置（对于动态修改属性、显示/隐藏列等场景下可能会用到）',
        version: '',
        type: 'Promise<any>',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'createRow(records)',
        desc: '创建 Row|Rows 对象（对于某些特殊场景需要对数据进行手动插入时可能会用到）',
        version: '',
        type: 'Promise<row|rows>',
        enum: '',
        defVal: 'records: object | array',
        list: []
      },
      {
        name: 'createData(records)',
        desc: '创建 data 对象（对于某些特殊场景可能会用到，会自动对数据的字段名进行检测，如果不存在就自动定义）',
        version: '',
        type: 'Promise<Array>',
        enum: '',
        defVal: 'records: array',
        list: []
      },
      {
        name: 'insert(records)',
        desc: '往表格插入临时数据，从第一行插入一行或多行新数据',
        version: '',
        type: 'Promise<{row, rows}>',
        enum: '',
        defVal: 'records?: object | Array<object>',
        list: []
      },
      {
        name: 'insertAt(records, row)',
        desc: '往表格插入临时数据，从指定位置插入一行或多行；第二个参数：row 指定位置、null从第一行插入、-1 从最后插入',
        version: '',
        type: 'Promise<{row, rows}>',
        enum: '',
        defVal: 'records: object | Array<object>, row?: Row | -1 | 0',
        list: []
      },
      {
        name: 'insertNextAt(records, row)',
        desc: '往表格插入临时数据，从指定位置的下一行插入一行或多行；第二个参数：row 指定位置、null从第一行插入、-1 从最后插入',
        version: '3.7.0',
        type: 'Promise<{row, rows}>',
        enum: '',
        defVal: 'records: object | Array<object>, row?: Row | -1 | 0',
        list: []
      },
      {
        name: 'revertData(rows, field)',
        desc: '只对 keep-source 开启有效，还原指定行 row 或者整个表格的数据',
        version: '',
        type: 'Promise<any>',
        enum: '',
        defVal: 'rows: Row | Array<Row>, field?: string',
        list: []
      },
      {
        name: 'remove(rows)',
        desc: '删除指定行数据，指定 row 或 [row, ...] 删除多条数据，如果为空则删除所有数据',
        version: '',
        type: 'Promise<{row, rows}>',
        enum: '',
        defVal: 'rows: Row | Array<Row>',
        list: []
      },
      {
        name: 'removeCheckboxRow()',
        desc: '删除复选框选中的行数据',
        version: '',
        type: 'Promise<{row, rows}>',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'removeRadioRow()',
        desc: '删除单选框选中的行数据',
        version: '',
        type: 'Promise<{row, rows}>',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'removeCurrentRow()',
        desc: '删除当前行选中的行数据',
        version: '',
        type: 'Promise<{row, rows}>',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'removeInsertRow()',
        desc: '删除新增的临时数据',
        version: '3.3.15',
        type: 'Promise<{row, rows}>',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'removeMergeCells(merges)',
        desc: '取消单元格的临时合并状态，如果为数组，则取消多个合并',
        version: '',
        type: 'Promise<merges>',
        enum: '',
        defVal: 'merges: {row: Row, col: ColumnInfo} | {row: Row, col: ColumnInfo}[]',
        list: []
      },
      {
        name: 'removeMergeFooterItems(merges)',
        desc: '取消表尾的临时合并状态，如果为数组，则取消多个合并',
        version: '',
        type: 'Promise<merges>',
        enum: '',
        defVal: 'merges: {row: Row, col: ColumnInfo} | {row: Row, col: ColumnInfo}[]',
        list: []
      },
      {
        name: 'getParams()',
        desc: '获取自定义的 params 属性',
        version: '3.8.9',
        type: 'any',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'getRowSeq(row)',
        desc: '根据 row 获取行的序号',
        version: '3.4.7',
        type: 'string | number',
        enum: '',
        defVal: 'row: Row',
        list: []
      },
      {
        name: 'getRowIndex(row)',
        desc: '根据 row 获取相对于 data 中的索引',
        version: '',
        type: 'Number',
        enum: '',
        defVal: 'row: Row',
        list: []
      },
      {
        name: 'getVTRowIndex(row)',
        desc: '根据 row 获取相对于当前数据中的索引',
        version: '',
        type: 'Number',
        enum: '',
        defVal: 'row: Row',
        list: []
      },
      {
        name: 'getVMRowIndex(row)',
        desc: '根据 row 获取渲染中的虚拟索引',
        version: '',
        type: 'Number',
        enum: '',
        defVal: 'row: Row',
        list: []
      },
      {
        name: 'getParentRow(rowOrRowid)',
        desc: '只对 tree-config 有效，获取行的父级',
        version: '3.4.12',
        type: 'any',
        enum: '',
        defVal: 'rowOrRowid: string | Row',
        list: []
      },
      {
        name: 'getRowNode(tr)',
        desc: '根据 tr 元素获取对应的 row 信息',
        version: '',
        type: '{item, items, index, parent}',
        enum: '',
        defVal: 'tr: Element',
        list: []
      },
      {
        name: 'getColumns()',
        desc: '获取表格的可视的列',
        version: '',
        type: 'Array',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'getColid(column)',
        desc: '根据列获取列的唯一主键',
        version: '3.8.8',
        type: 'String',
        enum: '',
        defVal: 'column: ColumnConfig',
        list: []
      },
      {
        name: 'getColumnById(colid)',
        desc: '根据列的唯一主键获取列',
        version: '',
        type: 'Column',
        enum: '',
        defVal: 'colid: string',
        list: []
      },
      {
        name: 'getColumnByField(field)',
        desc: '根据列的字段名获取列',
        version: '',
        type: 'Column',
        enum: '',
        defVal: 'field: string',
        list: []
      },
      {
        name: 'getParentColumn(field)',
        desc: '如果存在，获取父级列',
        version: '3.8.20',
        type: 'Column',
        enum: '',
        defVal: 'field: string',
        list: []
      },
      {
        name: 'getTableColumn()',
        desc: '获取当前表格的列（收集到的全量列、全量表头列、处理条件之后的全量表头列、当前渲染中的表头列）',
        version: '',
        type: '{collectColumn, fullColumn, visibleColumn, tableColumn}',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'getColumnIndex(column)',
        desc: '根据 column 获取相对于 columns 中的索引',
        version: '',
        type: 'Number',
        enum: '',
        defVal: 'column: ColumnConfig',
        list: []
      },
      {
        name: 'getVMColumnIndex(column)',
        desc: '根据 column 获取渲染中的虚拟索引',
        version: '',
        type: 'Number',
        enum: '',
        defVal: 'column',
        list: []
      },
      {
        name: 'getVTColumnIndex(column)',
        desc: '根据 column 获取相对于当前表格列中的索引（分组表头可能会用到）',
        version: '',
        type: 'Number',
        enum: '',
        defVal: 'column',
        list: []
      },
      {
        name: 'getColumnNode(cell)',
        desc: '根据 th/td 元素获取对应的 column 信息',
        version: '',
        type: '{item, items, index, parent}',
        enum: '',
        defVal: 'cell: HTMLTableDataCellElement | HTMLTableHeaderCellElement',
        list: []
      },
      {
        name: 'getSortColumns()',
        desc: '获取当前排序的所有列信息',
        version: '',
        type: 'any[]',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'getCheckedFilters()',
        desc: '获取当前筛选的所有列信息',
        version: '',
        type: 'any[]',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'getCellElement(row, fieldOrColumn)',
        desc: '获取单元格对应的 TD 元素，如果是非可视区，则需要先滚动到可视区后再进行获取',
        version: '3.8.8',
        type: 'HTMLTableDataCellElement | null',
        enum: '',
        defVal: 'row: any, fieldOrColumn?: string | ColumnInfo',
        list: []
      },
      {
        name: 'getCellLabel(row, fieldOrColumn)',
        desc: '获取单元格的显示值，支持 formatter（除了插槽之外）',
        version: '3.8.8',
        type: 'string | number',
        enum: '',
        defVal: 'row: any, fieldOrColumn?: string | ColumnInfo',
        list: []
      },
      {
        name: 'getTableData()',
        desc: '获取当前表格的数据（完整的全量表体数据、处理条件之后的全量表体数据、当前渲染中的表体数据、当前渲染中的表尾数据）',
        version: '',
        type: '{fullData, visibleData, tableData, footerData}',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'getRowById(rowid)',
        desc: '根据行的唯一主键获取行（需要 row-config.keyField）',
        version: '',
        type: 'String',
        enum: '',
        defVal: 'rowid: string',
        list: []
      },
      {
        name: 'getRowid(row)',
        desc: '根据行获取行的唯一主键（需要 row-config.keyField）',
        version: '',
        type: 'Row',
        enum: '',
        defVal: 'row: Row',
        list: []
      },
      {
        name: 'getData(rowIndex)',
        desc: '获取数据，和 data 的行为一致，也可以指定索引获取数据',
        version: '',
        type: 'Array',
        enum: '',
        defVal: 'rowIndex?: number',
        list: []
      },
      {
        name: 'getRecordset()',
        desc: '获取表格数据集（获取插入、删除、更改的数据，对于增删改查表格非常方便）',
        version: '',
        type: '{insertRecords, removeRecords, updateRecords}',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'getInsertRecords()',
        desc: '用于 edit-config，获取插入的临时数据',
        version: '',
        type: 'Array',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'getRemoveRecords()',
        desc: '获取已删除的数据',
        version: '',
        type: 'Array',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'getUpdateRecords()',
        desc: '只对 keep-source 开启有效，获取已修改的数据',
        version: '',
        type: 'Array',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'getMergeCells()',
        desc: '获取临时合并的单元格',
        version: '',
        type: 'Array<{row: any, col: ColumnInfo, rowspan: number, colspan: number}>',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'getMergeFooterItems()',
        desc: '获取临时合并的表尾',
        version: '',
        type: 'Array<{row: any, col: ColumnInfo, rowspan: number, colspan: number}>',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'getCurrentColumn()',
        desc: '用于 column-config.isCurrent，获取当前列',
        version: '',
        type: 'ColumnConfig',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'getCurrentRecord()',
        desc: '用于 row-config.isCurrent，获取高亮的当前行数据',
        version: '',
        type: 'Row',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'getRadioRecord(isFull)',
        desc: '用于 type=radio，获取当前已选中的行数据，包含当前列表（如果 isFull=true 包含完整列表）',
        version: '',
        type: 'Row',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'getRadioReserveRecord(isFull)',
        desc: '用于 radio-config.reserve，获取已保留选中的行数据，不包含当前列表（如果 isFull=true 不包含完整列表））',
        version: '',
        type: 'Row',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'getCheckboxRecords(isFull)',
        desc: '用于 type=checkbox，获取当前已选中的行数据，包含当前列表（如果 isFull=true 包含完整列表）',
        version: '',
        type: 'Array<Row>',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'getCheckboxReserveRecords(isFull)',
        desc: '用于 checkbox-config.reserve，获取已保留选中的行数据，不包含当前列表（如果 isFull=true不包含完整列表）',
        version: '',
        type: 'Array<Row>',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'getCheckboxIndeterminateRecords(isFull)',
        desc: '用于 tree-config 和 type=checkbox，获取半选状态的行数据，包含当前列表（如果 isFull=true 包含完整列表）',
        version: '',
        type: 'Array<Row>',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'getRowExpandRecords()',
        desc: '用于 expand-config，用于展开行，获取已展开的行数据',
        version: '',
        type: 'Array<Row>',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'getTreeExpandRecords()',
        desc: '用于 tree-config，用于树表格，获取已展开的节点（注意，即使父节点被收起，只要该节点还处于展开状态都能获取到）',
        version: '',
        type: 'Array<Row>',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'getActiveRecord()',
        disabled: true,
        desc: '请使用 getEditRecord',
        version: '',
        type: '{row,rowIndex,$rowIndex,column,columnIndex,$columnIndex}',
        enum: '',
        defVal: 'row',
        list: []
      },
      {
        name: 'getEditRecord()',
        desc: '用于 edit-config，获取已激活的行数据',
        version: '3.5.7',
        type: '{row,rowIndex,$rowIndex,column,columnIndex,$columnIndex}',
        enum: '',
        defVal: 'row',
        list: []
      },
      {
        name: 'getSelectedCell()',
        desc: '用于 mouse-config.selected，获取选中的单元格信息',
        version: '',
        type: '{row,column}',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'getCellAreas()',
        desc: '如果功能被支持，用于 mouse-config.area，用于获取鼠标选择的所有区域',
        version: 'extend-cell-area',
        type: 'Array<{cols: ColumnConfig[], rows: any[]}>',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'getActiveCellArea()',
        desc: '如果功能被支持，用于 mouse-config.area，用于获取区域中的活动单元格',
        version: 'extend-cell-area',
        type: '{column: ColumnConfig, row: any}',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'updateCellAreas()',
        desc: '如果功能被支持，用于 mouse-config.area，更新已选区域的单元格样式',
        version: 'extend-cell-area',
        type: '',
        enum: '',
        defVal: '',
        list: []
      },
      // {
      //   name: 'getCopyCellAreas()',
      //   desc: '如果功能被支持，用于 mouse-config.area，用于获取被标记为复制状态的区域',
      //   version: 'extend-cell-area',
      //   type: '{cols: ColumnConfig[], rows: any[]}',
      //   enum: '',
      //   defVal: '',
      //   list: []
      // },
      {
        name: 'getScroll()',
        desc: '获取表格的滚动状态',
        version: '',
        type: '{virtualX, virtualY, scrollTop, scrollLeft}',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'isActiveByRow(row)',
        disabled: true,
        desc: '请使用 isEditByRow',
        version: '',
        type: 'Boolean',
        enum: '',
        defVal: 'row',
        list: []
      },
      {
        name: 'isEditByRow(row)',
        desc: '用于 edit-config，判断行是否为激活编辑状态',
        version: '3.5.7',
        type: 'Boolean',
        enum: '',
        defVal: 'row',
        list: []
      },
      {
        name: 'isInsertByRow(row)',
        desc: '用于 edit-config，判断行是否为插入的临时数据',
        version: '',
        type: 'Boolean',
        enum: '',
        defVal: 'row: Row',
        list: []
      },
      {
        name: 'isUpdateByRow(row, field)',
        desc: '只对 keep-source 开启有效，判断行数据是否发生改变',
        version: '',
        type: 'Boolean',
        enum: '',
        defVal: 'row: Row, field?: string',
        list: []
      },
      {
        name: 'isAllCheckboxChecked()',
        desc: '用于 type=checkbox，判断列头复选框是否被选中',
        version: '',
        type: 'Boolean',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'isCheckboxIndeterminate()',
        disabled: true,
        desc: '即将废弃，请使用 isAllCheckboxIndeterminate',
        version: '',
        type: 'Boolean',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'isAllCheckboxIndeterminate()',
        desc: '用于 type=checkbox，判断列头复选框是否被半选',
        version: '3.3.5',
        type: 'Boolean',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'isCheckedByCheckboxRow(row)',
        desc: '用于 type=checkbox，判断复选行数据是否勾选',
        version: '',
        type: 'Boolean',
        enum: '',
        defVal: 'row: Row',
        list: []
      },
      {
        name: 'isIndeterminateByCheckboxRow(row)',
        desc: '用于 type=checkbox，判断复选行数据是否半选',
        version: '3.3.5',
        type: 'Boolean',
        enum: '',
        defVal: 'row: Row',
        list: []
      },
      {
        name: 'isCheckedByRadioRow(row)',
        desc: '用于 type=radio，判断单选行数据是否勾选',
        version: '',
        type: 'Boolean',
        enum: '',
        defVal: 'row: Row',
        list: []
      },
      {
        name: 'isExpandByRow(row)',
        disabled: true,
        desc: '已废弃，请使用 isRowExpandByRow',
        version: '',
        type: 'Boolean',
        enum: '',
        defVal: 'row',
        list: []
      },
      {
        name: 'isRowExpandByRow(row)',
        desc: '用于 expand-config，判断行是否为展开状态',
        version: '3.7.7',
        type: 'Boolean',
        enum: '',
        defVal: 'row',
        list: []
      },
      {
        name: 'isRowExpandLoaded(row)',
        desc: '用于 expand-config.lazy，用于懒加载展开行，判断展开行是否懒加载完成',
        version: '',
        type: 'Boolean',
        enum: '',
        defVal: 'row',
        list: []
      },
      {
        name: 'isTreeExpandByRow(row)',
        desc: '用于 tree-config，判断行是否为树形节点展开状态',
        version: '',
        type: 'Boolean',
        enum: '',
        defVal: 'row: Row',
        list: []
      },
      {
        name: 'isTreeExpandLoaded(row)',
        desc: '用于 tree-config.lazy，用于懒加载树表格，判断树节点是否懒加载完成',
        version: '',
        type: 'Boolean',
        enum: '',
        defVal: 'row: Row',
        list: []
      },
      {
        name: 'isFilter(fieldOrColumn)',
        desc: '判断指定列是否为筛选状态，如果为空则判断所有列',
        version: '',
        type: 'Boolean',
        enum: '',
        defVal: 'fieldOrColumn?: string | ColumnInfo',
        list: []
      },
      {
        name: 'setFilter(fieldOrColumn, options)',
        desc: '用于 filters，修改筛选列的选项（在筛选条件更新之后可以调用 updateData 函数处理表格数据）',
        version: '',
        type: 'Promise<any>',
        enum: '',
        defVal: 'fieldOrColumn: string | ColumnInfo, options: []',
        list: []
      },
      {
        name: 'openFilter(fieldOrColumn)',
        desc: '用于 filters，手动弹出筛选面板',
        version: '3.4.7',
        type: 'Promise<any>',
        enum: '',
        defVal: 'fieldOrColumn: string | ColumnInfo',
        list: []
      },
      {
        name: 'getCustomStoreData()',
        desc: '用于 custom-config，用于获取自定义列设置信息，用于服务端保持',
        version: '3.8.8',
        type: 'any',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'openCustom()',
        desc: '用于 custom-config，手动弹出自定义列面板',
        version: '3.8.0',
        type: 'Promise<any>',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'closeCustom()',
        desc: '用于 custom-config，手动关闭自定义列面板',
        version: '3.8.0',
        type: 'Promise<any>',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'setActiveRow(row)',
        disabled: true,
        desc: '请使用 setEditRow',
        version: '',
        type: 'Promise<any>',
        enum: '',
        defVal: 'row: Row',
        list: []
      },
      {
        name: 'setEditRow(row；默认激活第一列，可以指定列 fieldOrColumn)',
        desc: '用于 edit-config，激活行编辑并激活第一个单元格',
        version: '3.5.7',
        type: 'Promise<any>',
        enum: '',
        defVal: 'row: Row, fieldOrColumn?: string | ColumnInfo',
        list: []
      },
      {
        name: 'setActiveCell(row, fieldOrColumn)',
        disabled: true,
        desc: '请使用 setEditCell',
        version: '',
        type: 'Promise<any>',
        enum: '',
        defVal: 'row: Row, fieldOrColumn: string | ColumnInfo',
        list: []
      },
      {
        name: 'setEditCell(row, fieldOrColumn)',
        desc: '用于 edit-config，激活单元格编辑',
        version: '3.5.7',
        type: 'Promise<any>',
        enum: '',
        defVal: 'row: Row, fieldOrColumn: string | ColumnInfo',
        list: []
      },
      {
        name: 'setSelectCell(row, fieldOrColumn)',
        desc: '用于 mouse-config.selected，选中指定的单元格',
        version: '',
        type: 'Promise<any>',
        enum: '',
        defVal: 'row: Row, fieldOrColumn: string | ColumnInfo',
        list: []
      },
      {
        name: 'setCellAreas(areaConfigs, activeArea)',
        desc: '如果功能被支持，用于 mouse-config.area，选择指定区域的单元格（示例：setCellAreas([{ startRow, endRow, startColumn, endColumn }])）',
        version: 'extend-cell-area',
        type: 'Promise<any>',
        enum: '',
        defVal: 'areaConfigs: CellAreaConfig[], activeArea?: { area?: CellAreaConfig, row: Row, column: ColumnInfo }',
        list: []
      },
      {
        name: 'setMergeCells(merges)',
        desc: '临时合并单元格，如果为数组则合并多个',
        version: '',
        type: 'Promise<any>',
        enum: '',
        defVal: 'merges: TableMergeConfig | TableMergeConfig[]',
        list: []
      },
      {
        name: 'setMergeFooterItems(merges)',
        desc: '临时合并表尾，如果为数组则合并多个',
        version: '',
        type: 'Promise<any>',
        enum: '',
        defVal: 'merges: TableMergeConfig | TableMergeConfig[]',
        list: []
      },
      {
        name: 'setRowExpand(rows, checked)',
        desc: '用于 expand-config，设置展开行，二个参数设置这一行展开与否',
        version: '',
        type: 'Promise<any>',
        enum: '',
        defVal: 'rows: Row | Array<Row>, checked: boolean',
        list: []
      },
      {
        name: 'setAllRowExpand(checked)',
        desc: '用于 expand-config，设置所有行的展开与否（如果是关闭所有行，可以使用 clearRowExpand 快速清除）',
        version: '',
        type: 'Promise<any>',
        enum: '',
        defVal: 'checked: boolean',
        list: []
      },
      {
        name: 'setTreeExpand(rows, checked)',
        desc: '用于 tree-config，设置展开树形节点，二个参数设置这一行展开与否',
        version: '',
        type: 'Promise<any>',
        enum: '',
        defVal: 'rows: Row | Array<Row>, checked: boolean',
        list: []
      },
      {
        name: 'setAllTreeExpand(checked)',
        desc: '用于 tree-config，设置所有树节点的展开与否（如果是关闭所有树节点，可以使用 clearTreeExpand 快速清除）',
        version: '',
        type: 'Promise<any>',
        enum: '',
        defVal: 'checked: boolean',
        list: []
      },
      {
        name: 'setCurrentRow(row)',
        desc: '用于 row-config.isCurrent，设置某一行为高亮状态',
        version: '',
        type: 'Promise<any>',
        enum: '',
        defVal: 'row: Row',
        list: []
      },
      {
        name: 'setCurrentColumn(column)',
        desc: '用于 column-config.isCurrent，设置某列行为高亮状态',
        version: '',
        type: 'Promise<any>',
        enum: '',
        defVal: 'column: ColumnConfig',
        list: []
      },
      {
        name: 'setRadioRow(row)',
        desc: '用于 type=radio 单选框，设置某一行为选中状态',
        version: '',
        type: 'Promise<any>',
        enum: '',
        defVal: 'row: Row',
        list: []
      },
      {
        name: 'setCheckboxRow(rows, checked)',
        desc: '用于 type=checkbox 复选框，设置行为选中状态，第二个参数为选中与否',
        version: '',
        type: 'Promise<any>',
        enum: '',
        defVal: 'rows: Row | Array<Row>, checked: boolean',
        list: []
      },
      {
        name: 'setAllCheckboxRow(checked)',
        desc: '用于 type=checkbox，设置所有行的选中状态',
        version: '',
        type: 'Promise<any>',
        enum: '',
        defVal: 'checked: boolean',
        list: []
      },
      {
        name: 'toggleCheckboxRow(row)',
        desc: '用于 type=checkbox，切换某一行的选中状态',
        version: '',
        type: 'Promise<any>',
        enum: '',
        defVal: 'row: Row',
        list: []
      },
      {
        name: 'toggleAllCheckboxRow()',
        desc: '用于 type=checkbox，切换所有行的选中状态',
        version: '',
        type: 'Promise<any>',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'toggleRowExpand(row)',
        desc: '用于 type=expand，切换展开行的状态',
        version: '',
        type: 'Promise<any>',
        enum: '',
        defVal: 'row: Row',
        list: []
      },
      {
        name: 'toggleTreeExpand(row)',
        desc: '用于 tree-config，切换展开树形节点的状态',
        version: '',
        type: 'Promise<any>',
        enum: '',
        defVal: 'row: Row',
        list: []
      },
      {
        name: 'clearMergeCells()',
        desc: '手动清除临时合并的单元格',
        version: '',
        type: 'Promise<any>',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'clearMergeFooterItems()',
        desc: '手动清除临时合并的表尾',
        version: '',
        type: 'Promise<any>',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'clearCurrentRow()',
        desc: '用于 row-config.isCurrent，手动清空当前高亮的状态',
        version: '',
        type: 'Promise<any>',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'clearCurrentColumn()',
        desc: '用于 column-config.isCurrent，手动清空当前高亮的状态',
        version: '',
        type: 'Promise<any>',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'clearRadioRow()',
        desc: '用于 type=radio，手动清空用户的选择',
        version: '',
        type: 'Promise<any>',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'clearRadioReserve()',
        desc: '用于 radio-config.reserve，手动清空用户保留选中的行数据',
        version: '',
        type: 'Promise<any>',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'clearCheckboxRow()',
        desc: '用于 type=checkbox，手动清空用户的选择',
        version: '',
        type: 'Promise<any>',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'clearCheckboxReserve()',
        desc: '用于 checkbox-config.reserve，手动清空用户保留选中的行数据',
        version: '',
        type: 'Promise<any>',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'clearRowExpand()',
        desc: '用于 type=expand，手动清空展开行状态，数据会恢复成未展开的状态',
        version: '',
        type: 'Promise<any>',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'clearRowExpandLoaded(row)',
        desc: '用于 expand-config.lazy，手动清空懒加载展开行的状态，数据会恢复成未展开的状态，当再次展开时会重新加载',
        version: '',
        type: 'Promise<any>',
        enum: '',
        defVal: 'row: any',
        list: []
      },
      {
        name: 'clearTreeExpand(row)',
        desc: '用于 tree-config，手动清空树形节点的展开状态，数据会恢复成未展开的状态',
        version: '',
        type: 'Promise<any>',
        enum: '',
        defVal: 'row: any',
        list: []
      },
      {
        name: 'clearTreeExpandLoaded(row)',
        desc: '用于 tree-config.lazy，手动清空懒加载树节点的状态，数据会恢复成未展开的状态，当再次展开时会重新加载',
        version: '',
        type: 'Promise<any>',
        enum: '',
        defVal: 'row: any',
        list: []
      },
      {
        name: 'clearSort(fieldOrColumn)',
        desc: '手动清空排序条件，数据会恢复成未排序的状态',
        version: '',
        type: 'Promise<any>',
        enum: '',
        defVal: 'fieldOrColumn?: string | ColumnConfig',
        list: []
      },
      {
        name: 'clearFilter(fieldOrColumn)',
        desc: '手动清空筛选条件（如果不传 column 则清空所有筛选条件），数据会恢复成未筛选的状态',
        version: '',
        type: 'Promise<any>',
        enum: '',
        defVal: 'fieldOrColumn?: string | ColumnConfig',
        list: []
      },
      {
        name: 'clearSelected()',
        desc: '手动清除单元格选中状态',
        version: '',
        type: 'Promise<any>',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'clearActived()',
        disabled: true,
        desc: '请使用 clearEdit',
        version: '',
        type: 'Promise<any>',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'clearEdit()',
        desc: '手动清除单元格激活状态',
        version: '3.5.7',
        type: 'Promise<any>',
        enum: '',
        defVal: '',
        list: []
      },
      // {
      //   name: 'clearCopyed()',
      //   desc: '手动清空已复制的内容',
      //   type: 'Promise<any>',
      //   enum: '',
      //   defVal: '',
      //   list: []
      // },
      {
        name: 'clearCellAreas(area)',
        desc: '如果功能被支持，用于 mouse-config.area，用于清除鼠标选择的区域，可以指定清除的区域',
        version: 'extend-cell-area',
        type: 'Promise<any>',
        enum: '',
        defVal: 'area?: any',
        list: []
      },
      {
        name: 'clearCopyCellArea()',
        desc: '如果功能被支持，用于 mouse-config.area，手动清除标记为复制粘贴的区域',
        version: 'extend-cell-area',
        type: 'Promise<any>',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'clearData(rows, field)',
        desc: '手动清空单元格内容，如果不创参数，则清空整个表格内容，如果传了行则清空指定行内容，如果传了指定字段，则清空该字段内容',
        version: '',
        type: 'Promise<any>',
        enum: '',
        defVal: 'rows?: Row | Array<Row>, field?: string',
        list: []
      },
      {
        name: 'clearScroll()',
        desc: '手动清除滚动相关信息，还原到初始状态',
        version: '',
        type: 'Promise<any>',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'clearValidate()',
        desc: '手动清除校验',
        version: '',
        type: 'Promise<any>',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'clearAll()',
        desc: '手动清除表格所有条件，还原到初始状态（对于增删改查的场景中可能会用到，比如在数据保存之后清除表格缓存）',
        version: '',
        type: 'Promise<any>',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'resetColumn(options)',
        desc: '手动重置列的显示隐藏、列宽拖动的状态；如果为 true 则重置所有状态（如果已关联工具栏，则会同步更新）',
        version: '',
        type: 'Promise<any>',
        enum: '',
        defVal: 'options: boolean | object',
        list: [
          {
            name: 'visible',
            desc: '是否重置可视列状态',
            version: '',
            type: 'Boolean',
            enum: '',
            defVal: 'true',
            list: []
          },
          {
            name: 'resizable',
            desc: '是否重置列宽拖动状态',
            version: '',
            type: 'Boolean',
            enum: '',
            defVal: 'false',
            list: []
          }
        ]
      },
      {
        name: 'closeFilter()',
        desc: '手动关闭筛选面板',
        version: '',
        type: 'Promise<any>',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'closeTooltip()',
        desc: '手动关闭 tooltip 提示',
        version: '',
        type: 'Promise<any>',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'closeMenu()',
        desc: '手动关闭右键菜单',
        version: '',
        type: 'Promise<any>',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'closeFNR()',
        desc: '手动关闭查找与替换窗口）',
        version: 'extend-cell-area',
        type: 'Promise<any>',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'updateFooter()',
        desc: '手动更新表尾（对于某些需要频繁更新的场景下可能会用到）',
        version: '',
        type: 'Promise<any>',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'updateStatus(slotParams)',
        desc: '更新单元格状态（当使用自定义渲染时可能会用到）',
        version: '',
        type: 'Promise<any>',
        enum: '',
        defVal: 'slotParams: { row, column }',
        list: []
      },
      {
        name: 'setColumnFixed(fieldOrColumn, fixed)',
        desc: '设置指定列为冻结列',
        version: '3.6.14',
        type: 'Promise<any>',
        enum: '',
        defVal: 'fieldOrColumn: string | ColumnConfig, fixed: string',
        list: []
      },
      {
        name: 'clearColumnFixed(fieldOrColumn)',
        desc: '取消指定的冻结列',
        version: '3.6.14',
        type: 'Promise<any>',
        enum: '',
        defVal: 'fieldOrColumn: string | ColumnConfig',
        list: []
      },
      {
        name: 'hideColumn(fieldOrColumn)',
        desc: '隐藏指定列',
        version: '',
        type: 'Promise<any>',
        enum: '',
        defVal: 'fieldOrColumn: string | ColumnConfig',
        list: []
      },
      {
        name: 'showColumn(fieldOrColumn)',
        desc: '显示指定列',
        version: '',
        type: 'Promise<any>',
        enum: '',
        defVal: 'fieldOrColumn: string | ColumnConfig',
        list: []
      },
      {
        name: 'setColumnWidth(fieldOrColumn, width)',
        desc: '设置列宽',
        version: '3.6.12',
        type: 'Promise<any>',
        enum: 'px, %',
        defVal: 'fieldOrColumn: string | ColumnConfig, width: number | string',
        list: []
      },
      {
        name: 'getColumnWidth(fieldOrColumn)',
        desc: '获取列宽',
        version: '3.6.12',
        type: 'number',
        enum: '',
        defVal: 'fieldOrColumn: string | ColumnConfig',
        list: []
      },
      {
        name: 'scrollTo(scrollLeft, scrollTop)',
        desc: '如果有滚动条，则滚动到对应的位置',
        version: '',
        type: 'Promise<any>',
        enum: '',
        defVal: 'scrollLeft?: number, scrollTop?: number',
        list: []
      },
      {
        name: 'scrollToRow(row, fieldOrColumn)',
        desc: '如果有滚动条，则滚动到对应的行（对于某些特定的场景可能会用到，比如定位到某一行）',
        version: '',
        type: 'Promise<any>',
        enum: '',
        defVal: 'row: Row, fieldOrColumn?: string | ColumnConfig',
        list: []
      },
      {
        name: 'scrollToColumn(fieldOrColumn)',
        desc: '如果有滚动条，则滚动到对应的列（对于某些特定的场景可能会用到，比如定位到某一列）',
        version: '',
        type: 'Promise<any>',
        enum: '',
        defVal: 'fieldOrColumn: string | ColumnConfig',
        list: []
      },
      // {
      //   name: 'scrollToTreeRow(row)',
      //   desc: '对于树形结构中，可以直接滚动到指定深层节点中（对于某些特定的场景可能会用到，比如定位到某一节点）',
      //   version: '',
      //   type: 'Promise<any>',
      //   enum: '',
      //   defVal: 'column: ColumnConfig',
      //   list: []
      // },
      {
        name: 'sort(sortConfs, order)',
        desc: '手动对表格进行排序（如果 order 为空则自动切换排序）',
        version: '',
        type: 'Promise<any>',
        enum: '',
        defVal: 'sortConfs: string | { field: string | ColumnInfo, order: \'desc\' | \'asc\' | null } | { field: string | ColumnInfo, order?: \'desc\' | \'asc\' | null }[], order?: \'desc\' | \'asc\' | null',
        list: []
      },
      {
        name: 'isSort(fieldOrColumn)',
        desc: '判断指定列是否为排序状态，如果为空则判断所有列',
        version: '',
        type: 'Boolean',
        enum: '',
        defVal: 'fieldOrColumn?: string | ColumnInfo',
        list: []
      },
      {
        name: 'recalculate(refull)',
        desc: '重新计算表格，如果传 true 则进行完整计算（对于某些特殊场景可能会用到，比如隐藏的表格、重新计算列宽...等）',
        version: '',
        type: 'Promise<any>',
        enum: '',
        defVal: 'refull?: boolean',
        list: []
      },
      {
        name: 'refreshScroll()',
        desc: '刷新滚动操作，手动同步滚动相关位置（对于某些特殊的操作，比如滚动条错位、固定列不同步）',
        version: '',
        type: 'Promise<any>',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'validate(rows)',
        desc: '快速校验，如果存在记录不通过的记录，则返回不再继续校验（异步校验除外）；如果第一个参数为 true 则校验当前表格数据，如果指定 row 或 rows 则校验指定行或多行，如果不指定数据，则默认只校验临时变动的数据，例如新增或修改',
        version: '',
        type: 'Promise<ErrMap>',
        enum: '',
        defVal: 'rows?: boolean | Row | Row[]',
        list: []
      },
      {
        name: 'fullValidate(rows)',
        desc: '完整校验，和 validate 的区别就是默认校验当前表格数据并且给有效数据中的每一行进行校验',
        version: '',
        type: 'Promise<ErrMap>',
        enum: '',
        defVal: 'rows?: boolean | Row | Row[]',
        list: []
      },
      {
        name: 'exportData(options)',
        desc: '将表格数据导出（树结构和虚拟滚动只允许导出数据源）',
        version: '',
        type: 'Promise<any>',
        enum: '',
        defVal: 'options: object',
        list: XEUtils.clone(exportDataAPI, true)
      },
      {
        name: 'openExport(options)',
        desc: '打开高级导出（只对 export-config 启用后有效）',
        version: '',
        type: 'Promise<any>',
        enum: '',
        defVal: 'options: object',
        list: XEUtils.clone(exportDataAPI.filter(item => !['data', 'download', 'columnFilterMethod', 'dataFilterMethod', 'footerFilterMethod'].includes(item.name)), true)
      },
      {
        name: 'importData(options)',
        desc: '将数据导入表格（只支持基本数据结构）',
        version: '',
        type: 'Promise<any>',
        enum: '',
        defVal: 'options: object',
        list: XEUtils.clone(importDataAPI, true)
      },
      {
        name: 'openImport(options)',
        desc: '打开高级导入（只对 import-config 启用后有效）',
        version: '',
        type: 'Promise<any>',
        enum: '',
        defVal: 'options: object',
        list: XEUtils.clone(importDataAPI, true)
      },
      {
        name: 'print(options)',
        desc: '打印',
        version: '',
        type: 'Promise<any>',
        enum: '',
        defVal: 'options: object',
        list: XEUtils.clone(printAPI, true)
      },
      {
        name: 'openPrint(options)',
        desc: '打开高级打印（只对 print-config 启用后有效）',
        version: '',
        type: 'Promise<any>',
        enum: '',
        defVal: 'options: object',
        list: XEUtils.clone(printAPI, true)
      },
      {
        name: 'saveFile(options)',
        desc: '保存文件到本地',
        version: '',
        type: 'Promise<any>',
        enum: '',
        defVal: 'options: object',
        list: [
          {
            name: 'filename',
            desc: '文件名',
            version: '',
            type: 'string',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'type',
            desc: '文件类型',
            version: '',
            type: 'string',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'content',
            desc: '内容',
            version: '',
            type: 'string | Blob',
            enum: '',
            defVal: '',
            list: []
          }
        ]
      },
      {
        name: 'readFile(options)',
        desc: '读取本地文件',
        version: '',
        type: 'Promise<{ file, files }>',
        enum: '',
        defVal: 'options: object',
        list: [
          {
            name: 'multiple',
            desc: '是否允许多选',
            version: '',
            type: 'Boolean',
            enum: '',
            defVal: 'false',
            list: []
          },
          {
            name: 'types',
            desc: '支持选取的文件类型',
            version: '',
            type: 'Array',
            enum: 'csv, html, xml, txt',
            defVal: '[\'csv\', \'html\', \'xml\', \'txt\']',
            list: []
          },
          {
            name: 'message',
            desc: '是否显示内置的消息提示',
            version: '',
            type: 'Boolean',
            enum: '',
            defVal: 'true',
            list: []
          }
        ]
      },
      {
        name: 'openTooltip(target, content)',
        desc: '打开 tooltip 提示',
        version: '3.0.3',
        type: 'Promise<any>',
        enum: '',
        defVal: 'target: HTMLElement, content: string | number',
        list: []
      },
      {
        name: 'openFind()',
        desc: '如果功能被支持，用于 mouse-config.area，打开单元格查找功能',
        version: 'extend-cell-area',
        type: 'Promise<any>',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'openReplace()',
        desc: '如果功能被支持，用于 mouse-config.area，打开单元格替换功能',
        version: 'extend-cell-area',
        type: 'Promise<any>',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'openFNR(options)',
        desc: '如果功能被支持，用于 mouse-config.area，打开单元格查找与替换功能，type 可以指定默认页签',
        version: 'extend-cell-area',
        type: 'Promise<any>',
        enum: '',
        defVal: '{type: \'find\' | \'replace\'}',
        list: []
      },
      {
        name: 'connect(toolbar)',
        desc: '连接工具栏',
        version: '',
        type: 'Promise<any>',
        enum: '',
        defVal: 'toolbar: Toolbar',
        list: []
      },
      {
        name: 'focus()',
        desc: '使表格获取焦点',
        version: '',
        type: 'Promise<any>',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'blur()',
        desc: '使表格失去焦点',
        version: '',
        type: 'Promise<any>',
        enum: '',
        defVal: '',
        list: []
      }
    ]
  }
]

export default apis