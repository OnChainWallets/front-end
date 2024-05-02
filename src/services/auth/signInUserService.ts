import { EmailOrPasswordIncorrectError } from '@/src/domain/errors/EmailOrPasswordIncorrectError'
import { SignInUserUsecase } from '@/src/domain/usecases/auth/signInUserUsecase'
import { RequestHelper, RequestHelperInterface } from '@/src/utils/helpers/requestHelper'


export class SignInUserService implements SignInUserUsecase {
  public static instance = new SignInUserService()

  private errorMap = new Map<number, Error>([
    [422, new EmailOrPasswordIncorrectError()],
  ])

  constructor(
    private readonly requestHelper: RequestHelperInterface = RequestHelper.instance
  ) {}

  async perform(
    params: SignInUserUsecase.Params
  ): Promise<SignInUserUsecase.Response> {
    const response = await this.requestHelper.make<SignInUserUsecase.Response>({
      url: '/user/login',
      method: 'POST',
      data: params,
    })

    if ('error' in response) {
      const error = this.errorMap.get(response.statusCode)
      return error ?? response.error
    }

    return response.body
  }
}
