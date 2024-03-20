import { createContext } from 'react';

interface IUserContextProps {
  email: string;
}

export const UserContext = createContext<IUserContextProps | null>(null);
