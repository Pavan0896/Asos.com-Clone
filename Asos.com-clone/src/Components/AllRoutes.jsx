import { Route, Routes } from "react-router-dom";
import Men from "../Components/Men";
import Women from "../Components/Women";
import MyAccount from "../Components/MyAccount";
import MyOrder from "../Components/MyOrder";
import SignIn from "../Components/SignIn";
import Home from "../Components/Home";
import ProductDetails from "../Components/ProductDetails";
import WishList from "../Components/WishList";
import Cart from "../Components/Cart";
import Checkout from "../Components/Checkout";
import PrivateRoute from "../Components/PrivateRoute";

import MenProducts from "./MenProducts";
import WomenProducts from "./WomenProducts";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/menproducts" element={<MenProducts/>}/>
        <Route path="/womenproducts" element={<WomenProducts/>}/>
        <Route path="/signIn" element={<SignIn />} />
        <Route
          path="/myAccount"
          element={
            <PrivateRoute>
              <MyAccount />
            </PrivateRoute>
          }
        />
        <Route
          path="/myOrder"
          element={
            <PrivateRoute>
              <MyOrder />
            </PrivateRoute>
          }
        />
        <Route path="/:title" element={<ProductDetails />} />
        <Route path="/wishList" element={<WishList />} />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
        <Route
          path="/checkout"
          element={
            <PrivateRoute>
              <Checkout />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default AllRoutes;
