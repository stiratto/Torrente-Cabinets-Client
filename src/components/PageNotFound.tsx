import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <body className="flex h-screen justify-center items-center">
      <div className="flex flex-col mx-auto ">
        <div className="text-center py-10 px-4 sm:px-6 lg:px-8 ">
          <h1 className="block text-7xl font-bold text-red-500 sm:text-7xl ">
            404 Page Not Found
          </h1>
          <h1 className="block text-2xl font-bold text-white"></h1>
          <p className="mt-3 text-gray-600 text-xl dark:text-gray-400">
            Oops, something went wrong.
          </p>
          <p className="text-gray-600 text-xl dark:text-gray-400">
            Sorry, we couldn't find your page.
          </p>
          <div className="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
            <Link
              className="w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold text-yellow-400 hover:text-red-500 focus:outline-none focus:ring-2 ring-offset-white focus:text-red-500 focus:ring-offset-2 transition-all text-lg py-3 px-4 dark:ring-offset-slate-900 outline-none"
              to="/"
            >
              <svg
                className="w-2.5 h-2.5"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M11.2792 1.64001L5.63273 7.28646C5.43747 7.48172 5.43747 7.79831 5.63273 7.99357L11.2792 13.64"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
              Back to Homepage
            </Link>
          </div>
        </div>
      </div>
    </body>
  );
};

export default PageNotFound;
