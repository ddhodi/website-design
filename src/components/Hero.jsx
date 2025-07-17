const images = Array.from({ length: 10 }, (_, i) => `/images/${i + 1}.jpg`);

const Marquee = ({ direction = "left" }) => {
  const animationClass = direction === "left" ? "animate-marquee" : "animate-marquee-reverse";

  return (
    <div className="overflow-hidden w-full group">
      <div className={`flex gap-4 min-w-max animate-marquee`}>
        {[...images, ...images].map((src, index) => (
          <div key={index} className="shrink-0">
            <img
              src={src}
              alt={`slide-${index}`}
              className="w-64 h-64 object-cover rounded-lg hover:scale-110 hover:z-10 transition-transform duration-75 ease-in-out"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-16 bg-white text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        Create Your Dream Interior Design Website
      </h1>
      <div className="max-w-3xl">
        <p className="text-gray-600 mb-6">
          Showcase your interior design projects with a stunning website that reflects your style and expertise. Impress potential clients and stand out in the competitive interior design industry.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
          Scroll Down
        </button>
      </div>

      {/* Marquee Gambar */}
      <div className="mt-12 w-full">
        <Marquee direction="left" />
        {/* Bisa tambah: <Marquee direction="right" /> */}
      </div>
    </div>
  );
};

export default Hero;
