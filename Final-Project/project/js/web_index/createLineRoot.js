function LineRoot(startX, startY, endX, endY, raphael) {
    var start = {
        x: startX,
        y: startY+20 
    };
    var end = {
        x: endX,
        y: endY-20
    };
    var getPath = function () {
        return "M" + start.x + " " + start.y + " L" + end.x + " " + end.y;
    };
    var redraw = function () {
        node.attr("path", getPath());
    }

    var node = raphael.path(getPath());
    return {
        updateStart: function (x, y) {
            start.x = x;
            start.y = y;
            redraw();
            return this;
        },
        updateEnd: function (x, y) {
            end.x = x;
            end.y = y;
            redraw();
            return this;
        }
    };
};