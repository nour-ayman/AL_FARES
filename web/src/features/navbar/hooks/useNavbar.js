import { useLocation } from 'react-router-dom';

export const useNavbar = () => {
  const location = useLocation();

  // Updated list of paths where Navbar is HIDDEN
  // '/' is your Login page, '/AboutUs' is your About page
  const hiddenPaths = ['/', '/AboutUs'];

  const showNavbar = !hiddenPaths.includes(location.pathname);

  return { showNavbar };
};