
import React, { createContext, useEffect, useState } from 'react'



export const taskContext = createContext();



export default function TaskContextProvider({ children }) {

  const [completedTask, setCompletedTask] = useState([])

  const [myTask, setmyTask] = useState([])
  const [test, setTest] = useState([])

  function deleteTask(index) {
    myTask.splice(index, 1);
    localStorage.setItem('jsonTask', JSON.stringify(myTask));
    setmyTask(JSON.parse(localStorage.getItem('jsonTask')));
  
    
    console.log(index);


  }
  return <taskContext.Provider value={{ test, setTest, myTask, setmyTask, deleteTask, completedTask, setCompletedTask }}>
    {children}
  </taskContext.Provider>
}
