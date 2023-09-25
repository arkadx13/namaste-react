import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>Oooops...</h1>
      <p>Something went wrong.</p>
      <p>
        {err.status}: {err.statusText}
      </p>
    </div>
  );
};

export default Error;
