import medalsData from "../../../public/medals.json"; // Placing the medals.json in the public folder

export type MedalData = {
  code: string;
  gold: number;
  silver: number;
  bronze: number;
  total: number;
};

export const fetchMedals = async (): Promise<MedalData[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (medalsData) {
          const updatedData = medalsData.map((country) => ({
            ...country,
            total: country.gold + country.silver + country.bronze, // Ensure 'total' is included
          }));
          resolve(updatedData);
        } else {
          reject("Failed to load medal data");
        }
      }, 500); // API delay
  });
};
