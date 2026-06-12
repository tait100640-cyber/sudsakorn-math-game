// ==========================================
// ส่วนจัดการระบบ State, วิดีโอ และเสียง
// ==========================================
window.gameLang = 'TH';
window.gameTexts = {
  TH: {
    welcome: "✨ ยินดีต้อนรับ ผู้กล้า: {name} แห่ง {school} ✨",
    story: "เนื้อเรื่อง",
    play: "เล่นเกม",
    conclusion: "บทสรุป",
    rules: "กติกา",
    leaderboard: "กระดานผู้นำ",
    townPlus: "เมืองบวก",
    townMinus: "ลบบุรี",
    townMultiply: "นคราคูณ",
    townDivide: "นครหาร",
    back: "ย้อนกลับ",
    lockedConclusion: "🔒 ",
    unlockedConclusion: "🥇 ",
    cleared: "✨ พิชิตแล้ว ✨",
    alertConclusionLocked: "ปุ่มบทสรุปล็อกอยู่! ท่านต้องเอาชนะทั้ง 4 เมืองก่อนจึงจะสามารถเปิดได้",
    alertNoName: "กรุณากรอกชื่อผู้กล้าก่อนนะครับ!",
    alertNoSchool: "กรุณากรอกชื่อโรงเรียนด้วยนะครับ!",
    target: "เป้าหมาย: ",
    scoreText: "คะแนน: ",
    timeLeft: "เวลาเหลือ: ",
    min: " นาที ",
    sec: " วินาที",
    timeout: "หมดเวลา!",
    gameOverDesc: "ท่านทำคะแนนในโหมด {op} ได้ {score} คะแนน",
    playAgain: "กดเพื่อเล่นอีกครั้ง",
    leaderboardTitle: "🏆 กระดานผู้นำ (Top 10) 🏆",
    rank: "อันดับ",
    name: "ชื่อ",
    school: "โรงเรียน",
    pts: "คะแนน",
    loading: "กำลังดาวน์โหลดข้อมูล...",
    noData: "ยังไม่มีข้อมูล",
    summaryTitle: "📊 สรุปผลการทดสอบทักษะ 📊",
    hero: "ผู้กล้า: ",
    plus: "การบวก",
    minus: "การลบ",
    multiply: "การคูณ",
    divide: "การหาร",
    total: "รวมทั้งหมด",
    levelExcellent: "(เก่งมาก!)",
    levelGood: "(ปานกลาง)",
    levelTry: "(ต้องพยายามอีกนิด)",
        backToMap: "กดกลับสู่แผนที่หลัก",
    gameOverTitle: "ภารกิจสิ้นสุด!",
    statusPass: "ภารกิจสำเร็จ!",
    statusFail: "ภารกิจล้มเหลว!",
    learnSource: "แหล่งเรียนรู้",
    // New items added:
    evalTitle: "ผลการประเมินทักษะ",
    msgReady: "เตรียมตะลุยด่าน!",
    msgStart: "เริ่มต้นตะลุยด่าน!",
    msgCorrect: "ถูกต้อง! +2",
    msgWrong: "ผิด! เวลาลด -3 วินาที",
    msgTrap: "โดนกับดัก! เวลาลด -3 วินาที",
    evalMax: "⭐ คะแนนสูงสุดที่ทำได้ในแต่ละด่าน:",
    evalPlus: "➕ การบวก: ",
    evalMinus: "➖ การลบ: ",
    evalMul: "✖️ การคูณ: ",
    evalDiv: "➗ การหาร: ",
    evalPts: " คะแนน",
    evalStrong: "🏆 จุดแข็ง: ",
    evalAllGood: "🎯 ทักษะทุกด้านสมดุลกันเป็นอย่างดี!",
    evalWeak: "💡 ข้อควรพัฒนา: ",
    evalShortcut: "✍️ ตัวอย่างการคิดลัด:",
        btnBackMap: "กลับสู่หน้าพิภพแผนที่",
    // Part 2
    calibHeadReady: "✔ ศรีษะ: พร้อม",
    calibHeadNot: "❌ มองไม่เห็นศรีษะ",
    calibHandsReady: "✔ มือทั้งสองข้าง: พร้อม",
    calibHandsNot: "❌ มองไม่เห็นมือ",
    calibFeetReady: "✔ เท้าและช่วงล่าง: พร้อม",
    calibFeetNot: "❌ มองไม่เห็นเท้า",
    stepBack: "กรุณาถอยหลังให้กล้องเห็นทั้งตัว",
    stepBack2: "(ยืนให้พอดีกับกรอบสีเขียว)",
    timeLeftFormat: "เวลาเหลือ: {min} นาที {sec} วินาที",
    pauseTitle: "|| หยุดชั่วคราว",
    resumeBtn: "เล่นต่อ",
    pauseBtn: "พักเกม",
    exitBtn: "ออก",
    bonusTime: "เวลาโบนัส: ",
    playerPrefix: "ผู้เล่น: ",
    stagePrefix: "\nด่าน: ",
    roundScore: "คะแนนในรอบนี้: {score} คะแนน \nคะแนนสูงสุดที่ทำได้ในด่านนี้: {highScore} คะแนน",
    newRecord: "🎉 ยินดีด้วย! คุณทำลายสถิติใหม่! 🎉",
    tryAgain: "พยายามอีกนิดนะ!",
    finalBtn: "กดเพื่อเล่นอีกครั้ง",
    summaryMainTitle: "✨ สรุปทักษะคณิตศาสตร์ ✨",
    bodyAnalysis: "วิเคราะห์ร่างกาย",
    closeVideo: "ปิดเนื้อเรื่อง (ข้าม)",
    learnSource: "แหล่งเรียนรู้",
    add: "การบวก",
    sub: "การลบ",
    mul: "การคูณ",
    div: "การหาร",
    t_add_best: "เทคนิค: คุณบวกเลขได้ไวมาก! ลองฝึกจับคู่ให้ครบ 10 ในใจเสมอจะยิ่งเร็วขึ้น",
    t_sub_best: "เทคนิค: การหักล้างของคุณแม่นยำมาก ลองใช้วิธี 'นับต่อ' ในเลขหลักร้อยดูสิ",
    t_mul_best: "เทคนิค: คุณมีพรสวรรค์การคูณ! ลองแยกตัวประกอบเวลาคูณเลขเยอะๆ ดูนะ",
    t_div_best: "เทคนิค: คุณแบ่งตัวเลขได้เฉียบขาดมาก เป็นทักษะขั้นสูงเลยทีเดียว!",
    t_add_worst: "คำแนะนำ: ลองจับคู่ตัวเลขให้ครบ 10 ก่อน แล้วค่อยบวกส่วนที่เหลือดูนะ",
    t_sub_worst: "คำแนะนำ: ลองใช้วิธี 'นับจากตัวลบไปหาตัวตั้ง' จะช่วยให้คิดง่ายกว่าหักออก",
    t_mul_worst: "คำแนะนำ: ท่องสูตรคูณแม่ 2-9 ให้คล่องเป็นจังหวะ จะช่วยให้จำได้แม่นขึ้น",
    t_div_worst: "คำแนะนำ: การหารคือการคูณย้อนกลับ ลองนึกว่า 'เลขอะไรคูณกันแล้วได้เท่านี้' ดูสิ",
    s_add: "8 + 5  ➔  แยก 5 เป็น 2+3\n➔  (8+2) + 3  ➔  10 + 3 = 13",
    s_sub: "13 - 8  ➔  นับ 8 ไป 10 (ได้ 2)\n➔  นับเพิ่มอีก 3  ➔  2+3 = 5",
    s_mul: "12 x 5  ➔  แยก 12 เป็น 10+2\n➔  (10x5) + (2x5)  ➔  60",
    s_div: "42 ÷ 6  ➔  นึกว่า 6 x ? = 42\n➔  6 x 7 = 42  ➔  คำตอบคือ 7"
  },
  EN: {
    welcome: "✨ Welcome Hero: {name} of {school} ✨",
    story: "Story",
    play: "Play",
    conclusion: "Conclusion",
    rules: "Rules",
    leaderboard: "Leaderboard",
    townPlus: "Town of Addition",
    townMinus: "City of Subtraction",
    townMultiply: "Realm of Multiplication",
    townDivide: "Kingdom of Division",
    back: "Back",
    lockedConclusion: "🔒 ",
    unlockedConclusion: "🥇 ",
    cleared: "✨ Cleared ✨",
    alertConclusionLocked: "Conclusion is locked! You must conquer all 4 towns first.",
    alertNoName: "Please enter your hero name!",
    alertNoSchool: "Please enter your school name!",
    gameOverTitle: "Mission Complete!",
    statusPass: "✨ Stage Cleared ✨",
    statusFail: "❌ Stage Not Cleared (Need 30+ pts)",
    btnBackMap: "Return to Map",

    target: "Target: ",
    scoreText: "Score: ",
    timeLeft: "Time Left: ",
    min: " m ",
    sec: " s",
    timeout: "Time's Up!",
    gameOverDesc: "You scored {score} points in {op} mode",
    playAgain: "Click to Play Again",
    leaderboardTitle: "🏆 Leaderboard (Top 10) 🏆",
    rank: "Rank",
    name: "Name",
    school: "School",
    pts: "Pts",
    loading: "Loading data...",
    noData: "No data available",
    summaryTitle: "📊 Skill Summary 📊",
    hero: "Hero: ",
    plus: "Addition",
    minus: "Subtraction",
    multiply: "Multiplication",
    divide: "Division",
    total: "Total",
    levelExcellent: "(Excellent!)",
    levelGood: "(Good)",
    levelTry: "(Try Harder)",
        backToMap: "Back to Map",
    statusPass: "Mission Cleared!",
    statusFail: "Mission Failed!",
    learnSource: "Learn More",
    evalTitle: "Skill Evaluation Results",
    msgReady: "Get Ready!",
    msgStart: "Game Start!",
    msgCorrect: "Correct! +2",
    msgWrong: "Wrong! Time -3s",
    msgTrap: "Trap hit! Time -3s",
    evalMax: "⭐ Highest Score per Stage:",
    evalPlus: "➕ Addition: ",
    evalMinus: "➖ Subtraction: ",
    evalMul: "✖️ Multiplication: ",
    evalDiv: "➗ Division: ",
    evalPts: " points",
    evalStrong: "🏆 Strength: ",
    evalAllGood: "🎯 Well-balanced skills in all areas!",
    evalWeak: "💡 Needs Improvement: ",
    evalShortcut: "✍️ Shortcut Example:",
        btnBackMap: "Return to Map",
    calibHeadReady: "✔ Head: Ready",
    calibHeadNot: "❌ Head Not Found",
    calibHandsReady: "✔ Hands: Ready",
    calibHandsNot: "❌ Hands Not Found",
    calibFeetReady: "✔ Feet: Ready",
    calibFeetNot: "❌ Feet Not Found",
    stepBack: "Please step back so the camera sees your full body",
    stepBack2: "(Fit inside the green frame)",
    timeLeftFormat: "Time Left: {min} m {sec} s",
    pauseTitle: "|| Paused",
    resumeBtn: "Resume",
    pauseBtn: "Pause",
    exitBtn: "Exit",
    bonusTime: "Bonus Time: ",
    playerPrefix: "Player: ",
    stagePrefix: "\nStage: ",
    roundScore: "Round Score: {score} pts \nHigh Score: {highScore} pts",
    newRecord: "🎉 Congrats! New Record! 🎉",
    tryAgain: "Keep trying!",
    finalBtn: "Click to Play Again",
    summaryMainTitle: "✨ Math Skill Summary ✨",
    bodyAnalysis: "Body Analysis",
    closeVideo: "Close Story (Skip)",
    learnSource: "Learning Source",
    add: "Addition",
    sub: "Subtraction",
    mul: "Multiplication",
    div: "Division",
    t_add_best: "Tip: You add numbers very fast! Try making pairs of 10 in your mind to be even faster.",
    t_sub_best: "Tip: Your subtraction is very precise. Try 'counting on' for hundreds.",
    t_mul_best: "Tip: You have a gift for multiplication! Try factoring when multiplying large numbers.",
    t_div_best: "Tip: You divide numbers very sharply. That's a high-level skill!",
    t_add_worst: "Advice: Try making pairs of 10 first, then add the rest.",
    t_sub_worst: "Advice: Try 'counting on' from the subtrahend to the minuend. It's easier.",
    t_mul_worst: "Advice: Practice reciting the 2-9 times tables rhythmically.",
    t_div_worst: "Advice: Division is reverse multiplication. Think 'what times this equals that'.",
    s_add: "8 + 5  ➔  Split 5 into 2+3\n➔  (8+2) + 3  ➔  10 + 3 = 13",
    s_sub: "13 - 8  ➔  Count 8 to 10 (gets 2)\n➔  Add 3 more  ➔  2+3 = 5",
    s_mul: "12 x 5  ➔  Split 12 into 10+2\n➔  (10x5) + (2x5)  ➔  60",
    s_div: "42 ÷ 6  ➔  Think 6 x ? = 42\n➔  6 x 7 = 42  ➔  Answer is 7"
  }
};

let currentStage = 1; 
window.isSoundMuted = false; 
window.isCameraOn = false; 
let bgm, gameBgm, bonusBgm, btnSoundStart, btnSoundLogin, btnSoundClick;
let soundCorrect, soundWrong, soundWhistle; 
let mapImg, logoImg, rulesImg, rulesImgEN;
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
    closeBtn.id = 'yt-close-btn';
    closeBtn.innerHTML = window.gameTexts[window.gameLang].closeVideo;
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
const LEADERBOARD_API_URL = "https://script.google.com/macros/s/AKfycbxgGHxLOoznLqmqb3fSexDp8IekgRuGeO7A4l9WJo9mzdpwFwBKApHBARHNR1kgw4p1/exec";
let leaderboardData = [];
let isFetchingLeaderboard = false;
let lastUIClickTime = 0;
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
  
  if (key === 'G' || key === 'g') {
    if (currentStage >= 4) {
      if (!selectedCity || !selectedCity.id) {
        selectedCity = { id: 'plus', name: 'Town of Addition' };
      }
      score = 8;
      currentStage = 8;
      if (bgm && bgm.isPlaying()) bgm.pause();
    }
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
  
  if(!name) { var t = window.gameTexts[window.gameLang]; alert(t.alertNoName); return; }
  if(!school) { var t = window.gameTexts[window.gameLang]; alert(t.alertNoSchool); return; }
  
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
  rulesImgEN = loadImage('rules2.png', updateProgress);
  
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
  let btnW = width * 0.40; 
  if (btnW > 500) btnW = 500; 
  let btnH = height * 0.07; 
  let startX = width / 2 - btnW / 2; 
  let mainStartY = height * 0.50; 
  let gapY = height * 0.09; 
  
  var t = window.gameTexts[window.gameLang];

  mainButtons = [
    { id: "story", name: t.story, x: startX, y: mainStartY, w: btnW, h: btnH },
    { id: "play", name: t.play, x: startX, y: mainStartY + gapY*1, w: btnW, h: btnH },
    { id: "conclusion", name: t.conclusion, x: startX, y: mainStartY + gapY*2, w: btnW, h: btnH },
    { id: "rules", name: t.rules, x: startX, y: mainStartY + gapY*3, w: btnW, h: btnH },
    { id: "leaderboard", name: t.leaderboard, x: startX, y: mainStartY + gapY*4, w: btnW, h: btnH } 
  ];

  let levelStartY = height * 0.40;

  levelButtons = [
    { id: "plus", name: t.townPlus, op: "+", x: startX, y: levelStartY, w: btnW, h: btnH },
    { id: "minus", name: t.townMinus, op: "-", x: startX, y: levelStartY + gapY*1, w: btnW, h: btnH },
    { id: "multiply", name: t.townMultiply, op: "x", x: startX, y: levelStartY + gapY*2, w: btnW, h: btnH },
    { id: "divide", name: t.townDivide, op: "÷", x: startX, y: levelStartY + gapY*3, w: btnW, h: btnH },
    { id: "back", name: t.back, x: startX, y: levelStartY + gapY*4, w: btnW, h: btnH }
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
  let boxW = 210; 
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
  
  let totalHearts = 5;
  let spacing = 40;
  let startX = centerX - ((totalHearts - 1) * spacing) / 2;
  
  for (let i = 0; i < totalHearts; i++) {
    let hx = startX + i * spacing;
    if (i < playerLives) {
      // Offset red heart slightly because emoji fonts render it higher than the black heart
      text("❤️", hx + 1, centerY + 5); 
    } else {
      text("🖤", hx, centerY + 2);
    }
  }

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
      drawCoverImage(mapImg);
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
        drawCoverImage(currentBg);
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
      drawCoverImage(mapImg); 
    }
    drawLeaderboard(activeHitboxes);
    drawPiPCamera(); 
  }
  else if (currentStage === 10) {
    if (mapImg) {
      drawCoverImage(mapImg); 
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
  
  let creditsBtn = document.getElementById('credits-btn');
  if (creditsBtn) {
    if (currentStage === 4 && mapMode === 'main' && !showRulesOverlay) {
      creditsBtn.style.display = 'flex';
    } else {
      creditsBtn.style.display = 'none';
    }
  }
}

function drawMapSelection(activeHitboxes) {
  var t = window.gameTexts[window.gameLang];
  if (showRulesOverlay) {
    fill(0, 180); rect(0, 0, width, height);
    if (rulesImg) {
      imageMode(CENTER);
      let rImg = (window.gameLang === 'TH') ? rulesImg : rulesImgEN;
      let imgRatio = rImg.width / rImg.height;
      let targetW = width * 0.7;
      let targetH = targetW / imgRatio;
      if (targetH > height * 0.8) {
        targetH = height * 0.8;
        targetW = targetH * imgRatio;
      }
      image(rImg, width/2, height/2, targetW, targetH);
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
    
    if (crossClicked && millis() - lastUIClickTime > 1000) {
      lastUIClickTime = millis();
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
    let welcomeText = t.welcome.replace("{name}", currentPlayerName).replace("{school}", currentSchoolName);
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

    let tw = textWidth(b.name);
    let emojiStr = "";
    if (b.id === "conclusion" && !allTownsCompleted) {
      emojiStr = t.lockedConclusion;
      tw += 35; // Safe hardcoded width
    } else if (completedTowns[b.id]) {
      emojiStr = t.unlockedConclusion;
      tw += 40; // Safe hardcoded width for medal
    }
    
    let startX = textCenterX - tw / 2;

    try {
      if (b.id === "conclusion" && !allTownsCompleted) {
        push(); textFont("sans-serif"); text(emojiStr, startX, textCenterY); pop();
        text(b.name, startX + 35, textCenterY);
      } else if (completedTowns[b.id]) {
        push(); textFont("sans-serif"); text(emojiStr, startX, textCenterY); pop();
        text(b.name, startX + 40, textCenterY);

        fill(255, 215, 0); textSize(width * 0.020);
        let subText = t.cleared || "Cleared";
        let sw = textWidth(subText);
        text(subText, textCenterX - sw / 2, b.y + b.h + 20); 
        fill(255); textSize(width * 0.025);
      } else {
        text(b.name, startX, textCenterY);
      }
    } catch(e) {
      console.error("Text rendering error:", e);
      text(b.name, startX, textCenterY);
    }
    
    if (isClicked && mapFadeAlpha <= 0 && millis() - lastUIClickTime > 1000) {
      lastUIClickTime = millis(); 
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
        alert(t.alertConclusionLocked);
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
          resultMessage = t.msgReady; resultColor = color(255, 215, 0);
        }
      }
    }
  }
}

function drawLeaderboard(activeHitboxes) {
  let t = window.gameTexts[window.gameLang];
  fill(0, 220); rect(0, 0, width, height);

  textSize(48); fill(255, 215, 0); textStyle(BOLD);
  textAlign(LEFT, CENTER);
  let titleTxt = t.leaderboardTitle;
  let titleW = textWidth(titleTxt);
  text(titleTxt, width / 2 - titleW / 2, height * 0.15);
  textStyle(NORMAL);

  if (isFetchingLeaderboard) {
    textSize(32); fill(255);
    textAlign(LEFT, CENTER);
    let loadTxt = t.loading;
    let loadW = textWidth(loadTxt);
    text(loadTxt, width / 2 - loadW / 2, height / 2);
  } else {
    textSize(24);
    textAlign(LEFT, CENTER);
    let startY = height * 0.25;
    let rowH = height * 0.045;
    
    fill(150, 255, 255); textStyle(BOLD);
    text(t.rank, width * 0.2, startY);
    text(t.name, width * 0.3, startY);
    text(t.school, width * 0.55, startY);
    text(t.pts, width * 0.8, startY);
    textStyle(NORMAL);
    
    fill(255);
    if (leaderboardData.length === 0) {
        textAlign(LEFT, CENTER);
        let emptyTxt = t.noData;
        let emptyW = textWidth(emptyTxt);
        text(emptyTxt, width / 2 - emptyW / 2, height / 2);
    } else {
        let displayCount = min(10, leaderboardData.length);
        for (let i = 0; i < displayCount; i++) {
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

  // Draw player rank
  let totalBestScore = highScores.plus + highScores.minus + highScores.multiply + highScores.divide;
  let myRankIndex = leaderboardData.findIndex(d => d.name === currentPlayerName && d.score === totalBestScore);
  
  let myRankText = (myRankIndex !== -1) ? "#" + (myRankIndex + 1) : "-";
  let labelText = (window.gameLang === 'TH') ? "🌟 อันดับของคุณ 🌟" : "🌟 Your Rank 🌟";
  
  let playerY = height * 0.25 + (height * 0.045) * 11.2; // position below top 10
  
  // Highlighting box
  rectMode(CENTER);
  fill(0, 50, 150, 180); stroke(0, 255, 255); strokeWeight(2);
  rect(width / 2, playerY, width * 0.75, height * 0.06, 15);
  rectMode(CORNER);
  
  noStroke();
  
  // Label above the box
  fill(255, 215, 0); textAlign(CENTER, BOTTOM); textSize(20); textStyle(BOLD);
  text(labelText, width / 2, playerY - (height * 0.03) - 5);
  textStyle(NORMAL);
  
  // Data inside the box (Aligned exactly with columns)
  fill(255); textAlign(LEFT, CENTER); textSize(24);
  text(myRankText, width * 0.2, playerY);
  text(currentPlayerName, width * 0.3, playerY);
  text(currentSchoolName, width * 0.55, playerY);
  fill(255, 215, 0);
  text(totalBestScore, width * 0.8, playerY);

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
  let tStr = t.back;
  let tw = textWidth(tStr);
  textAlign(LEFT, CENTER); textSize(24); textStyle(BOLD);
  text(tStr, btnX + btnW/2 - tw/2, btnY + btnH/2 - 4);
  textStyle(NORMAL);

  if (isClicked && millis() - lastUIClickTime > 1000) {
    lastUIClickTime = millis();
    playInstantSound(btnSoundClick);
    currentStage = 4;
    mapMode = 'main';
  }
}

function drawCalibration() {
  var t = window.gameTexts[window.gameLang];
  if (!window.isCameraOn) {
    currentStage = 7;
    gameState = 'countdown'; countdownTimer = 3;
    resultMessage = t.msgReady; resultColor = color(255, 215, 0);
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
  
  fill(head ? color(0, 255, 100) : color(255, 50, 50)); var t = window.gameTexts[window.gameLang]; text(head ? t.calibHeadReady : t.calibHeadNot, textLeftX, startRowY);
  fill(hands ? color(0, 255, 100) : color(255, 50, 50)); text(hands ? t.calibHandsReady : t.calibHandsNot, textLeftX, startRowY + 55);
  fill(feet ? color(0, 255, 100) : color(255, 50, 50)); text(feet ? t.calibFeetReady : t.calibFeetNot, textLeftX, startRowY + 110);

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
    resultMessage = t.msgStart; resultColor = color(255, 215, 0);
  }
}

function drawGameplay(activeHitboxes) {
  var t = window.gameTexts[window.gameLang];
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
      let bt2 = t.bonusTime + bonusTimer + t.sec;
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
          if (score < 0) score = 0;
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
        resultMessage = t.msgCorrect; resultColor = color(0, 255, 100);
      } else if (hitWrong) {
        playInstantSound(soundWrong); 
        timeLeft -= 3;
        playerLives--; 
        
        if (playerLives <= 0) {
          playerLives = 0;
          currentStage = 8; 
        } else {
          gameState = 'countdown'; countdownTimer = 3; 
          resultMessage = t.msgWrong; resultColor = color(255, 50, 50);
        }
      }
    }
  }

  fill(255); noStroke(); 
  textAlign(LEFT, CENTER); textSize(32);
  text(t.scoreText + score, 40, height * 0.06);
  let minPart = floor(timeLeft / 60);
  let secPart = timeLeft % 60;
  text(t.timeLeftFormat.replace("{min}", minPart).replace("{sec}", secPart), 40, height * 0.12);

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
  let pTxt = isPaused ? t.resumeBtn : t.pauseBtn;
  let pw = textWidth(pTxt);
  text(pTxt, pauseBtnX - pw/2, pauseBtnY - 2);

  fill(exitHover ? color(255, 120, 120, 200) : color(255, 80, 80, 180)); 
  circle(exitBtnX, exitBtnY, btnRadius*2);
  fill(255); 
  let eTxt = t.exitBtn;
  let ew = textWidth(eTxt);
  text(eTxt, exitBtnX - ew/2, exitBtnY - 2);

  if (exitClicked && millis() - lastUIClickTime > 1000) {
    lastUIClickTime = millis();
    playInstantSound(btnSoundClick); 
    currentStage = 4;
    mapMode = 'levels'; 
  }
  
  if (pauseClicked && millis() - lastUIClickTime > 1000) {
    lastUIClickTime = millis();
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
    drawCoverImage(currentBg);
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
  var t = window.gameTexts[window.gameLang];
  let goT1 = t.gameOverTitle;
  text(goT1, width / 2, height / 2 - 140);

  textSize(36); fill(255, 215, 0);
  var t = window.gameTexts[window.gameLang]; 
  let stageName = selectedCity.name;
  if (selectedCity.id === 'plus') stageName = t.townPlus;
  else if (selectedCity.id === 'minus') stageName = t.townMinus;
  else if (selectedCity.id === 'multiply') stageName = t.townMultiply;
  else if (selectedCity.id === 'divide') stageName = t.townDivide;
  
  let cleanStagePrefix = t.stagePrefix.replace("\n", " ");
  
  // Draw player and stage name separated for better layout
  textAlign(CENTER, CENTER);
  text(`${t.playerPrefix}${currentPlayerName}`, width / 2, height / 2 - 60);
  text(`${cleanStagePrefix}${stageName}`, width / 2, height / 2 - 20);
  
  textSize(28); fill(255);
  
  // Split roundScore by newline so each line is perfectly centered individually
  let rawScoreText = t.roundScore.replace("{score}", score).replace("{highScore}", highScores[selectedCity.id]);
  let scoreLines = rawScoreText.split("\n");
  
  if (scoreLines.length > 1) {
    text(scoreLines[0].trim(), width / 2, height / 2 + 40);
    text(scoreLines[1].trim(), width / 2, height / 2 + 80);
  } else {
    text(rawScoreText.trim(), width / 2, height / 2 + 60);
  }

  let statusText = completedTowns[selectedCity.id] ? t.statusPass : t.statusFail;
  let scoreColor = completedTowns[selectedCity.id] ? color(0, 255, 100) : color(255, 100, 100);
  textSize(24); fill(scoreColor);
  text(statusText, width / 2, height / 2 + 140);

  // Navigation Buttons (YouTube & Back to Map)
  let btnW = width * 0.22; if(btnW>300) btnW = 300;
  let btnH = height * 0.08;
  let gap = 30;
  let totalW = btnW * 2 + gap;
  let btnY = height / 2 + 180; 

  let btnX_yt = width / 2 - totalW / 2;
  let btnX_map = width / 2 + gap / 2;

  let hoverYt = (mouseX > btnX_yt && mouseX < btnX_yt + btnW && mouseY > btnY && mouseY < btnY + btnH);
  let hoverMap = (mouseX > btnX_map && mouseX < btnX_map + btnW && mouseY > btnY && mouseY < btnY + btnH);
  let clickYt = false, clickMap = false;

  for (let h of activeHitboxes) {
    if (h.x > btnX_yt && h.x < btnX_yt + btnW && h.y > btnY && h.y < btnY + btnH) { hoverYt = true; clickYt = true; }
    if (h.x > btnX_map && h.x < btnX_map + btnW && h.y > btnY && h.y < btnY + btnH) { hoverMap = true; clickMap = true; }
  }

  rectMode(CORNER);
  
  // YouTube Button
  fill(hoverYt ? color(200,40,40,240) : color(150,0,0,220));
  stroke(255, 100, 100); strokeWeight(4); 
  rect(btnX_yt, btnY, btnW, btnH, 25);
  fill(255); noStroke(); textSize(24); textStyle(BOLD); textAlign(CENTER, CENTER);
  text("📺 " + t.learnSource, btnX_yt + btnW/2, btnY + btnH/2 - 4);

  // Return to Map Button
  drawingContext.shadowBlur = hoverMap ? 20 : 0;
  drawingContext.shadowColor = '#FFD700';
  fill(hoverMap ? color(40,40,40,240) : color(0,0,0,220));
  stroke(255, 215, 0); strokeWeight(4); 
  rect(btnX_map, btnY, btnW, btnH, 25);
  drawingContext.shadowBlur = 0;
  
  fill(255, 215, 0); noStroke(); textSize(24); textStyle(BOLD); textAlign(CENTER, CENTER);
  text(t.btnBackMap, btnX_map + btnW/2, btnY + btnH/2 - 4);
  
  textStyle(NORMAL);

  if (millis() - lastUIClickTime > 1000) {
    if (clickYt) {
      lastUIClickTime = millis();
      playInstantSound(btnSoundClick);
      openYouTubePopup('jHY9lC1lrF0');
    } else if (clickMap) {
      lastUIClickTime = millis();
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
}

function getAiHitboxes() {
  let hitboxes = [];
  
  if ([4, 7, 8, 9, 10].includes(currentStage) && window.isCameraOn && poses.length > 0 && video && video.width > 0) {
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
  var t = window.gameTexts[window.gameLang];
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
         resultMessage = t.msgReady;
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
  var t = window.gameTexts[window.gameLang]; text(t.summaryMainTitle, width / 2, height * 0.12);
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
    var t = window.gameTexts[window.gameLang]; if (skill === "บวก") return t.t_add_best;
    if (skill === "ลบ") return t.t_sub_best;
    if (skill === "คูณ") return t.t_mul_best;
    if (skill === "หาร") return t.t_div_best;
    return "";
  }
  function getWorstTip(skill) {
    var t = window.gameTexts[window.gameLang]; if (skill === "บวก") return t.t_add_worst;
    if (skill === "ลบ") return t.t_sub_worst;
    if (skill === "คูณ") return t.t_mul_worst;
    if (skill === "หาร") return t.t_div_worst;
    return "";
  }

  // Draw Feedback Text
  let txtX = width * 0.54;
  let txtY = height * 0.18; // Moved up to save space
  let wrapWidth = width * 0.40;
  textAlign(LEFT, TOP);
  
  textSize(32); fill(255, 215, 0); textStyle(BOLD);
  var t = window.gameTexts[window.gameLang]; text(t.evalTitle, txtX, txtY);
  textStyle(NORMAL);
  
  textSize(24); fill(255);
  text(t.evalMax, txtX, txtY + 40);
  fill(200);
  text(t.evalPlus + sP + t.evalPts, txtX + 20, txtY + 70);
  text(t.evalMinus + sM + t.evalPts, txtX + 20, txtY + 95);
  text(t.evalMul + sX + t.evalPts, txtX + 20, txtY + 120);
  text(t.evalDiv + sD + t.evalPts, txtX + 20, txtY + 145);
  
  fill(0, 255, 100);
  text(t.evalStrong + bestStr.replace("บวก", t.add).replace("ลบ", t.sub).replace("คูณ", t.mul).replace("หาร", t.div), txtX, txtY + 185);
  fill(180, 255, 180); textSize(20);
  text("💬 " + getBestTip(bestSingle), txtX + 20, txtY + 215, wrapWidth);

  fill(255, 100, 100); textSize(24);
  if (minS === maxS && maxS > 0) {
    text(t.evalAllGood, txtX, txtY + 275);
  } else {
    text(t.evalWeak + worstStr.replace("บวก", t.add).replace("ลบ", t.sub).replace("คูณ", t.mul).replace("หาร", t.div), txtX, txtY + 275);
    fill(255, 180, 180); textSize(20);
    text("💬 " + getWorstTip(worstSingle), txtX + 20, txtY + 305, wrapWidth);
    
    // Draw Example Box
    let exY = txtY + 365;
    fill(255, 255, 255, 240); noStroke(); rectMode(CORNER);
    rect(txtX + 15, exY, wrapWidth - 10, 85, 10);
    
    fill(0); textSize(18); textStyle(BOLD); textAlign(LEFT, TOP);
    text(t.evalShortcut, txtX + 30, exY + 10);
    textStyle(NORMAL); textSize(18); fill(60);
    
    let tipLineY = exY + 35;
    if (worstSingle === "บวก") {
      text(t.s_add, txtX + 30, tipLineY);
    } else if (worstSingle === "ลบ") {
      text(t.s_sub, txtX + 30, tipLineY);
    } else if (worstSingle === "คูณ") {
      text(t.s_mul, txtX + 30, tipLineY);
    } else if (worstSingle === "หาร") {
      text(t.s_div, txtX + 30, tipLineY);
    }
  }
  
  // Navigation Buttons (YouTube & Back to Map)
  let btnW = width * 0.22; if(btnW>300) btnW = 300;
  let btnH = height * 0.08;
  let gap = 30;
  let totalW = btnW * 2 + gap;
  let btnY = height * 0.88; 

  let btnX_yt = width / 2 - totalW / 2;
  let btnX_map = width / 2 + gap / 2;

  let hoverYt = (mouseX > btnX_yt && mouseX < btnX_yt + btnW && mouseY > btnY && mouseY < btnY + btnH);
  let hoverMap = (mouseX > btnX_map && mouseX < btnX_map + btnW && mouseY > btnY && mouseY < btnY + btnH);
  let clickYt = false, clickMap = false;

  for (let h of activeHitboxes) {
    if (h.x > btnX_yt && h.x < btnX_yt + btnW && h.y > btnY && h.y < btnY + btnH) { hoverYt = true; clickYt = true; }
    if (h.x > btnX_map && h.x < btnX_map + btnW && h.y > btnY && h.y < btnY + btnH) { hoverMap = true; clickMap = true; }
  }

  rectMode(CORNER);
  
  // YouTube Button
  fill(hoverYt ? color(200,40,40,240) : color(150,0,0,220));
  stroke(255, 100, 100); strokeWeight(4); 
  rect(btnX_yt, btnY, btnW, btnH, 25);
  fill(255); noStroke(); textSize(24); textStyle(BOLD); textAlign(CENTER, CENTER);
  text("📺 " + t.learnSource, btnX_yt + btnW/2, btnY + btnH/2 - 4);

  // Return to Map Button
  fill(hoverMap ? color(40,40,40,240) : color(0,0,0,220));
  stroke(255, 215, 0); strokeWeight(4); 
  rect(btnX_map, btnY, btnW, btnH, 25);
  fill(255, 215, 0); noStroke(); textSize(24); textStyle(BOLD); textAlign(CENTER, CENTER);
  text(t.btnBackMap, btnX_map + btnW/2, btnY + btnH/2 - 4);
  
  textStyle(NORMAL);

  if (millis() - lastUIClickTime > 1000) {
    if (clickYt) {
      lastUIClickTime = millis();
      playInstantSound(btnSoundClick);
      openYouTubePopup('jHY9lC1lrF0');
    } else if (clickMap) {
      lastUIClickTime = millis();
      playInstantSound(btnSoundClick);
      currentStage = 4;
      mapMode = 'main';
    }
  }
}
function drawCoverImage(img) {
  if (!img || img.width === 0 || img.height === 0) return;
  let imgRatio = img.width / img.height;
  let screenRatio = width / height;
  let drawW, drawH, drawX, drawY;
  
  if (screenRatio > imgRatio) {
    drawW = width;
    drawH = width / imgRatio;
    drawX = 0;
    drawY = (height - drawH) / 2;
  } else {
    drawH = height;
    drawW = height * imgRatio;
    drawX = (width - drawW) / 2;
    drawY = 0;
  }
  image(img, drawX, drawY, drawW, drawH);
}
