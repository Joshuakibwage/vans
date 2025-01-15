import Navbar from "../components/Navbar"
import image from "../assets/bg1.jpg"
const Home = () => {
  return (
    <div>
        <Navbar />
        <div className="relative">
          <img className="w-full" src={image} alt="" />
          <div className="absolute left-0 top-0 w-full h-full flex items-center justify-center">
            <h1 className="text-5xl text-white font-bold ">You got the travel plans <br /> we got the travel vans</h1>
          </div>
          <div>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas itaque consequuntur distinctio nihil! Eius nostrum quis eveniet fuga in sequi totam sed? Cupiditate possimus consequatur dolorem quia, minus magni natus!</p>
          </div>
        </div>
    </div>
  )
}

export default Home