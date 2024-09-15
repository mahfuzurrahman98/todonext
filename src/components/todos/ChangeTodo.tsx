import { todoProps } from '@/types';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import * as actions from '@/actions';
import { Check } from 'lucide-react';

const ChangeTodo = ({ todo }: { todo: todoProps }) => {
    return (
        <form action={actions.changeStatus}>
            <Input name="inputId" value={todo.id} type="hidden"></Input>
            <Button className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full" type="submit">
                <Check />
            </Button>
        </form>
    );
};

export default ChangeTodo;
