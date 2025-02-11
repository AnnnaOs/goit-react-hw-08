import css from './AppTitle.module.css';

const AppTitle = ({ children }) => {
  return <h1 className={css.appTitle}>{children}</h1>;
};

export default AppTitle;
