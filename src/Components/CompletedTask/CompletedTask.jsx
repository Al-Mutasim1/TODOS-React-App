import React, { useContext, useEffect, useState } from 'react'
import { taskContext } from '../../Context/TaskContext'
import { Helmet } from 'react-helmet'
import toast from 'react-hot-toast'

export default function CompletedTask() {


  const { deleteTask  , myTask} = useContext(taskContext)




  const [test, setTest] = useState([])


  useEffect(() => {
    if (localStorage.getItem('todosList')) {
      let values = JSON.parse(localStorage.getItem('todosList'))
      setTest(values)

    }


  }, [])



function callDeleteTASK(index){
  

  deleteTask(index); 
  toast.success('Task Completed '); 
  
   test.splice(index , 1 ); 
  
   localStorage.setItem('todosList' ,JSON.stringify(test) )
  
}




  return <>

    <Helmet>
      <title>Completed Tasks Page</title>
      <meta name="description" content="To Do List" />
    </Helmet>
    <div className="gradient-custom min-vh-100">
      <div className="container ">
        <div className="row">

          {test?.map((task, index) => <div key={index} id={index} className='col-md-4  '>
            <div className='card my-3 d-flex'>
              <div className='card-body  '>
                <div id='formAdd' className=''>
                  <h5 className='card-title bg-green  py-3 text-white text-center fw-bold '>{task.title}</h5>
                  <hr />
                  <div className='d-flex justify-content-between'>
                    <p className='card-text lead'>{task.details}</p>
                    <h6 className='fw-bolder secondary-text'><span ></span>Finished ✅</h6>
                  </div>
                  <div className=' text-center '>
                    <button onClick={() =>  callDeleteTASK(index)} className='btn btn-outline-success '>Completed</button>
                  </div>


                </div>

              </div>
            </div>
          </div>)}

        </div>
      </div>
    </div>

  </>
}