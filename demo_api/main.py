#!/usr/bin/env python
#coding=utf-8

'''
__author__ = 'liboo'
mail: striveliboo@163.com
'''

import json
import web

urls = (
    '/hello', 'hello'
)
app = web.application(urls, globals())


class hello:
    def __init__(self):
        web.header('Access-Control-Allow-Origin', '*')

    def GET(self):
        web.header('Content-type', 'application/json; charset=utf-8')
        return json.dumps({"status": 200, "data": []})

    def POST(self):
        file_name = 'a.zip'
        web.header('Content-type', 'application/octet-stream')
        web.header('Access-Control-Expose-Headers', 'Content-Disposition')
        web.header('Content-Disposition', 'attachment;filename=%s' % file_name)
        with open(file_name, "rb") as f:
            return f.read()


if __name__ == "__main__":
    app.run()

