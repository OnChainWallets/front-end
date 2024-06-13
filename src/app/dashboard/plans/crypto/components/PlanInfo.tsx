export function PlanInfo() {
    return (
        <div className="w-1/3 flex flex-col justify-start items-center gap-3 h-60 p-5 rounded-lg border-2 border-zinc-300">
            <h1 className="text-2xl font-bold">BASIC PLAN</h1>
            <div className="flex flex-col w-full gap-5">
                <div className="bg-zinc-400 w-full h-5 rounded-md" />
                <div className="bg-zinc-400 w-full h-5 rounded-md" />
                <div className="bg-zinc-400 w-full h-5 rounded-md" />
                <div className="bg-zinc-400 w-full h-5 rounded-md" />
            </div>
        </div>
    )
}