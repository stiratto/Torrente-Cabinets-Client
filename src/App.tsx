import { Link } from "react-router-dom";
import "./App.css";
import AccordionTestimonials from "./components/Accordion";
import LetsTalk from "./components/LetsTalk";
import { Badge } from "@/components/ui/badge";
import { ArrowRightToLine } from "lucide-react";

function App() {
  return (
    <div className="">
      <section className="relative py-80  px-3 h-screen  flex justify-center items-center">
        <div className="absolute inset-0  bg-[url('https://images.unsplash.com/photo-1560185010-2a290b0cd4cd?auto=format&fit=crop&q=80&w=2095&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]  bg-cover bg-no-repeat"></div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="flex flex-col gap-5 text-center ">
          <h1 className="text-5xl lg:text-6xl text-white font-serif  relative z-10">
            Your top choice for excellence.
          </h1>
          <p className=" text-sm lg:text-lg text-white font-medium relative z-10 bg-black bg-opacity-50 p-3 ">
            Count on us for personalized interior design solutions, including
            kitchen and bath cabinetry, and an array of related products, all
            designed to meet your unique needs in Miami.
          </p>
          <div className="z-10 flex flex-col gap-5 justify-center items-center sm:flex-row">
            <Link to="/torrentekcb/contact">
              <button className="bg-red-500 p-3 z-10 group text-sm justify-center text-white rounded-full font-medium w-52  hover:scale-105 duration-200 flex  gap-2 items-center">
                Request Consultation
                <ArrowRightToLine
                  size={16}
                  color="#ffffff"
                  strokeWidth={3}
                  className=" group-hover:translate-x-3 duration-200"
                />
              </button>
            </Link>
            <Link to="/torrentekcb/designs">
              <button className="bg-yellow-400 text-sm p-3 z-10 group rounded-full font-medium w-52 hover:scale-105 duration-200 flex items-center gap-2 text-white  justify-center">
                Designs
                <ArrowRightToLine
                  size={16}
                  color="#ffffff"
                  strokeWidth={3}
                  className=" group-hover:translate-x-3 duration-200"
                />
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section className="relative py-32 px-3  flex justify-center items-center ">
        <div className="absolute inset-0  bg-[url('https://images.unsplash.com/photo-1560185127-1902ccdc5094?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-no-repeat"></div>
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="flex flex-col gap-5 text-start lg:text-center">
          <h2 className="text-5xl md:text-6xl text-center font-bold text-white font-serif  relative z-10">
            Call us today!
          </h2>
          <p className="z-10 text-yellow-400 text-5xl font-serif font-bold">
            (305) 885-2858
          </p>
          <p className="z-10 mb-5 text-gray-300 text-5xl font-serif font-bold">
            (954) 900-3377
          </p>
          <p className=" text-sm md:text-lg text-white font-medium relative z-10 flex flex-col gap-5">
            <span>
              With two well-placed branches in Medley and Oakland Park, we are
              delighted to offer personalized answers to satisfy all your
              interior design demands.
            </span>
            <span>
              Our services cater to both wholesale and retail customers, and our
              team of exceptionally skilled professionals is prepared to assist
              you at every phase of your project. Whether your objective is to
              modernize a kitchen or undertake a bathroom renovation, we will
              stand by your side from the selection of materials to ensure a
              punctual and reliable delivery.
            </span>
          </p>
        </div>
      </section>
      <section className="relative px-8 py-16 text-start max-w-7xl mx-auto">
        <div className="space-y-5">
          <Badge>Store</Badge>
          <h3 className="font-serif text-4xl">Our Products</h3>
        </div>
        <div className="py-5">
          <p className="text-end text-gray-700">
            Select a category below to view our latest products
          </p>
          <ul className="grid grid-cols-1 justify-center justify-items-center gap-8 md:grid-cols-2 lg:grid-cols-3 ">
            <li className="flex flex-col justify-center items-center">
              <img
                src="https://i0.wp.com/torrentekitchenandbath.com/wp-content/uploads/2023/07/21050-800x800-1.jpg?resize=300%2C300&ssl=1"
                alt="Sink Image"
              ></img>
              <h4 className="font-serif text-slate-800 text-2xl self-start">
                Sinks
              </h4>
              <p className="text-sm md:text-lg mt-3 text-gray-500">
                Explore our selection of elegant and functional sinks. Each sink
                is designed to blend style and utility in your kitchen or
                bathroom.
              </p>
            </li>
            <li className="flex flex-col justify-center items-center">
              <img
                src="https://i0.wp.com/torrentekitchenandbath.com/wp-content/uploads/2023/07/Screenshot-2023-07-28-122517.png?resize=248%2C300&ssl=1"
                alt="Cabinet Image"
              ></img>
              <h4 className="font-serif text-slate-800 text-2xl self-start">
                Cabinets
              </h4>
              <p className="text-sm md:text-lg mt-3 text-gray-500">
                Discover our collection of high-quality cabinets that provide
                efficient storage and elegance to your spaces. Our cabinets are
                designed with your style and needs in mind.
              </p>
            </li>
            <li className="flex flex-col justify-center items-center">
              <img
                src="https://i0.wp.com/torrentekitchenandbath.com/wp-content/uploads/2023/07/Screenshot-2023-07-28-123058.png?resize=165%2C300&ssl=1"
                alt="Quartz Image"
              ></img>
              <h4 className="font-serif text-slate-800 text-2xl self-start">
                Quartz
              </h4>
              <p className="text-sm md:text-lg mt-3 text-gray-500">
                Dive into the world of quartz with our stunning quartz surfaces.
                Quartz is the perfect choice for durable countertops and a
                luxurious look in your kitchen or bathroom.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <LetsTalk />

      <section className="relative  px-6 w-full py-32 flex justify-center items-center ">
        <div className="flex flex-col gap-5 lg:flex-row justify-center items-center lg:max-w-7xl mx-auto ">
          <div className="absolute inset-0  bg-[url('https://images.unsplash.com/photo-1560185008-37a6ea85a4d4?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-no-repeat"></div>
          <div className="absolute inset-0 bg-black opacity-70"></div>
          <div className="w-full">
            <img
              src="https://i0.wp.com/torrentekitchenandbath.com/wp-content/uploads/2023/07/20160916_183844.jpg?w=680&ssl=1"
              alt="Torrente Campus Photo"
              className="relative z-10 rounded-lg"
            ></img>
          </div>
          <div className="text-start w-full relative md:top-0 p-3 flex flex-col gap-5 text-white">
            <span className=" bg-black bg-opacity-50 text-sm font-mono py-2 px-4 uppercase tracking-widest ">
              Who are we
            </span>
            <h5 className="font-serif text-2xl lg:text-4xl ">
              A family business that serves the Miami area with excellence and
              professionalism.
            </h5>
            <p className="">
              We are proud to be Torrente Kitchen and Bath. We invite you to
              visit our showroom and see for yourself why we are the best choice
              for your kitchen and bathroom cabinets.
            </p>
            <Link
              to={"/torrentekcb/about"}
              className="p-4 bg-red-600 text-white text-center font-bold rounded-full lg:w-52 z-10 hover:scale-105 duration-200"
            >
              Our story
            </Link>
          </div>
        </div>
      </section>

      <section className="relative px-8 py-16 text-start lg:max-w-7xl lg:mx-auto">
        <div className="space-y-5">
          <Badge>Testimonials</Badge>
          <div className=" flex flex-col gap-5 md:flex-row md:justify-between md:items-center">
            <h3 className="font-serif text-4xl">Our customers said</h3>
            <div className="flex">
              <img
                src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&q=80&w=2080&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="w-12 h-12 rounded-full relative z-20 border-2 border-white "
                alt="Avatar from Testimonial"
              ></img>
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="w-12 h-12 relative -left-4 z-10 bg-transparent rounded-full object-cover border-2 border-white "
                alt="Avatar from Testimonial"
              ></img>
              <img
                src="https://torrentekitchenandbath.com/wp-content/uploads/2023/07/Screenshot-2023-07-31-105355-1.png"
                className="w-12 h-12 relative -left-6 z-5 border-2 border-white "
                alt="Avatar from Testimonial"
              ></img>
              <div>
                <span className="text-yellow-400">★ ★ ★ ★ ★</span>
                <p className="text-gray-600">
                  <strong>4.5</strong> from 100+ reviews
                </p>
              </div>
            </div>
          </div>
          <AccordionTestimonials />
        </div>
      </section>

      <section className="relative  px-6 w-full py-32 flex justify-center items-center lg:flex-row ">
        <div className="flex flex-col gap-5 lg:flex-row justify-center items-center mx-auto ">
          <div className="absolute inset-0  bg-[url('https://images.unsplash.com/photo-1610733374054-59454fe657cd?auto=format&fit=crop&q=80&w=1935&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]   bg-cover bg-no-repeat "></div>
          <div className="absolute inset-0 bg-black opacity-70"></div>
          <p className="z-10 text-white text-5xl font-serif">
            We are certified
          </p>
          <img
            src="https://i0.wp.com/torrentekitchenandbath.com/wp-content/uploads/2023/07/news-1-2020kcd.jpg?w=370&ssl=1"
            alt="KCD Software Certified"
            className="z-10 rounded-3xl"
          ></img>
        </div>
      </section>
    </div>
  );
}

export default App;
