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


// BGM
document.getElementById('playMusicBtn').addEventListener('click', function() {
    var audio = document.getElementById('bgm');
    audio.play();
    this.style.display = 'none'; // 버튼 숨기기
});


// 달력&디데이
// 결혼식 날짜: 2025년 11월 2일 13시 20분
const weddingDate = new Date('2025-11-02T13:20:00+09:00');

// 달력 생성 함수
function renderCalendar(year, month, day) {
  const calendarBody = document.getElementById('calendar-body');
  calendarBody.innerHTML = '';

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);

  let row = document.createElement('tr');
  // 첫 주 빈칸
  for (let i = 0; i < firstDay.getDay(); i++) {
    row.appendChild(document.createElement('td'));
  }

  for (let date = 1; date <= lastDay.getDate(); date++) {
    const cell = document.createElement('td');
    cell.textContent = date;

    // 오늘 날짜 강조
    const today = new Date();
    if (
      date === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear()
    ) {
      cell.classList.add('today');
    }

    // 결혼식 날짜 강조
    if (date === day) {
      cell.classList.add('selected');
    }

    row.appendChild(cell);

    // 토요일마다 줄바꿈
    if ((firstDay.getDay() + date) % 7 === 0) {
      calendarBody.appendChild(row);
      row = document.createElement('tr');
    }
  }
  // 마지막 줄 남은 칸 채우기
  if (row.children.length > 0) {
    for (let i = row.children.length; i < 7; i++) {
      row.appendChild(document.createElement('td'));
    }
    calendarBody.appendChild(row);
  }
}

// 카운트다운 함수
function updateCountdown() {
  const now = new Date();
  let diff = weddingDate - now;

  let days, hours, minutes, seconds;
  if (diff > 0) {
    days = Math.floor(diff / (1000 * 60 * 60 * 24));
    hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    minutes = Math.floor((diff / (1000 * 60)) % 60);
    seconds = Math.floor((diff / 1000) % 60);
  } else {
    days = hours = minutes = seconds = 0;
  }

  document.getElementById('dday-days').textContent = days;
  document.getElementById('dday-hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('dday-minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('dday-seconds').textContent = String(seconds).padStart(2, '0');
  document.getElementById('dday-text').textContent = days;
}

// 초기 렌더링
document.addEventListener('DOMContentLoaded', function() {
  renderCalendar(2025, 10, 2); // 2025년 11월(10), 2일
  updateCountdown();
  setInterval(updateCountdown, 1000);
});

// 갤러리
// 이미지 파일 경로 배열 (직접 추가하거나, 규칙적이면 for문 사용)
const imageCount = 10; // 이미지 개수
const imageBasePath = "assets/img/gallery/"; // 이미지 폴더 경로

// 슬라이드와 썸네일 동적 생성
const slideshow = document.getElementById('slideshow-container');
const thumbnails = document.getElementById('gallery-thumbnails');

for (let i = 1; i <= imageCount; i++) {
  // 슬라이드 이미지
  const slideDiv = document.createElement('div');
  slideDiv.className = 'mySlides gfade';
  const img = document.createElement('img');
  img.src = `${imageBasePath}${i}.jpg`;
  img.alt = `갤러리 이미지 ${i}`;
  img.style.width = "100%";
  slideDiv.appendChild(img);
  slideshow.appendChild(slideDiv);

  // 썸네일 이미지
  const thumb = document.createElement('img');
  thumb.className = 'thumbnail';
  thumb.src = `${imageBasePath}${i}.jpg`;
  thumb.alt = `썸네일${i}`;
  // 썸네일 클릭 이벤트 동적 할당
  thumb.addEventListener('click', function() {
    currentSlide(i);
  });
  thumbnails.appendChild(thumb);
}

// 슬라이드 함수 (기존과 동일)
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  const thumbs = document.getElementsByClassName("thumbnail");
  if (slides.length === 0) return;
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < thumbs.length; i++) {
    thumbs[i].classList.remove("active");
  }
  slides[slideIndex-1].style.display = "block";
  thumbs[slideIndex-1].classList.add("active");
}

// 이전/다음 버튼 동적 생성
const prevBtn = document.createElement('a');
prevBtn.className = 'prev';
prevBtn.innerHTML = '&#10094;';
prevBtn.onclick = function() { plusSlides(-1); };
slideshow.appendChild(prevBtn);

const nextBtn = document.createElement('a');
nextBtn.className = 'next';
nextBtn.innerHTML = '&#10095;';
nextBtn.onclick = function() { plusSlides(1); };
slideshow.appendChild(nextBtn);

// 자동 슬라이드 (원하면 아래 주석 해제)
//setInterval(() => { plusSlides(1); }, 5000);