const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
const options = { //지도를 생성할 때 필요한 기본 옵션
    center: new kakao.maps.LatLng(37.49838, 126.68432), //지도의 중심좌표.
    level: 9//지도의 레벨(확대, 축소 정도)
};


const map = new kakao.maps.Map(container, options);


// 마커가 표시될 위치입니다
const jungPosition = new kakao.maps.LatLng(37.47370, 126.62157);
const dongPosition = new kakao.maps.LatLng(37.47383, 126.64324);
const michuholPosition = new kakao.maps.LatLng(37.46360, 126.65058);
const yeonsuPosition = new kakao.maps.LatLng(37.40994, 126.67795);
const namdongPosition = new kakao.maps.LatLng(37.44711, 126.73190);
const bupyeongPosition = new kakao.maps.LatLng(37.50690, 126.72194);
const gyeyangPosition = new kakao.maps.LatLng(37.53742, 126.73769);
const seoguPostiion = new kakao.maps.LatLng(37.53921, 126.67560);

// 마커를 생성합니다
const jung_marker = new kakao.maps.Marker({
    position: jungPosition
});
const dong_marker = new kakao.maps.Marker({
    position: dongPosition
});
const michuhol_marker = new kakao.maps.Marker({
    position: michuholPosition
});
const yeonsu_marker = new kakao.maps.Marker({
    position: yeonsuPosition
});
const namdong_marker = new kakao.maps.Marker({
    position: namdongPosition
});
const bupyeong_marker = new kakao.maps.Marker({
    position: bupyeongPosition
});
const gyeyang_marker = new kakao.maps.Marker({
    position: gyeyangPosition
});
const seogu_marker = new kakao.maps.Marker({
    position: seoguPostiion
});

// 마커가 지도 위에 표시되도록 설정합니다
jung_marker.setMap(map);
dong_marker.setMap(map);
michuhol_marker.setMap(map);
yeonsu_marker.setMap(map);
namdong_marker.setMap(map);
bupyeong_marker.setMap(map);
gyeyang_marker.setMap(map);
seogu_marker.setMap(map);

const jung_Content = '<div class="mapinfo" style="padding:5px;"><img class="maplogo" src="../img/joun.png" alt="logo"><a href="#0" class="mapA">중구</a><br></div>', //인포윈도우
    jung_Position = new kakao.maps.LatLng(37.47370, 126.62157); //인포윈도우 표시 위치입니다
const dong_Content = '<div style="padding:5px;"><img class="maplogo" src="../img/dong.png" alt="logo"><a href="#1" class="mapA">동구</a></div>',
    dong_Position = new kakao.maps.LatLng(37.47383, 126.64324);
const michuhol_Content = '<div style="padding:5px;"><img class="maplogo" src="../img/michu.png" alt="logo"><a href="#2" class="mapA">미추홀구</a></div>',
    michuhol_Position = new kakao.maps.LatLng(37.46360, 126.65058);
const yeonsu_Content = '<div style="padding:5px;"><img class="maplogo" src="../img/yeon.png" alt="logo"><a href="#3" class="mapA">연수구</a></div>',
    yeonsu_Position = new kakao.maps.LatLng(37.40994, 126.67795);
const namdong_Content = '<div style="padding:5px;"><img class="maplogo" src="../img/namd.png" alt="logo"><a href="#4" class="mapA">남동구</a></div>',
    namdong_Position = new kakao.maps.LatLng(37.44711, 126.73190);
const bupyeong_Content = '<div style="padding:5px;"><img class="maplogo" src="../img/bupy.png" alt="logo"><a href="#5" class="mapA">부평구</a></div>',
    bupyeong_Position = new kakao.maps.LatLng(37.50690, 126.72194);
const gyeyang_Content = '<div style="padding:5px;"><img class="maplogo" src="../img/geyon.png" alt="logo"><a href="#6" class="mapA">계양구</a></div>',
    gyeyang_Position = new kakao.maps.LatLng(37.53742, 126.73769);
const seogu_Content = '<div style="padding:5px;"><img class="maplogo" src="../img/seog.png" alt="logo"><a href="#7" class="mapA">서구</a></div>',
    seogu_Position = new kakao.maps.LatLng(37.53921, 126.67560);

// 인포윈도우를 생성합니다
const jung_window = new kakao.maps.InfoWindow({
    position : jung_Position,
    content : jung_Content
});
const dong_window = new kakao.maps.InfoWindow({
    position : dong_Position,
    content : dong_Content
});
const michuhol_window = new kakao.maps.InfoWindow({
    position : michuhol_Position,
    content : michuhol_Content
});
const yeonsu_window = new kakao.maps.InfoWindow({
    position : yeonsu_Position,
    content : yeonsu_Content
});
const namdong_window = new kakao.maps.InfoWindow({
    position : namdong_Position,
    content : namdong_Content
});
const bupyeong_window = new kakao.maps.InfoWindow({
    position : bupyeong_Position,
    content : bupyeong_Content
});
const gyeyang_window = new kakao.maps.InfoWindow({
    position : gyeyang_Position,
    content : gyeyang_Content
});
const seogu_window = new kakao.maps.InfoWindow({
    position : seogu_Position,
    content : seogu_Content
});

jung_window.open(map, jung_marker);
dong_window.open(map, dong_marker);
michuhol_window.open(map, michuhol_marker);
yeonsu_window.open(map, yeonsu_marker);
namdong_window.open(map, namdong_marker);
bupyeong_window.open(map, bupyeong_marker);
gyeyang_window.open(map, gyeyang_marker);
seogu_window.open(map, seogu_marker);
