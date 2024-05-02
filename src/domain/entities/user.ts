export interface User {
    uid: string
    email?: string
    name?: string
    phone?: {
      countryCode: string
      number: string
    }
    address?: {
      street?: string
      city?: string
      state?: string
      country?: string
    }
    profilePictureUrl?: string
    createdAt: Date
    updatedAt: Date
    deletedAt?: Date
  }
  