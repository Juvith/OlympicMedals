import { useEffect, useState } from "react";
import { fetchMedals, MedalData } from "../lib/fetchMedals";

export const useMedals = () => {
  const [medals, setMedals] = useState<MedalData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [sortType, setSortType] = useState<"gold" | "silver" | "bronze" | "total">("gold");

  useEffect(() => {
    fetchMedals()
      .then((data) => {
        setMedals(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  // Sorting function
  const sortMedals = (type: "gold" | "silver" | "bronze" | "total") => {
    setSortType(type);
    setMedals((prevMedals) =>
      [...prevMedals].sort((a, b) => {
        if (b[type] !== a[type]) return b[type] - a[type]; // Sort by selected type
        if (type !== "gold") return b.gold - a.gold; // Tie-breaker by gold
        return b.silver - a.silver; // Tie-breaker for gold
      })
    );
  };

  return { medals, loading, error, sortMedals, sortType };
};