'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import * as actions from '@/actions';

const AddTodo = () => {
    const { toast } = useToast();

    const cleintAction = async (formData: FormData) => {
        try {
            await actions.createTodo(formData);
            toast({
                title: 'Success!',
                description: 'Todo has been added successfully.',
            });
        } catch (error) {
            toast({
                title: 'Error',
                description: 'Failed to add the todo. Please try again.',
            });
        }
    };

    return (
        <form action={cleintAction} className="w-full max-w-xl">
            <div className="flex gap-4 items-center w-full">
                <Input
                    name="input"
                    type="text"
                    placeholder="Add Todo Here..."
                    className="p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-5 rounded-lg transition-all ease-in-out duration-300"
                >
                    Add Todo
                </Button>
            </div>
        </form>
    );
};

export default AddTodo;
