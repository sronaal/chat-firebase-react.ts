import { searchFormSchema } from '@/lib/zod'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '../ui/form'
import { Input } from '../ui/input'


const FriendSearch = () => {
    const form = useForm<z.infer<typeof searchFormSchema>>({
        resolver: zodResolver(searchFormSchema),
        defaultValues: {
            email: ''
        }
    })

    const onSubmit = async (values: z.infer<typeof searchFormSchema>) => {
        console.log(values)
    }

    return (
        <div>
            <Form {...form}  >
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-8">
                    <FormField 
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl className='w-full'>
                                    <Input  placeholder="Buscar con correo electronico" {...field} />
                                </FormControl>
                                <FormMessage className='text-red-500' />
                            </FormItem>
                        )}
                    />

                </form>
            </Form>
        </div>
    )
}

export default FriendSearch
