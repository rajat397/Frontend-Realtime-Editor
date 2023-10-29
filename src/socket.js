
import { io } from 'socket.io-client';
export const initSocket = async () => {
    const options = {
        'force new connection': true,
        reconnectionAttempt: 'Infinity',
        timeout: 10000,
        transports: ['websocket'],
    };

    const socket = io('https://server-realtime-editor.vercel.app/', options); // Replace 'https://api.xyz.com' with your actual server URL
    return socket;
};
