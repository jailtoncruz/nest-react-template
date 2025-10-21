import { TokenResponse } from '@interfaces/auth-request';
import 'express-session';

declare module 'express-session' {
  interface SessionData {
    user: {
      accessToken: string;
      refreshToken: string;
      idToken: string;
      tokenType: string;
      expiresIn: number;
      userId: string;
    };
  }
}
