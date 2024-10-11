import { useState, useEffect } from "react";

// Define the custom hook
const useMediaQuery = (query: string): boolean => {
  // Initialize state to store whether the media query matches
  const [matches, setMatches] = useState<boolean>(false);
  //console.log(matches);

  useEffect(() => {
    // Function to check if the media query matches and update state
    const updateMatches = () => {
      const mediaQueryList = window.matchMedia(query);
      setMatches(mediaQueryList.matches);
    };

    // Initial check
    updateMatches();

    // Set up event listener for changes
    window.addEventListener("resize", updateMatches);

    // Clean up function to remove event listener
    return () => {
      window.removeEventListener("resize", updateMatches);
    };
  }, [query]); // Only re-run effect if query changes

  return matches;
};

export default useMediaQuery;


// import { useState, useEffect } from "react";

// const useMediaQuery = (query: string) => {
//   const [matches, setMatches] = useState(false);

//   useEffect(() => {
//     const media = window.matchMedia(query);
//     if (media.matches !== matches) {
//       setMatches(media.matches);
//     }
//     const listener = () => setMatches(media.matches);
//     window.addEventListener("resize", listener);
//     return () => window.removeEventListener("resize", listener);
//   }, [matches, query]);

//   return matches;
// };

// export default useMediaQuery;