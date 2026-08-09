import Header from "../components/Header";
import FindUsOn from "../components/homelayout/FindUsOn";
import Qzone from "../components/homelayout/Qzone";
import SocialLogin from "../components/homelayout/SocialLogin";
import MyContainer from "../components/MyContainer";
import NewsDetailsCard from "../components/NewsDetailsCard";

const NewsDetails = () => {

  return (
    <MyContainer>
      <header>
        <Header></Header>
      </header>
      <main className="grid grid-cols-12 gap-8 my-7">
        <section className="col-span-9">
          <h2 className="text-accent-content font-semibold text-xl mb-3">News Details</h2>
          <NewsDetailsCard></NewsDetailsCard>
        </section>
        <aside className="col-span-3 space-y-8">
          {/* <SocialLogin></SocialLogin> */}
          <FindUsOn></FindUsOn>
          <Qzone></Qzone>
        </aside>
      </main>
    </MyContainer>
  );
};

export default NewsDetails;
