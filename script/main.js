let num = 0;
let tid;
const msgbox = document.getElementById('msgbox');
const movie = document.getElementById("movie");

//movie.setAttribute("src", "/res/JavaScript.mp4");

movie.addEventListener("playing", function() {

    if (num === 0) {
        msgbox.innerHTML = "";
    }
    showMessage(1000);

}, false);

movie.addEventListener("pause", function() {
    clearTimeout(tid);
});

movie.addEventListener("ended", function() {
    num = 0;
});


function showMessage(timeout) {

    const messages = ['','ゆっくり霊夢だぜ。',
                      '',
                      'ゆっくり魔理沙だぜ。',
                      '',
                      '今日は<a href="https://developer.mozilla.org/ja/docs/Web/JavaScript" target="_blank">JavaScriptについて<a>',
                      '解説するぜ。',
                      '','',
                      'JavaScriptって',
                      'なんだっけ？',
                      'JavaScriptは',
                      '<a href="https://ja.wikipedia.org/wiki/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0%E8%A8%80%E8%AA%9E" target="_blank">プログラミング言語<a>の一つで',
                      '<a href="https://ja.wikipedia.org/wiki/%E3%82%A6%E3%82%A7%E3%83%96%E3%83%96%E3%83%A9%E3%82%A6%E3%82%B6" target="_blank">インターネットブラウザ上で<a>',
                      '動作するのが',
                      '特徴なんだぜ。',
                      'Javaとは',
                      '違うの？',
                      '名前は似てるけど',
                      'JavaとJavaScriptは',
                      '全くの別物なんだぜ。',
                      'そうなんだ。',
                      '','',
                      'ゆっくりしていってね！'];
 
    let message = messages[num++];
    msgbox.innerHTML = msgbox.innerHTML + message;
    
    if (message !== "") {
        msgbox.innerHTML = msgbox.innerHTML + "<BR>";
    }

    if (num < messages.length) {
        tid = setTimeout("showMessage("+timeout +")", timeout);
    };
}
