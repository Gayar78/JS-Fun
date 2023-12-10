ctx.globalCompositeOperation = 'source-over';
ctx.fillStyle = "black";
ctx.fillRect(0,0,canvas.width, canvas.height);
ctx.globalCompositeOperation = 'lighter';
ctx.strokeStyle = ctx.fillStyle = "hsla(244, 60%, 60%, 0.5)";

time = new Date().getTime() / 10;
var point = [];

for (var c = 0; c < 180; c++){
    var s = c/180;
    var han = Math.cos((s * Math.PI) / 2);
    var h = Math.sin((s * Math.PI) / 2);

    var p = [];
    s = 1 - s;
    var r = 0;

    MAX = Infinity;

    for (var a = 0; a < MAX; a++){
        var x = Math.cos(r) * han;
        var y = Math.sin(r) * han;
        var z = nami(r,s);

        p.push([x, y, HEI + z * s + h]);
        r += (Math.PI * 2) / 180;
    }
    points.push(p);
}