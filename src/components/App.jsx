import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<h1>Home</h1>} />
        <Route path="/portfolio" element={<h1>Portfolio</h1>} />
        <Route path="/contacts" element={<h1>Contacts</h1>} />
      </Route>
    </Routes>
  );
};
