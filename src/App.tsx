import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { routes } from './constants/navigation';
import { ThemeProvider } from './context/ThemeContext';
import { AboutScreen } from './screens/AboutScreen';
import { BlogScreen } from './screens/BlogScreen';
import { CertificationDetailScreen } from './screens/CertificationDetailScreen';
import { CertificationsScreen } from './screens/CertificationsScreen';
import { ContactScreen } from './screens/ContactScreen';
import { FaqScreen } from './screens/FaqScreen';
import { FounderScreen } from './screens/FounderScreen';
import { GalleryScreen } from './screens/GalleryScreen';
import { HomeScreen } from './screens/HomeScreen';
import { ServicesScreen } from './screens/ServicesScreen';
import { VideosScreen } from './screens/VideosScreen';

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path={routes.home} element={<HomeScreen />} />
            <Route path={routes.about} element={<AboutScreen />} />
            <Route path={routes.founder} element={<FounderScreen />} />
            <Route path={routes.services} element={<ServicesScreen />} />
            <Route path={routes.certifications} element={<CertificationsScreen group="all" />} />
            <Route path="/certifications/:slug" element={<CertificationDetailScreen />} />
            <Route
              path={routes.ciscoTraining}
              element={<CertificationsScreen group="cisco" />}
            />
            <Route
              path={routes.comptiaTraining}
              element={<CertificationsScreen group="comptia" />}
            />
            <Route path={routes.gallery} element={<GalleryScreen />} />
            <Route path={routes.videos} element={<VideosScreen />} />
            <Route path={routes.blog} element={<BlogScreen />} />
            <Route path={routes.faq} element={<FaqScreen />} />
            <Route path={routes.contact} element={<ContactScreen />} />
            <Route path="*" element={<Navigate to={routes.home} replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
