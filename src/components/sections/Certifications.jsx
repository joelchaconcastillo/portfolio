import React from "react";
import AchievementItem from "../../components/cards/achievementItem";
import { certifications } from "../../data/achievements";

const Certifications = ({ accentClass = "text-sky-600" }) => {
  return (
    <div>
      <h2 className="text-primary dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Certifications
      </h2>

      <div className="flex flex-col">
        {certifications.map((c, i) => (
          <div key={`cert-${i}`} className="p-4">
            <AchievementItem {...c} accentClass={accentClass} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
