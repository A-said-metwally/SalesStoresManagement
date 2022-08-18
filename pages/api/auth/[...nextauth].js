import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github";
import FacebookProvider from "next-auth/providers/facebook";


export default NextAuth({

    providers:[
        GithubProvider({
            clientId: process.env.Github_Id,
            clientSecret: process.env.Github_Secret
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET
          })
    ]
})