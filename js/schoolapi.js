const apiKey = "adf19ad501a8fc77860ff1bd60d540a8";
const apiURL = "http://www.career.go.kr/cnet/openapi/getOpenApi";
const params = {
  apiKey: apiKey,
  svcType: "api",
  svcCode: "SCHOOL",
  contentType: "xml",
  gubun: "univ_list",
  thisPage : "1",
  perPage : "444"
};


// API 요청 보내기
fetch(apiURL + "?" + new URLSearchParams(params))
  .then(function(response) {
    return response.text();
  })
  .then(function(data) {
    // XML 데이터 파싱하기
    var parser = new DOMParser();
    var xml = parser.parseFromString(data, "text/xml");

    // 원하는 정보 추출하기
    var contentList = xml.getElementsByTagName("content");
    var universityName = [contentList.length];
    var universityCode = [contentList.length];
    var campusName = [contentList.length];
    var schoolnamefield = document.getElementsByClassName("schoolnamefield");

    for (var i = 0; i < contentList.length; i++) {
      universityName[i] = contentList[i].getElementsByTagName("schoolName")[0].textContent;
      universityCode[i] = contentList[i].getElementsByTagName("seq")[0].textContent;
      campusName[i] = contentList[i].getElementsByTagName("campusName")[0].textContent;
      //console.log("대학명: " + universityName[i] + ", 대학 코드: " + universityCode[i] + ", 캠퍼스구분: " + campusName[i]);
    }


    //학교 이름 데이터 div로 만들어서 숨겨놓기
    //학교검색용
    for (var i = 0; i < contentList.length; i++) {
      var newDiv = document.createElement('a');
      var newText = document.createTextNode(universityName[i] + "(" + campusName[i] + ")");
      var obj = document.getElementById("schoolname");
      newDiv.appendChild(newText);
      newDiv.className = 'schoolnamefield'
      obj.appendChild(newDiv);
      newDiv.style.display = 'none';
    }

    //검색어 필터 함수
    function filter(){
      var search = document.getElementsByClassName("search")[0].value;
      for (var i = 0; i < schoolnamefield.length; i++){
        if(universityName[i].indexOf(search) != -1){
          schoolnamefield[i].style.display = 'flex';
        } else {
          schoolnamefield[i].style.display = 'none';
        }
      }
    }

    //검색 이벤트 리스너 --> 실제 검색시 실행되는 부분
    var sname = document.getElementById("search");
    sname.addEventListener('keyup',filter);

  })
  .catch(function(error) {
    console.error("API 요청 중 오류가 발생했습니다.", error);
  });
