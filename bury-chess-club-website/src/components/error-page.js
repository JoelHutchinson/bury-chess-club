import {useRouteError} from "react-router-dom";

class ErrorPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  }
};

export default ErrorPage;