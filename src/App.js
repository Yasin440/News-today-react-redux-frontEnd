import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Pages/Profile/Profile';
import DetailsOfNews from './Components/Pages/DetailsOfNews/DetailsOfNews';
import ExploreCars from './Components/Pages/ExploreCars/ExploreCars';
import Home from './Components/Pages/Home/Home/Home';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import SignIn from './Components/Pages/Login/SignIn';
import MyOrder from './Components/Pages/Profile/MyOrder/MyOrder';
import AddReview from './Components/Pages/Profile/AddReview/AddReview';
import PrivateAdminRoute from './PrivateRoute/PrivateAdminRoute';
import AddNews from './Components/Pages/Profile/AddNews/AddNews';
import AddAdmin from './Components/Pages/Profile/AddAdmin/AddAdmin';
import ManageAllOrders from './Components/Pages/Profile/ManageAllOrders/ManageAllOrders';
import ManageAllCars from './Components/Pages/Profile/ManageAllCars/ManageAllCars';
import Header from './Components/Shared/Header/Header';


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1300
    });
    AOS.refresh();
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/explore_all_cars' element={<ExploreCars />} />
          <Route path='/profile' element={<Dashboard />}>
            <Route index element={<MyOrder />} />
            <Route path='my_order' element={<MyOrder />} />
            <Route path='profile_makeReview' element={<AddReview />} />
            <Route path='addLatestNews' element={<PrivateAdminRoute><AddNews /></PrivateAdminRoute>} />
            <Route path='add_admin' element={<PrivateAdminRoute><AddAdmin /></PrivateAdminRoute>} />
            <Route path='manage_all_order' element={<PrivateAdminRoute><ManageAllOrders /></PrivateAdminRoute>} />
            <Route path='manage_all_cars' element={<PrivateAdminRoute><ManageAllCars /></PrivateAdminRoute>} />
          </Route>
          <Route path='/newsDetails/:detailId' element={<PrivateRoute><DetailsOfNews /></PrivateRoute>} />
          <Route path='/signIn' element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
