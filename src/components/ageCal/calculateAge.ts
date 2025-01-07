export function calculateAge(
    startAge: number,
    startYear: number,
    startMonth: number,
    startDay: number
  ): number {
    const today = new Date();
    const startDate = new Date(startYear, startMonth - 1, startDay); // Months are 0-indexed
  
    const yearsElapsed = today.getFullYear() - startDate.getFullYear();
  
    const hasBirthdayPassed =
      today.getMonth() > startDate.getMonth() ||
      (today.getMonth() === startDate.getMonth() && today.getDate() >= startDate.getDate());
  
    return startAge + (hasBirthdayPassed ? yearsElapsed : yearsElapsed - 1);
  }
  