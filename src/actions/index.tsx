'use server';

import { todoProps } from '@/types';
import fs from 'fs';
import { revalidatePath } from 'next/cache';
import path from 'path';

export async function createTodo(formData: FormData) {
    const input = formData.get('input') as string;
    if (!input.trim()) {
        // return;
        throw new Error('Input cannot be empty');
    }

    const filePath = path.join(process.cwd(), 'src', 'data', 'tasks.json'); // Updated path
    const jsonData = fs.readFileSync(filePath, 'utf8');
    const todos: todoProps[] = JSON.parse(jsonData) as todoProps[];
    const newTodo: todoProps = {
        id: todos[todos.length - 1].id + 1,
        title: input,
        isCompleted: false,
        createdAt: new Date(),
    };
    todos.push(newTodo);
    fs.writeFileSync(filePath, JSON.stringify(todos));

    revalidatePath('/');
}

export async function changeStatus(formData: FormData) {
    const inputId = formData.get('inputId') as string;

    const filePath = path.join(process.cwd(), 'src', 'data', 'tasks.json'); // Updated path
    const jsonData = fs.readFileSync(filePath, 'utf8');
    const todos: todoProps[] = JSON.parse(jsonData) as todoProps[];

    const todo: todoProps | undefined = todos.find(
        (todo) => todo.id === Number(inputId)
    );

    if (!todo) {
        return;
    }

    todo.isCompleted = !todo.isCompleted;

    fs.writeFileSync(filePath, JSON.stringify(todos));

    revalidatePath('/');
}

export async function editTodo(formData: FormData) {
    const newTitle = formData.get('newTitle') as string;
    const inputId = formData.get('inputId') as string;

    const filePath = path.join(process.cwd(), 'src', 'data', 'tasks.json'); // Updated path
    const jsonData = fs.readFileSync(filePath, 'utf8');
    const todos: todoProps[] = JSON.parse(jsonData) as todoProps[];

    const todo: todoProps | undefined = todos.find(
        (todo) => todo.id === Number(inputId)
    );

    if (!todo) {
        return;
    }

    todo.title = newTitle;
    fs.writeFileSync(filePath, JSON.stringify(todos));

    revalidatePath('/');
}

export async function deleteTodo(formData: FormData) {
    const inputId = formData.get('inputId') as string;

    const filePath = path.join(process.cwd(), 'src', 'data', 'tasks.json'); // Updated path
    const jsonData = fs.readFileSync(filePath, 'utf8');
    const todos: todoProps[] = JSON.parse(jsonData) as todoProps[];

    const todo: todoProps | undefined = todos.find(
        (todo) => todo.id === Number(inputId)
    );

    if (!todo) {
        return;
    }

    todos.splice(todos.indexOf(todo), 1);
    fs.writeFileSync(filePath, JSON.stringify(todos));

    revalidatePath('/');
}

export async function loginUser({
    email,
    password,
}: {
    email: string;
    password: string;
}) {
    // wait for 3 seconds
    await new Promise((resolve) => setTimeout(resolve, 3000));

    return email == 'johndoe@email.com' && password == 'secret';
}
