import AppTitle from '../components/AppTitle/AppTitle';
import DocumentTitle from '../components/DocumentTitle';
import bgImage from '../assets/contacts-bg.jpg';

const HomePage = () => {
  return (
    <>
      <DocumentTitle>Home</DocumentTitle>
      <section
        style={{ backgroundImage: `url(${bgImage})` }}
        className="bg-cover bg-center h-screen flex items-center justify-center"
      >
        <AppTitle>
          Welcome to <span style={{ color: 'teal' }}>Phonebook App!</span>
        </AppTitle>
      </section>
    </>
  );
};
export default HomePage;
