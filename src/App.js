import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Member from './pages/Member';
import Coupon from './pages/Coupon';
import Starter from './pages/Starter';
import FrontPage from './pages/FrontPage';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import BrandPage from './pages/BrandPage';
import BrandStores from './pages/BrandStores';
import ArtMagazine from './pages/ArtMagazine';
import MagzArticle from './pages/MagzArticle';
import Course from './pages/Course';
import Exhibition from './pages/Exhibition';
import ExhibitionExplore from './pages/ExhibitionExplore';
import Activity from './pages/Activity';
import ActivityPayment from './pages/ActivityPayment';

import ThemePlanning from './pages/ThemePlanning';
import PwdChanging from './pages/PwdChanging';

import Products from './pages/Products/Products';
import ProductDetail from './pages/Products/ProductDetail';
import Cart from './pages/Cart';

import { CartProvider } from './utils/useCart';
import { CheckListProvider } from './utils/useCheckList';
import { LoginProvider } from './utils/useLogin';

import FavList from './pages/FavList';
import Order from './pages/Order';

import AboutUs from './pages/AboutUs';

function App() {
  return (
    <LoginProvider>
      <CheckListProvider>
        <CartProvider localStorageKey="Cart">
          <Router>
            <>
              <Header />
              <ScrollToTop>
                <Switch>
                  <Route path="/Front">
                    <FrontPage />
                  </Route>
                  <Route path="/Brand">
                    <BrandPage />
                  </Route>
                  <Route path="/BrandStores">
                    <BrandStores />
                  </Route>
                  <Route path="/ArtMagazine">
                    <ArtMagazine />
                  </Route>
                  <Route path="/Coupon">
                    <Coupon />
                  </Route>
                  <Route path="/activitypayment">
                    <ActivityPayment />
                  </Route>
                  <Route path="/activity">
                    <Activity />
                  </Route>
                  <Route path="/member">
                    <Member />
                  </Route>
                  <Route path="/themeplanning">
                    <ThemePlanning />
                  </Route>
                  <Route path="/pwdchanging">
                    <PwdChanging />
                  </Route>
                  <Route path="/product/detail">
                    <ProductDetail />
                  </Route>
                  <Route path="/product">
                    <Products />
                  </Route>
                  <Route path="/cart">
                    <Cart />
                  </Route>
                  <Route path="/fav">
                    <FavList />
                  </Route>
                  <Route path="/order">
                    <Order />
                  </Route>
                  <Route path="/exhibition/:exhibitionId">
                    <Exhibition />
                  </Route>
                  <Route path="/exhibition">
                    <ExhibitionExplore />
                  </Route>
                  <Route exact path="/">
                    <Starter />
                  </Route>
                  <Route exact path="/About">
                    <AboutUs />
                  </Route>
                </Switch>
              </ScrollToTop>
              <Footer />
            </>
          </Router>
        </CartProvider>
      </CheckListProvider>
    </LoginProvider>
  );
}

export default App;
