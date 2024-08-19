import RotatingTitle from './RotatingTitle';

const Header = () => {
  return (
    <header>
      <div id="name-container">
        <h1>
          Hi, I'm <span className="gradient-background">Tanner</span>.
        </h1>
        <RotatingTitle />
      </div>
      <img
        className="gradient-background"
        src="/images/tanner-atkin-nobg.png"
        alt="Tanner Smiling"
      ></img>
    </header>
  );
};

export default Header;
