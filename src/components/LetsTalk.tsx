import { ArrowRightToLine } from "lucide-react";
import { Link } from "react-router-dom";

const LetsTalk = () => {
  return (
    <article className="p-5 md:mb-5  text-black text-start flex flex-col gap-5  md:max-w-lg md:mx-auto md:rounded-lg shadow-md border border-slate-300  ">
      <div>
        <div className=" flex gap-5 items-center justify-center">
          <p className="flex flex-col">
            <cite>Still have questions?</cite>
            <span>
              Can’t find the answers you’re looking for?{" "}
              <abbr>Let’s talk!</abbr>
            </span>
          </p>
        </div>
      </div>
      <div className="flex gap-4 justify-center ">
        <Link to={"/torrentekcb/contact"}>
          <button className="px-8 py-2 bg-red-500 text-white rounded-full duration-200 group flex items-center gap-2 hover:scale-105">
            Send us a message!
            <ArrowRightToLine
              size={16}
              color="#ffffff"
              strokeWidth={3}
              className=" group-hover:translate-x-3 duration-300"
            />
          </button>
        </Link>
        <a
          aria-label="Chat on WhatsApp"
          href="https://wa.me/13059546011"
          target="_blank"
        >
          <button className="px-8 py-2 bg-green-500 text-white rounded-full active:scale-75 duration-200 group flex items-center gap-2 hover:scale-105">
            Whatsapp
            <ArrowRightToLine
              size={16}
              color="#ffffff"
              strokeWidth={3}
              className=" group-hover:translate-x-3 duration-300"
            />
          </button>
        </a>
      </div>
    </article>
  );
};

export default LetsTalk;
