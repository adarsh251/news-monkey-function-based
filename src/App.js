import "./App.css";
import React, { Component, useState } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

const App =()=> {
  const apikey=process.env.REACT_APP_NEWSAPP

  const [color, setColor]=useState('black');
  const [backgroundColor, setBackgroundColor] = useState('white'); // Initial background color
  const [theme, setTheme] = useState('light'); // Initial theme (light or dark)
  const [currentCategory, setCurrentCategory] = useState('general'); // Initial category
  const [progress, setProgress] = useState(0);

  function toggleFn() {
    if (theme === "light") {
      setColor('white');
      setTheme('dark');
      setBackgroundColor("#212121");
      document.body.style.backgroundColor = "#212121";
    } else {
      setColor('black');
      setTheme('light');
      setBackgroundColor("white");
      document.body.style.backgroundColor = "white";
    }
  }
    return (
      //<RouterProvider router={router} />
      <Router>
        <div>
          <NavBar
            style={{color,theme,backgroundColor,currentCategory}}
            apikey={apikey}
            toggleFn={toggleFn}
          />
          <LoadingBar
            color={color}
            height={3}
            shadow={false}
            progress={progress}
            onLoaderFinished={() => setProgress(0)}
          />
          <Routes>
            <Route
              path="/"
              element={
                <News
                  setProgress={setProgress}
                  key="home"
                  style={{color,theme,backgroundColor,currentCategory}}
                  apikey={apikey}
                  category="general"
                />
              }
            />
            <Route
              key="business"
              path="/business"
              element={
                <News
                  setProgress={setProgress}
                  key="business"
                  style={{color,theme,backgroundColor,currentCategory}}
                  apikey={apikey}
                  category="business"
                />
              }
            />
            <Route
              path="/entertainment"
              element={
                <News
                  setProgress={setProgress}
                  key="entertainment"
                  style={{color,theme,backgroundColor,currentCategory}}
                  apikey={apikey}
                  category="entertainment"
                />
              }
            />
            <Route
              path="/general"
              element={
                <News
                  setProgress={setProgress}
                  key="general"
                  style={{color,theme,backgroundColor,currentCategory}}
                  apikey={apikey}
                  category="general"
                />
              }
            />
            <Route
              path="/health"
              element={
                <News
                  setProgress={setProgress}
                  key="health"
                  style={{color,theme,backgroundColor,currentCategory}}
                  apikey={apikey}
                  category="health"
                />
              }
            />
            <Route
              path="/science"
              element={
                <News
                  setProgress={setProgress}
                  key="science"
                  style={{color,theme,backgroundColor,currentCategory}}
                  apikey={apikey}
                  category="science"
                />
              }
            />
            <Route
              path="/sports"
              element={
                <News
                  setProgress={setProgress}
                  key="sports"
                  style={{color,theme,backgroundColor,currentCategory}}
                  apikey={apikey}
                  category="sports"
                />
              }
            />
            <Route
              path="/technology"
              element={
                <News
                  setProgress={setProgress}
                  key="technology"
                  style={{color,theme,backgroundColor,currentCategory}}
                  apikey={apikey}
                  category="technology"
                />
              }
            />
          </Routes>
        </div>
      </Router>
    );
}

export default App;


