import qs from "qs"
import RequestHttp from '@/service/Request'
import RequestUrl from '@/service/RequestUrl'

// 查询-我的详情
const ApiGetMineInfo = (obj) => {
    const data = qs.stringify(obj)
    return RequestHttp({
        url: RequestUrl.mine.minelist,
        method: "GET",
        headers: {},
        data: data
    });
};

export default ApiGetMineInfo