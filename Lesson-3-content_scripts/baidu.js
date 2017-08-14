
var kw = $('#kw');
var form = $('#form');
chrome.runtime.onMessage.addListener(//监听扩展程序进程或内容脚本发送请求的请求
    function (request, sender, sendResponse) {
        if (request.action == "send") {
            kw.val(request.keyword);
            sendResponse({state:'关键词填写成功！'});
        }
        if (request.action == "submit") {
            form.submit();
            sendResponse({state:'提交成功！'})
        }
    }
);