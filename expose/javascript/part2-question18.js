var d = new Date();
var time = d.toLocaleTimeString();
var timenum = d.getSeconds()
var oldtime = -1;
while(true){
    d = new Date();
    time = d.toLocaleTimeString();
    timenum = d.getSeconds()
    if (timenum > oldtime){
        console.log(time);
        oldtime = timenum
    }
    if (timenum === 0){
        console.log(time);
        oldtime = timenum;
    }
}