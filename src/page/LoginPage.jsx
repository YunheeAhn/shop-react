import React from "react";
import { useNavigate } from "react-router";

const LoginPage = ({ setAuthenticate }) => {
  // 로그인 되면 메인페이지로 돌아가기
  const navigate = useNavigate();
  //
  const loginUser = (event) => {
    // 매번 리프레시 하는 것 막기(form 태그 작성시 꼭 사용)
    event.preventDefault();

    const email = event.target.email.value.trim();
    const password = event.target.password.value.trim();

    // 입력 체크
    if (!email || !password) {
      alert("이메일과 비밀번호를 모두 입력해주세요.");
      return; // 입력이 없으면 로그인 진행 X
    }

    // App.jsx의 setAuthenticate를 true로 변경
    setAuthenticate(true);
    navigate("/");
  };

  return (
    <div className="login-section">
      <div className="text-cont">
        <h3>로그인</h3>
        <p>
          상품페이지는 <span>로그인 후 이용 가능</span>한 메뉴 입니다.
        </p>
      </div>

      <div className="login-cont">
        <form
          action=""
          name="loginFrm"
          onSubmit={(event) => loginUser(event)}
          className="login-form"
        >
          <div className="control">
            <label>이메일</label>
            <input type="email" name="email" placeholder="Enter your Email" />
          </div>
          <div className="control">
            <label>비밀번호</label>
            <input type="password" name="password" placeholder="Enter your Password" />
          </div>
          <div className="control">
            <button className="login-button" type="submit">
              <span>로그인</span>
            </button>
            <p onClick={() => alert("준비중입니다")}>회원가입</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
