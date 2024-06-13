import { SignInUserByWalletUsecase } from '@/domain/usecases/auth/signInUserByWalletUsecase'
import { SignInUserByWalletService } from '@/services/auth/signInUserByWalletService'
import { useMutation } from '@tanstack/react-query'

type SignInUserByWalletProps = SignInUserByWalletUsecase.Params

export async function signInUserByWallet({ user_wallet }: SignInUserByWalletProps) {

    const response = await SignInUserByWalletService.instance.perform({
        user_wallet
    })
    if (response instanceof Error) throw response

    return response

}

export function useSignInUserByWallet() {
    return useMutation({
        mutationKey: ['authenticate-user-by-wallet'],
        mutationFn: async (props: SignInUserByWalletProps) => signInUserByWallet(props),
    })
}