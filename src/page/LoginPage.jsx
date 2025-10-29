import React from "react";

const LoginPage = () => {
  const loginUser = () => {
    // 매번 리프레시 하는 것 막기(form 태그 작성시 꼭 사용)
    event.preventDefault();

    console.log("login user function issue");
  };

  return (
    <div>
      <div className="text-cont">
        <h3>로그인</h3>
        <p>
          요청하신 메뉴는 <span>로그인 후 이용 가능</span>한 메뉴 입니다.
        </p>
      </div>

      <div className="login-cont">
        <form action="" name="loginFrm" onSubmit={() => loginUser(event)} className="login-form">
          <div className="control">
            <label>이메일</label>
            <input type="text" placeholder="Enter your Email" />
          </div>
          <div className="control">
            <label>비밀번호</label>
            <input type="password" placeholder="Enter your Password" />
          </div>
          <div className="control">
            <button className="login-button" type="submit">
              로그인
            </button>
            <p>회원가입</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
