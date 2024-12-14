import SocialIcons from "./socialIcons";

export default function Footer() {
  return (
    <div className="bg-rosePine-base text-rosePine-text px-5 py-16">
      <div className="max-w-6xl lg:mx-auto lg:flex">
        <div className="flex mb-10 lg:w-1/3 flex-col">
          <p className="text-3xl from-black">HARRY GRAPHICS</p>
          {/* social icons */}
          <div className="lg:ml-1/3 my-8 flex max-w-6xl lg:mt-4 gap-5">
            <SocialIcons />
          </div>
        </div>
        {/* Contact */}
        <div className="mb-8 lg:w-1/3">
          <h5 className="font-bold">CONTACTS</h5>
          <p className="mb-2">harrygraphics21@gmail.com</p>
          <p className="mb-2">+91 9891554224</p>
        </div>
        {/* Address */}
        <div className="lg:w-1/3">
          <h5 className="font-bold">ADDRESS</h5>
          <p>
            1324,Street No. 16,Subhash Colony, Faridabad - 121004, Haryana, India
          </p>
        </div>
      </div>

    </div>
  );
}
