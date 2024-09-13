'use client';

import * as actions from '@/actions';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { todoProps } from '@/types';
import { MdEdit } from 'react-icons/md';
import { useToast } from '@/hooks/use-toast';

const EditTodo = ({ todo }: { todo: todoProps }) => {
    const [editTodoState, setEditTodoState] = useState(false);
    const { toast } = useToast();

    const handleEdit = () => {
        if (todo.isCompleted) return;
        setEditTodoState(!editTodoState);
    };

    const handleSubmit = async (formData: FormData) => {
        try {
            await actions.editTodo(formData);
            setEditTodoState(false);
            toast({
                title: 'Todo Updated',
                description: 'Your todo has been updated successfully.',
            });
        } catch (error) {
            toast({
                title: 'Error',
                description: 'Failed to update the todo.',
            });
        }
    };

    return (
        <div className="flex gap-5 items-center">
            <Button
                onClick={handleEdit}
                className="bg-gray-500 hover:bg-gray-600 text-white p-2 rounded-full"
            >
                <MdEdit />
            </Button>
            {editTodoState ? (
                <form action={handleSubmit} className="flex gap-2 items-center">
                    <Input name="inputId" value={todo.id} type="hidden" />
                    <Input
                        type="text"
                        name="newTitle"
                        placeholder="Edit Todo..."
                        className="p-2 border rounded-lg"
                    />
                    <Button
                        type="submit"
                        className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg"
                    >
                        Save
                    </Button>
                </form>
            ) : null}
        </div>
    );
};

export default EditTodo;
