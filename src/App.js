import { Blog, SinglePage } from "./components/Views";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>

        <Switch>
          <Route path='/' exact component={Blog} />
          <Route path='/blog' component={() => <SinglePage />} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
