import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';

export default function Routes() {
  <Switch>
    <Route path="/" exact component={Home} />
  </Switch>;
}
