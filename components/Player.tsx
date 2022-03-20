import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';

type Props = {};

export default function Player({}: Props) {
  const { data: session } = useSession();
  return (
    <div>
      {session ? (
        <>
          <p>
            Signed in as {session.user?.email} <br />
          </p>
          <button onClick={() => signOut()}>Sign out</button>
        </>
      ) : (
        <>
          Not signed in <br />
          <button onClick={() => signIn()}>Sign in</button>
        </>
      )}
    </div>
  );
}
