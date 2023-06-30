import './Breadcrumb.css';
import { useLocation } from 'react-router-dom';

export default function Breadcrumb() {
  const { pathname } = useLocation();

  const path = pathname.split('/').filter(part => part !== ''); // Remover partes vazias

  const formattedPath = path.map(part => {
    return part.charAt(0).toUpperCase() + part.slice(1);
  });

  return (
    <nav className="caminho hidden">
      {`${formattedPath.join(' / ')}`}
    </nav>
  );
}