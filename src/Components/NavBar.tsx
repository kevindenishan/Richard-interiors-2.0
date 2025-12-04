import { useEffect, useState } from "react";
import { cn } from "../lib/util";
import { Menu, X } from "lucide-react";

const items = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/pages/about' },
    { name: 'Products', href: '/pages/products' },
    { name: 'Contact Us', href: '/pages/contact-us' },
]

export const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <nav className={cn(
            "fixed w-full z-40 transition-all duration-300 "
            , isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "bg-transparent")}>
            <div className="container flex items-center justify-between ">
                <a href="#Hero" className="text-xl font-bold text-primary flex-center py-5">
                    <span className="relative z-10 text-secondary" >
                        <span className="text-glow text-primary flex-center items-center">  Richard </span>  interiors
                    </span>
                </a>

                {/* {Desktop Navigation} */}
                <div className="hidden md:flex space-x-8">
                    {items.map((item, key) => (
                        <a href={item.href} key={key} className="text-foreground/80 hover:text-secondary transition-colors duration-300 hover:scale-102 duration-300">
                            {item.name}
                        </a>
                    ))}
                </div>
                {/* {Mobile Navigation} */}

                <button onClick={() => setIsMenuOpen(prev => !prev)} 
                    className="md:hidden absolute top-5 right-5 p-2 text-foreground z-50 rounded-md bg-muted/70 hover:bg-muted transition-colors duration-300 focus:outline-hidden focus:ring-1 focus:ring-offset-1 focus:ring-primary"
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                <div className={cn(
                    "fixed inset-0 bg-background/95 backdrop-blur-md flex-col items-center justify-center z-40",
                    "transition-all duration-300 md:hidden flex",
                    isMenuOpen ? "opacity-full pointer-events-auto" : "opacity-0 pointer-events-none "
                )}>
                    
                    
                    <div className="flex flex-col items-center justify-start w-full text-xl space-y-10 animate-ease-in-out-right transition-all duration-300">
                        {items.map((item, key) => (
                            <a
                                href={item.href} key={key} className="text-foreground/80 hover:text-secondary transition-all duration-300 hover:scale-105"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>


        </nav>
    )
};  
