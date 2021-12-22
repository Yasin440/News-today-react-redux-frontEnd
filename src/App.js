import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Profile from './Components/Pages/Profile/Profile';
import DetailsOfNews from './Components/Pages/DetailsOfNews/DetailsOfNews';
import ExploreCars from './Components/Pages/ExploreCars/ExploreCars';
import Home from './Components/Pages/Home/Home/Home';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import SignIn from './Components/Pages/Login/SignIn';
import MyReadingList from './Components/Pages/Profile/AddedNews/MyReadingList';
import AddReview from './Components/Pages/Profile/AddReview/AddReview';
import PrivateAdminRoute from './PrivateRoute/PrivateAdminRoute';
import AddNews from './Components/Pages/Profile/AddNews/AddNews';
import AddAdmin from './Components/Pages/Profile/AddAdmin/AddAdmin';
import ManageAllNews from './Components/Pages/Profile/ManageAllNews/ManageAllNews';
import Header from './Components/Shared/Header/Header';
import NewsWithTopic from './Components/Pages/NewsWithTopic/NewsWithTopic';


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
          <Route path='/profile' element={<Profile />}>
            <Route index element={<MyReadingList />} />
            <Route path='my_order' element={<MyReadingList />} />
            <Route path='profile_makeReview' element={<AddReview />} />
            <Route path='addLatestNews' element={<PrivateRoute><AddNews /></PrivateRoute>} />
            <Route path='add_admin' element={<PrivateAdminRoute><AddAdmin /></PrivateAdminRoute>} />
            <Route path='manage_all_news' element={<PrivateAdminRoute><ManageAllNews /></PrivateAdminRoute>} />
          </Route>
          <Route path='/newsDetails/:detailId' element={<PrivateRoute><DetailsOfNews /></PrivateRoute>} />
          <Route path='/news/:topic' element={<NewsWithTopic />} />
          <Route path='/signIn' element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
