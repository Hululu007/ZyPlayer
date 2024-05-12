export default {
  name: 'Setting',
  placeholder: {
    general: 'Please enter the content',
    startPage: 'Please enter the start page path, such as /home/',
    paramsPath: 'path',
    paramsPasswd: 'password',
    params: '{\n\t"path": { "password": "password" }\n}',
    manualTip: 'Example of M3U:\n#EXTM3U\n#EXTINF:-1,Channel\nhttps://channel-url\n\nExample of genre\nChannel,https://channel-url',
    groupTip: 'Please select a group',
    categoryTip: 'Please enter the content, separated by commas',
    shortcutKeyTip: 'Click this to set',
    shortcutKeyEnterTip: 'Press shortcut key combination',
    shortcutKeyNonCompliance: 'Shortcut key combination is not compliant',
    epgTip: 'Only support dipy',
    logoTip: 'Source logo is invalid',
    pdfaTip: 'List rules (e.g. body&&li)',
    pdfhTip: 'Node rules (e.g. body&&a,0&&href)'
  },
  dialog: {
    cancel: 'Cancel',
    confirm: 'OK',
    add: 'Add',
    edit: 'Edit',
    flag: 'Flag',
    splitTip: 'Please use half-width state for separator ","',
    restoreFactoryHeader: 'Eestore Factory',
    restoreFactoryBody: 'Are you sure to restore the factory? Return to the initial state after leaving the factory.'
  },
  nav: {
    configBase: 'BaseSetting',
    siteSource: 'SiteSetting',
    iptvSource: 'IptvSetting',
    analyzeSource: 'AnalyzeSetting',
    driveSource: 'DriveSetting',
    editSource: 'EditSource'
  },
  table: {
    default: 'Default',
    edit: 'Edit',
    check: 'Check',
    delete: 'Delete',
    deleteTip: 'Are you sure to delete it',
    site: {
      close: 'close',
      together: 'together',
      local: 'lcoal'
    },
    iptv: {
      remote: 'Remote',
      local: 'Local',
      manual: 'Manual'
    },
    analyze: {
      web: 'Web',
      json: 'Json'
    }
  },
  header: {
    add: 'Add',
    delete: 'Delete',
    check: 'Check',
    flag: 'Flag',
    search: 'Search Resource'
  },
  site: {
    name: 'name',
    type: 'type',
    api: 'api',
    search: 'search',
    playUrl: 'playUrl',
    ext: 'ext',
    group: 'group',
    category: 'category'
  },
  iptv: {
    name: 'name',
    config: 'type',
    api: 'api',
    epg: 'epg',
    upload: 'Upload'
  },
  analyze: {
    name: 'name',
    type: 'type',
    api: 'api'
  },
  drive: {
    name: 'name',
    server: 'api',
    startPage: 'start',
    params: 'params'
  },
  base: {
    theme: 'Theme',
    light: 'Light',
    dark: 'Dark',
    auto: 'Auto',
    bossKey: 'BossKey',
    timeout: 'Timeout',
    hotRecommend: 'HotList',
    kylive: 'KyLive',
    enlightent: 'Enlightent',
    reset: 'Reset',
    search: 'Search',
    site: 'Site',
    group: 'Group',
    all: 'All',
    viewCasual: 'ViewCasual',
    iptv: 'IPTV',
    globalLogo: 'GlobalLogo',
    defaultEpg: 'DefaultEpg',
    delay: 'Delay',
    skipIpv6: 'SkipIpv6',
    check: 'Check',
    thumbnail: 'Thumbnail',
    player: 'Player',
    barrage: 'Barrage',
    xgplayer: 'XgPlayer',
    veplayer: 'VePlayer',
    aliplayer: 'AliPlayer',
    tcplayer: 'TcPlayer',
    artplayer: 'ArtPlayer',
    dplayer: 'DPlayer',
    nplayer: 'NPlayer',
    ckplayer: 'CkPlayer',
    custom: 'custom(call system)',
    command: 'Command',
    sniffer: 'Sniffer',
    info: 'Info',
    security: 'Security',
    proxy: 'Proxy',
    ua: 'UA',
    jurisdiction: 'Jurisdiction',
    selefBoot: 'SelefBoot',
    hardwareAcceleration: 'HardwareAcceleration',
    windowPosition: 'WindowPosition',
    other: 'Other',
    restoreFactory: 'RestoreFactory',
    dataMange: 'DataMange',
    checkUpdate: 'CheckUpdate',
    disclaimer: 'Disclaimer'
  },
  message: {
    reboot: 'Reset successfully, application will be restarted',
    hardwareAccelerationOn: 'HardwareAcceleration turn on, restarting application takes effect',
    hardwareAccelerationOff: 'HardwareAcceleration turn off, restarting application takes effect',
    windowPositionOn: 'WindowPosition turn on',
    windowPositionOff: 'WindowPosition turn off',
    networkAddress: 'Network address',
    networkCheckError: 'Network status detection failed'
  },
  ad: {
    title: 'Better on Hipy',
    desc: 'New Start, New Begin',
    open: 'open'
  },
  ua: {
    title: 'User-Agent',
    topTip: 'Emulate User Agent',
    bottomTip: "recommend chrome, empty use system default"
  },
  barrage: {
    title: 'Barrage',
    header: 'Enable param requires preprocess data, which will increase the seeding time',
    key: 'Return field',
    api: 'Api',
    support: 'Line',
    start: 'Time',
    color: 'Color',
    mode: 'Mode',
    content: 'Text',
    param: 'Parameter mapping',
    tip: 'Mapping Field position of the return, starting 0'
  },
  data: {
    title: 'DataMange',
    config: 'Config',
    configTip: 'The data is stored in the database and exported as a JSON file for ease of migration. The import overwrites the original data',
    success: 'Success',
    fail: 'Fail',
    easyConfig: {
      title: 'EasyConfig',
      app: 'this app',
      appTip: 'Please strictly follow the format of this software interface',
      hipy: 'hipy',
      drpy: 'drpy',
      drpyTip: 'Currently only type: 1 data is supported in sites, please set the JS mode to 0',
      tvbox: 'tvbox',
      tvboxTip: 'Currently only cms-type data of type: 0 or 1 is supported in sites',
      address: 'url',
      confirm: 'Confirm',
      confirmTip: 'Original data will be cleared',
    },
    configImport: {
      title: 'ConfigImport',
      remote: 'Remote',
      local: 'Local',
      address: 'url',
      dropTip: 'Due to compatibility problems, the old data import will discard historical and collection data',
      import: 'Import',
      importTip: 'Original data will be cleared'
    },
    configExport: {
      title: 'ConfigExport',
      site: 'site',
      iptv: 'iptv',
      channel: 'channel',
      analyze: 'analyze',
      drive: 'drive',
      cache: 'cache',
      history: 'history',
      thumbnail: 'thumbnail',
      star: 'star',
      setting: 'setting',
      export: 'Export',
      exportTip: 'Selected data will be export'
    },
    clearData: {
      title: 'ClearData',
      site: 'site',
      iptv: 'iptv',
      channel: 'channel',
      analyze: 'analyze',
      drive: 'drive',
      cache: 'cache',
      history: 'history',
      thumbnail: 'thumbnail',
      star: 'star',
      clear: 'Clear',
      clearTip: 'Selected data will be deleted'
    },
    syncDisk: 'SyncDisk',
    content1: "Because not collected data, you can choose sync service save data",
    content2: 'Built-in webdav as sync service, recommend jianguo cloud',
    content3: 'If switch AutoSync on, Sync every 5 minutes',
    webdev: {
      title: 'Param',
      check: 'Check',
      save: 'Save',
      sync: 'AutoSync',
      url: 'URL',
      username: 'UserName',
      password: 'PassWord',
    },
    syncToCloud: 'SyncToCloud',
    syncToCloudTip: 'Cloud data will be overwritten',
    syncToLocal: 'SyncToLocal',
    syncToLocalTip: 'Local data will be cleared'
  },
  thumbanilFfmpeg: {
    haveFfmpeg: 'FFmpeg module installed detected',
    noFfmpeg: 'No FFmpeg module was detected'
  },
  sniffer: {
    title: 'Sniffing Scheme',
    pie: {
      sign: 'PuppeteerInElectron',
      name: 'Intercept&Modify req',
      mainAbility: 'Sniff ability',
      secondaryAbility: 'Support unload page'
    },
    iframe: {
      sign: 'Browser native interface',
      name: 'Low resource',
      mainAbility: 'Compliant',
      secondaryAbility: 'Loaded page only'
    },
    other: {
      sign: 'Third-party interface',
      name: 'Good performance',
      mainAbility: 'Expert',
      secondaryAbility: ''
    }
  },
  update: {
    title: 'Check updates',
    noUpdate: 'You are currently using the latest version',
    checkWait: 'Please wait, checking for updates...',
    foundNewVersion: 'Discover the new version',
    systemTip: 'Tips: Only windwos supports online updates',
    macAndLinuxTip: 'Mac and Linux users please go',
    install: 'install',
    download: 'download',
    downloading: 'downloading',
    downloaded: 'The download of the installation package is complete'
  },
  editSource: {
    import: 'Import',
    export: 'Export',
    bug: 'Debug',
    cache: 'PullCache',
    delete: 'DeleteCase',
    file: 'Server',
    help: 'Help',
    title: 'Source Tool [Hjdhnx United]',
    template: 'Template',
    templateTip: 'select one default template to edit',
    reqHeaderTitle: 'Request Header',
    reqBodyTitle: 'Request Body',
    run: 'Run',
    fileManage: 'File',
    placeholder: {
      reqHeader: '{ "User-Agent": "Mozilla/5.0 zyplayer" }',
      reqBody: '{ "key": "01b9b7" }',
    },
    rule: {
      pdfa: 'Pdfa',
      pdfh: 'Pdfh',
      try: 'Try'
    },
    bar: {
      title: 'Edit Params',
      theme: 'theme',
      language: 'language',
      eol: 'eol',
      wordWrap: 'wordWrap',
      disable: 'disable',
      enable: 'enable',
      autoInit: 'autoInit'
    },
    action: {
      init: 'Init',
      initStatus: 'Status',
      initManual: 'Manual',
      initAuto: 'Auto',
      classify: 'Classify',
      source: 'Source',
      obtain: 'Obtain',
      home: 'Home',
      list: 'List',
      detail: 'Detail',
      search: 'Search',
      play: 'Play',
      proxy: 'Proxy',
      player: 'Player',
      sniffer: 'Sniffer'
    },
    select: {
      log: 'Log',
      debug: 'Debug',
      source: 'Source',
      rule: 'Rule',
      f12: 'F12',
      clear: 'Clean',
      play: 'Play',
      copy: 'Copy',
      upload: 'Upload'
    },
    message: {
      openDevTools: 'Currently logs can only be viewed via Developer Tools -> Console',
      htmlNoUrl: 'The parameter url is empty',
      ruleNoHtml: 'You must get the source code first',
      ruleNoRule: 'The parameter rule is empty',
      initNoData: 'The editor content is empty',
      listNoT: 'The parameter t is empty',
      detailNoIds: 'The parameter ids is empty',
      searchNoWd: 'The parameter wd is empty',
      playNoFlag: 'The parameter flag is empty',
      playNoPlay: 'The parameter play is empty',
      proxyNoUrl: 'The parameter url is empty',
      playerNoUrl: 'The parameter url is empty',
    },
    dialog: {
      player: {
        title: 'PlayTest'
      },
      request: {
        title: 'RequestParameters',
        cancel: 'Reset'
      }
    }
  }
}
