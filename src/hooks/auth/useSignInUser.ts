import { SignInUserUsecase } from '@/domain/usecases/auth/signInUserUsecase'
import { SignInUserService } from '@/services/auth/signInUserService'
import { useMutation } from '@tanstack/react-query'

type SignInUserProps = SignInUserUsecase.Params

export async function signInUser({ username, email, pswrd }: SignInUserProps) {

    const response = await SignInUserService.instance.perform({
        username,
        email,
        pswrd
    })
    if (response instanceof Error) throw response

    return response

}

export function useSignInUser() {
    return useMutation({
        mutationKey: ['authenticate-user'],
        mutationFn: async (props: SignInUserProps) => signInUser(props),
    })
}