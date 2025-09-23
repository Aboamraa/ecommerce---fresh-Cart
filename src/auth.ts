import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { jwtDecode } from "jwt-decode";

export const authOptions: NextAuthOptions = {
  pages: { signIn: "/Login" },

  providers: [
    Credentials({
      name: "credentials",
      credentials: { email: {}, password: {} },
      authorize: async (values) => {
        const response = await fetch(`${process.env.BASE_URL}/auth/signin`, {
          method: "POST",
          body: JSON.stringify({
            email: values?.email,
            password: values?.password,
          }),
          headers: { "Content-Type": "application/json" },
        });
        const payload = await response.json();
        if (payload.message == "success") {
          const decoded: {
            id: string;
            name: string;
            role: string;
            iat: number;
            exp: number;
          } = jwtDecode(payload.token);
          //   console.log(decoded);
          // console.log("payload: ", payload);

          return {
            id: decoded.id,
            user: payload.user,
            token: payload.token,
          };
        } else {
          throw new Error("email or password are incorrect");
        }
        // payload.user;

        // return payload.user;
      },
    }),
  ],
  callbacks: {
    //* JWT is used to encrypt the data
    //* the user param is the data returned from the authorize function
    //* token is object we add data to it to be returned as the encrypted token
    //* JWT is used in server components only
    async jwt({ token, user, account, profile }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      //   if (account) {
      //     token.accessToken = account.access_token;
      //     token.id = profile.id;
      //   }
      if (user) {
        token.token = user?.token;
        token.user = user?.user;
        // console.log("we are hereeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee:", token);
      }

      return token;
    },
    //* token param here has the returned value from the JWT function
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token and user id from a provider.
      // session.token = token?.token;
      session.user = token?.user;
      console.log("session: ",session);
      
      return session;
    },
  },
};
