// pages/api/auth/[...nextauth].js
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Providers.Facebook({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn(user, account, profile) {
      // Customize sign-in logic if needed
      return true;
    },
    async redirect(url, baseUrl) {
      // Customize redirect logic if needed
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
  },
  // Add other custom configurations if necessary
});
