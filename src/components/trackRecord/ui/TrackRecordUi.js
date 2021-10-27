import React from "react";
import Styles from "../css/TrackRecordUi.module.css";
export default function TrackRecordUi(props) {
  const { users, limit, setLimit } = props;
  console.log("all users here ", users);
  return (
    <div className={Styles.recordSection}>
      <div className={Styles.recordHeading}>
        <h1 className="text-center m-4">
          Our <span className="lightGreen">Track Record </span>
        </h1>
      </div>
      <div className="container">
        <table className={`table table-striped ${Styles.myTable}`}>
          <thead>
            <tr>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Address</th>
              <th scope="col">Phone</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user,index) => {
             return <tr>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.address.city}</td>
                <td>{user.phone}</td>
              </tr>;
            })}
          </tbody>
        </table>
      </div>
      <div className={` ${Styles.recordBtn} text-center `}>
          {limit===5?
          <button
          className={Styles.recordbutton}
          onClick={() => {
            setLimit(5 * 2);
          }}
        >
          View All Projects
        </button>:
      <button
      className={Styles.recordbutton}
      onClick={() => {
        setLimit(limit-5);
      }}
    >
      View Less
    </button>
        }
        
      </div>
    </div>
  );
}
