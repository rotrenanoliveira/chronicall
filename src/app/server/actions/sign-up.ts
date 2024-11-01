'use server'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { z } from 'zod'
import { generateNanoId } from '../data/nanoid'

const signUpDataSchema = z.object({
  'user-mail': z.string().email(),
  'user-name': z.string().min(5, { message: 'O nome deve ter no mínimo 5 caracteres.' }),
})

export async function signUpAction(data: FormData) {
  const _data = signUpDataSchema.parse(Object.fromEntries(data))

  const userId = generateNanoId()
  const userData = {
    id: userId,
    name: _data['user-name'],
    email: _data['user-mail'],
  }

  const cookieStore = await cookies()

  cookieStore.set('sign-up:user', userId, {
    path: '/',
    maxAge: 60 * 60 * 24 * 1, // 1 day
  })

  cookieStore.set('chronicall:user', JSON.stringify(userData), {
    path: '/',
    maxAge: 60 * 60 * 24 * 1, // 1 day
  })

  redirect('/sign-up?step=2')
}
