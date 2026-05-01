import { Provider } from "react-redux";
import { store } from "./Store/store";
import Counter from "./Component/Counter";
import UserForm from './Component/UserForm'

const StoreDummyComponent = () => {
  return (
    <>
      <Provider store={store}>
        {/* <Counter /> */}
        <UserForm/>
      </Provider>
    </>
  );
};

export default StoreDummyComponent;
