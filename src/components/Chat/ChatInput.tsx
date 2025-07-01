import React, { useState } from 'react';
import type { FormEvent } from 'react';

interface ChatInputProps {
    onSend: (message: string) => void;
    placeholder?: string;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSend, placeholder = "Type a message..." }) => {
    const [message, setMessage] = useState('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (message.trim()) {
            onSend(message.trim());
            setMessage('');
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '8px', padding: '8px' }}>
            <input
                type="text"
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder={placeholder}
                style={{
                    flex: 1,
                    padding: '8px',
                    borderRadius: '4px',
                    border: '1px solid #ccc',
                    fontSize: '16px'
                }}
            />
            <button
                type="submit"
                style={{
                    padding: '8px 16px',
                    borderRadius: '4px',
                    border: 'none',
                    background: '#007bff',
                    color: '#fff',
                    fontWeight: 'bold',
                    cursor: 'pointer'
                }}
            >
                Send
            </button>
        </form>
    );
};

export default ChatInput;