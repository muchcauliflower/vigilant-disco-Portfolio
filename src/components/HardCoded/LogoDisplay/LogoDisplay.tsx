const LogoDisplay = () => {
  return (
    <div className="py-3 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg/2 font-semibold [#b3c4b4]">
          Languages and Tools I Use
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-12 sm:gap-x-14 sm:max-w-xl sm:grid-cols-6 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img
            width="158"
            height="48"
            src="/icons/LanguagesAndToolsIcons/Languages/React.svg"
            alt="React"
            className="col-span-2 max-h-[6rem] w-full object-contain lg:col-span-1"
          />

          <img
            width="158"
            height="48"
            src="/icons/LanguagesAndToolsIcons/Languages/SQL.svg"
            alt="SQL"
            className="col-span-2 max-h-[6rem] w-full object-contain lg:col-span-1"
          />

          <img
            width="158"
            height="48"
            src="/icons/LanguagesAndToolsIcons/Languages/Python.svg"
            alt="Python"
            className="col-span-2 max-h-[6rem] w-full object-contain lg:col-span-1"
          />

          <img
            width="158"
            height="48"
            src="/icons/LanguagesAndToolsIcons/Languages/C-Sharp.svg"
            alt="C#"
            className="col-span-2 max-h-[6rem] w-full object-contain sm:col-start-2 lg:col-span-1"
          />

          <img
            width="158"
            height="48"
            src="/icons/LanguagesAndToolsIcons/Languages/Java.svg"
            alt="Java"
            className="col-span-2 col-start-2 max-h-[6rem] w-full object-contain sm:col-start-auto lg:col-span-1"
          />
        </div>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img
            width="158"
            height="48"
            src="/icons/LanguagesAndToolsIcons/Tools/AndroidStudio.svg"
            alt="Android Studio"
            className="col-span-2 max-h-[6rem] w-full object-contain lg:col-span-1"
          />

          <img
            width="158"
            height="48"
            src="/icons/LanguagesAndToolsIcons/Tools/Git.svg"
            alt="Git"
            className="col-span-2 max-h-[6rem] w-full object-contain lg:col-span-1"
          />

          <img
            width="158"
            height="48"
            src="/icons/LanguagesAndToolsIcons/Tools/Azure.svg"
            alt="Azure"
            className="col-span-2 max-h-[6rem] w-full object-contain lg:col-span-1"
          />

          <img
            width="158"
            height="48"
            src="/icons/LanguagesAndToolsIcons/Tools/Flutter.svg"
            alt="Flutter"
            className="col-span-2 max-h-[6rem] w-full object-contain sm:col-start-2 lg:col-span-1"
          />

          <img
            width="158"
            height="48"
            src="/icons/LanguagesAndToolsIcons/Tools/Figma.svg"
            alt="Figma"
            className="col-span-2 col-start-2 max-h-[6rem] w-full object-contain sm:col-start-auto lg:col-span-1"
          />
        </div>
      </div>
    </div>
  );
};

export default LogoDisplay;
