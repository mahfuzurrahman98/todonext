import { signIn } from '@/auth';

const signInHandler = async (formData: FormData) => {
    'use server';
    await signIn('credentials', formData);
};

export function SignIn() {
    return (
        <form action={signInHandler}>
            <label>
                Email
                <input name="email" type="email" />
            </label>
            <label>
                Password
                <input name="password" type="password" />
            </label>
            <button>Sign In</button>
        </form>
    );
}
