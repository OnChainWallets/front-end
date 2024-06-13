import { Mail } from "lucide-react";
import { Button } from "../components/Button";
import { InputControl, InputPrefix, InputRoot } from "../components/Form/Input";
import { SettingsTabs } from "./components/SettingsTabs";


export default function Settings() {
    return (
        <div>
            <SettingsTabs />

            <div className="mt-6 flex flex-col">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center justify-between pb-5 border-b border-zinc-200 dark:border-zinc-700">
                    <div className="space-y-1">
                        <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">Personal Info</h2>
                        <span className="text-sm text-zinc-500 dark:text-zinc-400">Update your photo and personal details here.</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button type="button" variant="outline">Cancel</Button>
                        <Button type="submit" form="settings" variant="primary">
                            Save
                        </Button>
                    </div>
                </div>

                <form id="settings" className="mt-6 flex flex-col w-full gap-5 divide-y divide-zinc-200 dark:divide-zinc-700">
                    <div className="flex flex-col lg:grid gap-3 lg:grid-cols-form">
                        <label htmlFor="firstName" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                            Name
                        </label>
                        <div className="flex flex-col lg:grid gap-6 lg:grid-cols-2">
                            <InputRoot>
                                <InputControl id="firstName" placeholder='John' />
                            </InputRoot>

                            <div className="flex flex-col gap-3 lg:block">
                                <label htmlFor="lastName" className="text-sm font-medium text-zinc-700 dark:text-zinc-300 lg:sr-only">
                                    Last name
                                </label>

                                <InputRoot>
                                    <InputControl id="lastName" placeholder='Doe' />
                                </InputRoot>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col lg:grid gap-3 lg:grid-cols-form pt-5">
                        <label htmlFor="email" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                            Email adrress
                        </label>
                        <InputRoot>
                            <InputPrefix>
                                <Mail className="h-5 w-5 text-zinc-500" />
                            </InputPrefix>
                            <InputControl
                                id="email"
                                type="email"
                                placeholder='johndoe@gmail.com'
                            />
                        </InputRoot>
                    </div>


                    <div className="flex items-center justify-end gap-2 pt-5">
                        <Button type="button" variant="outline">Cancel</Button>
                        <Button type="submit" form="settings" variant="primary">
                            Save
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}