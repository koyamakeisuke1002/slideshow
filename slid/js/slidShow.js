let count = 0;
const mainElement = document.querySelector("div.main>img");
const url = [
"https://cdn.pixabay.com/photo/2021/07/28/19/04/coneflowers-6503097_1280.jpg",
"https://cdn.pixabay.com/photo/2014/04/14/20/11/pink-324175_1280.jpg",
"https://cdn.pixabay.com/photo/2018/02/09/21/46/rose-3142529_1280.jpg",
"https://cdn.pixabay.com/photo/2017/02/15/13/40/tulips-2068692_1280.jpg",
"https://cdn.pixabay.com/photo/2017/04/23/20/36/tulips-2254970_1280.jpg",
"https://cdn.pixabay.com/photo/2016/07/10/10/54/marguerite-1507550_1280.jpg",
"https://cdn.pixabay.com/photo/2016/09/03/18/40/dahlia-1642455_1280.jpg",
"https://cdn.pixabay.com/photo/2016/12/05/07/28/camellia-1883272_1280.jpg",
"https://cdn.pixabay.com/photo/2016/10/05/14/13/flowers-1716747_1280.jpg",
"https://cdn.pixabay.com/photo/2015/03/26/18/08/rose-693152_1280.jpg",
"https://cdn.pixabay.com/photo/2015/07/12/09/44/protea-841676_1280.jpg",
"https://cdn.pixabay.com/photo/2016/03/16/13/41/cherry-blossom-1260641_1280.jpg",
"https://cdn.pixabay.com/photo/2016/11/22/22/20/rose-1850903_1280.jpg",
"https://cdn.pixabay.com/photo/2020/06/29/05/43/poppy-5351553_1280.jpg",
"https://cdn.pixabay.com/photo/2013/09/25/01/52/rose-185961_1280.jpg",
"https://cdn.pixabay.com/photo/2016/04/09/02/09/cherry-blossoms-1317308_1280.jpg",
"https://cdn.pixabay.com/photo/2017/01/21/13/55/tulips-1997282_1280.jpg",
"https://cdn.pixabay.com/photo/2015/05/01/14/03/asian-bleeding-heart-748549_1280.jpg",
"https://cdn.pixabay.com/photo/2015/01/28/02/35/lotus-614421_1280.jpg",
"https://cdn.pixabay.com/photo/2020/05/07/20/12/forget-me-not-5143015_1280.jpg",
"https://cdn.pixabay.com/photo/2017/03/13/21/19/tulip-2141216_1280.jpg",
"https://cdn.pixabay.com/photo/2017/10/27/07/37/pink-2893502_1280.jpg",
"https://cdn.pixabay.com/photo/2015/04/30/16/47/hyacinth-747131_1280.jpg"
];

function left() {
  // console.log(count);
  count--;
  if (count <= 0) {
    count = url.length-1;
  }
  mainElement.setAttribute('src', url[count]);
}
function right() {
  count++;
  if (count >= url.length) {
    count = 0;
  }
  mainElement.setAttribute('src', url[count]);
}

let timer;
let nowPlaying = false;

function autoPlay() {
  right();
  timer = setTimeout(function() {
    autoPlay();
  }, 200);
}

function play() {
  if (nowPlaying) {
    return;
  }
  nowPlaying = true;
  autoPlay();
}

function stop() {
  clearTimeout(timer);
  nowPlaying = false;
}

function reset() {
  stop();
  mainElement.setAttribute('src', url[0]);
  count = 0;
}
