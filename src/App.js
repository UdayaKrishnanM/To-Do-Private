import "./App.css";

// React & React Router & Hooks
import React, { useState, useCallback, useEffect } from "react";
import { Routes, Route } from "react-router-dom";


// React Bootstrap & CSS & Icons

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import axios from "axios";

import Login from "./Components/Login";
import Register from "./Components/Register";
import ToDoPage from "./ToDoPage";

function App() {
    const [setIsScrolled] = useState(false); // state that holds the scroll status
    const [tasks, setTasks] = useState([]); // state that holds the tasks array from the local storage (if exists), otherwise an empty array
    const[loginToken] = useState(()=>{
        return localStorage.getItem('token')?true:false;
    })
    const getData = useCallback(() => {
        axios.get('http://localhost:3002/task/').then((res) => {
            setTasks(res.data);
          })
          .catch((e) => {
            console.log(e);
          });
      }, [setTasks])

      useEffect(() => {
        getData();
      }, [getData]);

    window.addEventListener("scroll", () => {
        if (window.scrollY > 10) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    });

    return <>  
        {loginToken &&
            <Routes>
                <Route exact  path="/" element={<Login />} />
                <Route path="/signup" element={<Register />} />
                <Route path="/todo" element={<ToDoPage />} />
            </Routes>
        }
    </>;
}

export default App;
