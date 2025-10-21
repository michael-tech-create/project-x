import Link from "next/link";
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-pink-500 py-10 text-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand section */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <h1 className="text-4xl font-bold mb-2">Beauty queen's</h1>
                        <p className="text-sm">Bringing our product to the beauty world</p>
                        <div className="flex gap-4 mt-4">
                            <Link href="#">
                                <BsInstagram className="text-2xl hover:text-pink-200 transition-colors" />
                            </Link>
                            <Link href="#">
                                <BsFacebook className="text-2xl hover:text-pink-200 transition-colors" />
                            </Link>
                            <Link href="#">
                                <BsTwitter className="text-2xl hover:text-pink-200 transition-colors" />
                            </Link>
                        </div>
                    </div>
                    {/* Help section */}
                    <div className="text-center md:text-left">
                        <h3 className="text-lg font-semibold mb-3">Help</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="#" className="hover:underline">Contact us</Link></li>
                            <li><Link href="#" className="hover:underline">FAQs</Link></li>
                            <li><Link href="#" className="hover:underline">Shipping</Link></li>
                            <li><Link href="#" className="hover:underline">Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>
                {/* Copyright Section */}
                <div className="border-t border-pink-400 mt-8 pt-8 text-center text-sm">
                    <p>&copy; {currentYear} Beauty queen's. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}
