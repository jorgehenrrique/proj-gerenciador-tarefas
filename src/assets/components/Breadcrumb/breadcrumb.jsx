import './Breadcrumb.css';
import { useLocation } from 'react-router-dom';

export default function Breadcrumb() {
  const { pathname } = useLocation();

  const path = pathname.split('/').filter(part => part !== ''); // Remover partes vazias

  const formattedPath = path.map(part => {
    return part.charAt(0).toUpperCase() + part.slice(1); // Deixar primeiro caractere maiusculo
    // indice 0 fica maiusculo, + o restante do indice 1 para frente
  });

  return (
    <nav className="caminho">
      {pathname === '/' ? 'Tarefas' : `${formattedPath.join(' / ')}`}
    </nav>
  );
}