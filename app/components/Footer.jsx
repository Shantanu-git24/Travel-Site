import Link from "next/link";
import {
    FaFacebookF,
    FaLinkedinIn,
    FaInstagram,
    FaWhatsapp,
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200 pt-10">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
                {/* Logo & Socials */}
                <div>
                    <img src="/images/logo.png" alt="Logo" className="w-32 mb-4" />
                    <p className="text-sm text-gray-600 mb-4">
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry Lorem Ipsum.
                    </p>
                    <div className="flex space-x-4 text-[#0094da]">
                        <FaFacebookF />
                        <FaLinkedinIn />
                        <FaWhatsapp />
                        <FaInstagram />
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                        <li>
                            <Link href="/packages" >
                                › Packages
                            </Link>
                        </li>
                        <li>
                            <Link href="/flights" >
                                › Flights
                            </Link>
                        </li>
                        <li>
                            <Link href="/hotels" >
                                › Hotels
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" >
                                › About Us
                            </Link>
                        </li>
                        <li>
                            <Link href="/corporate" >
                                › Corporate Package
                            </Link>
                        </li>
                        <li>
                            <Link href="/pdf-form" >
                                › PDF Form
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Address */}
                <div>
                    <h3 className="font-semibold text-lg mb-3">Address</h3>
                    <ul className="space-y-4 text-sm text-gray-700">
                        <li className="flex items-start space-x-2 ">
                            <FaPhoneAlt className="text-blue-400 mt-1" />
                            <span>
                                +91 00000 00000 <br /> +91 00000 00000
                            </span>
                        </li>
                        <li className="flex items-start space-x-2">
                            <FaEnvelope className="text-blue-400 mt-1" />
                            <span>
                                LoremIpsum@gmail.com <br /> LoremIpsum@gmail.com
                            </span>
                        </li>
                        <li className="flex items-start space-x-2">
                            <FaMapMarkerAlt className="text-blue-400 mt-1" />
                            <span>
                                Ruby Park Rd, Kasba, Kolkata, <br /> West Bengal
                            </span>
                        </li>
                    </ul>
                </div>

                {/* Instagram Posts */}
                <div>
                    <h3 className="font-semibold text-lg mb-3">Instagram Post</h3>
                    <div className="grid grid-cols-3 gap-2">
                        {[...Array(6)].map((_, idx) => (
                            <img
                                key={idx}
                                src={`/images/insta${idx + 1}.jpg`}
                                alt={`Insta ${idx + 1}`}
                                className="w-full h-20 object-cover rounded"
                            />
                        ))}
                    </div>
                </div>
            </div>
            <section className="bg-[#0094da] text-white text-sm">
                <div className="max-w-7xl mx-auto px-6 py-3 flex flex-col md:flex-row items-center justify-between">
                    <p className="mb-2 md:mb-0">Copyright © 2025 Tourm. All Rights Reserved.</p>
                    <p className="mb-2 md:mb-0">Design and Developed By <a href="http://dignexus.com" target="_blank">Dignexus</a> </p>
                    {/* <div className="flex items-center space-x-2">
                        <span className="mr-2">We Accept</span>
                        <img src="/images/mastercard.png" alt="MasterCard" className="w-8 h-5 object-contain" />
                        <img src="/images/visa.png" alt="Visa" className="w-8 h-5 object-contain" />
                        <img src="/images/paypal.png" alt="PayPal" className="w-8 h-5 object-contain" />
                        <img src="/images/applepay.png" alt="Apple Pay" className="w-8 h-5 object-contain" />
                    </div> */}
                </div>
            </section>

        </footer>
    );
}
