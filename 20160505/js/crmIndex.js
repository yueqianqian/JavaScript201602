var boxList = document.getElementById("boxList"), oLis = boxList.getElementsByTagName("li");

//->实现隔行变色&&鼠标滑过变色的效果
~function () {
    for (var i = 0, len = oLis.length; i < len; i++) {
        var curLi = oLis[i];
        curLi.className = i % 2 === 1 ? "bg" : null;

        curLi.oldClass = curLi.className;
        curLi.onmouseenter = function () {
            this.className = "hov";
        };
        curLi.onmouseleave = function () {
            this.className = this.oldClass;
        };
    }
}();


