import { ToastContainer, toast } from 'react-toastify';
import {useEffect} from 'react';

function Loggedin(){
    const notify = (text) => toast.success(text, {
        toastId: 'success1',
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
        useEffect(()=>{
            notify('You have Logged in Sucessfully')
        })
    
    return(
        <>
        <h1 className='logintext'>You have sucessfully Logged in</h1>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          />
          {/* Same as */}
        <ToastContainer />
        </>
    )
}

export default Loggedin