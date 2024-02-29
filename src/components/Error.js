import { useRouteError } from "react-router-dom";
const Error = () => {
    const error = useRouteError();
    return (
        <div>
            <h2>Oops!! Something went wrong</h2>
            <h4>{error.status} - {error.statusText}</h4>
        </div>
    );
}
export default Error;