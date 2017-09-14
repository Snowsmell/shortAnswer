    //添加的辅助函数
    template.helper('selecticon', function (Number) {
        var letter;
        switch (Number) {
            case 0:
                letter = "A";
                break;
            case 1:
                letter = "B";
                break;
            case 2:
                letter = "C";
                break;
            case 3:
                letter = "D";
                break;
            case 4:
                letter = "E";
                break;
            case 5:
                letter = "F";
                break;
            case 6:
                letter = "G";
                break;
            case 7:
                letter = "H";
                break;
            case 8:
                letter = "I";
                break;
            case 9:
                letter = "J";
                break;
        }
        return letter
    })
    //判断题目类型
    template.helper('exercisetype', function (exercise) {
        var name;
        switch (exercise) {
            case 1:
                name = "判断题";
                break;
            case 2:
                name = "单选题";
                break;
            case 3:
                name = "多选题";
                break;
            case 4:
                name = "填空题";
                break;
            case 5:
                name = "计算题";
                break;
            case 6:
                name = "简答题";
                break;
            case 7:
                name = "论述题";
                break;
            case 8:
                name = "综合题";
                break;
            case 9:
                name = "名词解释";
        }
        return name
    })
    //选项中包含转义尖括号，需要替换
    template.helper('replace',function(value){
        var result = null;
        result = value.replace(/&lt;/g,'<');
        result = result.replace(/&gt;/g,'>');
        return result
    })
    //获取地址栏请求参数
    function GetQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
    }