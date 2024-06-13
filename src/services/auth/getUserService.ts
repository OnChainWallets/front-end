
import { GetUserUsecase } from '@/domain/usecases/auth/getUserUsecase'
import { RequestHelper, RequestHelperInterface } from '@/utils/helpers/requestHelper'

export class GetUserService implements GetUserUsecase {
  public static instance = new GetUserService()

  constructor(
    private readonly requestHelper: RequestHelperInterface = RequestHelper.instance
  ) { }

  async perform(params: GetUserUsecase.Params): Promise<GetUserUsecase.Response> {
    const response = await this.requestHelper.make<GetUserUsecase.Response>({
      url: '/user/get',
      method: 'GET',
      data: params
    })
    if ('error' in response) {
      return response.error
    }

    return response.body
  }
}