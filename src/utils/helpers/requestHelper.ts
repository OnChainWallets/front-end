import axios from 'axios'

export interface RequestHelperInterface {
  make<T>(
    params: RequestHelper.Make.Params
  ): Promise<RequestHelper.Make.Response<T>>
}

export namespace RequestHelper {
  export namespace Make {
    export type Params = {
      url: string
      method: string
      data?: unknown
    }

    export type Response<T> = {
      statusCode: number
      body: T
    } | {
      statusCode: number
      error: Error
    }
  }
}

export class RequestHelper implements RequestHelperInterface {
  public static instance: RequestHelperInterface = new RequestHelper()

  async make<T>(
    params: RequestHelper.Make.Params
  ): Promise<RequestHelper.Make.Response<T>> {
    const { url, method, data } = params

    try {
      const response = await axios.request({
        url: `${process.env.NEXT_PUBLIC_API_BASE_URL}${url}`,
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
        method,
        data,
      })

      return { statusCode: response.status, body: response.data }
    } catch (error: any) {
      const message = error.response?.data.message || error.response?.data.error || error.message
      const status = error.response?.status || 500

      return { statusCode: status, error: new Error(message) }
    }
  }
}
