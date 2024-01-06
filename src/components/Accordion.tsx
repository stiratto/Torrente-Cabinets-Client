import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AccordionTestimonials = () => {
  return (
    <Accordion
      className="hs-accordion-group transition-[height] duration-300"
      type="single"
      defaultValue="item-1"
    >
      <AccordionItem
        className="hs-accordion active duration-300"
        value="item-1"
      >
        <AccordionTrigger className="flex justify-between">
          <cite className="text-xl">“I was impressed”</cite>
          <div className="flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&q=80&w=2080&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-12 h-12 rounded-full relative z-20 border-2 border-white"
            ></img>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <p className="text-gray-800 max-w-lg">
            I had an issue and the Owner was very helpful and kind, he handled
            the problem with professionalism and A+ customer service. The
            problem was handled and I was impressed by the care and concern they
            had.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        className="hs-accordion active duration-300"
        value="item-2"
      >
        <AccordionTrigger className="flex justify-between">
          <cite className="text-xl">“Definitely recommend”</cite>
          <div className="flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-12 h-12 rounded-full relative z-20 border-2 border-white object-cover"
            ></img>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <p className="text-gray-800 max-w-lg">
            I bought this beautiful Italian style made in USA kitchen. I have
            never given 5 stars away but from the first moment I walked in to
            Torrente, I got this outstanding service from Roxanne. She helped me
            pick the right color and did a free 3D image for my new kitchen.
            After 4 days, Valentin delivered and installed the kitchen. What a
            perfect job he did. I’m so happy, thanks again!!!!
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        className="hs-accordion active duration-300"
        value="item-3"
      >
        <AccordionTrigger className="flex justify-between">
          <cite className="text-xl">“Professionalism and promptness”</cite>
          <div className="flex items-center gap-3">
            <img
              src="https://torrentekitchenandbath.com/wp-content/uploads/2023/07/Screenshot-2023-07-31-105355-1.png"
              className="w-12 h-12 rounded-full relative z-20 border-2 border-white object-cover"
            ></img>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <p className="text-gray-800 max-w-lg">
            I was referred by a friend to Torrente, and I am glad we had our
            kitchen redone with them. The cabinets look amazing in our new
            kitchen. Eyesa is the best; she has an amazing eye for design, and
            when a couple of issues came up, she handled them with
            professionalism and promptness. Ask for Eyesa; she will help bring
            your dream kitchen to life!!!!!!
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionTestimonials;
