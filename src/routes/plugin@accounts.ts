// @ts-nocheck

import { serverAuth$ } from '@builder.io/qwik-auth'
import type { Provider } from '@auth/core/providers'
// import AppleProvider from 'next-auth/providers/apple'
// import Facebook from '@auth/core/providers/facebook'
// import GitHub from '@auth/core/providers/github'
// import Google from '@auth/core/providers/google'
// import Instagram from '@auth/core/providers/instagram'
import Keycloak from '@auth/core/providers/keycloak'
// import Linkedin from '@auth/core/providers/linkedin'
// import Twitter from '@auth/core/providers/twitter'

export const { onRequest, useAuthSession, useAuthSignin, useAuthSignout } = serverAuth$(
    ({ env }) => ({
        secret: env.get("AUTH_SECRET"),
        trustHost: true,
        callbacks: {
            async session({
                session, 
                token,
            }){
                session.user.guid = token.sub
                return session
            }
        },
        providers: [
            // AppleProvider({
            //     clientId: env.get('APPLE_ID') as string,
            //     clientSecret: env.get('APPLE_SECRET') as string,
            // }),
            // Facebook({
            //     clientId: env.get('FACEBOOK_ID') as string,
            //     clientSecret: env.get('FACEBOOK_SECRET') as string,
            // }),
            // GitHub({
            //     clientId: env.get('GITHUB_ID') as string,
            //     clientSecret: env.get('GITHUB_SECRET') as string,
            // }),
            // Google({
            //     clientId: env.get('GOOGLE_ID') as string,
            //     clientSecret: env.get('GOOGLE_SECRET') as string,
            // }),
            // Instagram({
            //     clientId: env.get('INSTAGRAM_ID') as string,
            //     clientSecret: env.get('INSTAGRAM_SECRET') as string,
            // }),
            Keycloak({
                clientId: 'Site',
                clientSecret: env.get('KEYCLOAK_CLIENT_SECRET') as string,
                issuer: env.get('KEYCLOAK_ISSUER') as string
            }),
            // Linkedin({
            //     clientId: env.get('LINKEDIN_ID') as string,
            //     clientSecret: env.get('LINKEDIN_SECRET') as string,
            // }),
            // Twitter({
            //     clientId: env.get('TWITTER_ID') as string,
            //     clientSecret: env.get('TWITTER_SECRET') as string,
            // }),
        ] as Provider[],
    })
);
