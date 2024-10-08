import { Link, useParams } from "react-router-dom";
import profiles from "../utils/profiles.json";
import { Helmet } from "react-helmet";

export const TeamID = () => {
 const { prefix } = useParams<{ prefix: string }>();
 const tm = profiles.find((p) => String(p.prefix) === prefix);
 return tm ? (
  <>
   <Helmet>
    <title>{tm?.name} - Qaseeda Band</title>
   </Helmet>
   <div className="w-full max-w-7xl mx-auto p-8">
    <div className="flex justify-center md:block">
     <Link to="/about-team/">
      <button className="bg-primary text-neutral rounded-full p-2 hover:bg-primary/80 transition-all duration-100">
       <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
       >
        <path
         strokeLinecap="round"
         strokeLinejoin="round"
         d="M15.25 18.75 7.75 12 15.25 5.25"
        />
       </svg>
      </button>
     </Link>
    </div>
    <div className="flex flex-col items-center gap-2 mt-5 text-center">
     <img
      src={"/images/person/" + tm?.prefix + ".png"}
      alt="Person"
      className="w-full max-w-[200px] aspect-square object-cover bg-primary text-neutral rounded-md"
     />
     <h1 className="text-2xl md:text-3xl lg:text-4xl  font-semibold drop-shadow mt-4">
      {tm?.name}
     </h1>
     <p className="text-gray-400 flex gap-1 items-center mt-1">
      <svg
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 24 24"
       fill="currentColor"
       className="size-5"
      >
       <path
        fillRule="evenodd"
        d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
        clipRule="evenodd"
       />
       <path d="M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z" />
      </svg>

      {tm?.bio?.role}
     </p>
    </div>
    <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
     <div className="md:col-span-2">
      <p className="md:text-lg mt-5">
       {tm?.bio?.desc?.split("\n").map((line, index) => (
        <span key={index} className="block mb-4">
         {line}
         <br />
        </span>
       ))}
      </p>
     </div>
     <div className="md:mt-6 h-fit p-4 border border-primary/30 bg-gray-700/35 rounded-lg grid grid-cols-[min-content_1fr] gap-y-2 gap-x-4 max-w-lg order-first lg:order-none">
      {tm?.bio?.fullname && (
       <>
        <span className="font-medium whitespace-nowrap">Full Name:</span>
        <span className="text-sm pt-0.5">{tm?.bio?.fullname}</span>
       </>
      )}
      {tm?.bio?.birth && (
       <>
        <span className="font-medium whitespace-nowrap">Date of Birth:</span>
        <span className="text-sm pt-0.5">
         {tm?.bio?.birth}{" "}
         {tm?.bio?.birth &&
          "(" +
           String(
            new Date().getFullYear() - parseInt(tm?.bio?.birth.split(" ")[2])
           ) +
           " yrs)"}
        </span>
       </>
      )}
      {tm?.bio?.edu && (
       <>
        <span className="font-medium whitespace-nowrap">Education:</span>
        <span className="text-sm pt-0.5">
         {tm?.bio?.edu} {tm?.bio?.dept && `(Department of ${tm?.bio?.dept})`}
        </span>
       </>
      )}
      {tm?.bio?.awards && (
       <>
        <span className="font-medium whitespace-nowrap">Awards:</span>
        <ul className="text-sm">
         {tm?.bio?.awards?.map((award, index) => (
          <li key={index} className="py-1">
           <span className="me-2">{index + 1}.</span>
           {award}
          </li>
         ))}
        </ul>
       </>
      )}
      {tm?.bio?.known && (
       <>
        <span className="font-medium whitespace-nowrap">Known for:</span>
        <ul className="text-sm">
         {tm?.bio?.known?.map((knownFor, index) => (
          <li key={index} className="py-1">
           <span className="me-2">{index + 1}.</span>
           {knownFor}
          </li>
         ))}
        </ul>
       </>
      )}
     </div>
    </div>
   </div>
  </>
 ) : (
  <p>No biography found!</p>
 );
};
