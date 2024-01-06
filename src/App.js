import React from "react";
import Header from "./components/Header.js/Header";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Footer from "./pages/Footer/Footer";
import Home from "./pages/Home/Home";
import Register from "./pages/Auth/Register";
import { useAuth } from "./context/userContext";
import Error from "./pages/ErrorPage/Error";
import UserDashboard from "./pages/UserDashboard/UserDashboard";
import UserRoutes from "./routes/UserRoutes";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import AdminRoutes from "./routes/AdminRoutes";
import CreateCategory from "./pages/AdminDashboard/CreateCategory";
import CreateProduct from "./pages/AdminDashboard/CreateProduct";
import AllUsers from "./pages/AdminDashboard/AllUsers";
import UserProfile from "./pages/UserDashboard/UserProfile";
import UserOrder from "./pages/UserDashboard/userOrder";
import AllProductsAdmin from "./pages/AdminDashboard/AllProdcutsAdmin";
import Products from "./pages/Products/Products";
import SingleProduct from "./pages/Products/SingleProduct";
import Cart from "./pages/Cart/Cart";
import CopyPage from "./pages/Cart/CopyPage";
import AllOrders from "./pages/AdminDashboard/AllOrders";
import Search from "./pages/Search/Search";
import Categories from "./pages/Categories/Categories";
import CategoryList from "./pages/Categories/CategoryList";
import Contact from "./pages/Contact/Contact";

const App = () => {
  const [auth] = useAuth();
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {!auth?.token && <Route path="/login" element={<Login />} />}
        {!auth?.token && <Route path="/register" element={<Register />} />}

        {/* USER ROUTES */}
        <Route path="/dashboard" element={<UserRoutes />}>
          <Route path="user" element={<UserDashboard />} />
          <Route path="profile" element={<UserProfile />} />
          <Route path="orders" element={<UserOrder />} />
        </Route>

        {/* ADMIN ROUTES */}
        <Route path="/dashboard" element={<AdminRoutes />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="create-category" element={<CreateCategory />} />
          <Route path="create-product" element={<CreateProduct />} />
          <Route path="all-product" element={<AllProductsAdmin />} />
          <Route path="all-orders" element={<AllOrders />} />
          <Route path="users" element={<AllUsers />} />
        </Route>
         
         {/* PUBLIC ROUTES */}
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/search/" element={<Search />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/category/:slug" element={<CategoryList />} />
        <Route path="/copy" element={<CopyPage />} />
        <Route path="/contact" element={<Contact/>}/>

        {/* ERRR HANDLER */}
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
