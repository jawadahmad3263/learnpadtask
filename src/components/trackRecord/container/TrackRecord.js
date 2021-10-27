import React,{useState,useEffect} from 'react'
import TrackRecordUi from '../ui/TrackRecordUi'
import { useSelector, useDispatch } from "react-redux";
import action from "../../../redux/actions/getUsersAction";
export default function TrackRecord() {
    const [limit,setLimit] = useState(5);
    const dispatch = useDispatch();
    useEffect(()=>{
     dispatch(action.getAllUsers(limit));
    },[dispatch,limit])
    const users = useSelector((state) => state.getUsersReducer.allUsers);
    return (
        <TrackRecordUi users={users} limit={limit} setLimit={setLimit}/>
    )
}
