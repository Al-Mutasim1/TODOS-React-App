import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return <>
    <nav className="navbar navbar-expand-lg navbar-light bg-green ">
            <div className="container  ">
                <div className='d-flex  justify-content-center align-items-center ms-5'>
                <div className="text-center py-2">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-todo-list/check1.webp"
                alt="Check" width="60"/>
              
            </div>
                </div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item me-5">
                           <Link  to={'https://github.com/Al-Mutasim1?tab=repositories'}> <i className="fa-brands fa-github main-text fs-3 ps-4 "></i></Link>
                           <Link to={'https://www.linkedin.com/in/elmoatasem-aly-4a6a641b4/'}><i className="fa-brands fa-linkedin main-text fs-3 ps-4"></i></Link>
                            <Link to={'https://x.com/AlMutasimXR'}><i className="fa-brands fa-square-x-twitter main-text fs-3 ps-4"></i></Link>
                        </li>


                    </ul>

                </div>
            </div>
        </nav>
        <div className=' bg-dark  '>
           
           <div className='d-flex justify-content-center align-items-center pt-5'>
           <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-todo-list/check1.webp"
                alt="Check" width="60"/>
                <h1 className='bolder main-text text-center   ps-3 '>TO DO LIST</h1>
           </div>

                <div className="container d-flex justify-content-center align-items-center  py-5  ">
                    <Link className='test text-decoration-none ' to={'uncompletedtasks'}><button className='  bg-white bolder fw-bolder  main-title p-4 h4 border text-center '>Active Tasks</button></Link>
                    <Link className=' test text-decoration-none ' to={'completedtasks'}><button className=' bg-white bolder fw-bolder main-title  p-4 h4 border  text-center'>Completed Tasks</button></Link>
                    <Link className=' test text-decoration-none ' to={''}><button className=' bg-white bolder fw-bolder main-title  p-4 h4 border  text-center'>Home</button></Link>
                </div>
            </div>
  
  
  </>
}
