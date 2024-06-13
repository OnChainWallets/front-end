import { useMutation, useQuery } from '@tanstack/react-query'
import { GetUserByWalletService } from '@/services/auth/getUserByWalletService'
import { GetUserByWalletUsecase } from '@/domain/usecases/auth/getUserByWalletUsecase'


type GetUserByWalletProps = GetUserByWalletUsecase.Params
export async function getUserByWallet({ user_wallet }: GetUserByWalletProps) {

    const response = await GetUserByWalletService.instance.perform({
        user_wallet,
    })
    return response
}

export function useGetUserByWallet() {
    return useMutation({
        mutationKey: ['get-user-by-wallet'],
        mutationFn: async ({ user_wallet }: GetUserByWalletProps) => await getUserByWallet({ user_wallet }),
    })
}