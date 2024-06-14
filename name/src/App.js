import React from 'react';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './MainPage';
import HangulName from './HangulName';
import { configureStore, createSlice } from '@reduxjs/toolkit';

const mySlice = createSlice({
  name: 'mySlice',
  initialState: [],
  reducers: {
    
  },
});

const store = configureStore({
  reducer: mySlice.reducer, 
});

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/hangulname" element={<HangulName />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
