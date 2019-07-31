import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';

export default function Routes() {
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/" exact component={Cart} />
  </Switch>;
}
