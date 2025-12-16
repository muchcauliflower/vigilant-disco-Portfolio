function RespondrComponent() {
  return (
    <div>
      <div className="respondr-tile" style={{ position: "relative" }}>
        <div className="respondr-tile-background" />
        <div
          style={{
            position: "relative",
            zIndex: 1,
            // justifyContent: "center",
            alignItems: "center",
            display: "flex",
            height: "100%",
          }}
        >
          <div className="flex w-full h-full">
            <div className="w-2/5 p-">
              <div className="tile-left-row">
                <img
                  width="400"
                  height="auto"
                  src="/ProjectsAssets/reponsdrIcon.svg"
                />
              </div>
            </div>
            <div className="flex-1 flex mt-[8rem]">
              <div className="p-16 box-border">
                <h1>RESPONDr.</h1>
                <p>
                  Prototype app designed to standardize and streamline
                  communication between users and emergency services within
                  towns and provinces in Iloilo.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="-mt-[52rem] ml-[4rem] mr-[4rem]">
          Originally pitched at Central Launch: Student-led Startup Bootcamp
          held by CPU. RESPONDr. is an app to tackle the issues and problems
          faced by many Filipinos in emergent situations. Despite being educated
          about handling situations and who to contact. Not everyone knows the
          appropriate authorities to contact or were fortunate enough to be
          informed, and if so. Many tend to default to calling the general
          number 911. While this is helpful, it often causes delays due to call
          transfers for location and emergency details. Such time losses could
          result to loss of lives that could have been prevented if help arrived
          sooner. The app focuses on creating a standardized and streamline
          communication between users and their local emergency services,
          removing the excess time from calling the general branch and straight
          to the source of service that can provide aid.
        </div>
        <div className="mt-5 ml-[4rem] mr-[4rem]">Screenshots:</div>

        <div className="ml-[4rem] mr-[4rem] mt-4 flex gap-6 overflow-x-auto">
          {[
            "/ScreenShots/Respondr Screenshots/Home respondr.png",
            "/ScreenShots/Respondr Screenshots/Home.png",
            "/ScreenShots/Respondr Screenshots/login.png",
            "/ScreenShots/Respondr Screenshots/Respondr Home.png",
          ].map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Screenshot ${index + 1}`}
              className="w-[220px] h-[420px] object-cover flex-shrink-0 rounded-lg border"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default RespondrComponent;
