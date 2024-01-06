import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <article className="">
      <section className="relative pb-80 pt-40  px-3 h-screen flex flex-col text-center justify-center lg:flex-col lg:mx-auto">
        <div className="absolute inset-0  bg-[url('https://images.unsplash.com/photo-1631048500395-64cf901e9e10?auto=format&fit=crop&q=80&w=1740&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]  bg-cover bg-no-repeat"></div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-white max-w-2xl mx-auto flex flex-col gap-4">
          <h1 className="text-8xl font-serif">About us</h1>
          <p className="bg-black bg-opacity-50 p-3 text-start md:text-center rounded-xl">
            With our extensive background in customer service, we are
            well-equipped to turn your vision of the perfect kitchen into a
            reality.
          </p>
          <Link to={"/torrentekcb/contact"}>
            <button className="bg-red-500 text-white font-medium p-4 rounded-full w-52 mx-auto hover:scale-105 active:scale-90 transition-all">
              Request consultation
            </button>
          </Link>
        </div>
      </section>

      <section className="bg-yellow-500">
        <div className="text-start pb-52 pt-32 px-16 ">
          <div className="flex flex-col gap-5 justify-center items-center xl:flex-row">
            <div className="flex flex-col gap-16">
              <blockquote className="relative">
                <svg
                  className="absolute -top-5 left-0 transform -translate-x-6 -translate-y-8 h-16 w-16 text-gray-100 dark:text-gray-700"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
                    fill="currentColor"
                  />
                </svg>

                <div className="relative z-10 max-w-7xl sm:container">
                  <Badge className="uppercase ">Who are we</Badge>
                  <h2 className="text-7xl font-serif mb-6 text-slate-900">
                    Our Story
                  </h2>
                  <div className="space-y-5">
                    <p>
                      Several decades ago, in the picturesque city of{" "}
                      <strong>Maracaibo, Venezuela,</strong> our journey as
                      manufacturers of cabinets and home shelving began. Our
                      small family-rooted enterprise embarked on a path of
                      craftsmanship, following the teachings and traditions
                      passed down through generations. Right from the start, we
                      established an unwavering commitment to quality and
                      customer satisfaction as the cornerstones of our work.
                    </p>
                    <p>
                      As the years passed, our reputation in Maracaibo grew, and
                      our name became synonymous with beautiful and durable
                      products. The community welcomed us with open arms, and
                      our company became an essential fixture in the daily lives
                      of many local families. Throughout this time, we continued
                      to refine our craftsmanship, learning from each project
                      and dedicating ourselves to making our customers' dreams a
                      reality.
                    </p>
                    <p>
                      However, as life often takes unexpected turns, there came
                      a moment when we were drawn to new opportunities and
                      horizons. The family made the bold decision to embark on
                      an exciting journey to the United States, carrying with us
                      the passion and experience accumulated over the years. It
                      was a courageous step, but we were ready to face the
                      challenge of starting anew in a foreign land.
                    </p>
                    <p>
                      Once in the United States, we joined a vast network of
                      cabinet suppliers who not only shared our vision but also
                      our values rooted in tradition and craftsmanship. This
                      union allowed us to significantly expand our product line,
                      adding a wide range of designs and options for both
                      bathrooms and kitchens. Additionally, we introduced a
                      range of complementary services to meet our customers'
                      needs more comprehensively, including design
                      consultations, 3D renderings, door samples, and
                      exceptional customer support.
                    </p>
                  </div>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default About;
