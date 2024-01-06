import { Link } from "react-router-dom";

const Designs = () => {
  return (
    <article className="">
      <section className="relative pb-80 pt-40   px-3 h-screen flex flex-col text-center justify-center lg:flex-col lg:mx-auto">
        <div className="absolute inset-0  bg-[url('https://images.unsplash.com/photo-1612769732688-b7d111799dca?auto=format&fit=crop&q=80&w=2071&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]  bg-cover bg-no-repeat"></div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-white max-w-2xl mx-auto flex flex-col gap-4">
          <h1 className="text-8xl font-serif">Designs</h1>
          <p className="bg-black bg-opacity-50 p-3 text-start md:text-center rounded-xl">
            Celebrate the variety in our Torrente showrooms, where we showcase
            an array of kitchen and bathroom designs and options. Explore our
            showrooms to envision how your new kitchen or bathroom can take
            shape.
          </p>
          <Link to={"/torrentekcb/contact"}>
            <button className="bg-red-500 text-white font-medium p-4 rounded-full w-52 mx-auto hover:scale-105 active:scale-90 transition-all">
              Request consultation
            </button>
          </Link>
        </div>
      </section>

      <section className="px-2">
        <div className="max-w-7xl  py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="grid sm:grid-cols-12 gap-6">
            <div className="sm:self-end col-span-12 sm:col-span-7 md:col-span-8 lg:col-span-5 lg:col-start-5">
              <a
                className="group relative block rounded-xl overflow-hidden"
                href="#"
              >
                <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                  <img
                    className="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                    src="https://i0.wp.com/torrentekitchenandbath.com/wp-content/uploads/2023/08/Screenshot-2023-08-01-075500.png?w=858&ssl=1"
                    alt="Kitchen with Cabinets"
                  />
                </div>
              </a>
            </div>
            <div className="sm:self-end col-span-12 sm:col-span-5 md:col-span-4 lg:col-span-3">
              <a
                className="group relative block rounded-xl overflow-hidden"
                href="#"
              >
                <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                  <img
                    className="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                    src="https://i0.wp.com/torrentekitchenandbath.com/wp-content/uploads/2023/08/Screenshot-2023-08-01-074515.png?w=502&ssl=1"
                    alt="Kitchen with Cabinets"
                  />
                </div>
              </a>
            </div>

            <div className="col-span-12 md:col-span-4">
              <a
                className="group relative block rounded-xl overflow-hidden"
                href="#"
              >
                <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                  <img
                    className="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                    src="https://i0.wp.com/torrentekitchenandbath.com/wp-content/uploads/2023/08/Screenshot-2023-08-01-075909.png?w=902&ssl=1"
                    alt="Kitchen with Cabinets"
                  />
                </div>
              </a>
            </div>

            <div className="col-span-12 sm:col-span-6 md:col-span-4">
              <a
                className="group relative block rounded-xl overflow-hidden"
                href="#"
              >
                <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                  <img
                    className="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                    src="https://i0.wp.com/torrentekitchenandbath.com/wp-content/uploads/2023/08/Screenshot-2023-08-01-075022.png?w=683&ssl=1"
                    alt="Bathroom with nice cabinets"
                  />
                </div>
              </a>
            </div>

            <div className="col-span-12 sm:col-span-6 md:col-span-4">
              <a
                className="group relative block rounded-xl overflow-hidden"
                href="#"
              >
                <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                  <img
                    className="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                    src="https://i0.wp.com/torrentekitchenandbath.com/wp-content/uploads/2023/08/Screenshot-2023-08-01-074441-1.png?w=500&ssl=1"
                    alt="Kitchen with elegant cabinets"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Designs;
