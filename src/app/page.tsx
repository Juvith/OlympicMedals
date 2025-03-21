"use client";

import { useMedals } from "../app/hooks/useMedals";
import Flag from "../app/components/flags";

export default function Home() {
  const { medals, loading, error, sortMedals, sortType } = useMedals();

  if (loading) return <p className="text-center text-gray-500">Loading medals...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center">🏅 Olympic Medal Count</h1>
      <table className="w-full border-collapse mt-4">
        <thead>
          <tr className="bg-gray-200" style={{backgroundColor: "#8f8f8f"}}>
            <th className="p-2">Rank</th>
            <th className="px-3 py-2">Country</th>
            <th className={`p-2 cursor-pointer ${sortType === "gold" ? "font-bold" : ""}`} onClick={() => sortMedals("gold")}>🥇 Gold</th>
            <th className={`p-2 cursor-pointer ${sortType === "silver" ? "font-bold" : ""}`} onClick={() => sortMedals("silver")}>🥈 Silver</th>
            <th className={`p-2 cursor-pointer ${sortType === "bronze" ? "font-bold" : ""}`} onClick={() => sortMedals("bronze")}>🥉 Bronze</th>
            <th className={`p-2 cursor-pointer ${sortType === "total" ? "font-bold" : ""}`} onClick={() => sortMedals("total")}>🏆 Total</th>
          </tr>
        </thead>
        <tbody>
          {medals.map((country, index) => (
            <tr key={index} className="text-center border-b border-gray-300-center">
              <td className="p2">{index+1}</td>
              <td className="px-10 py-2 flex items-center">
                <Flag code={country.code} />
                <span className="ml-5">{country.code}</span>
              </td>
              <td className="p2">{country.gold}</td>
              <td className="p2">{country.silver}</td>
              <td className="p2">{country.bronze}</td>
              <td className="p2 font-bold">{country.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
