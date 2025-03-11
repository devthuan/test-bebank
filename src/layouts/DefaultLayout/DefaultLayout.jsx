import Header from "../components/Header/Header";

// eslint-disable-next-line react/prop-types
const DefaultLayout = ({ children }) => {
  return (
    <div>
      <header>
        <Header/>
      </header>
      <div className="">{children}</div>
    </div>
  );
};

export default DefaultLayout;
