import { cleanEnv, str, port } from 'envalid';

export default function validateEnv() {
    cleanEnv(process.env, {
        NODE_ENV: str({
            choices: ['development', 'production', 'test'],
            default: 'development',
        }),
        PORT: port({ default: 5000}),
    });
    }