import './Breadcrumb.css';
import { useLocation } from 'react-router-dom';

export default function Breadcrumb() {
  const location = useLocation();

  return (
    <nav className="caminho hidden">
      {`Tarefas${location.pathname}`}
    </nav>
  );
}