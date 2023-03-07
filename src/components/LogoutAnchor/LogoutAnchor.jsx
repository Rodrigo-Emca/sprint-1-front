import React, { useState } from 'react';
import {Link as Anchor} from 'react-router-dom'
//import axios from 'axios'
//import Swal from 'sweetalert2'


function LogoutAnchor() {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);
        localStorage.clear();
        window.location.reload();
        // Swal.fire({
        //     title: 'Logout Succefull',
        //     showClass: {
        //         popup: 'animateanimated animatefadeInDown'
        //     },
        //     hideClass: {
        //         popup: 'animateanimated animatefadeOutUp'
        //     }
        // })
    };

    return (
        <Anchor onClick={handleClick}>Logout</Anchor>
    );
}

export default LogoutAnchor;


// export default function LogoutAnchor() {

//     let token = localStorage.getItem('token')
//     let headers = {headers:{'Authorization':'Bearer ${token}'}}
//     let url = 'http://localhost:8000/auth/signout'

//     async function handleLogout(){
//         try{
//             await axios.post(url,"",headers)
//             Swal.fire({
//                 title: 'Logout Succefull',
//                 showClass: {
//                     popup: 'animateanimated animatefadeInDown'
//                 },
//                 hideClass: {
//                     popup: 'animateanimated animatefadeOutUp'
//                 }
//             })
//             localStorage.clear()
//             location.reload()
//         }catch(error){
//             console.log(error)
//         }
//         }

//     return (
//         <div>
//             <Anchor onSubmit={handleLogout}>Logout</Anchor>
//         </div>
//     )
// }
