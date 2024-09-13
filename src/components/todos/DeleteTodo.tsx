import { todoProps } from '@/types';
import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { BsTrash3 } from 'react-icons/bs';

import * as actions from '@/actions';
const DeleteTodo = ({ todo }: { todo: todoProps }) => {
    return (
        <form action={actions.deleteTodo}>
            <Input type="hidden" name="inputId" value={todo.id}></Input>
            <Button type="submit">
                <BsTrash3 />
            </Button>
        </form>
    );
};

export default DeleteTodo;
