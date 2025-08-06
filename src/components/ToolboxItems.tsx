import React from "react";
import TechIcon from "@/components/TechIcon";
import { twMerge } from "tailwind-merge";
const ToolboxItems = ({
  items,
  className,
  itemsWrapperClassName,
}: {
  items: Array<{ title: string; iconType: React.ElementType }>;
  className?: string;
  itemsWrapperClassName?: string;
}) => {
  return (
    <div
      className={twMerge(
        "flex  [mask-image:linear-gradient(to_right,_transparent,_black_10%,_black_90%,_transparent)]",
        className
      )}
    >
      <div
        className={twMerge(
          "flex flex-none py-0.5 gap-6 pr-6",
          itemsWrapperClassName
        )}
      >
        {items.map(item => (
          <div
            className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg"
            key={item.title}
          >
            <TechIcon component={item.iconType} />
            <span className="font-semibold">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolboxItems;
