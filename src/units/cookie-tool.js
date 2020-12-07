class CookieTool {
  setCookie (key, value, time) {
    var oDate = new Date()
    oDate.setDate(oDate.getDate() + time)
    document.cookie = key + '=' + value + '; expires=' + oDate.toDateString()
  }

  getCookie (key) {
    var arr1 = document.cookie.split('; ')
    for (var i = 0; i < arr1.length; i++) {
      var arr2 = arr1[i].split('=')
      if (arr2[0] === key) {
        return decodeURI(arr2[1])
      }
    }
  }

  removeCookie (key) { this.setCookie(key, '', -1) }
}
export default CookieTool
