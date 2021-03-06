import React, { createContext, useCallback, useContext, useState } from 'react';
import { v4 as uuid } from 'uuid';
import ToastContainer from '../components/ToastContainer';

interface IToastContextData {
  messages: IToastMessage[];
  addToast(message: Omit<IToastMessage, 'id'>): void;
  removeToast(id: string): void;
}

export interface IToastMessage {
  id: string;
  type?: 'success' | 'error' | 'info';
  title: string;
  description?: string;
}

const ToastContext = createContext<IToastContextData>({} as IToastContextData);

export const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<IToastMessage[]>([]);

  const addToast = useCallback(
    ({ type, title, description }: Omit<IToastMessage, 'id'>) => {
      const id = uuid();
      const toast = {
        id,
        type,
        title,
        description,
      };

      setMessages(state => [...state, toast]);
    },
    [],
  );
  const removeToast = useCallback((id: string) => {
    setMessages(state => state.filter(message => message.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ messages, addToast, removeToast }}>
      {children}
      <ToastContainer messages={messages} />
    </ToastContext.Provider>
  );
};

export function useToast(): IToastContextData {
  const context = useContext(ToastContext);

  return context;
}
