function Header() {
    return (
        <div className="font-bold font-sans w-full pt-[3%] flex items-end">
            <div class="flex-[60%] text-3xl">
                <p class="cursor-pointer">FLAT UI COLORS 2</p>
            </div>
            <div class="flex-[35%] flex justify-end">
                <p class="cursor-pointer">Designer Insiparation</p>
                <div class="ml-[3%] px-[2%] flex items-center bg-red-500 text-sm rounded">
                    <p class="cursor-pointer">NEW</p>
                </div>
            </div>
            <div class="flex-[15%] flex justify-end">
                <p class="cursor-pointer">Subscribe</p>
            </div>
        </div>
    );
}

export default Header;