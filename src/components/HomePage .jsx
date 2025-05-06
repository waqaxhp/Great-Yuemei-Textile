import React from "react";
import ReactPlayer from "react-player/youtube";
import { Factory, Shirt, Leaf } from "lucide-react";

const HomePage = () => {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* YouTube Background Video */}
      {/* <div className="absolute top-0 left-0 w-full h-full -z-10">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=8N0CRZiuB8Q"
          playing
          loop
          muted
          controls={false}
          width="100%"
          height="100%"
          className="react-player object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
      </div> */}
      <div className="absolute inset-0 -z-10">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=8N0CRZiuB8Q"
          playing
          loop
          muted
          controls={false}
          width="100%"
          height="100%"
          config={{
            youtube: {
              playerVars: {
                autoplay: 1,
                controls: 0,
                modestbranding: 1,
                rel: 0,
                showinfo: 0,
                mute: 1,
                fs: 0,
              },
            },
          }}
          className="absolute top-0 left-0 h-full w-full object-cover"
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
          Leading the Future of Great Yuemei Textile
        </h1>
        <p className="text-gray-200 text-lg md:text-xl max-w-2xl mb-6">
          Premium fabrics. Sustainable solutions. Trusted by global fashion and
          industrial brands.
        </p>
        <a
          href="#quote"
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-indigo-700 transition"
        >
          Get a Quote
        </a>
      </div>

      {/* Cards Section */}
      <section className="relative z-20 bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            What We Offer
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Card 1 */}
            <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
              <Factory className="text-indigo-600 w-10 h-10 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Custom Manufacturing
              </h3>
              <p className="text-gray-600">
                Tailored fabric production to meet your exact specifications
                using state-of-the-art machinery.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
              <Shirt className="text-indigo-600 w-10 h-10 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Premium Apparel Fabrics
              </h3>
              <p className="text-gray-600">
                High-quality cotton, linen, polyester, and blended fabrics for
                fashion and corporate wear.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
              <Leaf className="text-indigo-600 w-10 h-10 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Eco-Friendly Solutions
              </h3>
              <p className="text-gray-600">
                Sustainable textile production using organic materials and
                eco-conscious practices.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
