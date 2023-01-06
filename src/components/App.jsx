import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Home } from '../Pages/Home/Home';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/portfolio" element={<h1>Portfolio</h1>} />
        <Route path="/contacts" element={<h1>Contacts</h1>} />
      </Route>
    </Routes>
  );
};
