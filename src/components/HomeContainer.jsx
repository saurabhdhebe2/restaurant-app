import Delivery from "../img/delivery.png";
import Herobg from "../img/heroBg.png";
import { heroData } from "../utils/data";

const HomeContainer = () => {
  return (
    <section
      id="home"
      className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full "
    >
      <div className="py-2 flex-1 flex flex-col items-start  justify-center gap-6">
        <div className="flex items-center  gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full">
          <p className="text-base text-orange-500 font-semibold">
            Bike Delivery
          </p>
          <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
            <img
              src={Delivery}
              className="w-full h-full  object-contain"
              alt="Delivery"
            />
          </div>
        </div>

        <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor">
          The Fastest Delivery In{" "}
          <span className="text-orange-600 text-[3rem] lg:text-[5rem] ">
            Your City
          </span>
        </p>
        <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          corporis ipsa odio fugiat dolorum odit quod, in assumenda itaque
          nostrum possimus cumque placeat? Blanditiis repellendus, dolore
          nesciunt voluptatibus rem beatae.
        </p>
        <button
          type="button"
          className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 "
        >
          Order Now
        </button>
      </div>
      <div className="py-2 flex-1 flex items-center relative">
        <img
          className="ml-auto h-420 w-full lg:w-auto lg:h-650"
          src={Herobg}
          alt="hero-bg"
        />

        <div className="w-full h-full absolute top-0 left-0  flex items-center justify-center xl:px-32 py-4 gap-4 b flex-wrap drop-shadow-lg">
          {heroData &&
            heroData.map((n) => (
              <div
                key={n.id}
                className=" lg:w-190 p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col
               items-center justify-center"
              >
                <img
                  className="w-20 -mt-10 lg:w-40 -mt-20"
                  src={n.imgsrc}
                  alt="I1"
                />
                <p className="text-base mt-2 lg:text-xl mt-4 font-semibold text-textColor">
                  {n.name}
                </p>
                <p className="my-1 text-[12px] lg:text-sm my-3 text-lighttextGray font-semibold  ">
                  {n.decp}
                </p>
                <p className="text-sm font-semibold text-headingColor">
                  <span className="text-sm text-red-600">$</span> {n.price}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
