import React from "react";
import AchievementItem from "../../components/cards/achievementItem";
import { awards } from "../../data/achievements";

const Awards = ({ accentClass = "text-amber-500" }) => {
  return (
    <div>
      <h2 className="text-primary dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Honors &amp; Awards
      </h2>

      <div className="flex flex-col">
        {awards.map((a, i) => (
          <div key={`award-${i}`} className="p-4">
            <AchievementItem {...a} accentClass={accentClass} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Awards;
