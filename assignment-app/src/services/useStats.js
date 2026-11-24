import { useState, useEffect } from "react";

const initialStats = {
  "App Usage Time (min/day)": {
    Average: 0,
    Median: 0,
  },

  "Screen On Time (hours/day)": {
    Average: 0,
    Median: 0,
  },

  "Number of Apps Installed": {
    Average: 0,
    Median: 0,
  },

  Age: {
    Average: 0,
    Median: 0,
  },
};

export function useStats(data) {
  const [stats, setStats] = useState(initialStats);

  useEffect(() => {
    if (!data) return;

    const newStats = {};
    Object.keys(initialStats).forEach((key) => {
      const datapoints = data.map((item) => parseFloat(item[key]));

      newStats[key] = {
        Average: getAverage(datapoints),
        Median: getMedian(datapoints),
      };
    });

    setStats(newStats);
  }, [data]);

  return stats;
}

function getAverage(datapoints) {
  if (datapoints.length === 0) return 0;
  return Math.round(
    datapoints.reduce((acc, value) => acc + value, 0) / datapoints.length,
  );
}

function getMedian(datapoints) {
  if (datapoints.length === 0) return 0;

  // Manually sorting because JS is silly
  const sorted = datapoints.sort((a, b) => a - b);
  const half = Math.floor(datapoints.length / 2);
  if (datapoints.length % 2) {
    return sorted[half];
  }

  return (sorted[half - 1] + sorted[half]) / 2;
}
