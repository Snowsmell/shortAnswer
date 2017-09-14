$(function () {

    function Post(url, data) {
        $.ajax({
            type: "post",
            url: url,
            data: data,
            success: function (data) {
                var body = data.Body;
                console.log(body);
                if (!body.QuesAnalysisList) {
                    body.QuesAnalysisList = [{
                        "AnalysisID": null,
                        "AnalysisType": null,
                        "AnalysisContent": "本题暂无解析"
                    }]
                }
                var page = template('ExamShortAnswerJx', body);
                var correctAnswer = body.QuesAnswer;
                $('.analysisBox').html(page);
            }
        })
    }
    var moniGet = location.search || "?userid=123898&paperid=58&quesid=186"
    function GetQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = moniGet.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
    }
    var userid = GetQueryString('userid'),
        paperid = GetQueryString('paperid'),
        quesid = GetQueryString('quesid')

    var data = {
        "UserId": userid,
        "PaperId": paperid,
        "QuesId": quesid
    };

    var url = "http://mapi.gfedu.cn/api/exam/getquesanalysisinfo/v500";
    //根据传入参数变换
    Post(url, data)
})