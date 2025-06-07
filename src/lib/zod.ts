import { z } from 'zod'


export const loginFormSchema = z.object({
  email: z.string().email('Ingrese un correo electronico valido'),
  password: z.string().min(6, 'La contraseña debe tener minimo 6 caracteres')
})

export const registerFormSchema = z.object({
  photoURL: z.instanceof(File, {
    message: 'Por favor subir una imagen valida'
  })
    .refine((data) => data.size < 2 * 1024 * 1024, {
      message: 'Tamaño maximo de la imagen 2MB'
    }),
  displayName: z.string().min(3, 'El nombre debe tener al menos 3 caracteres'),
  email: z.string().email('Ingrese un correo electronico valido'),
  password: z.string().min(6, 'La contraseña debe tener minimo 6 caracteres'),
  confirmPassword: z.string().min(6, 'La contraseña debe tener minimo 6 caracteres')

})
  .refine((data) => data.password === data.confirmPassword, {
    "message": "Las contraseñas deben ser iguales"
  })