'use client'

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="mt-16 flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between md:gap-0 bg-gray-800 p-8 rounded-lg">
            <div className="flex flex-col gap-4 items-center">
                <Link href="/" className="flex items-center">
                    <Image src="/@itsmolaboune.jpg" alt="Logo" width={36} height={36} className="w-6 h-6 md:h-9 md:w-9 rounded-full"/>
                    <p className="hidden md:block text-md font-medium tracking-wider text-white">@itsmolaboune</p>
                </Link>
                <p className="text-sm text-gray-400">2025 Trendlama</p>
                <p className="text-sm text-gray-400">All rights reserved.</p>
            </div>
            <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
                <p className="text-sm text-amber-50">Links</p>
                <Link href="/">Home page</Link>
                <Link href="/">Contact</Link>
                <Link href="/">Terms of services</Link>
                <Link href="/">privacy policy</Link>
            </div>
            <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
                <p className="text-sm text-amber-50">Categories</p>
                <Link href="/">Home page</Link>
                <Link href="/">Contact</Link>
                <Link href="/">Terms of services</Link>
                <Link href="/">privacy policy</Link>
            </div>
            <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
                <p className="text-sm text-amber-50">Social Media</p>
                <Link href="/">FB</Link>
                <Link href="/">IN</Link>
                <Link href="/">TT</Link>
                <Link href="/">IN</Link>
            </div>
        </div>
    )
}

