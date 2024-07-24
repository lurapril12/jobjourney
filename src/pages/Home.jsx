// import FeatureJobs from "../components/FeatureJobs"
import FeatureJobs from "../components/FeatureJobs"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import RecommendedJob from "../components/RecommendedJob"
import Topcompany from "../components/Topcompany"
import WhyCustomer from "../components/WhyCustomer"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <RecommendedJob />
        <Topcompany />
        <FeatureJobs />
        <WhyCustomer />
        <Footer />
    </div>
  )
}

export default Home