'use client'

import Image from "next/image"
import Link from "next/link";
import SearchBar from "./SearchBar";
import { Home, Bell, ShoppingCart } from "lucide-react"

const Navbar = () => {
    return (
        <nav className="w-full flex items-center justify-between border-b border-gray-200 pb-4">
            <Link href="/" className="flex items-center">
                <Image src="/@itsmolaboune.jpg" alt="Logo" width={36} height={36} className="w-6 h-6 md:h-9 md:w-9 rounded-full"/>
                <p className="hidden md:block text-md font-medium tracking-wider">@itsmolaboune</p>
            </Link>
            <div className="flex items-center gap-6">
                <SearchBar />
                <Link href="">
                    <Home className="w-4 h-4 text-gray-600"/>
                </Link>
                <Bell className="w-4 h-4 text-gray-600"/>
                <ShoppingCart className="w-4 h-4 text-gray-600"/>
                <Link href="/login">Sign in</Link>
            </div>
        </nav>
    )
}

export default Navbar;