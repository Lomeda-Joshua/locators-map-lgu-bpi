import {useRouteError} from 'react-router-dom';

function errorPage(){

    const error = useRouteError();
    console.log(error);

    return(
        <>
            <h1>Sorry unexpected error</h1>
            <p>{error.statusText || error.message}</p>
        </>
    )
}

export default errorPage