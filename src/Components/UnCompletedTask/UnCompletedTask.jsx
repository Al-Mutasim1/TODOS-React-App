import React, { useContext, useEffect, useState } from 'react'
import { taskContext } from '../../Context/TaskContext'
import { Helmet } from 'react-helmet'

export default function UnCompletedTask() {

  const { myTask } = useContext(taskContext)
  const [unCompletedTask, setUnCompletedTask ] = useState([])

  useEffect(() => {
    
    const unCompleted = JSON.parse(localStorage.getItem('unCompletedTask'));
    let unComValues = [...unCompletedTask , unCompleted]
    setUnCompletedTask(unComValues)

  }, [])


  return <>
  <Helmet >
      <title>Completed Tasks Page</title>
      <meta name="description" content="To Do List" />
    </Helmet>

    <div className="gradient-custom min-vh-100">
      <div className="container ">
        <div className="row">

          {myTask?.map((task, index) => !task.isCompleted? <div key={index} id={index} className='col-md-4  '>
            <div className='card my-3'>
              <div className='card-body  '>
                <div id='formAdd' className=''>
                  <h5 className='card-title bg-green  py-3 text-white text-center fw-bold '>{task.title}</h5>
                  <hr />
                  <div className='d-flex justify-content-between'>
                    <p className='card-text lead'>{task.details}</p>
                    <h6 className='fw-bolder secondary-text'><span ></span> progress</h6>
                  </div>


                </div>

              </div>
            </div>
          </div> : '' )}

          </div>
      </div>
      </div>

    </>
  
  
  

}
