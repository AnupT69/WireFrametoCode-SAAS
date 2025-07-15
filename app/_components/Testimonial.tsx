// "use client";

// import React from "react";

// // Dummy testimonial data
// const testimonials = [
//   {
//     name: "Alice Johnson",
//     role: "Product Manager",
//     feedback:
//       "This platform streamlined our workflow. Absolutely love the intuitive design!",
//     avatar: "https://i.pravatar.cc/150?img=1",
//   },
//   {
//     name: "Mark Smith",
//     role: "Frontend Developer",
//     feedback:
//       "Tailored components and easy integration — a lifesaver for fast MVPs.",
//     avatar: "https://i.pravatar.cc/150?img=2",
//   },
//   {
//     name: "Sara Lee",
//     role: "UX Designer",
//     feedback:
//       "Super clean UI and helpful documentation. My go-to toolkit for any new project.",
//     avatar: "https://i.pravatar.cc/150?img=3",
//   },
//   {
//     name: "David Kim",
//     role: "CTO",
//     feedback:
//       "Reliable, fast, and developer-friendly. Our engineering team loves it.",
//     avatar: "https://i.pravatar.cc/150?img=4",
//   },
// ];

// export default function Testimonial() {
//   return (
//     <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
//       {/* Heading */}
//       <div className="text-center mb-12">
//         <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
//           What People Say
//         </h2>
//         <p className="mt-2 text-gray-600 dark:text-gray-400">
//           Trusted by developers and creators worldwide.
//         </p>
//       </div>

//       {/* Scrolling Testimonials */}
//       <div className="relative overflow-hidden group">
//         <div className="whitespace-nowrap animate-scrollX group-hover:[animation-play-state:paused]">
//           <div className="inline-flex gap-6">
//             {[...testimonials, ...testimonials].map((testimonial, index) => (
//               <div
//                 key={index}
//                 className="min-w-[320px] bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 p-6 rounded-xl shadow-sm"
//               >
//                 <div className="flex items-center gap-4">
//                   <img
//                     src={testimonial.avatar}
//                     alt={testimonial.name}
//                     className="w-12 h-12 rounded-full"
//                   />
//                   <div>
//                     <h4 className="font-semibold text-gray-900 dark:text-white">
//                       {testimonial.name}
//                     </h4>
//                     <span className="text-sm text-gray-500 dark:text-gray-400">
//                       {testimonial.role}
//                     </span>
//                   </div>
//                 </div>
//                 <p className="mt-4 text-gray-700 dark:text-neutral-300 text-sm">
//                   “{testimonial.feedback}”
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import React from "react";

const testimonials = [
  {
    name: "Alice Johnson",
    role: "Product Manager",
    feedback:
      "This platform streamlined our workflow. Absolutely love the intuitive design!",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "Mark Smith",
    role: "Frontend Developer",
    feedback:
      "Tailored components and easy integration — a lifesaver for fast MVPs.",
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    name: "Sara Lee",
    role: "UX Designer",
    feedback:
      "Super clean UI and helpful documentation. My go-to toolkit for any new project.",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
  {
    name: "David Kim",
    role: "CTO",
    feedback:
      "Reliable, fast, and developer-friendly. Our engineering team loves it.",
    avatar: "https://i.pravatar.cc/150?img=4",
  },
];

export default function Testimonial() {
  return (
    <section className="w-full py-16 bg-white dark:bg-neutral-950 overflow-hidden">
      <style>{`
        @keyframes testimonial-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          What People Say
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Trusted by developers and creators worldwide.
        </p>
      </div>

      <div className="relative w-full">
        <div className="flex w-[200%] animate-[testimonial-scroll_40s_linear_infinite] hover:[animation-play-state:paused]">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={index}
              className="w-[320px] shrink-0 mx-4 bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 p-6 rounded-xl shadow-sm"
            >
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.role}
                  </span>
                </div>
              </div>
              <p className="mt-4 text-gray-700 dark:text-neutral-300 text-sm italic">
                “{testimonial.feedback}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
