import headerstyles from "../styles/Header.module.css";
const Header = () => {
  return (
    <>
      <div>
        <h1 className={headerstyles.title}>
          <span>Dev</span>Newz
        </h1>
        <p className={headerstyles.description}>sample text here</p>
      </div>
    </>
  );
};

export default Header;
