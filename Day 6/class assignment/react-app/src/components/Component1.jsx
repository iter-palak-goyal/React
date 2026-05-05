import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAPI } from '../redux/Reducer'

const Component1 = () => {
  let user = useSelector((prev) => prev.user)
  let dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAPI())
  }, [])
  // console.log(user);//

  return (<>
    {console.log(user)
    }
    <div>
      {user && user.map((v) => {
        return <Fragment key={v.id}>
          <p>
            {v.userName}
          </p>
        </Fragment>
      })}
    </div>
  </>

  )
}

export default Component1