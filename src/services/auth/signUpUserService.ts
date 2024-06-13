
import { EmailAlreadyRegisteredError } from '@/domain/errors/EmailAlreadyRegisteredError'
import { SignUpUserUsecase } from '@/domain/usecases/auth/signUpUserUsecase'
import { RequestHelper, RequestHelperInterface } from '@/utils/helpers/requestHelper'


export class SignUpUserService implements SignUpUserUsecase {
  public static instance = new SignUpUserService()

  private errorMap = new Map<number, Error>([
    [409, new EmailAlreadyRegisteredError()],
  ])

  constructor(
    private readonly requestHelper: RequestHelperInterface = RequestHelper.instance
  ) { }

  async perform(params: SignUpUserUsecase.Params): Promise<SignUpUserUsecase.Response> {
    const response = await this.requestHelper.make<SignUpUserUsecase.Response>({
      url: '/users/create_user',
      method: 'POST',
      data: params
    })

    if ('error' in response) {
      const error = this.errorMap.get(response.statusCode)

      return error ?? response.error
    }

    return response.body
  }
}