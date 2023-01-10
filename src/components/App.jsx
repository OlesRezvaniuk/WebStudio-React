import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Home } from '../Pages/Home/Home';
import { Portfolio } from 'Pages/Portfolio';
import { GaleryAll } from './Galery/GaleryAll';
import { GaleryWebSites } from './Galery/GaleryWebSites';
import { GaleryApplication } from './Galery/GaleryApplications';
import { GaleryDesign } from './Galery/GaleryDesign';
import { GaleryMarketing } from './Galery/GaleryMarketing';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />}>
          <Route index path="All" element={<GaleryAll />} />
          <Route path="Web-sites" element={<GaleryWebSites />} />
          <Route path="Applications" element={<GaleryApplication />} />
          <Route path="Design" element={<GaleryDesign />} />
          <Route path="Marketing" element={<GaleryMarketing />} />
        </Route>{' '}
        <Route path="/contacts" element={<h1>Contacts</h1>} />
      </Route>
    </Routes>
  );
};
