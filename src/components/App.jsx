import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Home } from '../Pages/Home/Home';
import { Portfolio } from 'Pages/Portfolio';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />}>
          <Route path="All" element={<>All</>} />
          <Route path="Web-sites" element={<>Web-sites</>} />
          <Route path="Applications" element={<>Applications</>} />
          <Route path="Design" element={<>Design</>} />
          <Route path="Marketing" element={<>Marketing</>} />
        </Route>{' '}
        <Route path="/contacts" element={<h1>Contacts</h1>} />
      </Route>
    </Routes>
  );
};
