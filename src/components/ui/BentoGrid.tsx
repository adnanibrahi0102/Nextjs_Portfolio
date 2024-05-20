import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeDemo } from "./GridGlobe";


export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  id,
  titleClassName,
  imgClassName,
  img,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  titleClassName?: string;
  imgClassName?: string;
  img?: string;
  spareImg?: string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 relative rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-6 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4 overflow-hidden",
        className
      )}
      style={{
        background: "rgb(74,72,72",
        backgroundColor:
          "linear-gradient(90deg, rgba(74,72,72,1) 0%, rgba(86,83,87,1) 15%, rgba(113,110,110,1) 37%, rgba(3,0,5,1) 71%, rgba(164,162,164,0.9164040616246498) 100%",
      }}
    >
      <div
        className={`${id === 6} && 'flex justify-center h-full overflow-hidden`}
      >
        <div className="w-full h-full absolute ">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5
          } && w-full opacity-80`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className={`object-cover object-center w-full h-full`}
            />
          )}
        </div>

        {id === 7 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl overflow-hidden" />
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/ bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-extralight text-neutral-600 text-sm dark:text-neutral-300 md:text-xs lg:text-base z-10">
            {description}
          </div>
          <div className="font-sans text-lg font-bold text-neutral-600 dark:text-neutral-200 lg:text-2xl max-w-96 z-10">
            {title}
          </div>
        </div>
        {id === 2 && (
         <GlobeDemo/>
        )}

        {id ===3 && (
          <div className="flex gap-1 lg:gap-2 w-fit absolute bottom-5  right-2 ">
             <div className="flex flex-col   bg-gray-600 mt-4 rounded-lg ">
               {["React.js","Next.js" ,"Node.js","Express.js" ,"MongoDb"].map((stack)=>(
                <span className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-30 lg:opacity-100 rounded-lg text-center" key={stack}>
                  {stack}
                </span>
               ))}
             </div>
          </div>
        )}
      </div>

  
    </div>
  );
};
