import AddTodo from '@/components/todos/AddTodo';
import Todo from '@/components/todos/Todo';
import path from 'path';
import fs from 'fs';
import { todoProps } from '@/types';

async function getData() {
    const filePath = path.join(process.cwd(), 'src', 'data', 'tasks.json');
    const jsonData = fs.readFileSync(filePath, 'utf8');
    const todos: todoProps[] = JSON.parse(jsonData) as todoProps[];

    return todos;
}

export default async function Home() {
    const data = await getData();
    return (
        <div className="min-h-screen w-screen bg-gray-50 flex flex-col items-center py-20 px-5">
            <span className="text-4xl font-extrabold uppercase text-blue-600"></span>
            <h1 className="text-5xl font-extrabold uppercase mb-8 text-center text-gray-800">
                TodoNext
            </h1>

            <div className="flex justify-center flex-col items-center w-full max-w-2xl">
                <AddTodo />

                <div className="flex flex-col gap-5 items-center justify-center mt-10 w-full">
                    {data.map((todo, id) => (
                        <div className="w-full" key={id}>
                            <Todo todo={todo} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
