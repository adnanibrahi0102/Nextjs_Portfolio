import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data";

const Grid = () => {
  return (
    <section id="about" className="max-w-4xl mx-auto">
      <BentoGrid>
        {gridItems.map((item, i) => (
          <BentoGridItem
             id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg = {item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
