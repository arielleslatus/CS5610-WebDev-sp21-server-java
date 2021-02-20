import React from 'react'
import CourseManager from "./componenets/course-manager";
import CourseEditor from "./componenets/course-editor";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
          <Route path="/courses" component={CourseManager} />
          <Route path="/editor" component={CourseEditor} />

      </BrowserRouter>

  );
}

export default App;
