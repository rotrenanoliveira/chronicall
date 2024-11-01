import { customAlphabet } from 'nanoid'

export const generateNanoId = customAlphabet('0123456789abcdefghijklmnopqrstuvwxyz', 12)
