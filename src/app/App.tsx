import { RouterProvider } from 'react-router-dom';
import AppLoaderGate from './components/AppLoaderGate';
import { router } from './routes';

export default function App() {
  return (
    <div className="tf-page">
      <AppLoaderGate />
      <RouterProvider router={router} />
    </div>
  );
}

