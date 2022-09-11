import "./home.scss";
import NavBar from "../../component/navbar/NavBar";
import Header from "../../component/header/Header";
import Featured from "../../component/featured/Featured";
import PropertyList from "../../component/propertyList/PropertyList";
import FeaturedProperties from "../../component/featuredProperties/FeaturedProperties";
import MailList from "../../component/mailList/MailList";
import Footer from "../../component/footer/Footer";

const Home = () => {
  return (
    <div className="home">
        <NavBar />
        <Header />
        <div className="homeContainer">
          <Featured />
          <h1 className="homeTitle">Browse by property type</h1>
          <PropertyList />
          <h2 className="homeTitle">Homes guest love</h2>
          <FeaturedProperties />
          <MailList />
          <Footer />
        </div>
    </div>
  )
}

export default Home
