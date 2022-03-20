import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import SpotifyProvider from 'next-auth/providers/spotify';

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID as string,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET as string,
    }),
    // ...add more providers here
  ],
});
