import { useEffect, useState } from "react";
import { Routes, Route } from "react-router";
import "./App.css";
import Navbar from "./component/Navbar";
import ProductAll from "./page/ProductAll";
import ProductDetail from "./page/ProductDetail";
import LoginPage from "./page/LoginPage";
import PrivateRoute from "./route/PrivateRoute";

// 1. 전체 상품페이지, 로그인페이지, 상품 상세페이지
// 2. 전체 상품페이지에서는 전체 상품을 볼 수 있다
// 3. 로그인 버튼을 누르면 로그인 페이지가 나온다.
// 4. 로그인이 안되어 있을 경우 상품 디테일보기를 누르면 로그인 페이지가 먼저 나온다.
// 5. 로그인이 되어 있을 경우 상품 디테일 페이지를 볼 수 있다.
// 6. 로그아웃 버튼을 클릭하면 로그아웃이 된다.
// 7. 로그아웃이 되면 상품 디테일 페이지를 볼 수 없고, 다시 로그인 페이지를 보여준다.
function App() {
  // 로그인 한 유저인지 아닌지 상태 확인
  const [authenticate, setAuthenticate] = useState(false); // false->로그인X
  useEffect(() => {
    console.log("aaa", authenticate);
  }, [authenticate]);
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="content">
        <Routes>
          <Route path="/" element={<ProductAll />} />
          <Route path="/login" element={<LoginPage setAuthenticate={setAuthenticate} />} />
          <Route path="/product/:id" element={<PrivateRoute authenticate={authenticate} />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
