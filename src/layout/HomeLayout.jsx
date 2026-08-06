
import { Outlet, useNavigation } from 'react-router';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import MyContainer from '../components/MyContainer';
import Navbar from '../components/Navbar';
import LeftAside from '../components/homelayout/LeftAside';
import RightAside from '../components/homelayout/RightAside';
import Loading from '../Page/Loading';

const HomeLayout = () => {
  const {state} = useNavigation();
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
        <main className="grid grid-cols-12 my-5 gap-8 mt-12">
          <aside className="col-span-3 sticky top-2 h-fit">
            <LeftAside></LeftAside>
          </aside>
          <section className="col-span-6">
            {state === "loading" ? <Loading></Loading> : <Outlet></Outlet>}
          </section>
          <aside className="col-span-3 sticky top-2 h-fit">
            <RightAside></RightAside>
          </aside>
        </main>
      </MyContainer>
    );
};

export default HomeLayout;