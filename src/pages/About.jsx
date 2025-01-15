import Navbar from "../components/Navbar"
import image from "../assets/bg2.jpg"

const About = () => {
  return (
    <div>
      <Navbar />
      <div>
        <img src={image} alt="" />
      </div>
    </div>
  )
}

export default About