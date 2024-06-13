import { SignUpUserUsecase } from '@/domain/usecases/auth/signUpUserUsecase'
import { SignUpUserService } from '@/services/auth/signUpUserService'
import { useMutation } from '@tanstack/react-query'

type SignUpUserProps = SignUpUserUsecase.Params

export async function signUpUser({ username, email, pswrd }: SignUpUserProps) {

    const response = await SignUpUserService.instance.perform({
        username,
        email,
        pswrd
    })
    if (response instanceof Error) throw response

    return response

}

export function useSignUpUser() {
    return useMutation({
        mutationKey: ['create-user'],
        mutationFn: async (props: SignUpUserProps) => signUpUser(props),
    })
}