class GetHttpConfig {
  constructor () {
    this.defatulEnv = null
    this.envMapList = [
      { httpUrl: 'http://text/baidu.com', imgsUrl: '', envName: 'test' },
      { httpUrl: 'http://dev/baidu.com', imgsUrl: '', envName: 'development' },
      { httpUrl: 'http://pro/baidu.com', imgsUrl: '', envName: 'production' }
    ]
  }

  getNodeEnvData () {
    const envName = process.env.NODE_ENV || 'test'
    this.envMapList.map(item => { if (item.envName === envName) { this.defatulEnv = item } })
    return this.defatulEnv
  }
}

export default GetHttpConfig
