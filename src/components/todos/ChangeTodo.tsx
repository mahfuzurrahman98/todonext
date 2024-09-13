import { todoProps } from '@/types';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import * as actions from '@/actions';
import { FaCheck } from 'react-icons/fa';
``
const ChangeTodo = ({ todo }: { todo: todoProps }) => {
    return (
        <form action={actions.changeStatus}>
            <Input name="inputId" value={todo.id} type="hidden"></Input>
            <Button type="submit">
                <FaCheck />
            </Button>
        </form>
    );
};

export default ChangeTodo;
