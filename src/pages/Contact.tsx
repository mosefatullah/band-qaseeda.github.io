import { Helmet } from "react-helmet";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us - Qaseeda Band</title>
      </Helmet>
      <div className="w-full max-w-7xl mx-auto p-8">
        <h2 className="text-center text-3xl md:text-4xl font-dmserif font-semibold mb-4">
          Contact Info
        </h2>
        <div className="max-w-[700px] md:max-w-[750px] mx-auto bg-grayish p-4 py-5 md:p-8 rounded-md mt-8">
          <p className="flex gap-2 md:gap-4 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-5"
            >
              <path
                fillRule="evenodd"
                d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                clipRule="evenodd"
              />
            </svg>
            +880 1635-355478
          </p>
        </div>
      </div>
    </>
  );
}
