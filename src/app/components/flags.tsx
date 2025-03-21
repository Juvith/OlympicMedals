type FlagProps = {
    code: string;
    size?: number;
  };
  
  const Flag = ({ code, size = 30 }: FlagProps) => {
    const flagIndex = getFlagIndex(code);
    const flagHeight = 18; // Height of each flag based on image editor
    const x = 0;
    const y = flagIndex*flagHeight;
  
    return (
      <div
        className="inline-block"
        style={{
          width: size,
          height: size,
          backgroundImage: "url(/flags.png)",
          backgroundPosition: `-${x}px -${y}px`,
          backgroundSize: "cover",
        }}
      />
    );
  };
  
  // Function to determine flag position
  const getFlagIndex = (code: string) => {
    const countryCodes = ["AUT", "BLR", "CAN", "CHN","FRA", "GER","ITA","NED","NOR","RUS", "SUI","SWE","USA"]; 
    // all country codes in alphabetical order (same order as in flags.png)
    return countryCodes.indexOf(code.toUpperCase());
  };
  
  export default Flag;  