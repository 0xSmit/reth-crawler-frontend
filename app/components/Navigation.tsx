import { NavigationMenu, NavigationMenuLink, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { useEffect, useState } from "react";
import Logo from "@/assets/logo.png"


export const Navigation = () => {
  const [path, setPath] = useState("");

  useEffect(() => {
    setPath(window.location.pathname);
  }, []);

  return (
    <NavigationMenu>
      <NavigationMenuLink className="flex w-fit items-center gap-3" href="/" active={path === "/"}>
        <img src={Logo} alt="reth crawler" className="w-1/12" />
        <h1 className="text-xl">Reth Crawler</h1> 
        {/* this name can be changed to the actual  name for the website. suggestion- ethernodes */}
      </NavigationMenuLink>
      <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/" active={path === "/"}>
        Client Analytics
      </NavigationMenuLink>
      <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/nodes" active={path === "/nodes"}>
        Browse Nodes
      </NavigationMenuLink>
    </NavigationMenu>
  );
};
