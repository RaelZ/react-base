import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
  useMemo,
  useCallback,
} from 'react';
import Cookies from 'js-cookie';

interface AuthContextProps {
  userId: string | null;
  token: string | null;
  setAuth: (userId: string, token: string) => void;
  clearAuth: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [userId, setUserId] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storedUserId = Cookies.get('userId');
    const storedToken = Cookies.get('token');
    if (storedUserId && storedToken) {
      setUserId(storedUserId);
      setToken(storedToken);
    }
  }, []);

  const setAuth = useCallback((newUserId: string, newToken: string) => {
    setUserId(newUserId);
    setToken(newToken);
    Cookies.set('userId', newUserId, { expires: 7 });
    Cookies.set('token', newToken, { expires: 7 });
  }, []);

  const clearAuth = useCallback(() => {
    setUserId(null);
    setToken(null);
    Cookies.remove('userId');
    Cookies.remove('token');
  }, []);

  const value = useMemo(
    () => ({
      userId,
      token,
      setAuth,
      clearAuth,
    }),
    [userId, token, setAuth, clearAuth],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
