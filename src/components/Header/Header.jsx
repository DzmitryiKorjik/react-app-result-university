import './Header.css';
import { useEffect, useState } from "react";
import logo from "/logo-name.svg";

export default function Header() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);

    return () => clearInterval(interval); // cleanup function to clear the interval when the component unmounts
    
  }, []);


  return (
    <header>
        <img src={logo} alt="Vite logo" />

      <span>L'heure est : {now.toLocaleTimeString()}</span>
    </header>
  );
}
