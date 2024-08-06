import React, { useContext, useEffect, useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import toast, { Toaster } from 'react-hot-toast';
import { taskContext } from './../../Context/TaskContext';
import Confetti from 'react-confetti'
import { Helmet } from 'react-helmet';




export default function Home() {



    const updateForm = document.getElementById('updateForm')
    const addForm = document.getElementById('addForm');
    const updateDetails = document.getElementById('updateDetails');
    const updateTitle = document.getElementById('updateTitle')

    const [theIndex, setTheIndex] = useState(0)

    const { setmyTask, myTask, setCompletedTask, completedTask ,    deleteTask } = useContext(taskContext)

    const [congrats, setCongrats] = useState(false)

    const [unCompletedTask, setUnCompletedTask] = useState([]);





    useEffect(() => {
        if (localStorage.getItem('jsonTask')) {
            setmyTask(JSON.parse(localStorage.getItem('jsonTask')));

        }


    }, [completedTask])







    const validate = Yup.object({
        title: Yup.string().required('Title is required'),
        details: Yup.string().required('Details is required')
    })



    function CallDeleteTask(index) {

        deleteTask(index)
        toast.success('Task Deleted');
        unCompletedTask.splice(index , 1)
        localStorage.setItem('unCompletedTask', JSON.stringify(unCompletedTask))
    }


    function submitForm(values) {
        const todos = [...myTask, values]
        setmyTask(todos);

        localStorage.setItem('jsonTask', JSON.stringify(todos))

        console.log(myTask);
        toast.success('Task Added ✅')

        let complete = JSON.parse(localStorage.getItem('todos'));
        let completeTask = JSON.parse(localStorage.getItem('jsonTask'));

        const FilteredArr = completeTask.filter((task) => task !== complete);
        setUnCompletedTask([...unCompletedTask, FilteredArr])

        localStorage.setItem('unCompletedTask', JSON.stringify(FilteredArr));

        formik.resetForm();
    }



    const formik = useFormik({

        initialValues: {
            title: '',
            details: '',
            isCompleted: false,



        }, validationSchema: validate,
        onSubmit: submitForm,

    },)


    const updateFormik = useFormik({
        initialValues: {
            title: '',
            details: '',

        }, validationSchema: validate,

        onSubmit: updateTask,
    })



    function updateTask(values) {

        console.log(values);
        console.log(theIndex);


        myTask.splice(theIndex, 1, values);
        localStorage.setItem('jsonTask', JSON.stringify(myTask))
        setmyTask(JSON.parse(localStorage.getItem('jsonTask')))
        toast.success('Task Updated Successfully ✅');
        addForm.classList.remove('d-none')
        updateForm.classList.add('d-none');

    }



    function showUpdateTask(index) {


        addForm.classList.add('d-none')
        updateForm.classList.remove('d-none');
        updateTitle.value = myTask[index].title;
        updateDetails.value = myTask[index].details;
        setTheIndex(index)
        console.log(myTask[index].title);


    }


    function check(event) {


        const button = event.target;
        const index = button.getAttribute('data-index');
        myTask[index].isCompleted = true;


        console.log(myTask[index].isCompleted);

        if (myTask[index].isCompleted) {
            let t = myTask?.filter((task, id) => task.isCompleted);
            setCompletedTask([...completedTask, t])
            myTask.splice(index, 1, myTask[index])
            localStorage.setItem('jsonTask', JSON.stringify(myTask))
            console.log(t);
            console.log(completedTask);
            localStorage.setItem('todosList', JSON.stringify(t))
            button.classList.add('d-none');
            let unCom = myTask.filter((unComTask) => !unComTask.isCompleted);
            let unCompletedValues = [...unCompletedTask, unCom]
            setUnCompletedTask(unCompletedValues)
            localStorage.setItem('unCompletedTask', JSON.stringify(unCompletedValues))

        }

    }








    return <>


        <Helmet>
            <title>Home Page</title>
            <meta name="description" content="To Do List" />
        </Helmet>

        <div className='gradient-custom min-vh-100'>


            {congrats ? <Confetti /> : ''}



            <div className='   py-5'>


                <form id='addForm' onSubmit={formik.handleSubmit} className="addTask w-25 p-0  bg-main  mx-auto form-control p-3  ">
                    <div className=" mb-3  ">
                        <label htmlFor="title" className="form-label ps-2 m-0 ">Title:</label>
                        <input onChange={formik.handleChange} onBlur={formik.handleBlur} name='title' value={formik.values.title} type="text" className="form-control w-50" id="title" placeholder="" />
                        {formik.touched.title && formik.errors.title ? <div className='alert alert-danger p-1 mt-2 w-50'>{formik.errors.title}</div> : null}
                    </div>


                    <div className=" mb-3  ">
                        <label htmlFor="details" className="form-label ps-2 m-0 ">Details:</label>
                        <textarea onChange={formik.handleChange} onBlur={formik.handleBlur} name='details' value={formik.values.details} type="text" className="form-control " id="details" placeholder="write your task here" rows={2} />
                        {(formik.touched.details && formik.errors.details) ? <div className='alert alert-danger p-1 mt-2'>{formik.errors.details}</div> : null}

                    </div>

                    <button disabled={!(formik.isValid && formik.dirty)} type='submit' className='btn main-text fw-bold addBtn bg-green myBtn  w-100 text-center mx-auto '>Add Task</button>
                </form>


                {/* Updatin Form---------------- */}
                <form id='updateForm' onSubmit={updateFormik.handleSubmit} className="addTask w-25 p-0  bg-main  mx-auto form-control p-3 d-none ">
                    <div className=" mb-3  ">
                        <label htmlFor="updateTitle" className="form-label ps-2 m-0 ">Title:</label>
                        <input onChange={updateFormik.handleChange} onBlur={updateFormik.handleBlur} name='title' value={updateFormik.values.title} type="text" className="form-control w-50" id="updateTitle" placeholder="" />

                    </div>


                    <div className=" mb-3  ">
                        <label htmlFor="updateDetails" className="form-label ps-2 m-0 ">Details:</label>
                        <textarea onChange={updateFormik.handleChange} onBlur={updateFormik.handleBlur} name='details' value={updateFormik.values.details} type="text" className="form-control " id="updateDetails" placeholder="write your task here" rows={2} />

                    </div>

                    <button type='submit' className='btn main-text fw-bold addBtn bg-green myBtn  w-100 text-center mx-auto '>Update Task</button>
                </form>




                <div className=''>
                    <div className='container'>
                        <div className='row'>

                            {myTask.map((task, index) => {
                                return <div key={index} id={index} className='col-md-4  '>
                                    <div className='card my-3'>
                                        <div className='card-body  '>
                                            <div id='formAdd' className=''>
                                                <h5 className='card-title bg-green  py-3 text-white text-center fw-bold '>{task.title}</h5>
                                                <hr />
                                                <div className='d-flex justify-content-between'>
                                                    <p className='card-text lead'>{task.details}</p>
                                                  {task.isCompleted ?<h6 className='fw-bolder secondary-text'><span ></span>Completed</h6>:<h6 className='fw-bolder secondary-text'><span ></span>In progress</h6>}  
                                                </div>

                                                <hr />
                                            </div>



                                            <div className=' d-flex justify-content-around align-items-center'>
                                                <div>
                                                    <button onClick={() => CallDeleteTask(index)} type="button" className="btn btn-danger   ">
                                                        <i className="fa-solid fa-trash px-2 "></i> Delete
                                                    </button>
                                                </div>


                                                <button onClick={() => showUpdateTask(index)} type="button" className="btn btn-warning text-white ">
                                                    <i className="fa-solid fa-wrench px-2"> </i> Update
                                                </button>


                                                {task.isCompleted ? <div id='finished' className="  d-flex justify-content-center align-items-center d-none ">
                                                    <button onChange={check} onClick={check} className="btn btn-success text-white mt-0" type="button" data-index={index}   >Finished</button>
                                                </div> : <div id='finished' className="  d-flex justify-content-center align-items-center ">
                                                    <button onChange={check} onClick={check} className="btn btn-success text-white mt-0" type="button" data-index={index}   >Finished</button>
                                                </div>}

                                                {/* <div id='unfinished'  className=" unfinish d-none  d-flex justify-content-center align-items-center ">
                                                    <button  onClick={unCheck} className="btn btn-success text-white mt-0"  type="button" data-index={index}   >unCompleted</button>
                                                    
                                                </div> */}









                                            </div>

                                        </div>
                                    </div>
                                </div>
                            })}






                        </div>
                    </div>
                </div>


            </div>


        </div>





    </>
}
