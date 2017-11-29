function formatTime(sec){
    var hrs = Math.floor(sec / 3600);
    var min = Math.floor(sec % 3600 / 60);
    var s = Math.floor(sec % 3600 - min * 60);
    return hrs + "h " + min + "min " + s + "s ";
}

exports.time = formatTime;