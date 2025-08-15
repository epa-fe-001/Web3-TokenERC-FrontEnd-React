import Home from '@pages/Home';
import Ecosystem from '@pages/Ecosystem';
import Task from '@pages/Task';
import Docs from '@pages/Docs';

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/task',
    element: <Task />,
  },
  {
    path: '/ecosystem',
    element: <Ecosystem />,
  },
  {
    path: '/docs',
    element: <Docs />,
  },
];

export default routes;
