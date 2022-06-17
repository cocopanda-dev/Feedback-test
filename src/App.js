// npm i uuid (unique ID generator) 
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/Header.jsx';
import FeedbackList from './components/FeedbackList.jsx';
import FeedbackStats from './components/FeedbackStats.jsx';
import FeedbackForm from './components/FeedbackForm.jsx';
import AboutPage from './pages/AboutPage.jsx';
import AboutIconLink from './components/shared/AboutIconLink.jsx';
import { FeedbackProvider } from './context/FeedbackContext.js';


function App() {

  return (
    <FeedbackProvider>
      <Header />
      <div className='container'>
        <Routes> 
          <Route path='/' element={
            <>
              <FeedbackForm />
              <FeedbackStats />
              <FeedbackList />
              <AboutIconLink />
              
            </>
          }
          ></Route>
          
          <Route path='/about' element={<AboutPage />} />

          
        </Routes>
      </div>
    </FeedbackProvider>
  );
}

export default App;
