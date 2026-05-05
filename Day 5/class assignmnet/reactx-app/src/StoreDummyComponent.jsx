import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import Counter from './component/Counter';
import UserForm from './component/UserForm';
const StoreDummyComponent = () => {
    return (
        <> <Provider store={store}>
            {/* <Counter />  */}
            <UserForm />
            </Provider>
        </>
    )
} 

export default StoreDummyComponent;