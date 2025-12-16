import RotatingText from "./RotatingText";

export default function RotatingTextFunction() {
  return (
    <RotatingText
      texts={[
        "Database Engineer",
        "Full-Stack Developer",
        "UI/UX Designer",
        "Game Developer",
        "Data Enthusiast",
      ]}
      mainClassName="px-4 sm:px-4 md:px-3 bg-[#028F62] text-white overflow-hidden py-0.5 sm:py-1 md:py-4 justify-center rounded-lg"
      staggerFrom="last"
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "-120%" }}
      staggerDuration={0.025}
      splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
      transition={{ type: "spring", damping: 30, stiffness: 400 }}
      rotationInterval={3000}
    />
  );
}
