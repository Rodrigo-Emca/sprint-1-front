import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import alertactions from "../../store/actions/actions";
const {close} = alertactions;

export default function Alert() {
    const dispatch = useDispatch();
    const alertStates = useSelector(store => store.alert);
    const { visible, messages, sucess  } = alertStates;
    
        if (visible) {
        Swal.fire({
            icon: `${sucess ? "success" : "error"}`,
            text: `${messages}`,
            timer: 1500,
        }).then(res => {
            dispatch(close(
                { messages: 'mensaje'
                , visible: true,
                sucess:  true
             }));
        });
        
    
    return <></>;
}}