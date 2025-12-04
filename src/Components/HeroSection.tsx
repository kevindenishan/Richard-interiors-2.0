export const HeroSection = () => {
    return <section id="Hero" className="realtive min-h-screen flex flex-col item-center justify-content px-4">
        <div className="container max-w-4xl mx-auto text-center z-10">

            <div className=" space-y-6 pt-65 " >
                <h1 className=" text-primary text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight ">
                    <span className="block text-glow opacity-0 animate-fade-in-delay-2 py-2">Transforming Spaces</span>
                    <span className="block text-secondary opacity-0 animate-fade-in-delay-1 ">Elevating Living.</span>

                </h1>
                <p>
                    <span className="block text-foreground/80 text-sm sm:text-md md:text-lg opacity-0 animate-fade-in-delay-3 margin-10">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum inventore, maiores ab voluptas, odio ex laudantium incidunt eaque tempore placeat adipisci? Odit id doloremque nam est molestias perferendis consequatur nostrum.</span>
                </p>
                <div>
                    <button className="secondary-button" onClick={() => window.location.href = '../src/pages/contact-us.tsx'}>Contact Us</button>
                </div>

            </div>

        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4 animate-bounce font-xs text-sm text-foreground/70 flex flex-col items-center">
            <span>Scroll</span>
        </div>
        


    </section>
}