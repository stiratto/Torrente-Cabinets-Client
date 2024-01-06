import {
  Clock4,
  Facebook,
  Instagram,
  MailCheck,
  MapPinned,
  Youtube,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Separator } from "./ui/separator";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-around lg:items-center ">
      <Separator />
      <div className="py-14 px-14 flex flex-col items-center  gap-8 lg:flex-row">
        <div className="self-center">
          <Link to={"/"}>
            <img src="https://i0.wp.com/torrentekitchenandbath.com/wp-content/uploads/2023/07/download-1.png?w=225&ssl=1"></img>
          </Link>
        </div>
        <div className="text-start flex flex-col gap-5 lg:flex-row">
          <div>
            <h6 className="text-2xl  font-semibold mb-3 flex items-center gap-2">
              <MapPinned color="#050505" /> Locations
            </h6>
            <div className="flex flex-col ">
              <ul className="space-y-3">
                <li className="hover:scale-x-105 duration-200 underline underline-offset-8">
                  <a
                    href="https://www.google.com/maps/place/Torrente+Kitchen+and+Bath+%E2%80%94+Miami/@25.8882583,-80.3739205,17z/data=!3m1!4b1!4m6!3m5!1s0x88d9bca187e25685:0x24121482471fc30e!8m2!3d25.8882535!4d-80.3713456!16s%2Fg%2F11bzyqc6l3?entry=tts&shorturl=1"
                    target="_blank"
                    className="flex items-center"
                  >
                    12699 NW 107th Ave A and B suite, Medley, FL 33178
                  </a>
                </li>
                <li className="hover:scale-x-105 duration-200 underline underline-offset-8">
                  <a
                    href="https://www.google.com/maps/place/Torrente+Kitchen+%26+Bath/@26.1672189,-80.1331659,20.25z/data=!4m6!3m5!1s0x88d90178f79d55d1:0x318d5009330973c1!8m2!3d26.1672461!4d-80.1329098!16s%2Fg%2F11b7lm04qd?entry=tts&shorturl=1"
                    target="_blank"
                    className="flex items-center "
                  >
                    1097 E Oakland Park Blvd, Oakland Park, FL 33334
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h6 className="text-2xl  font-semibold mb-3 flex items-center gap-2">
              <MailCheck color="#050505" />
              Email
            </h6>
            <address className="hover:scale-x-105 duration-200 cursor-pointer ">
              torrentekitchenmedley@gmail.com
            </address>
          </div>
          <ul>
            <h6 className="text-2xl  font-semibold mb-3 flex items-center gap-2">
              <Clock4 color="#050505" />
              Schedule
            </h6>
            <li>
              <p>Mon-Fri: 9:00 am - 5:00 pm</p>
            </li>
            <li>
              <p>Sat: 9:00 am - 2:00 pm</p>
            </li>
          </ul>
          <div>
            <h6 className="text-2xl  font-semibold mb-3 flex items-center gap-2">
              <Clock4 color="#050505" />
              Socials
            </h6>
            <ul className="flex gap-2">
              <li className="">
                <a
                  href="https://www.instagram.com/torrente_cabinets/?hl=en"
                  target="_blank"
                >
                  <Instagram className="hover:scale-110 duration-200" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/torrentekitchen/"
                  target="_blank"
                >
                  <Facebook className="hover:scale-110 duration-200" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@torrentekitchen5597"
                  target="_blank"
                >
                  <Youtube className="hover:scale-110 duration-200" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-between text-white bg-red-500 p-2 w-full lg:py-8 lg:px-48 text-lg">
        <p>Politica de privacidad</p>
        <p>© 2023 TORRENTE K&B CABINETS | Derechos reservados</p>
      </div>
      <div />
    </footer>
  );
};

export default Footer;
