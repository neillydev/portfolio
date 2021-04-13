import React, {FC} from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const env = process.env.NODE_ENV

    return(
        <div>
            <h1>Hello world</h1>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));