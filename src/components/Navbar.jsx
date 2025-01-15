import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="flex justify-between my-4 items-center mx-8">
        <div>
            <h1 className="text-4xl font-bold">#VAN LIFE</h1>
        </div>
        <div>
            <ul className="text-xl flex gap-4 mr-24">
                <Link to='/'><li className="px-4 py-1 bg-slate-400 text-white rounded-full">Home</li></Link>
                <Link to='/about'><li className="px-4 py-1 bg-slate-400 text-white rounded-full">About</li></Link>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar