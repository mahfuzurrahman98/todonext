import NextAuth from 'next-auth';
import { ZodError } from 'zod';
import Credentials from 'next-auth/providers/credentials';
import { signInSchema } from '@/lib/zod';

const checkUser = (creds: { email: string; password: string }) => {
    console.log('2nd:', creds);
    if (creds.email === 'johndoe@email.com' && creds.password === 'secret') {
        return { email: 'johndoe@email.com', name: 'John Doe' };
        console.log('Login Successful');
    }
    return null;
};

export const { handlers, auth } = NextAuth({
    providers: [
        Credentials({
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            credentials: {
                email: {},
                password: {},
            },
            authorize: async (credentials) => {
                console.log('1st:', credentials);
                try {
                    let user = null;

                    const { email, password } = await signInSchema.parseAsync(
                        credentials
                    );

                    user = checkUser({ email, password });

                    if (!user) {
                        throw new Error('User not found.');
                    }

                    // return JSON object with the user data
                    return user;
                } catch (error) {
                    if (error instanceof ZodError) {
                        // Return `null` to indicate that the credentials are invalid
                        return null;
                    }
                }
            },
        }),
    ],
});
