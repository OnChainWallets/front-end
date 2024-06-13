import { Suspense } from "react";
import { SkeletonSuccessCheckoutCard } from "./components/SkeletonSuccessCheckoutCard";
import { SuccessCheckoutCard } from "./components/SuccessCheckoutCard";


export default function SuccessCheckout() {

    return (
        <div className="w-full h-full flex flex-col justify-center items-center gap-3">
            <Suspense fallback={<SkeletonSuccessCheckoutCard />}>
                <SuccessCheckoutCard />
            </Suspense>
        </div >
    )
}