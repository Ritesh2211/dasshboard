// useChartData.ts
import { useState, useEffect } from 'react';

const useChartData = (chartKey: string) => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/Data.json');
      const json = await response.json();
      setData(json[chartKey]);
    };

    fetchData();
  }, [chartKey]);

  return data;
};

export default useChartData;
