import React from 'react';
import { MyContext } from '../../containers/TestContext/TestContext';

const Button = () => {
    return (
        <MyContext.Consumer>
            {
                context => {
                    return <button type='button'>{context.name}</button>;
                }
            }
        </MyContext.Consumer>
    );
};

export default Button;
