import { getStoreStatus_ } from '@/constants/helper';

type IProps = {
    showTitle?: boolean;
    classNameMainText?: string;
    pingContainerSize?: string;
    innerPingSize?: string;
}

export default function OpenIndicator({
    showTitle=true, innerPingSize='size-5',
    classNameMainText, pingContainerSize='size-6'
}: IProps) {
    const storeStatus = getStoreStatus_();
    
    return (
        <div className="flex items-center justify-start gap-4">
            <span className={`relative ml-2 flex items-center justify-center md:ml-0 ${pingContainerSize}`}>
                <span
                className={`absolute inline-flex h-full w-full animate-ping rounded-full ${
                    storeStatus.isOpen ? "bg-green-400" : "bg-red-400"
                } opacity-75`}
                />
                <span
                className={`relative inline-flex rounded-full ${
                    storeStatus.isOpen ? "bg-green-500" : "bg-red-400"
                } ${innerPingSize}`}
                />
            </span>

            <div className="flex flex-col items-start justify-start">
                {showTitle && <p className="text-[16px] font-semibold leading-relaxed text-main">
                Walk-in status
                </p>}

                <span
                className={`text-2xl font-black sm:text-3xl ${
                    storeStatus.isOpen ? "text-green-500" : "text-red-400"
                } ${classNameMainText}`}
                >
                {storeStatus.isOpen ? "OPEN NOW" : "CLOSED"}
                </span>

                {showTitle && <p className="text-sm font-semibold leading-relaxed text-main">
                {storeStatus.message}
                </p>}
            </div>
        </div>
    )
}
