import React from 'react'
import CourseManager from "./componenets/course-manager";
import CourseEditor from "./componenets/course-editor";
import { BrowserRouter, Route, Link } from "react-router-dom";


function App() {
  return (
      <BrowserRouter>
          <Route path="/courses" render={() => <CourseManager />} />
          <Route path="/editor" render={(props) => <CourseEditor {...props}/>} />
      </BrowserRouter>

  );
}

export default App;
