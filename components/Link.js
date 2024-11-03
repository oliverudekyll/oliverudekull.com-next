function Link({ value, href }) {
  return (
    <a className="nav-bar__link" href={href}>
      <span className="link__bracket">[</span>
      {value}
      <span className="link__bracket">]</span>
    </a>
  );
}

export default Link;
