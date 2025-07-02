/*!
* Start Bootstrap - Stylish Portfolio v6.0.6 (https://startbootstrap.com/theme/stylish-portfolio)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-stylish-portfolio/blob/master/LICENSE)
*/

// 링크 복사
function copyLink(){
	var url = 'https://wj-weddinglog.github.io/';
	var textarea = document.createElement("textarea");
	document.body.appendChild(textarea);
	textarea.value = url;
	textarea.select();
	document.execCommand("copy");
	document.body.removeChild(textarea);
	alert("링크가 복사되었습니다. 널리널리 퍼뜨려주세요💕")
}

// 신부 계좌번호 복사
function brideAccountNumber(){
	var bride_account = '1002-931-309185 우리은행';
	var textarea = document.createElement("textarea");
	document.body.appendChild(textarea);
	textarea.value = bride_account;
	textarea.select();
	document.execCommand("copy");
	document.body.removeChild(textarea);
	alert("신부의 계좌번호가 복사되었습니다.\n1002-931-309185 우리은행")
}

// 신부아버님 계좌번호 복사 
function brideFatherAccountNumber(){
    var bride_father_account = '1002-931-309185 우리은행';
	var textarea = document.createElement("textarea");
	document.body.appendChild(textarea);
	textarea.value = bride_father_account;
	textarea.select();
	document.execCommand("copy");
	document.body.removeChild(textarea);
	alert("계좌번호가 복사되었습니다.\n1002-931-309185 우리은행")
}



// 신랑 계좌번호 복사
function groomAccountNumber(){
	var groom_account = '1002-931-309185 우리은행';
	var textarea = document.createElement("textarea");
	document.body.appendChild(textarea);
	textarea.value = groom_account;
	textarea.select();
	document.execCommand("copy");
	document.body.removeChild(textarea);
	alert("신랑의 계좌번호가 복사되었습니다.\n1002-931-309185 우리은행")
}

// 신랑아버님 계좌번호 복사 
function groomsFatherAccountNumber(){
    var grooms_father_account = '1002-931-309185 우리은행';
	var textarea = document.createElement("textarea");
	document.body.appendChild(textarea);
	textarea.value = grooms_father_account;
	textarea.select();
	document.execCommand("copy");
	document.body.removeChild(textarea);
	alert("계좌번호가 복사되었습니다.\n1002-931-309185 우리은행")
}


// 카카오톡 공유하기
function kakaoShare() {
    Kakao.init('ad4dbad813285bef96fa2897dcc23fae');
    // SDK 초기화 여부를 판단합니다.
    Kakao.isInitialized();
    //console.log(Kakao.isInitialized());
    Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
        title: '수진🤍웅 결혼합니다.',
        description: '2025.11.02\n13시 20분 웨스턴베니비스 신도림',
        imageUrl: 'https://github.com/wj-weddinglog/wj-weddinglog.github.io/blob/main/assets/img/main.jpg?raw=true',
        link: {
            mobileWebUrl: 'https://wj-weddinglog.github.io//#!',
            webUrl: 'https://wj-weddinglog.github.io//#!',
        },
        },
        buttons: [
        {
            title: '모바일 청첩장 보기',
            link: {
            mobileWebUrl: 'https://wj-weddinglog.github.io//#!',
            webUrl: 'https://wj-weddinglog.github.io//#!',
            },
        },
        ],
        // 카카오톡 미설치 시 카카오톡 설치 경로이동
        installTalk: true,
    })
}

function toggleFoldable() {
    var content = document.querySelector('.foldable-content');
    var toggleIcon = document.getElementById('toggleIcon');

    // 펼치기/접기 상태 변경
    if (content.style.display === 'none') {
        content.style.display = 'block';
        toggleIcon.innerText = '▲';
        // 추가로 펼쳐진 상태에서 수행할 동작 추가 가능
    } else {
        content.style.display = 'none';
        toggleIcon.innerText = '▼';
        // 추가로 접힌 상태에서 수행할 동작 추가 가능
    }
}

function toggleFoldable2() {
    var content = document.querySelector('.foldable-content2');
    var toggleIcon = document.getElementById('toggleIcon2');

    // 펼치기/접기 상태 변경
    if (content.style.display === 'none') {
        content.style.display = 'block';
        toggleIcon.innerText = '▲';
        // 추가로 펼쳐진 상태에서 수행할 동작 추가 가능
    } else {
        content.style.display = 'none';
        toggleIcon.innerText = '▼';
        // 추가로 접힌 상태에서 수행할 동작 추가 가능
    }
}

function toggleFoldable3() {
    var content = document.querySelector('.foldable-content3');
    var toggleIcon = document.getElementById('toggleIcon3');

    // 펼치기/접기 상태 변경
    if (content.style.display === 'none') {
        content.style.display = 'block';
        toggleIcon.innerText = '▲';
        // 추가로 펼쳐진 상태에서 수행할 동작 추가 가능
    } else {
        content.style.display = 'none';
        toggleIcon.innerText = '▼';
        // 추가로 접힌 상태에서 수행할 동작 추가 가능
    }
}


// 날짜 카운트다운/카운트업
const targetDate = new Date('2025-11-02T13:20:00+09:00');
function updateTimer() {
    const now = new Date();
    const diff = targetDate - now;
    
    // 디데이 계산
    const diffDays = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    // 경과시간 절대값 계산
    const absDiff = Math.abs(diff);
    
    // 시간 요소 분해
    const days = Math.floor(absDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((absDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((absDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((absDiff % (1000 * 60)) / 1000);
  
    // 디스플레이 업데이트
    updateDisplay(diffDays, days, hours, minutes, seconds);
  }
  
  setInterval(updateTimer, 1000);  