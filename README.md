# axios secondary packaging, adding loading configuration

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```


### For example
```
/**
 * @TODO: Axios封装
 * @author: Jensonhui
 * @date: 2019-06-7 15:53:37
 */

async expressFoo () {
  try {
    const res = await this.$post(
      'http://www.baidu.com' // httpurl,
      { name: 'Jensonhui' } // value,
      { isLoading: false } // option
    )
    const { code, message, object: data } = res.data
  } catch (e) {
    console.log(e)
  }
}
```
