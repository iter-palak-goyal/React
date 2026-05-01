import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUserAction, removeUserAction } from "../Reducer/UserReducer";

const UserForm = () => {
  let [state, setState] = useState({ name: "" });

  let data = useSelector((prev) => prev.userred);
  console.log(data);

  let dispatch = useDispatch();

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addUserAction(state));
          // setState({name:""})
        }}
      >
        <input
          type="text"
          name={"name"}
          // value={state.name}
          onChange={(e) => {
            setState({ [e.target.name]: e.target.value });
          }}
        />
        <br />
        <button> Submit </button>
      </form>
      <>
        {data.user.map((v) => {
          return (
            <Fragment key={v.name}>
              <h3> {v.name} </h3>
              <button onClick={() => {
                dispatch(removeUserAction(v))
              }}> Delete</button>
            </Fragment>
          );
        })}
      </>
    </div>
  );
};
export default UserForm;
