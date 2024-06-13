import { Button } from "../Button";

export function PlanWidget() {
    return (
        <div className="flex flex-col gap-4 rounded-lg bg-violet-50 px-4 py-5 dark:bg-zinc-800">
            <div className="space-y-1">
                <span className="text-sm/5 font-medium text-violet-700 dark:text-zinc-100">
                    Need more features?
                </span>
                <p className="text-sm/5 text-violet-500 dark:text-zinc-400">
                    unlock additional features and advanced functionality
                </p>
            </div>

            <div className="h-1 rounded-full bg-violet-600 dark:bg-violet-400" />

            <a href='/dashboard/plans'>
                <Button
                    type="button"
                    variant="outline"
                    className="w-full border-2 border-violet-500 dark:border-violet-500"
                >
                    Upgrade plan
                </Button>
            </a>

        </div>
    )
}