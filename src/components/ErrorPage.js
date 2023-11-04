import Navigation from "./Navigation";
import '../styles/ErrorPage.scss';

const ErrorPage = () => {
    return (
        <>
            <Navigation/>
            <main>
                <h1>An error occured!</h1>
                <p>Could not find this page!</p>
            </main>
        </>
    )
}

export default ErrorPage;
