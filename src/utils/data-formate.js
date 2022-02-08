export function getCount(count) {
    if(count < 0) return;
    if(count < 10000) {
        return count;
    }else if(Math.floor(count / 10000) < 10000) {
        return Math.floor(count / 1000) / 10 + "万";
    }else {
        return Math.floor(count / 10000000) / 10 + "亿"
    }
}

export function getSizeImage(imgUrl, size) {
    return `${imgUrl}?param=${size}x${size}`;
}

export function formatDate(time, fmt) {
    let date = new Date(time);
  
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    let o = {
      'M+': date.getMonth() + 1,
      'd+': date.getDate(),
      'h+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds()
    };
    for (let k in o) {
      if (new RegExp(`(${k})`).test(fmt)) {
        let str = o[k] + '';
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
      }
    }
    return fmt;
};
  
function padLeftZero(str) {
    return ('00' + str).substr(str.length);
};

export function formatMonthDay(time) {
    return formatDate(time, "MM月dd日");
}

export function formatMinuteSecond(time) {
    return formatDate(time, "mm:ss");
}

export function getPlaySong(id) {
    return `https://music.163.com/song/media/outer/url?id=${id}.mp3`;
}

export function getRandomNumber(num) {
    return Math.floor(Math.random() * num);
}

export function parseLyric(lyricString) {
    const parseRule = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/;
    const lineString = lyricString.split("\n");
    const lineArr = [];
    for(let line of lineString) {
        if(line) {
            const res = parseRule.exec(line);
            const time1 = res[1] * 60 * 1000;
            const time2 = res[2] * 1000;
            const time3 = res[3].length === 3 ? res[3] * 1 : res[3] * 10;
            const lineTime = time1 + time2 + time3;
            const lineContent = line.replace(parseRule, "").trim();
            const lineObj = {lineTime, lineContent}
            lineArr.push(lineObj);
        }
    }
    return lineArr
}