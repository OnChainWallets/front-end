export function SkeletonCardPlan() {
    return (
        <div
            className='col-span-3 xl:col-span-1 w-full h-full bg-gradient-to-tr from-zinc-100 dark:from-zinc-700 to-zinc-300 dark:to-zinc-900 rounded-lg p-6 flex flex-col justify-start items-center space-y-5 divide-violet-300 dark:divide-violet-500 divide-y-2'
        >
            <div className="w-full animate-pulse flex flex-col justify-center items-start gap-3">
                <div className="w-3/4 h-8 bg-gray-300 dark:bg-gray-700 rounded"></div>
                <div className="w-full h-6 bg-gray-300 dark:bg-gray-700 rounded"></div>
            </div>

            <div className="w-full animate-pulse flex justify-start items-center py-6">
                <div className="w-3/4 h-8 bg-gray-300 dark:bg-gray-700 rounded"></div>
            </div>

            <ul className="w-full animate-pulse flex flex-col justify-center items-start gap-4 py-6">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
                    <div key={index} className="w-full flex justify-start items-center gap-3 text-sm">
                        <div className="w-5 h-5 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
                        <div className="w-full h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
                    </div>
                ))}
            </ul>


        </div>
    )
}