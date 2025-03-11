import "./style.css";

export default function Ordenacao() {
  return (
    <ul className="lista-ordenacao">
      <li>
        <a
          href="#"
          className="lista-ordenacao__link lista-ordenacao__link--active"
        >
          Recente
        </a>
      </li>
      <li>
        <a href="#" className="lista-ordenacao__link">
          Recente
        </a>
      </li>
    </ul>
  );
}
