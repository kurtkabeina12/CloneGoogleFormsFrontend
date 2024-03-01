import React from 'react';
import { Provider } from 'react-redux';
import HomePage from './components/HomePage';
import CreateFormPage from './components/CreateFormPage';
import store from './store/reducers/reducerRoot';

function App() {
  const [currentPage, setCurrentPage] = React.useState('HomePage');

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
  };
  
  return (
    <Provider store={store}>
      <div className='App'>
        {currentPage === 'HomePage' && <HomePage onNavigate={handleNavigation} />}
        {currentPage === 'CreateFormPage' && <CreateFormPage />}
      </div>
    </Provider>
  );
}

export default App;
