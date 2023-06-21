import "./Api.css"; // Styling datei.
import { useState, useEffect } from "react";

export const Api = () => {
  const [data, setData] = useState([]); // data halten mit useState.
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchedData = async () => {
      const data = await (await fetch("https://catfact.ninja/fact")).json();
      setTimeout(() => {
        setData(data);
        setIsLoading(false);
      }, 3000);
    };
    fetchedData();
  }, []);
  return (
    <div className="Api">
      {!isLoading ? (
        <div className="KatzenText">
          <h1>{data.fact}</h1>
        </div>
      ) : (
        <div className="CrazyCat">
          <img
            src="./src/Components/Api/cat-loading.gif"
            alt="Bild Katzenkopf"
          />
        </div>
      )}
    </div>
  );
};
