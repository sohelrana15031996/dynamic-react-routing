import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const errror = useRouteError();
  const navigate = useNavigate();

  const handleGoToHomepage = () =>{
    navigate('/')
  }
  return (
    <div>
      <p>Oops!</p>
      {
        errror.status === 404 && <div>
          <h2>{errror.status} Page not found</h2>
          <p>Go back to homepage</p>
          <button onClick={handleGoToHomepage}>Go to homepage</button>
        </div>
      }
    </div>
  );
};

export default ErrorPage;