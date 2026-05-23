import { Link } from "react-router";

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between px-8 py-5 bg-slate-950 border-b border-slate-800">
            
            <Link to="/">
                <div>
                    <p className="text-3xl font-extrabold text-violet-400">
                        Resume Forage AI
                    </p>

                    <p className="text-sm text-slate-400">
                        ATS Resume Intelligence Platform
                    </p>
                </div>
            </Link>

            <Link
                to="/upload"
                className="bg-violet-700 hover:bg-violet-900 text-white px-6 py-3 rounded-2xl font-semibold transition-all duration-300 shadow-lg"
            >
                Analyze Resume
            </Link>
        </nav>
    );
};

export default Navbar;
