import React from "react";
import { useNavigate } from "react-router-dom";

export default function Card({ title, description, tag, to, onExplore, Icon }) {
  const navigate = useNavigate();

  const handleExplore = () => {
    if (onExplore) {
      onExplore();
    } else if (to) {
      navigate(to);
    } else {
      navigate("/");
    }
  };

  return (
    <div
      tabIndex={0}
      className="
        glass
        rounded-3xl
        p-6
        min-h-[400px]
        w-full
        max-w-xs
        shadow-2xl
        flex
        flex-col
        justify-between
        transition-transform
        duration-300
        group
        backdrop-blur-md
        border border-white/10
        hover:scale-105
      "
      aria-label={`Card for ${title}`}
    >
      {/* Top: Icon + Title + Tag */}
      <div className="flex flex-col items-start gap-4">
        {Icon && <Icon size={48} className="text-indigo-400 mb-2" />}
        <div className="flex flex-col gap-2">
          {tag && (
            <span className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
              {tag}
            </span>
          )}
         <h3 className="text-2xl font-extrabold text-gray-100 group-hover:text-indigo-400 transition-colors duration-300 leading-snug">
             {title}
        </h3>
        </div>
      </div>

      {/* Middle: Description */}
     <p className="text-gray-400 text-sm leading-relaxed mt-4 flex-1">
       {description}
     </p>

      {/* Bottom: Explore Button */}
      <div className="mt-6 w-full flex justify-start">
        <button
          type="button"
          onClick={handleExplore}
          className="
            bg-gradient-to-r
            from-indigo-500
            to-sky-500
            text-white
            font-semibold
            px-6
            py-2.5
            rounded-full
            shadow-lg
            shadow-indigo-500/20
            hover:from-purple-500
            hover:to-pink-500
            hover:shadow-pink-500/30
            active:scale-95
            transition-all
            duration-300
            ease-in-out
            focus:outline-none
            focus:ring-4
            focus:ring-indigo-400/50
          "
          aria-label={`Explore ${title}`}
        >
          Explore
        </button>
      </div>
    </div>
  );
}
