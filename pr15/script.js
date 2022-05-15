function move() {
    var elem = document.getElementsById("cube")
    var pos = 0;
    var id = setInterval(frame, 10)

    function frame() {
        while (pos < 350) {
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }

    }
}