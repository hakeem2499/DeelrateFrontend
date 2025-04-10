import { ForwardSvg } from "./ButtonLink";

interface CarouselControlProps {
    type: string;
    title: string;
    handleClick: () => void;
    disabled?: boolean;
}

const CarouselControl = ({
    type,
    title,
    handleClick,
    disabled
}: CarouselControlProps) => {
    return (
        <button
            className={`w-10 h-10 flex items-center mx-2 justify-center bg-neutral-200 dark:bg-neutral-800 border-3 border-transparent rounded-lg focus:border-[#6D64F7] focus:outline-none hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200 ${type === "previous" ? "rotate-180" : ""
                }`}
            title={title}
            onClick={handleClick}
            disabled={disabled}
        >
            <ForwardSvg className="text-neutral-600 dark:text-neutral-200" />
        </button>
    );
};

export default CarouselControl;