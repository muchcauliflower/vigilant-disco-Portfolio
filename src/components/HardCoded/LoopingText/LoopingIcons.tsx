export const LoopingIcons = () => {
  const items = [
    {
      src: "src/assets/icons/RotatingIcons/VisualStudio.svg",
      alt: "Visual Studio",
    },
    {
      src: "src/assets/icons/RotatingIcons/VisualStudioCode.svg",
      alt: "VS Code",
    },
    {
      src: "src/assets/icons/RotatingIcons/AndroidStudio.svg",
      alt: "Android Studio",
    },
    { src: "src/assets/icons/RotatingIcons/Git.svg", alt: "Git" },
    { src: "src/assets/icons/RotatingIcons/Figma.svg", alt: "Figma" },
    { src: "src/assets/icons/RotatingIcons/Docker.svg", alt: "Docker" },
    { src: "src/assets/icons/RotatingIcons/Kubernetes.svg", alt: "Kubernetes" },
    { src: "src/assets/icons/RotatingIcons/Azure.svg", alt: "Azure" },
    { src: "src/assets/icons/RotatingIcons/Flutter.svg", alt: "Flutter" },
  ];

  // 9 items * 48px (w-12) + 8 gaps * 32px (gap-8) = 432 + 256 = 688px per set
  const setWidth = items.length * 48 + (items.length - 1) * 32;

  return (
    <div>
      <h2 className="text-2xl text-white mb-1 px-4">t</h2>
      <div className="overflow-hidden bg-gradient-to-r from-[#b3c4b4] to-[#8aff8a] via-[#225722] py-8">
        <div
          className="flex items-center gap-8"
          style={{
            animation: `scroll 9.5s linear infinite`,
            width: `${setWidth * 2}px`,
          }}
        >
          {[...items, ...items].map((item, index) => (
            <img
              key={index}
              src={item.src}
              alt={item.alt}
              className="w-12 h-12 object-contain"
              style={{ minWidth: "48px", minHeight: "48px" }}
            />
          ))}
        </div>

        <style>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-${setWidth}px);
            }
          }
        `}</style>
      </div>
    </div>
  );
};
