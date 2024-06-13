import Image, { StaticImageData } from "next/image";
import { Button } from "./Button";

interface CryptoFilterProps {
    title: string;
    imageIcon: string | StaticImageData;
    filterSelected: string;
    setFilterSelected: (filterSelected: string) => void;
}

export function CryptoFilter({ title, imageIcon, filterSelected, setFilterSelected }: CryptoFilterProps) {
    return (
        <div>
            <Button variant={filterSelected === title.toLowerCase() ? 'primary' : 'outline'} onClick={() => setFilterSelected(title.toLowerCase())} className='flex justify-center items-center gap-3 w-56 md:w-16 xl:w-36 h-12 text-sm border'>
                <Image src={imageIcon} width={18} height={18} alt="Icon" />
                <span className="inline md:hidden xl:inline">{title}</span>
            </Button>
        </div>
    )
}