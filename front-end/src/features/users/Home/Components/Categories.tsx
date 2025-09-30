
const categories = [
    { name: "Smartphones", image: "/icons/phone.png" },
    { name: "Laptops", image: "/icons/laptop.png" },
    { name: "Headphones", image: "/icons/headphones.png" },
    { name: "Smartwatches", image: "/icons/watch.png" },
    { name: "Speakers", image: "/icons/speaker.png" },
    { name: "Cameras", image: "/icons/camera.png" },
    { name: "Gaming", image: "/icons/gaming.png" },
    { name: "Tablets", image: "/icons/tablet.png" },
    { name: "Smart Home", image: "/icons/smart-home.png" },
    { name: "Accessories", image: "/icons/accessories.png" },
    { name: "Earbuds", image: "/icons/earbuds.png" },
  ];

const Categories = () => {
  return (
    <div className="flex items-center gap-6 sm:gap-6 md:gap-2 lg:gap-7 overflow-x-auto scrollbar-hide">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="ml-1 lg:ml-0 flex flex-col items-center text-center flex-shrink-0 w-16 sm:w-20 md:w-24"
          >
            <div className="w-14 h-14 flex items-center justify-center rounded-full border-2 border-blue-500 p-2">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-10 h-10 object-contain"
              />
            </div>
            <p className="text-xs sm:text-xs md:text-sm font-semibold text-[--blue2] mt-2 truncate">{cat.name}</p>
          </div>
        ))}
      </div>
  )
}

export default Categories;