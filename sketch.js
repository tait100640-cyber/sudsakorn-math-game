// ==========================================
// ส่วนจัดการระบบ State, วิดีโอ และเสียง
// ==========================================
let currentStage = 1; 
window.isSoundMuted = false; 
window.isCameraOn = false; 
let bgm, gameBgm, bonusBgm, btnSoundStart, btnSoundLogin, btnSoundClick;
let soundCorrect, soundWrong, soundWhistle; 
let mapImg, logoImg, rulesImg;
let bgPlus, bgMinus, bgMultiply, bgDivide; 

let completedTowns = { plus: false, minus: false, multiply: false, divide: false };
let highScores = { plus: 0, minus: 0, multiply: 0, divide: 0 }; 
let showRulesOverlay = false;

let mapMode = 'main'; 
let isPaused = false; 

let mapFadeAlpha = 0; 
let currentPlayerName = '';
let currentSchoolName = ''; 

let playerLives = 5;

// ==========================================
// 🌟 ระบบจัดการ YouTube IFrame API สำหรับ Popup
// ==========================================
let ytContainer = null;
let ytPlayer = null;
let isYtApiReady = false;

let tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
if (firstScriptTag) {
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
} else {
  document.head.appendChild(tag);
}
window.onYouTubeIframeAPIReady = function() {
  isYtApiReady = true;
};

function openYouTubePopup(videoId, callback) {
  if (!ytContainer) {
    ytContainer = document.createElement('div');
    ytContainer.id = 'yt-popup-container';
    Object.assign(ytContainer.style, {
      position: 'fixed', top: '0', left: '0', width: '100%', height: '100%',
      backgroundColor: 'rgba(0,0,0,0.95)', display: 'none', zIndex: '99999',
      justifyContent: 'center', alignItems: 'center', flexDirection: 'column'
    });
    
    let playerDiv = document.createElement('div');
    playerDiv.id = 'yt-player-div';
    Object.assign(playerDiv.style, {
      width: '80%', maxWidth: '800px', aspectRatio: '16/9',
      border: '4px solid #FFD700', borderRadius: '20px', overflow: 'hidden',
      backgroundColor: '#000'
    });
    
    let closeBtn = document.createElement('button');
    closeBtn.innerHTML = 'ปิดวิดีโอ (ข้าม)';
    Object.assign(closeBtn.style, {
      marginTop: '20px', padding: '10px 40px', fontSize: '20px', fontFamily: "'Kanit', sans-serif",
      background: '#FFD700', border: 'none', borderRadius: '25px', cursor: 'pointer', fontWeight: 'bold'
    });
    closeBtn.onclick = closeYouTubePopup;

    ytContainer.appendChild(playerDiv);
    ytContainer.appendChild(closeBtn);
    document.body.appendChild(ytContainer);
  }

  ytContainer.style.display = 'flex';
  ytContainer.dataset.callbackActive = "1"; 
  ytContainer.callbackFn = callback;

  if (bgm && bgm.isPlaying()) bgm.pause();

  if (ytPlayer) {
    ytPlayer.loadVideoById(videoId);
    if (window.isSoundMuted) ytPlayer.mute(); else ytPlayer.unMute();
  } else {
    if (isYtApiReady) {
      ytPlayer = new YT.Player('yt-player-div', {
        videoId: videoId,
        playerVars: { 'autoplay': 1, 'rel': 0 },
        events: {
          'onReady': function(event) {
            if (window.isSoundMuted) event.target.mute();
          },
          'onStateChange': function(event) {
            // เมื่อวิดีโอเล่นจบ (State = 0) ให้ปิด Popup อัตโนมัติและเรียกใช้งาน Callback
            if (event.data === YT.PlayerState.ENDED) {
              closeYouTubePopup();
            }
          }
        }
      });
    } else {
      // กรณีเน็ตช้า โหลด API ไม่ทัน ใช้ iframe ธรรมดา
      let fallbackIframe = document.createElement('iframe');
      fallbackIframe.width = "100%"; fallbackIframe.height = "100%";
      fallbackIframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
      fallbackIframe.frameBorder = "0"; fallbackIframe.allow = "autoplay; encrypted-media";
      fallbackIframe.allowFullscreen = true;
      document.getElementById('yt-player-div').innerHTML = '';
      document.getElementById('yt-player-div').appendChild(fallbackIframe);
    }
  }
}

function closeYouTubePopup() {
  if (!ytContainer) return;
  ytContainer.style.display = 'none';
  
  if (ytPlayer && typeof ytPlayer.stopVideo === 'function') {
    ytPlayer.stopVideo();
  } else {
    let pdiv = document.getElementById('yt-player-div');
    if (pdiv && !ytPlayer) pdiv.innerHTML = ''; 
  }
  
  if (bgm && !bgm.isPlaying() && !window.isSoundMuted) {
    bgm.loop();
  }
  
  if (ytContainer.dataset.callbackActive === "1" && typeof ytContainer.callbackFn === 'function') {
    ytContainer.dataset.callbackActive = "0";
    ytContainer.callbackFn();
  }
}
// ==========================================

// ระบบกระดานผู้นำ
const LEADERBOARD_API_URL = "https://script.google.com/macros/s/AKfycbztIZLt5QJ1sqRO32BXUFx2a95HJS-ojrwECASuzZ3QVr0CAHE1jVUaDwUb8TIsrfhR/exec";
let leaderboardData = [];
let isFetchingLeaderboard = false;
let scoreSaved = false; 

function playInstantSound(snd) {
  if (!window.isSoundMuted && snd && snd.isLoaded()) {
    if (getAudioContext().state !== 'running') {
      getAudioContext().resume();
    }
    snd.stop(); 
    snd.play();
  }
}

function startBonusMusic() {
  if (!window.isSoundMuted) {
    if (gameBgm && gameBgm.isPlaying()) {
      gameBgm.setVolume(0, 1.0); 
      setTimeout(() => { if (bonusMode === "bonus_time") gameBgm.pause(); }, 1000);
    }
    if (bonusBgm && bonusBgm.isLoaded()) {
      bonusBgm.setVolume(0);
      bonusBgm.loop();
      bonusBgm.setVolume(1.0, 1.0); 
    }
  }
}

function stopBonusMusic() {
  if (!window.isSoundMuted) {
    if (bonusBgm && bonusBgm.isPlaying()) {
      bonusBgm.setVolume(0, 1.5);
      setTimeout(() => { if (bonusMode !== "bonus_time") bonusBgm.pause(); }, 1500);
    }
    if (gameBgm && gameBgm.isLoaded()) {
      gameBgm.setVolume(0);
      gameBgm.play();
      gameBgm.setVolume(0.3, 1.0);
    }
  }
}

function saveScoreToSheet(playerName, schoolName, finalScore) {
  let data = { name: playerName, school: schoolName, score: finalScore };
  fetch(LEADERBOARD_API_URL, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" }, 
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(result => console.log("บันทึกคะแนนสำเร็จ:", result))
  .catch(error => console.error("บันทึกคะแนนล้มเหลว:", error));
}

function fetchLeaderboard() {
  fetch(LEADERBOARD_API_URL)
    .then(response => response.json())
    .then(data => {
      leaderboardData = data;
      isFetchingLeaderboard = false;
    })
    .catch(error => {
      console.error("โหลดข้อมูลผู้นำล้มเหลว:", error);
      isFetchingLeaderboard = false;
    });
}

function mousePressed() {
  if (currentStage === 1 && !window.isSoundMuted) {
    let vid1 = document.getElementById('vid1');
    if (vid1 && vid1.muted) {
      vid1.muted = false;
      userStartAudio();
    }
  }
}

function keyPressed() {
  if (keyCode === 32 && currentStage === 1) { 
    goToLogin();
  }
}

function restartMapMusic() {
  if (!window.isSoundMuted && bgm && bgm.isLoaded()) {
    bgm.stop(); 
    bgm.setVolume(0.3);
    bgm.loop();
  }
}

window.goToLogin = function(event) {
  if (event) event.stopPropagation();
  if (currentStage !== 1) return;
  currentStage = 2;
  
  window.isSoundMuted = false;
  document.getElementById('sound-btn').innerHTML = "🔊";
  
  userStartAudio();
  if (getAudioContext().state !== 'running') {
    getAudioContext().resume();
  }

  if (bgm && bgm.isLoaded() && !bgm.isPlaying()) {
    bgm.setVolume(0.3);
    bgm.loop(); 
  }

  document.getElementById('screen-1').classList.remove('active');
  document.getElementById('screen-2').classList.add('active');
  document.getElementById('vid1').pause();
  let v2 = document.getElementById('vid2');
  v2.currentTime = 0;
  v2.play(); 

  setTimeout(() => {
    document.getElementById('login-box').classList.add('show');
  }, 3000);
}

window.submitLogin = function() {
  let name = document.getElementById('playerName').value;
  let school = document.getElementById('schoolName').value; 
  
  if(!name) { alert("กรุณากรอกชื่อผู้กล้าก่อนนะครับ!"); return; }
  if(!school) { alert("กรุณากรอกชื่อโรงเรียนด้วยนะครับ!"); return; }
  
  currentPlayerName = name;
  currentSchoolName = school; 
  currentStage = 3; 
  playerLives = 5; 

  document.getElementById('screen-2').classList.remove('active');
  document.getElementById('screen-3').classList.add('active');
  
  if (bgm && bgm.isPlaying()) bgm.pause();

  document.getElementById('vid2').pause();
  let v3 = document.getElementById('vid3');
  v3.currentTime = 0;
  v3.muted = window.isSoundMuted; 
  v3.play();

  v3.onended = () => {
    document.getElementById('screen-3').classList.remove('active');
    document.getElementById('game-canvas').style.display = 'block'; 
    currentStage = 4; 
    mapMode = 'main'; 
    createMenuButtons();
    restartMapMusic(); 
    isAiReady = true; 
    
    mapFadeAlpha = 255; 
  }
}

window.toggleSound = function(event) {
  if (event) event.stopPropagation();
  window.isSoundMuted = !window.isSoundMuted;
  document.getElementById('sound-btn').innerHTML = window.isSoundMuted ? "🔇" : "🔊";
  userStartAudio();

  let vid1 = document.getElementById('vid1');
  if (vid1) vid1.muted = window.isSoundMuted;

  if (window.isSoundMuted) {
    if (bgm && bgm.isPlaying()) bgm.pause();
    if (gameBgm && gameBgm.isPlaying()) gameBgm.pause();
    if (bonusBgm && bonusBgm.isPlaying()) bonusBgm.pause();
    if (ytPlayer && typeof ytPlayer.mute === 'function') ytPlayer.mute(); 
  } else {
    if (ytPlayer && typeof ytPlayer.unMute === 'function') ytPlayer.unMute(); 
  }
}

window.toggleCamera = function(event) {
  if (event) event.stopPropagation();
  window.isCameraOn = !window.isCameraOn;
  
  let camBtn = document.getElementById('camera-btn');
  if (camBtn) {
    camBtn.style.background = window.isCameraOn ? 'rgba(0, 255, 100, 0.6)' : 'rgba(0, 0, 0, 0.6)';
  }
  
  if (window.isCameraOn) {
    isAiReady = false; 
    initCamera();
  } else {
    if (video) {
      let stream = video.elt.srcObject;
      if (stream) {
        let tracks = stream.getTracks();
        tracks.forEach(track => track.stop()); 
      }
      video.remove();
      video = null;
    }
  }
}

window.toggleFullscreen = function(event) {
  if (event) event.stopPropagation();
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(err => console.log(err));
  } else {
    if (document.exitFullscreen) document.exitFullscreen();
  }
}

// ==========================================
// ส่วนของระบบเกม p5.js และ AI 
// ==========================================
let video, bodyPose, poses = [], score = 0, timeLeft = 60; 
let gameState = 'wait'; 
let vW, vH, vX, vY;
let calibrationProgress = 0;
let scoreSize = 40, countdownTimer = 3;
let resultMessage = "", resultColor;

let mainButtons = [];
let levelButtons = [];
let selectedCity = null;
let mathProblem = { equation: "", answer: 0 };
let bubbles = [];

let hasSeenSummaryThisSession = false;
function updateAllTownsCompleted() {
  allTownsCompleted = completedTowns.plus && completedTowns.minus && completedTowns.multiply && completedTowns.divide;
  return allTownsCompleted;
}

let bonusMode = "none"; 
let bonusTargets = []; 
let trapTargets = []; 
let bonusTimer = 0;
let lastBonusX = -1, lastBonusY = -1;
let prevMouseIsPressed = false; 
let lastSecondMillis = 0; 

function updateProgress() {
  if (typeof window.loadedAssets === 'undefined') {
    window.loadedAssets = 0;
    window.totalAssets = 16; 
  }
  window.loadedAssets++;
  let percent = Math.floor((window.loadedAssets / window.totalAssets) * 100);
  if (percent > 100) percent = 100;
  
  let progressBar = document.querySelector('.progress-bar');
  let percentText = document.getElementById('loading-percent');
  
  if (progressBar) progressBar.style.width = percent + '%';
  if (percentText) percentText.innerText = percent + '%';
}

function preload() {
  bodyPose = ml5.bodyPose();
  bgm = loadSound('backgroundsound.mp3', updateProgress); 
  gameBgm = loadSound('gamesound.mp3', updateProgress);
  bonusBgm = loadSound('soundbonus.mp3', updateProgress); 
  
  btnSoundStart = loadSound('s02.mp3', updateProgress); 
  btnSoundLogin = loadSound('s3.mp3', updateProgress); 
  btnSoundClick = loadSound('click.mp3', updateProgress);
  soundCorrect = loadSound('c.mp3', updateProgress);
  soundWrong = loadSound('w.mp3', updateProgress);
  soundWhistle = loadSound('whistle.mp3', updateProgress); 
  
  mapImg = loadImage('map.jpeg', updateProgress);
  logoImg = loadImage('logo.png', updateProgress);
  rulesImg = loadImage('rules.png', updateProgress);
  
  bgPlus = loadImage('1.jpeg', updateProgress);
  bgMinus = loadImage('2.jpeg', updateProgress);
  bgMultiply = loadImage('3.jpeg', updateProgress);
  bgDivide = loadImage('4.jpeg', updateProgress);
}

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.id('game-canvas'); 
  
  let toolsDiv = document.getElementById('global-tools');
  if (toolsDiv && !document.getElementById('camera-btn')) {
    let camBtn = document.createElement('button');
    camBtn.id = 'camera-btn';
    camBtn.className = 'tool-btn';
    camBtn.innerHTML = '📷';
    camBtn.title = 'เปิด/ปิดสแกนกล้อง';
    camBtn.onclick = window.toggleCamera;
    toolsDiv.appendChild(camBtn);
  }
}

function initCamera() {
  video = createCapture(VIDEO);
  video.hide();
  video.elt.onloadedmetadata = () => {
    calculateVideoCover();
    bodyPose.detectStart(video, gotPoses);
    isAiReady = true;
  };
}

function createMenuButtons() {
  let btnW = width * 0.32; 
  if (btnW > 400) btnW = 400; 
  let btnH = height * 0.07; 
  let startX = width / 2 - btnW / 2; 
  let mainStartY = height * 0.50; 
  let gapY = height * 0.09; 

  mainButtons = [
    { id: "story", name: "เนื้อเรื่อง", x: startX, y: mainStartY, w: btnW, h: btnH },
    { id: "play", name: "เล่นเกม", x: startX, y: mainStartY + gapY*1, w: btnW, h: btnH },
    { id: "conclusion", name: "บทสรุป", x: startX, y: mainStartY + gapY*2, w: btnW, h: btnH },
    { id: "rules", name: "กติกา", x: startX, y: mainStartY + gapY*3, w: btnW, h: btnH },
    { id: "leaderboard", name: "กระดานผู้นำ", x: startX, y: mainStartY + gapY*4, w: btnW, h: btnH } 
  ];

  let levelStartY = height * 0.40;

  levelButtons = [
    { id: "plus", name: "เมืองบวก", op: "+", x: startX, y: levelStartY, w: btnW, h: btnH },
    { id: "minus", name: "ลบบุรี", op: "-", x: startX, y: levelStartY + gapY*1, w: btnW, h: btnH },
    { id: "multiply", name: "นคราคูณ", op: "x", x: startX, y: levelStartY + gapY*2, w: btnW, h: btnH },
    { id: "divide", name: "นครหาร", op: "÷", x: startX, y: levelStartY + gapY*3, w: btnW, h: btnH },
    { id: "back", name: "ย้อนกลับ", x: startX, y: levelStartY + gapY*4, w: btnW, h: btnH }
  ];
}

class Bubble {
  constructor(x, y, value, isCorrect) {
    this.baseX = x;
    this.baseY = y;
    this.x = x;
    this.y = y;
    this.radius = width * 0.065;
    this.value = value;
    this.isCorrect = isCorrect;
    
    this.noiseOffsetX = random(10000); 
    this.noiseOffsetY = random(10000); 
    this.speedX = random(0.003, 0.006);
    this.speedY = random(0.004, 0.007);
    this.rangeX = random(10, 25); 
    this.rangeY = random(50, 100); 
  }

  update() {
    this.noiseOffsetX += this.speedX; 
    this.noiseOffsetY += this.speedY; 
    
    this.x = this.baseX + map(noise(this.noiseOffsetX), 0, 1, -this.rangeX, this.rangeX);
    this.y = this.baseY + map(noise(this.noiseOffsetY), 0, 1, -this.rangeY, this.rangeY);
    
    this.x = constrain(this.x, this.radius, width - this.radius);
    this.y = constrain(this.y, height * 0.16 + this.radius, height - this.radius);
  }

  display() {
    drawingContext.shadowBlur = 0; 
    drawingContext.shadowOffsetX = 0;
    drawingContext.shadowOffsetY = 0;

    fill(0, 200, 255, 220); 
    stroke(255);
    strokeWeight(5);
    circle(this.x, this.y, this.radius * 2); 
    
    noStroke(); fill(255); 
    textAlign(CENTER, CENTER); 
    textSize(this.radius * 0.8);
    text(this.value, this.x, this.y - 4); 
  }
}

class TouchTarget {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = width * 0.06;
    this.life = 1.0; 
  }

  update() {
    this.life -= 0.005; 
  }

  display() {
    drawingContext.shadowBlur = 0; 

    fill(255, 50, 100, 220); stroke(255, 215, 0); strokeWeight(6);
    circle(this.x, this.y, this.radius * 2);
    
    noStroke(); fill(255); 
    textAlign(CENTER, CENTER); 
    textSize(this.radius * 0.4);
    text("TOUCH", this.x, this.y - 2);

    let endAngle = map(this.life, 0, 1, -HALF_PI, TWO_PI - HALF_PI);
    noFill(); stroke(255, 255, 0); strokeWeight(10);
    if (this.life > 0) arc(this.x, this.y, this.radius * 2 + 20, this.radius * 2 + 20, -HALF_PI, endAngle);
  }
}

class TrapTarget {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = width * 0.06;
    this.life = 1.0; 
  }

  update() {
    this.life -= 0.005; 
  }

  display() {
    drawingContext.shadowBlur = 0; 

    fill(50, 50, 50, 220); stroke(255, 50, 50); strokeWeight(6);
    circle(this.x, this.y, this.radius * 2);
    
    noStroke(); fill(255, 50, 50); 
    textAlign(CENTER, CENTER); 
    textSize(this.radius * 0.8);
    text("❌", this.x, this.y + 2);

    let endAngle = map(this.life, 0, 1, -HALF_PI, TWO_PI - HALF_PI);
    noFill(); stroke(255, 50, 50); strokeWeight(10);
    if (this.life > 0) arc(this.x, this.y, this.radius * 2 + 20, this.radius * 2 + 20, -HALF_PI, endAngle);
  }
}

function generateMathProblem(operator) {
  let num1, num2, ans;
  let diffLevel = floor(score / 3); 
  
  switch (operator) {
    case "+":
      if (score >= 3 && random() > 0.6) {
        let u1 = floor(random(5, 10)); 
        let u2 = floor(random(10 - u1, 10)); 
        num1 = floor(random(1, 5)) * 10 + u1;
        num2 = floor(random(1, 5)) * 10 + u2;
      } else {
        let u1 = floor(random(1, 5));
        let u2 = floor(random(1, 5));
        num1 = floor(random(1, 5)) * 10 + u1;
        num2 = floor(random(1, 5)) * 10 + u2;
      }
      ans = num1 + num2; 
      break;
    case "-":
      let t1 = floor(random(2, 6)); 
      let t2 = floor(random(1, t1)); 
      let u1 = floor(random(2, 10)); 
      let u2 = floor(random(1, u1 + 1)); 
      num1 = t1 * 10 + u1;
      num2 = t2 * 10 + u2;
      ans = num1 - num2; 
      break;
    case "x":
      let maxM = min(9 + diffLevel, 15);
      num1 = floor(random(2, maxM + 1)); 
      num2 = floor(random(2, maxM + 1));
      ans = num1 * num2; 
      break;
    case "÷":
      let maxD = min(9 + diffLevel, 15);
      ans = floor(random(2, maxD + 1)); 
      num2 = floor(random(2, maxD + 1)); 
      num1 = ans * num2; 
      break;
  }
  mathProblem = { equation: `${num1} ${operator} ${num2} = ?`, answer: ans };
}

function spawnBubbles() {
  if (bonusMode === "bonus_time") return;

  generateMathProblem(selectedCity.op);
  bubbles = [];
  
  let answers = [mathProblem.answer];
  
  let wrong = mathProblem.answer + floor(random(-6, 7));
  while (wrong === mathProblem.answer || wrong < 0) {
    wrong = mathProblem.answer + floor(random(-6, 7));
  }
  answers.push(wrong);

  answers.sort(() => Math.random() - 0.5); 

  let leftIndex = Math.random() > 0.5 ? 0 : 1;
  let rightIndex = 1 - leftIndex;

  let leftX = random(width * 0.08, width * 0.22);
  let rightX = random(width * 0.78, width * 0.92);

  let y1 = random(height * 0.30, height * 0.80);
  let y2 = random(height * 0.30, height * 0.80);

  bubbles.push(new Bubble(leftX, y1, answers[leftIndex], answers[leftIndex] === mathProblem.answer));
  bubbles.push(new Bubble(rightX, y2, answers[rightIndex], answers[rightIndex] === mathProblem.answer));
}

function spawnNextBonusTarget() {
  let newX, newY;
  let safeDist = width * 0.3; 
  let attempts = 0;
  
  do {
    if (random() > 0.5) {
      newX = random(width * 0.08, width * 0.22); 
    } else {
      newX = random(width * 0.78, width * 0.92); 
    }
    
    newY = random(height * 0.40, height * 0.70);
    attempts++;
  } while (lastBonusX !== -1 && dist(newX, newY, lastBonusX, lastBonusY) < safeDist && attempts < 50);

  lastBonusX = newX;
  lastBonusY = newY;
  bonusTargets = [new TouchTarget(newX, newY)]; 

  let trapX, trapY;
  attempts = 0;
  do {
    if (newX < width / 2) trapX = random(width * 0.78, width * 0.92); 
    else trapX = random(width * 0.08, width * 0.22);
    trapY = random(height * 0.40, height * 0.70);
    attempts++;
  } while (dist(trapX, trapY, newX, newY) < safeDist && attempts < 50);

  trapTargets = [new TrapTarget(trapX, trapY)];
}

function drawPiPCamera() {
  if (window.isCameraOn && video && video.width > 0) {
    let pipW = width * 0.15;
    if (pipW < 180) pipW = 180;
    let pipH = pipW * (video.height / video.width);
    let pipX = width - pipW - 20;
    let pipY = 20;

    push();
    translate(pipX + pipW, pipY);
    scale(-1, 1); 
    
    drawingContext.save();
    drawingContext.beginPath();
    drawingContext.roundRect(0, 0, pipW, pipH, 15);
    drawingContext.clip();
    image(video, 0, 0, pipW, pipH);
    drawingContext.restore();

    noFill(); stroke(255, 215, 0); strokeWeight(3);
    drawingContext.beginPath();
    drawingContext.roundRect(0, 0, pipW, pipH, 15);
    drawingContext.stroke();
    pop();
  }
}

function drawLives() {
  push();
  rectMode(CORNER); 
  let boxW = 180; 
  let boxH = 45;
  let boxX = width - boxW - 20;
  let boxY = 20; 

  if (currentStage === 7) {
    boxY = (height * 0.16) + 15; 
  } else if (window.isCameraOn && video && video.width > 0 && currentStage !== 6) {
    let pipW = width * 0.15;
    if (pipW < 180) pipW = 180;
    let pipH = pipW * (video.height / video.width);
    boxY = 20 + pipH + 15;
  }

  fill(255, 255, 255, 127); 
  stroke(255, 215, 0);
  strokeWeight(3);
  rect(boxX, boxY, boxW, boxH, 25);

  noStroke();
  textAlign(CENTER, CENTER);
  textSize(24);
  
  let centerX = boxX + boxW / 2;
  let centerY = boxY + boxH / 2;
  let heartsStr = "";
  for (let i = 0; i < 5; i++) {
    if (i < playerLives) {
      heartsStr += "❤️ ";
    } else {
      heartsStr += "🖤 ";
    }
  }
  
  text(heartsStr.trim(), centerX, centerY + 2);

  pop();
}

function draw() {
  if (millis() - lastSecondMillis >= 1000) {
    lastSecondMillis = millis();
    timeIt();
  }

  textFont('Kanit', 'sans-serif'); 
  
  drawingContext.shadowBlur = 0; 
  drawingContext.shadowOffsetX = 0;
  drawingContext.shadowOffsetY = 0;

  if (!window.isSoundMuted) {
    if (currentStage === 4 || currentStage === 8 || currentStage === 9) {
      if (gameBgm && gameBgm.isPlaying()) gameBgm.stop();
      if (bonusBgm && bonusBgm.isPlaying()) bonusBgm.stop(); 
      if (bgm && bgm.isLoaded() && !bgm.isPlaying()) { 
        bgm.stop(); 
        bgm.setVolume(0.3); 
        bgm.loop(); 
      }
    } 
    else if (currentStage === 6 || currentStage === 7) {
      if (bgm && bgm.isPlaying()) bgm.stop();
      if (bonusMode === "none" && gameBgm && gameBgm.isLoaded() && !gameBgm.isPlaying()) { 
        gameBgm.stop(); 
        gameBgm.setVolume(0.3); 
        gameBgm.loop(); 
      }
    }
  }

  if (video && video.width > 0 && !vW) {
    calculateVideoCover();
  }

  if (currentStage < 4) return;
  background(0);

  let activeHitboxes = getAiHitboxes(); 

  if (currentStage === 4) {
    if (mapImg) {
      image(mapImg, 0, 0, width, height);
    }
    drawMapSelection(activeHitboxes);
    drawPiPCamera(); 
  } 
  else if (currentStage === 6) {
    if (window.isCameraOn && video && video.width > 0) {
      push(); translate(width, 0); scale(-1, 1);
      image(video, vX, vY, vW, vH);
      pop();
    }
    drawCalibration();
  }
  else if (currentStage === 7) {
    if (window.isCameraOn && video && video.width > 0) {
      push(); translate(width, 0); scale(-1, 1);
      image(video, vX, vY, vW, vH);
      pop();
      fill(0, 160); noStroke(); rect(0, 0, width, height * 0.16); 
    } else {
      let currentBg;
      if (selectedCity.id === 'plus') currentBg = bgPlus;
      else if (selectedCity.id === 'minus') currentBg = bgMinus;
      else if (selectedCity.id === 'multiply') currentBg = bgMultiply;
      else if (selectedCity.id === 'divide') currentBg = bgDivide;
      
      if (currentBg) {
        image(currentBg, 0, 0, width, height);
        fill(0, 80); rect(0, 0, width, height); 
      }
      fill(0, 160); noStroke(); rect(0, 0, width, height * 0.16); 
    }
    drawGameplay(activeHitboxes);
  }
  else if (currentStage === 8) {
    drawPiPCamera(); 
    drawGameOver(activeHitboxes);
  }
  else if (currentStage === 9) {
    if (mapImg) {
      image(mapImg, 0, 0, width, height); 
    }
    drawLeaderboard(activeHitboxes);
    drawPiPCamera(); 
  }
  else if (currentStage === 10) {
    if (mapImg) {
      image(mapImg, 0, 0, width, height); 
    }
    drawSkillSummary(activeHitboxes);
    drawPiPCamera(); 
  }

  if (mouseIsPressed && !prevMouseIsPressed) {
    fill(255, 255, 255, 150); noStroke();
    circle(mouseX, mouseY, 50);
  }
  prevMouseIsPressed = mouseIsPressed;

  if (currentStage === 4 && mapFadeAlpha > 0) {
    push();
    rectMode(CORNER);
    noStroke();
    fill(0, mapFadeAlpha);
    rect(0, 0, width, height);
    pop();

    mapFadeAlpha -= 1.41; 
  }

  if (currentStage >= 4 && currentStage !== 8) {
    drawLives();
  }
}

function drawMapSelection(activeHitboxes) {
  if (showRulesOverlay) {
    fill(0, 180); rect(0, 0, width, height);
    if (rulesImg) {
      imageMode(CENTER);
      image(rulesImg, width/2, height/2, width*0.7, height*0.7);
      imageMode(CORNER);
    }
    
    let crossHover = false;
    let crossClicked = false;
    if (dist(mouseX, mouseY, width * 0.83, height * 0.18) < 35) crossHover = true;
    for (let h of activeHitboxes) {
      if (dist(h.x, h.y, width * 0.83, height * 0.18) < 35) { crossHover = true; crossClicked = true; break; }
    }
    
    fill(crossHover ? color(255, 100, 100) : color(255, 0, 0)); 
    circle(width * 0.83, height * 0.18, 50);
    fill(255); 
    textAlign(CENTER, CENTER); textSize(24); 
    text("X", width * 0.83, height * 0.18 - 2);
    
    if (crossClicked) {
      showRulesOverlay = false;
      playInstantSound(btnSoundClick); 
    }
    return;
  }

  if (logoImg) {
    let targetW = width * 0.45; 
    if (targetW > 700) targetW = 700; 
    let targetH = (logoImg.height / logoImg.width) * targetW; 

    drawingContext.shadowOffsetX = 0;
    drawingContext.shadowOffsetY = 15;
    drawingContext.shadowBlur = 30;
    drawingContext.shadowColor = 'rgba(0, 0, 0, 0.9)'; 

    let logoBaseY = height * 0.24; 
    let logoY = logoBaseY + sin(frameCount * 0.015) * 8; 

    imageMode(CENTER);
    image(logoImg, width / 2, logoY, targetW, targetH);
    imageMode(CORNER);

    drawingContext.shadowBlur = 0;
    drawingContext.shadowOffsetX = 0;
    drawingContext.shadowOffsetY = 0;
  }

  if (mapMode === 'main') {
    let welcomeText = "✨ ยินดีต้อนรับ ผู้กล้า: " + currentPlayerName + " แห่ง " + currentSchoolName + " ✨";
    textSize(width * 0.022);
    
    let tw = textWidth(welcomeText);
    let boxW = tw + 60; 
    let boxH = height * 0.06;
    let boxX = width / 2 - boxW / 2; 
    let boxY = height * 0.45 - boxH / 2; 
    
    rectMode(CORNER);

    fill(255); 
    noStroke();
    rect(boxX, boxY, boxW, boxH, boxH / 2); 

    fill(0); 
    textAlign(LEFT, CENTER);
    text(welcomeText, width / 2 - tw / 2, height * 0.45 - 3); 
  }

  updateAllTownsCompleted();
  let clickedButtonId = null;
  let currentButtons = (mapMode === 'main') ? mainButtons : levelButtons;

  textStyle(BOLD); 

  for (let b of currentButtons) {
    let isHover = false;
    let isClicked = false;
    
    if (mouseX > b.x && mouseX < b.x + b.w && mouseY > b.y && mouseY < b.y + b.h) isHover = true;
    
    for (let h of activeHitboxes) {
      if (h.x > b.x && h.x < b.x + b.w && h.y > b.y && h.y < b.y + b.h) {
        isHover = true; isClicked = true; break;
      }
    }

    rectMode(CORNER); 

    if (b.id === "conclusion" && !allTownsCompleted) {
      fill(20, 200); stroke(100);   
    } 
    else if (completedTowns[b.id]) {
      drawingContext.shadowBlur = 25;
      drawingContext.shadowColor = 'rgba(255, 215, 0, 0.8)';
      fill(isHover ? color(80, 60, 0, 250) : color(40, 30, 0, 240)); 
      stroke(255, 215, 0); 
    } 
    else {
      fill(isHover ? color(40, 40, 40, 240) : color(0, 0, 0, 220)); 
      stroke(255, 215, 0); 
    }
    
    strokeWeight(4);
    rect(b.x, b.y, b.w, b.h, 25); 
    drawingContext.shadowBlur = 0; 
    
    noStroke(); 
    if (b.id === "conclusion" && !allTownsCompleted) {
      fill(150); 
    } else if (completedTowns[b.id]) {
      fill(255, 255, 255); 
    } else {
      fill(255, 215, 0); 
    }
    
    textSize(width * 0.025);
    textAlign(LEFT, CENTER); 
    
    let textCenterX = b.x + b.w / 2;
    let textCenterY = b.y + b.h / 2 - 4; 

    let btnText = b.name;
    if (b.id === "conclusion" && !allTownsCompleted) {
      btnText = "🔒 " + b.name;
    } else if (completedTowns[b.id]) {
      btnText = "🥇 " + b.name;
    }

    let tw = textWidth(btnText);
    let startX = textCenterX - tw / 2;

    if (b.id === "conclusion" && !allTownsCompleted) {
      text(btnText, startX, textCenterY);
    } else if (completedTowns[b.id]) {
      text(btnText, startX, textCenterY);

      fill(255, 215, 0); textSize(width * 0.020);
      let subText = "✨ พิชิตแล้ว ✨";
      let sw = textWidth(subText);
      text(subText, textCenterX - sw / 2, b.y + b.h + 20); 
      fill(255); textSize(width * 0.025);
    } else {
      text(btnText, startX, textCenterY);
    }
    
    if (isClicked && mapFadeAlpha <= 0) { 
      clickedButtonId = b.id;
    }
  }
  
  textStyle(NORMAL); 

  if (clickedButtonId) {
    if (["story", "play", "leaderboard", "conclusion", "rules", "back"].includes(clickedButtonId)) {
      playInstantSound(btnSoundClick); 
    }
    
    if (clickedButtonId === "play") {
      mapMode = 'levels'; 
    }
    else if (clickedButtonId === "back") {
      mapMode = 'main'; 
    }
    else if (clickedButtonId === "story") {
      // 🌟 เล่น YouTube Popup แทนวิดีโอแบบเก่า
      openYouTubePopup('cWFy1wjxVUw', () => {
        playerLives = 5;
        currentStage = 4;
        mapMode = 'main';
      });
    } 
    else if (clickedButtonId === "rules") {
      showRulesOverlay = true;
    } 
    else if (clickedButtonId === "leaderboard") {
      currentStage = 9;
      isFetchingLeaderboard = true;
      fetchLeaderboard();
    }
    else if (clickedButtonId === "conclusion") {
      if (allTownsCompleted) {
        // 🌟 เล่น YouTube Popup สำหรับตอนจบ
        openYouTubePopup('ubIp5k45z0w', () => {
          currentStage = 10;
          mapMode = 'main';
        });
      } else {
        alert("ปุ่มบทสรุปล็อกอยู่! ท่านต้องเอาชนะทั้ง 4 เมืองก่อนจึงจะสามารถเปิดได้");
      }
    } 
    else {
      if (playerLives <= 0) {
        alert("กลับไปดูเนื้อเรื่อง เพื่อเพิ่มชีวิต");
      } else {
        selectedCity = levelButtons.find(b => b.id === clickedButtonId);
        timeLeft = 60; 
        score = 0;
        bonusMode = "none";
        isPaused = false;
        scoreSaved = false; 
        
        if (window.isCameraOn) {
          currentStage = 6;
          calibrationProgress = 0;
        } else {
          currentStage = 7;
          gameState = 'countdown'; countdownTimer = 3;
          resultMessage = "เตรียมตะลุยด่าน!"; resultColor = color(255, 215, 0);
        }
      }
    }
  }
}

function drawLeaderboard(activeHitboxes) {
  fill(0, 220); rect(0, 0, width, height);

  textSize(48); fill(255, 215, 0); textStyle(BOLD);
  textAlign(LEFT, CENTER);
  let titleTxt = "🏆 กระดานผู้นำ (Top 10) 🏆";
  let titleW = textWidth(titleTxt);
  text(titleTxt, width / 2 - titleW / 2, height * 0.15);
  textStyle(NORMAL);

  if (isFetchingLeaderboard) {
    textSize(32); fill(255);
    textAlign(LEFT, CENTER);
    let loadTxt = "กำลังโหลดข้อมูลผู้กล้าจากคัมภีร์เวท...";
    let loadW = textWidth(loadTxt);
    text(loadTxt, width / 2 - loadW / 2, height / 2);
  } else {
    textSize(24);
    textAlign(LEFT, CENTER);
    let startY = height * 0.25;
    let rowH = height * 0.05;
    
    fill(150, 255, 255); textStyle(BOLD);
    text("อันดับ", width * 0.2, startY);
    text("ผู้กล้า", width * 0.3, startY);
    text("โรงเรียน", width * 0.55, startY);
    text("คะแนน", width * 0.8, startY);
    textStyle(NORMAL);
    
    fill(255);
    if (leaderboardData.length === 0) {
        textAlign(LEFT, CENTER);
        let emptyTxt = "ยังไม่มีผู้กล้าในบันทึก";
        let emptyW = textWidth(emptyTxt);
        text(emptyTxt, width / 2 - emptyW / 2, height / 2);
    } else {
        for (let i = 0; i < leaderboardData.length; i++) {
          let d = leaderboardData[i];
          let y = startY + rowH * (i + 1);
          fill(i === 0 ? color(255, 215, 0) : i === 1 ? color(192, 192, 192) : i === 2 ? color(205, 127, 50) : color(255));
          
          text("#" + (i + 1), width * 0.2, y);
          text(d.name, width * 0.3, y);
          text(d.school, width * 0.55, y);
          text(d.score, width * 0.8, y);
        }
    }
  }

  let btnW = width * 0.25; if(btnW>350) btnW = 350;
  let btnH = height * 0.08;
  let btnX = width / 2 - btnW / 2;
  let btnY = height * 0.85;

  let isHover = (mouseX > btnX && mouseX < btnX + btnW && mouseY > btnY && mouseY < btnY + btnH);
  let isClicked = false;
  for (let h of activeHitboxes) {
    if (h.x > btnX && h.x < btnX + btnW && h.y > btnY && h.y < btnY + btnH) { isHover = true; isClicked = true; break; }
  }

  rectMode(CORNER);
  fill(isHover ? color(40,40,40,240) : color(0,0,0,220));
  stroke(255, 215, 0); strokeWeight(4); 
  rect(btnX, btnY, btnW, btnH, 25);
  
  fill(255, 215, 0); noStroke(); 
  let tStr = "ย้อนกลับ";
  let tw = textWidth(tStr);
  textAlign(LEFT, CENTER); textSize(24); textStyle(BOLD);
  text(tStr, btnX + btnW/2 - tw/2, btnY + btnH/2 - 4);
  textStyle(NORMAL);

  if (isClicked) {
    playInstantSound(btnSoundClick);
    currentStage = 4;
    mapMode = 'main';
  }
}

function drawCalibration() {
  if (!window.isCameraOn) {
    currentStage = 7;
    gameState = 'countdown'; countdownTimer = 3;
    resultMessage = "เตรียมตะลุยด่าน!"; resultColor = color(255, 215, 0);
    return;
  }

  fill(0, 190); rect(0, 0, width, height);
  let boxW = 550, boxH = 420;
  let boxX = width/2 - boxW/2; 
  let boxY = height/2 - boxH/2; 
  
  rectMode(CORNER);
  fill(15, 15, 25, 220); stroke(0, 255, 255); strokeWeight(5); 
  rect(boxX, boxY, boxW, boxH, 25);
  
  fill(255); noStroke(); 
  
  textSize(32); 
  textAlign(LEFT, CENTER);
  let t1 = "เตรียมความพร้อมระบบสแกน";
  let tw1 = textWidth(t1);
  text(t1, width/2 - tw1/2, boxY + 45);

  textSize(20); fill(180); 
  let t2 = "กรุณาถอยห่างให้กล้องมองเห็นตัวผู้เล่นเต็มตัว";
  let tw2 = textWidth(t2);
  text(t2, width/2 - tw2/2, boxY + 90);

  let head = false, hands = false, feet = false;
  if (poses.length > 0) {
    for (let kp of poses[0].keypoints) {
      if ((kp.confidence || kp.score) > 0.15) {
        if (["nose", "left_eye", "right_eye"].includes(kp.name)) head = true;
        if (["left_wrist", "right_wrist", "left_index", "right_index"].includes(kp.name)) hands = true;
        if (["left_ankle", "right_ankle", "left_foot_index"].includes(kp.name)) feet = true;
      }
    }
  }

  textAlign(LEFT, CENTER); textSize(24); 
  let textLeftX = boxX + 80;
  let startRowY = boxY + 170;
  
  fill(head ? color(0, 255, 100) : color(255, 50, 50)); text(head ? "✔ ศรีษะ: พร้อม" : "❌ มองไม่เห็นศรีษะ", textLeftX, startRowY);
  fill(hands ? color(0, 255, 100) : color(255, 50, 50)); text(hands ? "✔ มือทั้งสองข้าง: พร้อม" : "❌ มองไม่เห็นมือ", textLeftX, startRowY + 55);
  fill(feet ? color(0, 255, 100) : color(255, 50, 50)); text(feet ? "✔ เท้าและช่วงล่าง: พร้อม" : "❌ มองไม่เห็นเท้า", textLeftX, startRowY + 110);

  let barY = boxY + boxH - 60;
  noFill(); stroke(255); strokeWeight(2); 
  rect(boxX + 60, barY, boxW - 120, 25, 10);
  
  fill(0, 255, 255); noStroke(); 
  rect(boxX + 60, barY, map(calibrationProgress, 0, 100, 0, boxW - 120), 25, 10);

  if (head && hands && feet) calibrationProgress += 2; else calibrationProgress -= 1;
  calibrationProgress = constrain(calibrationProgress, 0, 100);

  if (calibrationProgress >= 100) {
    currentStage = 7;
    gameState = 'countdown'; countdownTimer = 3; 
    resultMessage = "เริ่มต้นตะลุยด่าน!"; resultColor = color(255, 215, 0);
  }
}

function drawGameplay(activeHitboxes) {
  if (gameState === 'countdown') {
    fill(0, 120); rect(0, 0, width, height);
    fill(resultColor); noStroke(); 
    
    textAlign(LEFT, CENTER);
    textSize(64); 
    let msgW = textWidth(resultMessage);
    text(resultMessage, width / 2 - msgW / 2, height / 2 - 60);

    fill(255); textSize(96); 
    let timerW = textWidth(countdownTimer.toString());
    text(countdownTimer, width / 2 - timerW / 2, height / 2 + 60);
    return;
  }

  if (!isPaused && bonusMode === "bonus_time") {
    let flashAlpha = map(sin(millis() * 0.01), -1, 1, 0, 40);
    fill(255, 255, 255, flashAlpha);
    rect(0, 0, width, height);
  }

  if (!isPaused) {
    if (bonusMode === "bonus_time") {
      fill(255, 50, 150); 
      textAlign(LEFT, CENTER); textSize(width * 0.045);
      let bt1 = "BONUS TIME ⏰✨";
      let btw1 = textWidth(bt1);
      text(bt1, width/2 - btw1/2, height*0.08);

      fill(255, 255, 0); textSize(width * 0.035);
      let bt2 = "เวลาโบนัส: " + bonusTimer + " วินาที";
      let btw2 = textWidth(bt2);
      text(bt2, width/2 - btw2/2, height*0.20); 
      
      for (let i = 0; i < bonusTargets.length; i++) {
        let t = bonusTargets[i];
        t.update();
        t.display();

        let touched = false;
        for (let h of activeHitboxes) {
          if (dist(h.x, h.y, t.x, t.y) < t.radius) { 
            touched = true; break; 
          }
        }

        if (touched) {
          playInstantSound(soundCorrect); 
          score += 2; 
          spawnNextBonusTarget(); 
        } else if (t.life <= 0) {
          spawnNextBonusTarget();
        }
      }

      for (let i = 0; i < trapTargets.length; i++) {
        let trap = trapTargets[i];
        trap.update();
        trap.display();

        let touchedTrap = false;
        for (let h of activeHitboxes) {
          if (dist(h.x, h.y, trap.x, trap.y) < trap.radius) { 
            touchedTrap = true; break; 
          }
        }

        if (touchedTrap) {
          playInstantSound(soundWrong); 
          score -= 2; 
          trapTargets.splice(i, 1);
          i--;
        } else if (trap.life <= 0) {
          trapTargets.splice(i, 1);
          i--;
        }
      }

    } else {
      fill(255, 215, 0); 
      textAlign(LEFT, CENTER); textSize(width * 0.06);
      let eqW = textWidth(mathProblem.equation);
      text(mathProblem.equation, width / 2 - eqW / 2, height * 0.08);

      let hitCorrect = false, hitWrong = false;

      for (let b of bubbles) {
        b.update();
        b.display();

        for (let h of activeHitboxes) {
          if (dist(h.x, h.y, b.x, b.y) < b.radius) {
            if (b.isCorrect) hitCorrect = true; 
            else hitWrong = true;
            break; 
          }
        }
        if (hitCorrect || hitWrong) break; 
      }

      if (hitCorrect) {
        playInstantSound(soundCorrect); 
        score += 2; 
        gameState = 'countdown'; countdownTimer = 3; 
        resultMessage = "ถูกต้อง! +2"; resultColor = color(0, 255, 100);
      } else if (hitWrong) {
        playInstantSound(soundWrong); 
        timeLeft -= 3;
        playerLives--; 
        
        if (playerLives <= 0) {
          playerLives = 0;
          currentStage = 8; 
        } else {
          gameState = 'countdown'; countdownTimer = 3; 
          resultMessage = "ผิด! เวลาลด -3 วินาที"; resultColor = color(255, 50, 50);
        }
      }
    }
  }

  fill(255); noStroke(); 
  textAlign(LEFT, CENTER); textSize(32);
  text("คะแนน: " + score, 40, height * 0.06);
  let minPart = floor(timeLeft / 60);
  let secPart = timeLeft % 60;
  text("เวลาเหลือ: " + minPart + " นาที " + secPart + " วินาที", 40, height * 0.12);

  let btnRadius = 35;
  let exitBtnX = width - 70;
  let exitBtnY = 70;
  let pauseBtnX = width - 160;
  let pauseBtnY = 70;

  let exitHover = dist(mouseX, mouseY, exitBtnX, exitBtnY) < btnRadius;
  let pauseHover = dist(mouseX, mouseY, pauseBtnX, pauseBtnY) < btnRadius;
  
  let exitClicked = false, pauseClicked = false;
  for (let h of activeHitboxes) { 
    if (dist(h.x, h.y, exitBtnX, exitBtnY) < btnRadius) { exitHover = true; exitClicked = true; }
    if (dist(h.x, h.y, pauseBtnX, pauseBtnY) < btnRadius) { pauseHover = true; pauseClicked = true; }
  }

  fill(pauseHover ? color(255, 200, 100, 200) : color(255, 160, 50, 180)); 
  circle(pauseBtnX, pauseBtnY, btnRadius*2);
  fill(255); 
  
  textSize(18); 
  textAlign(LEFT, CENTER);
  let pTxt = isPaused ? "เล่นต่อ" : "พักเกม";
  let pw = textWidth(pTxt);
  text(pTxt, pauseBtnX - pw/2, pauseBtnY - 2);

  fill(exitHover ? color(255, 120, 120, 200) : color(255, 80, 80, 180)); 
  circle(exitBtnX, exitBtnY, btnRadius*2);
  fill(255); 
  let eTxt = "ออก";
  let ew = textWidth(eTxt);
  text(eTxt, exitBtnX - ew/2, exitBtnY - 2);

  if (exitClicked) {
    playInstantSound(btnSoundClick); 
    currentStage = 4;
    mapMode = 'levels'; 
  }
  
  if (pauseClicked) {
    playInstantSound(btnSoundClick); 
    isPaused = !isPaused; 
  }

  if (isPaused) {
    fill(0, 150); rect(0, 0, width, height);
    fill(255); 
    textSize(60);
    let pt = "หยุดเกมชั่วคราว";
    let ptw = textWidth(pt);
    text(pt, width/2 - ptw/2, height/2 - 5);
  }
}

function drawGameOver(activeHitboxes) {
  let currentBg;
  if (selectedCity && selectedCity.id === 'plus') currentBg = bgPlus;
  else if (selectedCity && selectedCity.id === 'minus') currentBg = bgMinus;
  else if (selectedCity && selectedCity.id === 'multiply') currentBg = bgMultiply;
  else if (selectedCity && selectedCity.id === 'divide') currentBg = bgDivide;

  if (currentBg) {
    image(currentBg, 0, 0, width, height);
  }

  fill(0, 200); rect(0, 0, width, height);
  fill(255); 
  
  if (score > highScores[selectedCity.id]) {
    highScores[selectedCity.id] = score;
  }

  if (highScores[selectedCity.id] >= 30) {
    completedTowns[selectedCity.id] = true;
  }

  let totalBestScore = highScores.plus + highScores.minus + highScores.multiply + highScores.divide;

  if (!scoreSaved) {
    saveScoreToSheet(currentPlayerName, currentSchoolName, totalBestScore);
    scoreSaved = true; 
  }

  textAlign(CENTER, CENTER);
  textSize(56); 
  let goT1 = "ภารกิจสิ้นสุด!";
  text(goT1, width / 2, height / 2 - 140);

  textSize(36); fill(255, 215, 0);
  text(`ผู้เล่น: ${currentPlayerName} \nด่าน: ${selectedCity.name}`, width / 2, height / 2 - 40);
  
  textSize(28); fill(255);
  text(`คะแนนในรอบนี้: ${score} คะแนน \nคะแนนสูงสุดที่ทำได้ในด่านนี้: ${highScores[selectedCity.id]} คะแนน`, width / 2, height / 2 + 50);

  let statusText = completedTowns[selectedCity.id] ? "✨ ผ่านด่านเรียบร้อย ✨" : "❌ ยังไม่ผ่านด่าน (ต้องได้ 30 คะแนนขึ้นไป)";
  let scoreColor = completedTowns[selectedCity.id] ? color(0, 255, 100) : color(255, 100, 100);
  textSize(24); fill(scoreColor);
  text(statusText, width / 2, height / 2 + 120);

  let btnW = width * 0.25; if(btnW>350) btnW = 350;
  let btnH = height * 0.08;
  
  let btnX = width / 2 - btnW / 2;
  let btnY = height / 2 + 180; 

  let isHover = (mouseX > btnX && mouseX < btnX + btnW && mouseY > btnY && mouseY < btnY + btnH);
  let isClicked = false;
  for (let h of activeHitboxes) {
    if (h.x > btnX && h.x < btnX + btnW && h.y > btnY && h.y < btnY + btnH) { isHover = true; isClicked = true; }
  }

  rectMode(CORNER);
  drawingContext.shadowBlur = 20;
  drawingContext.shadowColor = '#FFD700'; 
  fill(isHover ? color(40,40,40,240) : color(0,0,0,220));
  stroke(255, 215, 0); strokeWeight(4); 
  rect(btnX, btnY, btnW, btnH, 25);
  drawingContext.shadowBlur = 0; 

  fill(255, 215, 0); noStroke(); 
  textSize(24); textStyle(BOLD);
  textAlign(LEFT, CENTER);
  let finalTxt = "กลับสู่หน้าพิภพแผนที่";
  let finalW = textWidth(finalTxt);
  text(finalTxt, btnX + btnW/2 - finalW/2, btnY + btnH/2 - 4); 
  textStyle(NORMAL);

  if (isClicked) {
    playInstantSound(btnSoundClick); 
    
    updateAllTownsCompleted();
    
    if (allTownsCompleted && !hasSeenSummaryThisSession) {
      currentStage = 10;
      mapMode = 'main';
      hasSeenSummaryThisSession = true;
    } else {
      currentStage = 4; 
      mapMode = 'levels'; 
    }
    restartMapMusic(); 
  }
}

function getAiHitboxes() {
  let hitboxes = [];
  
  if (currentStage === 7 && window.isCameraOn && poses.length > 0 && video && video.width > 0) {
    let pose = poses[0];
    
    let targetJoints = [
      "left_wrist", "right_wrist", 
      "left_index", "right_index", 
      "left_thumb", "right_thumb", 
      "left_pinky", "right_pinky"
    ];

    for (let kp of pose.keypoints) {
      let confidence = kp.confidence !== undefined ? kp.confidence : kp.score;
      if (confidence > 0.15) { 
        if (targetJoints.includes(kp.name)) {
          let flippedX = vX + (vW - map(kp.x, 0, video.width, 0, vW));
          let finalY = vY + map(kp.y, 0, video.height, 0, vH);
          hitboxes.push({ x: flippedX, y: finalY });
        }
      }
    }
  }

  if (mouseIsPressed && !prevMouseIsPressed) {
    hitboxes.push({ x: mouseX, y: mouseY });
  }

  return hitboxes;
}

function gotPoses(results) { poses = results; }

function timeIt() {
  if (currentStage === 7 && gameState === 'playing' && !isPaused) { 
    if (bonusMode === "bonus_time") {
      bonusTimer--;
      if (bonusTimer <= 0) {
         bonusMode = "none";
         bonusTargets = []; 
         trapTargets = []; 
         stopBonusMusic(); 
         
         gameState = 'countdown';
         countdownTimer = 3;
         resultMessage = "เตรียมตะลุยด่าน!";
         resultColor = color(255, 215, 0);
      }
    } else {
      if (timeLeft > 0) {
        timeLeft--;
        if (timeLeft > 15 && timeLeft % 30 === 0) {
          bonusMode = "bonus_time";
          bonusTimer = 15;
          bubbles = []; 
          lastBonusX = -1; lastBonusY = -1;
          spawnNextBonusTarget(); 
          startBonusMusic(); 
        }
      } else { 
        playInstantSound(soundWhistle);
        currentStage = 8; 
      }
    }
  } 
  else if (currentStage === 7 && gameState === 'countdown' && !isPaused) { 
    countdownTimer--; 
    if (countdownTimer <= 0) { 
      if (timeLeft === 60) {
        playInstantSound(soundWhistle);
      }
      spawnBubbles(); 
      gameState = 'playing'; 
    } 
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  if (video && video.width > 0) calculateVideoCover();
  if (currentStage === 4) createMenuButtons();
}

function calculateVideoCover() {
  if (!video || video.width === 0) return;
  let videoRatio = video.width / video.height; let screenRatio = width / height;
  if (screenRatio > videoRatio) { vW = width; vH = width / videoRatio; } else { vH = height; vW = height * videoRatio; }
  vX = (width - vW) / 2; vY = (height - vH) / 2;
}

function drawSkillSummary(activeHitboxes) {
  fill(0, 220); rect(0, 0, width, height);

  textSize(48); fill(255, 215, 0); textStyle(BOLD);
  textAlign(CENTER, CENTER);
  text("✨ สรุปทักษะคณิตศาสตร์ ✨", width / 2, height * 0.12);
  textStyle(NORMAL);

  let sP = highScores.plus || 0;
  let sM = highScores.minus || 0;
  let sX = highScores.multiply || 0;
  let sD = highScores.divide || 0;
  
  let scores = [
    { name: "บวก", val: sP },
    { name: "ลบ", val: sM },
    { name: "คูณ", val: sX },
    { name: "หาร", val: sD }
  ];
  
  let maxS = Math.max(...scores.map(s => s.val));
  let minS = Math.min(...scores.map(s => s.val));
  let bestNames = scores.filter(s => s.val === maxS).map(s => s.name);
  let worstNames = scores.filter(s => s.val === minS).map(s => s.name);
  
  let bestStr = bestNames.join(', ');
  let worstStr = worstNames.join(', ');
  let bestSingle = bestNames[0];
  let worstSingle = worstNames[0];
  
  let cx = width * 0.30;
  let cy = height * 0.50;
  let radius = Math.min(width, height) * 0.22;
  
  let sides = 4;
  let maxAxisVal = 50; 
  if (maxS > 50) maxAxisVal = maxS + 10; 
  
  // Draw web grids
  for (let step = 1; step <= 5; step++) {
    let r = radius * (step / 5);
    noFill(); stroke(100, 100, 100, 150); strokeWeight(2);
    beginShape();
    for (let i = 0; i < sides; i++) {
      let angle = -PI/2 + (TWO_PI / sides) * i;
      vertex(cx + cos(angle) * r, cy + sin(angle) * r);
    }
    endShape(CLOSE);
  }
  
  // Draw axes and labels
  for (let i = 0; i < sides; i++) {
    let angle = -PI/2 + (TWO_PI / sides) * i;
    stroke(200); strokeWeight(2);
    line(cx, cy, cx + cos(angle) * radius, cy + sin(angle) * radius);
    
    noStroke(); fill(255); textSize(24); textAlign(CENTER, CENTER);
    let lx = cx + cos(angle) * (radius + 40);
    let ly = cy + sin(angle) * (radius + 40);
    text(scores[i].name, lx, ly);
  }
  
  // Draw data polygon
  fill(0, 255, 255, 120); stroke(0, 255, 255); strokeWeight(4);
  beginShape();
  for (let i = 0; i < sides; i++) {
    let angle = -PI/2 + (TWO_PI / sides) * i;
    let r = radius * (scores[i].val / maxAxisVal);
    vertex(cx + cos(angle) * r, cy + sin(angle) * r);
  }
  endShape(CLOSE);

  // Draw points
  for (let i = 0; i < sides; i++) {
    let angle = -PI/2 + (TWO_PI / sides) * i;
    let r = radius * (scores[i].val / maxAxisVal);
    fill(255, 215, 0); noStroke();
    circle(cx + cos(angle) * r, cy + sin(angle) * r, 12);
    
    let nx = cx + cos(angle) * (r + 28);
    let ny = cy + sin(angle) * (r + 28);
    
    let txt = scores[i].val.toString();
    fill(0, 0, 0, 180); rectMode(CENTER);
    rect(nx, ny, textWidth(txt) + 16, 28, 5);
    rectMode(CORNER);
    
    fill(255); textSize(18); textAlign(CENTER, CENTER);
    text(txt, nx, ny);
  }

  // Helper functions for tips
  function getBestTip(skill) {
    if (skill === "บวก") return "เทคนิค: คุณบวกเลขได้ไวมาก! ลองฝึกจับคู่ให้ครบ 10 ในใจเสมอจะยิ่งเร็วขึ้น";
    if (skill === "ลบ") return "เทคนิค: การหักล้างของคุณแม่นยำมาก ลองใช้วิธี 'นับต่อ' ในเลขหลักร้อยดูสิ";
    if (skill === "คูณ") return "เทคนิค: คุณมีพรสวรรค์การคูณ! ลองแยกตัวประกอบเวลาคูณเลขเยอะๆ ดูนะ";
    if (skill === "หาร") return "เทคนิค: คุณแบ่งตัวเลขได้เฉียบขาดมาก เป็นทักษะขั้นสูงเลยทีเดียว!";
    return "";
  }
  function getWorstTip(skill) {
    if (skill === "บวก") return "คำแนะนำ: ลองจับคู่ตัวเลขให้ครบ 10 ก่อน แล้วค่อยบวกส่วนที่เหลือดูนะ";
    if (skill === "ลบ") return "คำแนะนำ: ลองใช้วิธี 'นับจากตัวลบไปหาตัวตั้ง' จะช่วยให้คิดง่ายกว่าหักออก";
    if (skill === "คูณ") return "คำแนะนำ: ท่องสูตรคูณแม่ 2-9 ให้คล่องเป็นจังหวะ จะช่วยให้จำได้แม่นขึ้น";
    if (skill === "หาร") return "คำแนะนำ: การหารคือการคูณย้อนกลับ ลองนึกว่า 'เลขอะไรคูณกันแล้วได้เท่านี้' ดูสิ";
    return "";
  }

  // Draw Feedback Text
  let txtX = width * 0.54;
  let txtY = height * 0.18; // Moved up to save space
  let wrapWidth = width * 0.40;
  textAlign(LEFT, TOP);
  
  textSize(32); fill(255, 215, 0); textStyle(BOLD);
  text("ผลการประเมินทักษะ", txtX, txtY);
  textStyle(NORMAL);
  
  textSize(24); fill(255);
  text("⭐ คะแนนสูงสุดที่ทำได้ในแต่ละด่าน:", txtX, txtY + 40);
  fill(200);
  text("➕ การบวก: " + sP + " คะแนน", txtX + 20, txtY + 70);
  text("➖ การลบ: " + sM + " คะแนน", txtX + 20, txtY + 95);
  text("✖️ การคูณ: " + sX + " คะแนน", txtX + 20, txtY + 120);
  text("➗ การหาร: " + sD + " คะแนน", txtX + 20, txtY + 145);
  
  fill(0, 255, 100);
  text("🏆 จุดแข็ง: การ" + bestStr, txtX, txtY + 185);
  fill(180, 255, 180); textSize(20);
  text("💬 " + getBestTip(bestSingle), txtX + 20, txtY + 215, wrapWidth);

  fill(255, 100, 100); textSize(24);
  if (minS === maxS && maxS > 0) {
    text("🎯 ทักษะทุกด้านสมดุลกันเป็นอย่างดี!", txtX, txtY + 275);
  } else {
    text("💡 ข้อควรพัฒนา: การ" + worstStr, txtX, txtY + 275);
    fill(255, 180, 180); textSize(20);
    text("💬 " + getWorstTip(worstSingle), txtX + 20, txtY + 305, wrapWidth);
    
    // Draw Example Box
    let exY = txtY + 365;
    fill(255, 255, 255, 240); noStroke(); rectMode(CORNER);
    rect(txtX + 15, exY, wrapWidth - 10, 85, 10);
    
    fill(0); textSize(18); textStyle(BOLD); textAlign(LEFT, TOP);
    text("✍️ ตัวอย่างการคิดลัด:", txtX + 30, exY + 10);
    textStyle(NORMAL); textSize(18); fill(60);
    
    let tipLineY = exY + 35;
    if (worstSingle === "บวก") {
      text("8 + 5  ➔  แยก 5 เป็น 2+3\n➔  (8+2) + 3  ➔  10 + 3 = 13", txtX + 30, tipLineY);
    } else if (worstSingle === "ลบ") {
      text("13 - 8  ➔  นับ 8 ไป 10 (ได้ 2)\n➔  นับเพิ่มอีก 3  ➔  2+3 = 5", txtX + 30, tipLineY);
    } else if (worstSingle === "คูณ") {
      text("12 x 5  ➔  แยก 12 เป็น 10+2\n➔  (10x5) + (2x5)  ➔  60", txtX + 30, tipLineY);
    } else if (worstSingle === "หาร") {
      text("42 ÷ 6  ➔  นึกว่า 6 x ? = 42\n➔  6 x 7 = 42  ➔  คำตอบคือ 7", txtX + 30, tipLineY);
    }
  }
  
  // Navigation Button
  let btnW = width * 0.25; if(btnW>350) btnW = 350;
  let btnH = height * 0.08;
  let btnX = width / 2 - btnW / 2; let btnY = height * 0.88; // Lowered button slightly

  let isHover = (mouseX > btnX && mouseX < btnX + btnW && mouseY > btnY && mouseY < btnY + btnH);
  let isClicked = false;
  for (let h of activeHitboxes) {
    if (h.x > btnX && h.x < btnX + btnW && h.y > btnY && h.y < btnY + btnH) { isHover = true; isClicked = true; break; }
  }

  rectMode(CORNER);
  fill(isHover ? color(40,40,40,240) : color(0,0,0,220));
  stroke(255, 215, 0); strokeWeight(4); 
  rect(btnX, btnY, btnW, btnH, 25);
  
  fill(255, 215, 0); noStroke(); 
  textSize(24); textStyle(BOLD);
  textAlign(LEFT, CENTER);
  let bTxt = "กลับสู่หน้าพิภพแผนที่";
  let btw = textWidth(bTxt);
  text(bTxt, btnX + btnW/2 - btw/2, btnY + btnH/2 - 4);
  textStyle(NORMAL);

  if (isClicked) {
    playInstantSound(btnSoundClick);
    currentStage = 4;
    mapMode = 'main';
  }
}