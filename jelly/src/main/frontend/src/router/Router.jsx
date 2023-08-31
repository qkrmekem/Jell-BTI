import { BrowserRouter, Route, Routes } from "react-router-dom"
import StartPage from "@/pages/StartPage"
import Home from "@/pages/Home"
import MyPage from "@/pages/MyPage"
import Kakao from "@/pages/Kakao"
import KakaoRedirect from "@/utils/KakaoRedirect"
import Board from "@/pages/Board/Board"
import Writing from "@/pages/Board/Writing"
import Read from "pages/Board/Read"
import Modify from "pages/Board/Modify"
import Practice from "pages/Questions/Practice"
import Naver from "pages/Naver"
import NaverRedirect from "@/utils/KakaoRedirect"
import GModal from "components/domain/GModal"
import Review from "components/domain/Review"
import Goods from "components/domain/Goods"
import Login from "pages/Login"
import ProductList from "pages/ProductList"
import ReviewList from "pages/ReviewList"
import Result from "pages/Questions/Result"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<StartPage />} />
                <Route path="/kakaologin" element={<Kakao />} />
                <Route path="/oauth/login/kakao" element={<KakaoRedirect />} />
                <Route path="/naverlogin" element={<Naver />} />
                <Route path="oauth2/authorization/naver" element={<NaverRedirect />} />
                <Route path="/mypage" element={<MyPage />}>
                    <Route path="productlist" element={<ProductList />} />
                    <Route path="reviewlist" element={<ReviewList />} />
                </Route>
                <Route path="/home" element={<Home />}>
                    <Route path="login" element={<Login />} />
                    <Route path="goodsModal/:id" element={<GModal />}>
                        <Route path="" element={<Goods />} />
                        <Route path="review" element={<Review />} />
                    </Route>
                </Route>
                <Route path="/board" element={<Board />} />
                <Route path="/writing" element={<Writing />} />
                <Route path="/read" element={<Read />} />
                <Route path="/modify" element={<Modify />} />
                <Route path="/practice" element={<Practice />} />
                <Route path="/result" element={<Result />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;