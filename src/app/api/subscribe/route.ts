'use server';

export async function subscribeToNewsletter(
    email: string
): Promise<{ success: boolean }> {
    // Simulate an API request delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Mock successful response
    if (email === 'test@example.com') {
        return { success: true };
    }

    // Mock failure for demonstration
    throw new Error('Subscription failed. Please try again.');
}
