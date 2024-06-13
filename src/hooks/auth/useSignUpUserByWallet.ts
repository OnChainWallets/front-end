import { SignUpUserByWalletUsecase } from '@/domain/usecases/auth/signUpUserByWalletUsecase'
import { SignUpUserByWalletService } from '@/services/auth/signUpUserByWalletService'
import { useMutation } from '@tanstack/react-query'

type SignUpUserByWalletProps = SignUpUserByWalletUsecase.Params

export async function signUpUserByWallet({ user_wallet }: SignUpUserByWalletProps) {

    const response = await SignUpUserByWalletService.instance.perform({
        user_wallet
    })
    if (response instanceof Error) throw response

    return response

}

export function useSignUpUserByWallet() {
    return useMutation({
        mutationKey: ['create-user-by-wallet'],
        mutationFn: async (props: SignUpUserByWalletProps) => signUpUserByWallet(props),
    })
}