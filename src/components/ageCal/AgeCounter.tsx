import React from "react";
import { calculateAge } from "./calculateAge";

interface AgeCounterProps {
  startAge: number;
  startYear: number;
  startMonth: number;
  startDay: number;
}

const AgeCounter: React.FC<AgeCounterProps> = ({
  startAge,
  startYear,
  startMonth,
  startDay,
}) => {
  const currentAge = calculateAge(startAge, startYear, startMonth, startDay);

  return <div>{currentAge}</div>;
};

export default AgeCounter;
