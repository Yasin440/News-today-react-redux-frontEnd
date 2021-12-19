import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Pages/Dashboard/Dashboard';
import DetailsOfCar from './Components/Pages/DetailsOfCar/DetailsOfCar';
import ExploreCars from './Components/Pages/ExploreCars/ExploreCars';
import Home from './Components/Pages/Home/Home/Home';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import SignIn from './Components/Pages/Login/SignIn';
import MyOrder from './Components/Pages/Dashboard/MyOrder/MyOrder';
import AddReview from './Components/Pages/Dashboard/AddReview/AddReview';
import PrivateAdminRoute from './PrivateRoute/PrivateAdminRoute';
import AddCar from './Components/Pages/Dashboard/AddCar/AddCar';
import AddAdmin from './Components/Pages/Dashboard/AddAdmin/AddAdmin';
import ManageAllOrders from './Components/Pages/Dashboard/ManageAllOrders/ManageAllOrders';
import ManageAllCars from './Components/Pages/Dashboard/ManageAllCars/ManageAllCars';
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
          <Route path='/dashboard' element={<Dashboard />}>
            <Route index element={<MyOrder />} />
            <Route path='my_order' element={<MyOrder />} />
            <Route path='dashboard_review' element={<AddReview />} />
            <Route path='dashboard_add_car' element={<PrivateAdminRoute><AddCar /></PrivateAdminRoute>} />
            <Route path='add_admin' element={<PrivateAdminRoute><AddAdmin /></PrivateAdminRoute>} />
            <Route path='manage_all_order' element={<PrivateAdminRoute><ManageAllOrders /></PrivateAdminRoute>} />
            <Route path='manage_all_cars' element={<PrivateAdminRoute><ManageAllCars /></PrivateAdminRoute>} />
          </Route>
          <Route path='/carDetails/:detailId' element={<PrivateRoute><DetailsOfCar /></PrivateRoute>} />
          <Route path='/signIn' element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
