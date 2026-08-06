import Header from "../components/Header";
import MyContainer from "../components/MyContainer";
import Navbar from "../components/Navbar";


const Career = () => {
    return (
      <MyContainer className="space-y-6">
        <Header></Header>
        <Navbar></Navbar>
        <div className="min-h-[40vh] flex justify-center items-center text-accent-content text-3xl">
          Career page is coming!
        </div>
      </MyContainer>
    );
};

export default Career;