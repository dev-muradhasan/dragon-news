
import { Outlet } from 'react-router';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import MyContainer from '../components/MyContainer';
import Navbar from '../components/Navbar';
import LeftAside from '../components/homelayout/LeftAside';
import RightAside from '../components/homelayout/RightAside';

const HomeLayout = () => {
    return (
      <MyContainer>
        <header>
          <Header></Header>
          <section>
            <LatestNews></LatestNews>
          </section>
          <nav>
            <Navbar></Navbar>
          </nav>
        </header>
        <main className="grid grid-cols-12 my-5 gap-6 mt-12">
          <aside className="col-span-3 sticky top-2 h-fit">
            <LeftAside></LeftAside>
          </aside>
          <section className="col-span-6">
            <Outlet></Outlet>
          </section>
          <aside className="col-span-3 sticky top-2 h-fit">
            <RightAside></RightAside>
          </aside>
        </main>
      </MyContainer>
    );
};

export default HomeLayout;