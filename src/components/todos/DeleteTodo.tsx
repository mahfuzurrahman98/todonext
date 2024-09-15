import { todoProps } from '@/types';
import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

import * as actions from '@/actions';
import { Trash2 } from 'lucide-react';
const DeleteTodo = ({ todo }: { todo: todoProps }) => {
    return (
        <form action={actions.deleteTodo}>
            <Input type="hidden" name="inputId" value={todo.id}></Input>
            <Button className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full" type="submit">
                <Trash2 />
            </Button>
        </form>
    );
};

export default DeleteTodo;
