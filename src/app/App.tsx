import { RouterProvider } from 'react-router-dom';
import { router } from './routes';

export default function App() {
  return (
    <div className="tf-page">
      <RouterProvider router={router} />
    </div>
  );
}

