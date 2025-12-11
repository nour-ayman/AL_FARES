import { useNavigate } from 'react-router-dom';

const useCategoryNav = () => {
  const navigate = useNavigate();

  const navigateToCategory = (path) => {
    // This tells the router: "Go to this URL"
    navigate(path);
  };

  return { navigateToCategory };
};

export default useCategoryNav;