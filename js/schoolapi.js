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


    for (var i = 0; i < contentList.length; i++) {
      universityName[i] = contentList[i].getElementsByTagName("schoolName")[0].textContent;
      universityCode[i] = contentList[i].getElementsByTagName("seq")[0].textContent;
      campusName[i] = contentList[i].getElementsByTagName("campusName")[0].textContent;
      //console.log("대학명: " + universityName[i] + ", 대학 코드: " + universityCode[i] + ", 캠퍼스구분: " + campusName[i]);
    }

    for (var i = 0; i < contentList.length; i++) {
      var newDiv = document.createElement('div');
      var newText = document.createTextNode(universityName[i] + "(" + campusName[i] + ")");
      var obj = document.getElementById("Input");
      newDiv.appendChild(newText);
      obj.appendChild(newDiv);
    }
  })
  .catch(function(error) {
    console.error("API 요청 중 오류가 발생했습니다.", error);
  });
