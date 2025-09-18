/*!
* Start Bootstrap - Stylish Portfolio v6.0.6 (https://startbootstrap.com/theme/stylish-portfolio)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-stylish-portfolio/blob/master/LICENSE)
*/


function showToast(message) {
  const toast = document.createElement("div");
  toast.innerText = message;
  toast.style.cssText = `
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #333;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    z-index: 9999;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
    text-align: center;
  `;
  document.body.appendChild(toast);

  // 나타나기
  setTimeout(() => {
    toast.style.opacity = "1";
  }, 10);

  // 사라지기
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.addEventListener('transitionend', () => toast.remove());
  }, 2000);
}

// 링크 복사
function copyLink(){
    var url = 'https://wj-weddinglog.github.io/';
    navigator.clipboard.writeText(url)
        .then(() => {
            showToast("링크가 복사되었습니다.\n널리널리 퍼뜨려주세요💕");
        })
        .catch(err => {
            showToast("계좌 복사 실패: " + err);
        });
}

// 신부 계좌번호 복사
function brideAccountNumber(){
    var bride_account = "1002-843-110250 우리은행";
    navigator.clipboard.writeText(bride_account)
        .then(() => {
            showToast("계좌번호가 복사되었습니다.\n" + bride_account);
        })
        .catch(err => {
            showToast("복사 실패: " + err);
        });
}
// 신부아버님 계좌번호 복사
function brideFatherAccountNumber(){
    var bride_father_account = "038701-04-079985 국민은행";
    navigator.clipboard.writeText(bride_father_account)
        .then(() => {
            showToast("계좌번호가 복사되었습니다.\n" + bride_father_account);
        })
        .catch(err => {
            showToast("복사 실패: " + err);
        });
}
// 신부어머님 계좌번호 복사
function brideMotherAccountNumber(){
    var bride_mother_account = "243-078544-00107 하나은행";
    navigator.clipboard.writeText(bride_mother_account)
        .then(() => {
            showToast("계좌번호가 복사되었습니다.\n" + bride_mother_account);
        })
        .catch(err => {
            showToast("복사 실패: " + err);
        });
}

// 신랑 계좌번호 복사
function groomAccountNumber(){
    var groom_account = "1002-931-309185 우리은행";
    navigator.clipboard.writeText(groom_account)
        .then(() => {
            showToast("계좌번호가 복사되었습니다.\n" + groom_account);
        })
        .catch(err => {
            showToast("복사 실패: " + err);
        });
}
// 신랑아버님 계좌번호 복사
function groomsFatherAccountNumber(){
    var groom_account = "1002-931-309185 우리은행";
    navigator.clipboard.writeText(groom_account)
        .then(() => {
            showToast("계좌번호가 복사되었습니다.\n" + groom_account);
        })
        .catch(err => {
            showToast("복사 실패: " + err);
        });
}
// 신랑아버님 계좌번호 복사
function groomsMotherAccountNumber(){
    var groom_account = "1002-931-309185 우리은행";
    navigator.clipboard.writeText(groom_account)
        .then(() => {
            showToast("계좌번호가 복사되었습니다.\n" + groom_account);
        })
        .catch(err => {
            showToast("복사 실패: " + err);
        });
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
          title: '웅🤍수진 결혼합니다💍',
          description: '2025년 11월 2일 (일) 13시 20분\n위스턴베니비스 신도림',
          imageUrl: 'https://github.com/wj-weddinglog/wj-weddinglog.github.io/blob/main/assets/img/link-main.jpeg?raw=true',
          link: {
            mobileWebUrl: 'https://wj-weddinglog.github.io',
            webUrl: 'https://wj-weddinglog.github.io',
          },
        },
        buttons: [
          {
            title: '모바일 청첩장 보기',
            link: {
              mobileWebUrl: 'https://wj-weddinglog.github.io',
              webUrl: 'https://wj-weddinglog.github.io',
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


//----- 카운트 다운 함수 시작 -----//
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
//----- 카운트 다운 함수 끝 -----//


//----- BGM 함수 시작 -----//
document.getElementById('playMusicBtn').addEventListener('click', function() {
    var audio = document.getElementById('bgm');
    audio.play();
    this.style.display = 'none'; // 버튼 숨기기
});
//----- BGM 함수 끝 -----//


//----- 달력 & 디데이 함수 시작 -----//
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

    // 오늘 날짜 강조
    const today = new Date();
    if (
      date === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear()
    ) {
      cell.classList.add('today');
    }

    // 결혼식 날짜 강조(빨간 하트)
    if (date === day) {
      cell.classList.add('heart-day');
      const span = document.createElement('span');
      span.textContent = date;
      cell.textContent = '';
      cell.appendChild(span);
    } else {
      cell.textContent = date;
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
//----- 달력 & 디데이 함수 끝 -----//


//----- 갤러리 함수 시작 -----//
document.addEventListener('DOMContentLoaded', function() {
    //----- 갤러리 함수 시작 -----//
    const imageCount = 27; // 전체 이미지 개수
    const imageBasePath = "assets/img/gallery/";
    const galleryRow = document.getElementById('gallery-row');

    // 실제 이미지 경로 대신 플레이스홀더 이미지 사용
    const allImageUrls = Array.from({ length: imageCount }, (_, i) => `${imageBasePath}${i + 1}.jpeg`);
    // 새 창에서 접근할 수 있도록 window 객체에 할당
    window.allImageUrls = allImageUrls;

    // 함수: 이미지 렌더링
    function renderAllImages() {
        const fragment = document.createDocumentFragment();
        for (let i = 0; i < allImageUrls.length; i++) {
            const img = document.createElement('img');
            img.src = allImageUrls[i];
            img.alt = `갤러리 이미지 ${i + 1}`;
            img.dataset.index = i;
            img.loading = 'lazy'; // 이미지 지연 로딩
            img.addEventListener('click', function(e) {
                e.stopPropagation();
                // 새 창으로 이미지를 여는 함수 호출
                openImageInNewWindow(Number(this.dataset.index));
            });
            fragment.appendChild(img);
        }
        galleryRow.appendChild(fragment);
    }

    // 모든 이미지 렌더링
    renderAllImages();

    // --- 새 창으로 이미지 보기 스크립트 (모바일 호환성 개선) ---
    function openImageInNewWindow(idx) {
        // 고정된 창 크기를 제거하여 모바일 환경에 맞게 유연하게 조정되도록 함
        const viewerWindow = window.open('', '_blank', 'resizable=yes,scrollbars=yes');
        
        if (!viewerWindow) {
            alert('팝업이 차단되었습니다. 팝업을 허용해주세요.');
            return;
        }

        const viewerHTML = `
            <!DOCTYPE html>
            <html lang="ko">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
                <title>이미지 뷰어</title>
                <style>
                    body { margin: 0; background-color: #212529; display: flex; justify-content: center; align-items: center; height: 100vh; overflow: hidden; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; }
                    #image-container { position: relative; width: 100%; height: 100%; display: flex; justify-content: center; align-items: center; }
                    img { max-width: 95vw; max-height: 95vh; object-fit: contain; border-radius: 4px; box-shadow: 0 0 20px rgba(0,0,0,0.5); user-select: none; -webkit-user-drag: none; }
                    .btn { position: absolute; color: white; cursor: pointer; user-select: none; z-index: 10; font-weight: bold; text-shadow: 0 1px 4px rgba(0,0,0,0.7); transition: color 0.2s; }
                    .btn:hover { color: #ddd; }
                    #close-btn { top: 15px; right: 25px; font-size: 2rem; z-index: 11; /* 수정: z-index를 높여 최상단에 표시 */ }
                    
                    /* 네비게이션 영역 스타일 */
                    #prev-area, #next-area {
                        position: absolute;
                        top: 0;
                        height: 100%;
                        width: 50%;
                        z-index: 10;
                        cursor: pointer;
                    }
                    #prev-area { left: 0; }
                    #next-area { right: 0; }
                </style>
            </head>
            <body>
                <span class="btn" id="close-btn">&times;</span>
                <div id="image-container">
                    <img id="viewer-img" src="" alt="확대 이미지">
                    <div id="prev-area"></div>
                    <div id="next-area"></div>
                </div>
                <script>
                    document.addEventListener('DOMContentLoaded', function() {
                        const imgElement = document.getElementById('viewer-img');
                        const closeBtn = document.getElementById('close-btn');
                        const imageContainer = document.getElementById('image-container');
                        const prevArea = document.getElementById('prev-area');
                        const nextArea = document.getElementById('next-area');

                        if (!window.opener || !window.opener.allImageUrls) {
                            document.body.innerHTML = '<h1>오류: 갤러리 정보에 접근할 수 없습니다.</h1>';
                            return;
                        }

                        const allImageUrls = window.opener.allImageUrls;
                        let currentIndex = ${idx};

                        function showImage(index) {
                            if (index < 0) {
                                index = allImageUrls.length - 1;
                            } else if (index >= allImageUrls.length) {
                                index = 0;
                            }
                            currentIndex = index;
                            imgElement.src = allImageUrls[currentIndex];
                            document.title = \`이미지 \${currentIndex + 1} / \${allImageUrls.length}\`;
                        }

                        // 이벤트 리스너
                        prevArea.addEventListener('click', (e) => { e.stopPropagation(); showImage(currentIndex - 1); });
                        nextArea.addEventListener('click', (e) => { e.stopPropagation(); showImage(currentIndex + 1); });
                        closeBtn.addEventListener('click', () => window.close());

                        // 키보드 이벤트
                        document.addEventListener('keydown', function(e) {
                            if (e.key === 'ArrowLeft') showImage(currentIndex - 1);
                            else if (e.key === 'ArrowRight') showImage(currentIndex + 1);
                            else if (e.key === 'Escape') window.close();
                        });

                        // --- 스와이프 기능 ---
                        let touchStartX = 0;
                        imageContainer.addEventListener('touchstart', (e) => {
                            touchStartX = e.touches[0].clientX;
                        }, { passive: true });

                        imageContainer.addEventListener('touchend', (e) => {
                            const touchEndX = e.changedTouches[0].clientX;
                            const deltaX = touchEndX - touchStartX;

                            if (deltaX > 50) { // 오른쪽으로 스와이프
                                showImage(currentIndex - 1);
                            } else if (deltaX < -50) { // 왼쪽으로 스와이프
                                showImage(currentIndex + 1);
                            }
                        }, { passive: true });


                        showImage(currentIndex);
                    });
                <\/script>
            </body>
            </html>
        `;
        
        viewerWindow.document.open();
        viewerWindow.document.write(viewerHTML);
        viewerWindow.document.close();
    }
    //----- 갤러리 함수 끝 -----//
});


//----- 페이드 함수 시작 -----//
document.addEventListener('DOMContentLoaded', () => {
    // 페이드인 효과를 적용할 모든 요소를 선택합니다.
    const fadeInElements = document.querySelectorAll('.fade-in');

    // Intersection Observer 생성 시 옵션 설정
    const observerOptions = {
        root: null, // 뷰포트를 기준으로 설정
        rootMargin: '0px',
        threshold: 0.25 // 요소가 10% 보였을 때 콜백 실행
    };

    // Intersection Observer 콜백 함수
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            // entry.isIntersecting은 요소가 뷰포트와 교차하는지 여부를 나타내는 boolean 값입니다.
            if (entry.isIntersecting) {
                // 요소가 화면에 보이면 'is-visible' 클래스를 추가합니다.
                entry.target.classList.add('is-visible');
            } else {
                // 요소가 화면에서 사라지면 'is-visible' 클래스를 제거하여 효과를 초기화합니다.
                entry.target.classList.remove('is-visible');
            }
        });
    };

    // Intersection Observer 인스턴스 생성
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // 각 페이드인 요소에 대해 관찰을 시작합니다.
    fadeInElements.forEach(el => observer.observe(el));
});
//----- 페이드 함수 끝 -----//

document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});


//----- 더블터치 금지 -----//
document.addEventListener('touchstart', function(event) {
  if (event.touches.length > 1) {
    event.preventDefault();
  }
}, { passive: false });
//----- 더블터치 금지 -----//