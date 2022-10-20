import { Route } from 'react-router-dom';
import Home from '../../views/home/home';
const ProtectedRouter = () => {
  return <Route path="/" element={<Home />}></Route>;
};

export default ProtectedRouter;
