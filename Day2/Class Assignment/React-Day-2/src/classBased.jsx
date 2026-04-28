import { Component } from "react";

class ClassBased extends Component {
  constructor() {
    super();
    console.log(this);
  }
  render() {
    return <h3> This is a class based component. </h3>;
  }
}
export default ClassBased;
