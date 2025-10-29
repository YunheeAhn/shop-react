import React from "react";

const LoginPage = () => {
  return (
    <div>
      <div className="text-cont">
        <h3>로그인</h3>
        <p>
          요청하신 메뉴는 <span>로그인 후 이용 가능</span>한 메뉴 입니다.
        </p>
      </div>

      <div className="login-cont">
        <form action="" name="loginFrm" onSubmit={loginUser} className="login-form">
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
