import { useEffect } from 'react';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
const Layout = ({ title, children }) => {
  useEffect(() => {
    document.title = title;
  }, []);

  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
