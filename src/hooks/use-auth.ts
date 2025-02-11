// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";

// const authOptions = {
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID!,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//       authorization: {
//         params: {
//           scope: "openid email profile",
//         },
//       },
//     }),
//   ],
//   callbacks: {
//     async signIn({ account, user }) {
//       console.log("Google ID Token:", account?.id_token);

//       if (account?.id_token) {
//         try {
//           const response = await fetch(
//             `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/social/google/`,
//             {
//               method: "POST",
//               headers: {
//                 "Content-Type": "application/json",
//                 Accept: "application/json",
//               },
//               body: JSON.stringify({ auth_token: account.id_token }),
//             },
//           );

//           const responseData = await response.json();
//           console.log("Backend response:", responseData);

//           if (responseData.status === 200 && responseData.data) {
//             // Attach tokens to the account object
//             account.access_token = responseData.data.access;
//             account.refresh_token = responseData.data.refresh;

//             // Attach email to user object
//             user.email = responseData.data.email;

//             return true;
//           }

//           console.error("Authentication failed:", responseData);
//           return false;
//         } catch (error) {
//           console.error("Sign-in error:", error);
//           return false;
//         }
//       }
//       return false;
//     },
//     async jwt({ token, account, user }) {
//       // Persist the OAuth access_token and refresh_token to the token right after signin
//       if (account) {
//         token.accessToken = account.access_token;
//         token.refreshToken = account.refresh_token;

//         // If email is provided during sign-in, add it to the token
//         if (user?.email) {
//           token.email = user.email;
//         }
//       }
//       return token;
//     },
//     async session({ session, token }) {
//       // Add access token to session
//       session.accessToken = token.accessToken;
//       session.refreshToken = token.refreshToken;

//       // Add email to session if available
//       if (token.email) {
//         session.user.email = token.email;
//       }

//       return session;
//     },
//   },
//   pages: {
//     signIn: "/login", // Custom login page
//     error: "/auth/error", // Error code passed in query string as ?error=
//   },
//   session: { strategy: "jwt" },
//   secret: process.env.NEXTAUTH_SECRET,
// };

// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST };