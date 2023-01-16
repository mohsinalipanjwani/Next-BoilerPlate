export function timeFormatter(time: any) {
    const newTime = time.split(".");
    return new Date(newTime[0]);
  }