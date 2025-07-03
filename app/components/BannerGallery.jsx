import { FaPlay } from "react-icons/fa";

export default function BannerGallery() {
    return (
        <section className="max-w-7xl mx-auto px-4 py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Left: Video/Play Section */}
                <div className="relative h-80 md:h-[400px] rounded-lg overflow-hidden">
                    <img
                        src="/images/featured.jpg"
                        alt="Main Video"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white bg-opacity-80 p-4 rounded-full cursor-pointer hover:scale-105 transition">
                            <FaPlay className="text-[#0094DA] text-2xl" />
                        </div>
                    </div>
                </div>

                {/* Right: 4 Images in 2x2 grid */}
                <div className="grid grid-cols-2 grid-rows-2 gap-2 h-80 md:h-[400px]">
                    <img
                        src="/images/thumb1.jpg"
                        alt="Thumb 1"
                        className="w-full h-full object-cover rounded-lg"
                    />
                    <img
                        src="/images/thumb2.jpg"
                        alt="Thumb 2"
                        className="w-full h-full object-cover rounded-lg"
                    />
                    <img
                        src="/images/thumb3.jpg"
                        alt="Thumb 3"
                        className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="relative rounded-lg overflow-hidden">
                        <img
                            src="/images/thumb4.jpg"
                            alt="Thumb 4"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white text-sm text-center p-2">
                            <div>
                                <img
                                    src="/images/gallery-icon.png"
                                    alt="Gallery Icon"
                                    className="mx-auto mb-1 w-6 h-6"
                                />
                                View more images
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}




// "use client"; // if you're using Next.js 13+ with app router

// import { useEffect, useState } from "react";
// import { FaPlay } from "react-icons/fa";

// export default function BannerGallery() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch("https://your-api-url.com/api/banner-gallery")
//       .then(res => res.json())
//       .then(setData)
//       .catch(err => console.error("Failed to fetch gallery data:", err));
//   }, []);

//   if (!data) return <p className="text-center py-10">Loading...</p>;

//   return (
//     <section className="max-w-7xl mx-auto px-4 py-10">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         {/* Left: Video Thumbnail */}
//         <div className="relative h-80 md:h-[400px] rounded-lg overflow-hidden">
//           <img
//             src={data.videoThumbnail}
//             alt="Video Preview"
//             className="w-full h-full object-cover"
//           />
//           <a
//             href={data.videoUrl}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="absolute inset-0 flex items-center justify-center"
//           >
//             <div className="bg-white bg-opacity-80 p-4 rounded-full hover:scale-110 transition">
//               <FaPlay className="text-[#0094DA] text-2xl" />
//             </div>
//           </a>
//         </div>

//         {/* Right: 2x2 Image Grid */}
//         <div className="grid grid-cols-2 grid-rows-2 gap-2 h-80 md:h-[400px]">
//           {data.images.slice(0, 3).map((img, i) => (
//             <img
//               key={i}
//               src={img}
//               alt={`Gallery ${i + 1}`}
//               className="w-full h-full object-cover rounded-lg"
//             />
//           ))}

//           <div className="relative rounded-lg overflow-hidden">
//             <img
//               src={data.images[3]}
//               alt="View more"
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white text-sm text-center p-2">
//               <div>
//                 <img
//                   src="/images/gallery-icon.png"
//                   alt="Gallery Icon"
//                   className="mx-auto mb-1 w-6 h-6"
//                 />
//                 View more images
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
