import Image from 'next/image'

export default function Home({ session }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Image src="" alt="" height="" width=""/>
      {session ? (
        <p>Welcome, {session.user.name}!</p>
      ) : (
        <p>Please sign in to access this page.</p>
      )}
    </div>
    </main>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: {
      session,
    },
  };
}