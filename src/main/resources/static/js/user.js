let index = {
  init: function() {
    $("#btn-save").on("click", () => { // this를 바인딩하기위해서 ()=>{}쓴다.
      this.save();
    });
    $("#btn-login").on("click", () => { // this를 바인딩하기위해서 ()=>{}쓴다.
      this.login();
    });
  },

  save:function() {
    //alert("user의 save함수 호출됨");
    let data = {
      username: $("#username").val(),
      password: $("#password").val(),
      email: $("#email").val(),
    };
    //console.log(data);

    // ajax호출 default가 비동기호출
    // ajax통신을 이용해서 3개의 데이터를 json으로 변경하여 insert요청!
    // ajax가 통신을 성공하고 서버가 json을 리턴해주면 자동으로 자바 오브젝트로 변환해주넹
    $.ajax({
      // 회원가입 수행 요청
      type: "POSt",
      url: "/blog/api/user",
      data: JSON.stringify(data), // http body데이터
      contentType: "application/json; charset=utf-8", //body데이터가 어떤  타입인지(MINE)
      dataType: "json" // 요청을 서버로해서 응답이 왔을 때 기본적으로 모든 것이 문자열 (생긴게 json이라면) => javascript오브젝트로 변경
    }).done(function(resp){
      // 정상일때작동
      alert("회원가입이 완료되었습니다.");
      location.href = "/blog";
    }).fail(function(error){
      //실패일때자동
      alert(JSON.stringify(error));
    }); 
  },

  login:function() {
    //alert("user의 save함수 호출됨");
    let data = {
      username: $("#username").val(),
      password: $("#password").val(),
    };
    // ajax호출 default가 비동기호출
    // ajax통신을 이용해서 3개의 데이터를 json으로 변경하여 insert요청!
    // ajax가 통신을 성공하고 서버가 json을 리턴해주면 자동으로 자바 오브젝트로 변환해주넹
    $.ajax({
      // 회원가입 수행 요청
      type: "POSt",
      url: "/blog/api/user/login",
      data: JSON.stringify(data), // http body데이터
      contentType: "application/json; charset=utf-8", //body데이터가 어떤  타입인지(MINE)
      dataType: "json" // 요청을 서버로해서 응답이 왔을 때 기본적으로 모든 것이 문자열 (생긴게 json이라면) => javascript오브젝트로 변경
    }).done(function(resp){
      // 정상일때작동
      alert("로그인이 완료되었습니다.");
      location.href = "/blog";
    }).fail(function(error){
      //실패일때자동
      alert(JSON.stringify(error));
    }); 
  }

}
index.init();