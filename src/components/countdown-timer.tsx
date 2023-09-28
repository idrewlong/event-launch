import React, { useState, useEffect } from "react";
import { calculateTimeToEvent } from "@/utils/countdown-utils";
import { Framework } from "@/utils/framework-utils";
import { TimeUnit } from "./time-unit";

const CountdownTimer = ({
  currentFramework,
}: {
  currentFramework: Framework;
}) => {
  const [countdown, setCountdown] = useState(calculateTimeToEvent());

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(calculateTimeToEvent());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center flex gap-[10px]">
      <TimeUnit
        label="DAYS"
        value={countdown.days}
        currentFramework={currentFramework}
      />
      <TimeUnit
        label="HOURS"
        value={countdown.hours}
        currentFramework={currentFramework}
      />
      <TimeUnit
        label="MINUTES"
        value={countdown.minutes}
        currentFramework={currentFramework}
      />
      <TimeUnit
        label="SECONDS"
        value={countdown.seconds}
        currentFramework={currentFramework}
      />
    </div>
  );
};

export default CountdownTimer;
