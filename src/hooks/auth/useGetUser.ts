import { parseCookies } from 'nookies'
import { useMutation } from '@tanstack/react-query'
import { GetUserService } from '@/services/auth/getUserService'

export async function getUser() {
  const { token } = parseCookies()
  const response = await GetUserService.instance.perform({
    token: token || '',
  })
  return response
}

export function useGetUser() {
  return useMutation({
    mutationKey: ['get-user'],
    mutationFn: () => getUser(),
    onSuccess: () => {
    }
  })
}