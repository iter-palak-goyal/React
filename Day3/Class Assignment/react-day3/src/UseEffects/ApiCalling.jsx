import React, { Fragment, useEffect, useState } from "react";

const ApiCalling = () => {
  //useEffect is a Hook that we use to handle the side Effecr (Asynchronous process)
  //it will accept 2 parameters, first one will will be a calllback function, and second one is dependency array(array)
  let [apiData, setApiData] = useState([]);
  useEffect(() => {
    (async () => {
      let res = await fetch("https://api.github.com/users");
      console.log(res);
      let data = await res.json();
      console.log(data);
      setApiData([...data]);
    })();
  }, []);
  return (
    // <div>api calling </div>
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {apiData.map((v) => (
        <Fragment key={v.id}>
          <div>
            <p>
              <b>{v.id}</b>
              {v.login}
            </p>
            <img src={`${v.avatar_url}`} height="200px" alt={`${v.login}`} />
          </div>
        </Fragment>
      ))}
    </div>
  );
};

export default ApiCalling;
