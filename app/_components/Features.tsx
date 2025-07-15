// "use client";

// import React from "react";

// const featureData = [
//   {
//     title: "25+ Templates",
//     description: "Responsive and mobile-first designs ready to use.",
//     icon: (
//       <svg
//         className="size-6 text-white"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         viewBox="0 0 24 24"
//       >
//         <rect width="10" height="14" x="3" y="8" rx="2" />
//         <path d="M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4" />
//         <path d="M8 18h.01" />
//       </svg>
//     ),
//   },
//   {
//     title: "Customizable",
//     description: "All components are easily extensible and themeable.",
//     icon: (
//       <svg
//         className="size-6 text-white"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         viewBox="0 0 24 24"
//       >
//         <path d="M20 7h-9" />
//         <path d="M14 17H5" />
//         <circle cx="17" cy="17" r="3" />
//         <circle cx="7" cy="7" r="3" />
//       </svg>
//     ),
//   },
//   {
//     title: "Free to Use",
//     description: "Open-source components and plugins. MIT licensed.",
//     icon: (
//       <svg
//         className="size-6 text-white"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         viewBox="0 0 24 24"
//       >
//         <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
//         <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
//       </svg>
//     ),
//   },
//   {
//     title: "24/7 Support",
//     description: "Get help anytime via chat or email support.",
//     icon: (
//       <svg
//         className="size-6 text-white"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         viewBox="0 0 24 24"
//       >
//         <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
//         <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
//       </svg>
//     ),
//   },
// ];

// export default function Features() {
//   return (
//     <section className="w-full overflow-hidden py-16 bg-white dark:bg-neutral-950">
//       <div className="group relative whitespace-nowrap animate-scrollX hover:[animation-play-state:paused]">
//         <div className="inline-flex gap-6">
//           {[...featureData, ...featureData].map((feature, index) => (
//             <div
//               key={`scroll-${index}`}
//               className="min-w-[280px] bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 p-6 rounded-xl shadow-sm hover:shadow-md transition"
//             >
//               <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-xl">
//                 {feature.icon}
//               </div>
//               <h4 className="mt-4 text-base font-semibold text-gray-900 dark:text-white">
//                 {feature.title}
//               </h4>
//               <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
//                 {feature.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import React from "react";

const featureData = [
  {
    title: "25+ Templates",
    description: "Responsive and mobile-first designs ready to use.",
    icon: (
      <svg
        className="size-6 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <rect width="10" height="14" x="3" y="8" rx="2" />
        <path d="M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4" />
        <path d="M8 18h.01" />
      </svg>
    ),
  },
  {
    title: "Customizable",
    description: "All components are easily extensible and themeable.",
    icon: (
      <svg
        className="size-6 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M20 7h-9" />
        <path d="M14 17H5" />
        <circle cx="17" cy="17" r="3" />
        <circle cx="7" cy="7" r="3" />
      </svg>
    ),
  },
  {
    title: "Free to Use",
    description: "Open-source components and plugins. MIT licensed.",
    icon: (
      <svg
        className="size-6 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
  {
    title: "24/7 Support",
    description: "Get help anytime via chat or email support.",
    icon: (
      <svg
        className="size-6 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
        <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section className="w-full py-16 bg-white dark:bg-neutral-950 overflow-hidden">
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      <div className="relative w-full">
        <div className="flex w-[200%] animate-[scroll_40s_linear_infinite] hover:[animation-play-state:paused]">
          {[...featureData, ...featureData].map((feature, index) => (
            <div
              key={index}
              className="w-[250px] sm:w-[280px] shrink-0 mx-4 bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 p-6 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-xl mb-4">
                {feature.icon}
              </div>
              <h4 className="text-base font-semibold text-gray-900 dark:text-white">
                {feature.title}
              </h4>
              <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
