import qs from "qs"
import {Request} from '@/service/Request'


// 查询-专题数据列表
const getIndexData = "/topics"
export const ApiGetIndexList = ({
  page,
  tab,
  limit,
  mdrender
}) => {
    const data = qs.stringify({
      page,
      tab,
      limit,
      mdrender
    })
    return Request({
        url: getIndexData,
        method: "GET",
        headers: {},
        data: data
    });
};