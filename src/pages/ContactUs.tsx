import { useState } from "react";
import { NavBar } from "../Components/NavBar";
import { ThemeToggle } from "../Components/ThemeToggle";

export const ContactUs = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [whatsapp, setWhatsapp] = useState("");
    const [other, setOther] = useState("");
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [submitted, setSubmitted] = useState(false);

    const validate = () => {
        const e: Record<string, string> = {};
        if (!fullName.trim()) e.fullName = "Full name is required.";
        if (!email.trim()) e.email = "Email is required.";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Enter a valid email.";
        if (!whatsapp.trim()) e.whatsapp = "WhatsApp number is required.";
        else if (!/^[+\d][\d\s-]{6,}$/.test(whatsapp)) e.whatsapp = "Enter a valid phone number.";
        return e;
    };

    const onSubmit = (ev: React.FormEvent) => {
        ev.preventDefault();
        const e = validate();
        setErrors(e);
        if (Object.keys(e).length === 0) {
            setSubmitted(true);
            // In a real app you would POST the form here
        }
    };

    return (
        <div id="contact-us" className="min-h-screen bg-background text-foreground">
            <ThemeToggle />
            <NavBar />

            <main className="flex items-center justify-center p-6 pt-32">
                <div className="w-full max-w-2xl bg-secondary/80 dark:bg-rgba(222, 48%, 24%, 0.8) backdrop-blur-md rounded-2xl shadow-2xl p-8 pt-10">
                    <header className="mb-6">
                        <h1 className="text-3xl font-semibold">Contact Us</h1>
                        <p className="text-sm text-muted-foreground mt-1">We'd love to hear from you — please fill out the form below.</p>
                    </header>

                    {submitted ? (
                        <div className="p-6 rounded-lg bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800">
                            <h2 className="text-xl font-medium">Thanks — we received your message!</h2>
                            <p className="mt-2 text-sm text-muted-foreground">We'll reach out to you on WhatsApp or by email shortly.</p>
                        </div>
                    ) : (
                        <form onSubmit={onSubmit} noValidate>
                            <div className="grid grid-cols-1 gap-4">
                                <label className="block">
                                    <span className="text-sm font-medium">Full name *</span>
                                    <input
                                        type="text"
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                        aria-required
                                        className="mt-1 block w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary"
                                        placeholder="Your full name"
                                    />
                                    {errors.fullName && <p className="text-sm text-red-600 mt-1">{errors.fullName}</p>}
                                </label>

                                <label className="block">
                                    <span className="text-sm font-medium">Email address *</span>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        aria-required
                                        className="mt-1 block w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary"
                                        placeholder="you@example.com"
                                    />
                                    {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
                                </label>

                                <label className="block">
                                    <span className="text-sm font-medium">WhatsApp number *</span>
                                    <input
                                        type="tel"
                                        value={whatsapp}
                                        onChange={(e) => setWhatsapp(e.target.value)}
                                        aria-required
                                        className="mt-1 block w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary"
                                        placeholder="+1 555 555 5555"
                                    />
                                    {errors.whatsapp && <p className="text-sm text-red-600 mt-1">{errors.whatsapp}</p>}
                                </label>

                                <label className="block">
                                    <span className="text-sm font-medium">Other details (optional)</span>
                                    <textarea
                                        value={other}
                                        onChange={(e) => setOther(e.target.value)}
                                        className="mt-1 block w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary"
                                        placeholder="Tell us about your project, timeline, budget, or any questions"
                                        rows={4}
                                    />
                                </label>

                                <div className="flex gap-4 mt-2">
                                    <button type="button" className="secondary-button" onClick={() => window.history.back()}>
                                        Back
                                    </button>

                                    <button type="submit" className="primary-button">Submit</button>
                                </div>
                            </div>
                        </form>
                    )}
                </div>
            </main>
        </div>
    );
};