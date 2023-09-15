---
title:  OpenResty 获取 POST 数据
---

### ngx.req.get_body_data

如果请求的 Content-Type 头部是 application/json，你可以使用 ngx.req.get_body_data() 来获取原始JSON数据

```
ngx.req.read_body()
local json_data = ngx.req.get_body_data()
if json_data then
    local cjson = require "cjson"
    local data = cjson.decode(json_data)
    -- 现在你可以访问和操作 data 表中的数据
else
    ngx.log(ngx.ERR, "Failed to get JSON data")
    ngx.exit(ngx.HTTP_INTERNAL_SERVER_ERROR)
end
```



