import React, { useRef, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./PopupNav.css";

interface PopUpNavItem {
  label: string;
  href: string;
}

export interface PopUpNavProps {
  items: PopUpNavItem[];
  animationTime?: number;
  initialActiveIndex?: number;
}

const PopUpNav: React.FC<PopUpNavProps> = ({
  items,
  initialActiveIndex = 0,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const containerRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLUListElement>(null);
  const filterRef = useRef<HTMLSpanElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  // Determine active index based on current route
  const getActiveIndexFromPath = () => {
    const index = items.findIndex((item) => item.href === location.pathname);
    return index !== -1 ? index : initialActiveIndex;
  };

  const [activeIndex, setActiveIndex] = useState<number>(
    getActiveIndexFromPath()
  );

  // Update active index when route changes
  useEffect(() => {
    const newIndex = getActiveIndexFromPath();
    setActiveIndex(newIndex);
  }, [location.pathname]);

  const updateEffectPosition = (element: HTMLElement) => {
    if (!containerRef.current || !filterRef.current || !textRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const pos = element.getBoundingClientRect();

    const styles = {
      left: `${pos.x - containerRect.x}px`,
      top: `${pos.y - containerRect.y}px`,
      width: `${pos.width}px`,
      height: `${pos.height}px`,
    };
    Object.assign(filterRef.current.style, styles);
    Object.assign(textRef.current.style, styles);
    textRef.current.innerText = element.innerText;
  };

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    index: number,
    href: string
  ) => {
    e.preventDefault(); // Prevent default anchor behavior
    const liEl = e.currentTarget.parentElement as HTMLElement;
    if (activeIndex === index) return;

    setActiveIndex(index);
    updateEffectPosition(liEl);

    if (textRef.current) {
      textRef.current.classList.remove("active");
      void textRef.current.offsetWidth;
      textRef.current.classList.add("active");
    }

    // Navigate using React Router
    navigate(href);
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLAnchorElement>,
    index: number,
    href: string
  ) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      const liEl = e.currentTarget.parentElement;
      if (liEl) {
        handleClick(
          {
            currentTarget: e.currentTarget,
            preventDefault: () => {},
          } as React.MouseEvent<HTMLAnchorElement>,
          index,
          href
        );
      }
    }
  };

  useEffect(() => {
    if (!navRef.current || !containerRef.current) return;
    const activeLi = navRef.current.querySelectorAll("li")[
      activeIndex
    ] as HTMLElement;
    if (activeLi) {
      updateEffectPosition(activeLi);
      textRef.current?.classList.add("active");
    }

    const resizeObserver = new ResizeObserver(() => {
      const currentActiveLi = navRef.current?.querySelectorAll("li")[
        activeIndex
      ] as HTMLElement;
      if (currentActiveLi) {
        updateEffectPosition(currentActiveLi);
      }
    });

    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, [activeIndex]);

  return (
    <div className="popup-nav-container" ref={containerRef}>
      <nav>
        <ul ref={navRef}>
          {items.map((item, index) => (
            <li key={index} className={activeIndex === index ? "active" : ""}>
              <a
                href={item.href}
                onClick={(e) => handleClick(e, index, item.href)}
                onKeyDown={(e) => handleKeyDown(e, index, item.href)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <span className="effect filter" ref={filterRef} />
      <span className="effect text" ref={textRef} />
    </div>
  );
};

export default PopUpNav;
