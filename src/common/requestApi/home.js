import qs from "qs"
import RequestHttp from '@/service/Request'
import RequestUrl from '@/service/RequestUrl'

// 查询-首页列表
export const ApiGetIndexList = (obj) => {
    const data = qs.parse(obj)
    return RequestHttp({
        url: RequestUrl.index.indexlist,
        method: "GET",
        headers: {},
        data: data
    });
};