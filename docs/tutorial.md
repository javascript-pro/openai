## Public Landing Page & Protected Chat

Step-by-Step Tutorial: This tutorial walks you through modifying a Next.js (App Router) project so that:

1. The root route (`"/"`) is a public, statically generated landing page
2. The chat interface is moved to `"/chat"`, where the user must be logged in to access it. 
3. The login screen is publicly accessible at `"/login"`

---

#### Prerequisites

- Next.js 14 (App Router)  
- Authentication set up (NextAuth.js or any custom approach)  
- Some familiarity with Next.js file-based routing  

---

#### 1. Create a Public Landing Page at `"/"`

###### 1.1 Add `app/page.tsx`

```tsx
// app/page.tsx
import { Metadata } from 'next';

// Optional metadata
export const metadata: Metadata = {
  title: 'Public Landing Page',
  description: 'Welcome to our publicly accessible homepage!',
};

// Enforce fully static generation
export const dynamic = 'error';

// Or use incremental static regeneration:
// export const revalidate = 60; // Re-generate every 60 seconds

export default function HomePage() {
  return (
    <main>
      <h1>Welcome to Our Next.js App!</h1>
      <p>This page is publicly accessible, no login required.</p>
    </main>
  );
}
```



Thought about creating chat app tutorial for a few seconds
markdown
Copy code
#### Step-by-Step Tutorial: Public Landing Page & Protected Chat in Next.js

This tutorial walks you through modifying a Next.js (App Router) project so that:

1. The root route (`"/"`) is apublic, statically generated landing page.  
2. The chat interface is moved to `"/chat"`, where the user must belogged in to access it.  
3. The login screen is publicly accessible at `"/login"`.  

---

#### Prerequisites

- Next.js 14 (App Router)  
- Authentication set up (NextAuth.js or any custom approach)  
- Some familiarity with Next.js file-based routing  

---

#### 1. Create a Public Landing Page at `"/"`

###### 1.1 Add `app/page.tsx`

```tsx
// app/page.tsx
import { Metadata } from 'next';

// Optional metadata
export const metadata: Metadata = {
  title: 'Public Landing Page',
  description: 'Welcome to our publicly accessible homepage!',
};

// Enforce fully static generation
export const dynamic = 'error';

// Or use incremental static regeneration:
// export const revalidate = 60; // Re-generate every 60 seconds

```

2. Create the Protected Chat Route at "/chat"
    
  2.1 Create app/chat/page.tsx

```tsx
// app/chat/page.tsx
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function ChatPage() {
  // 1. Check if user has a valid session
  const session = await getServerSession();

  // 2. If no session, redirect to login
  if (!session) {
    redirect('/login');
  }

  // 3. Otherwise, render the chat interface
  return (
    <main>
      <h1>Chat Interface</h1>
      {/* Existing chat UI or component here */}
    </main>
  );
}

```
#### QA

4. Test the Flow

- Go to "/": You should see the public landing page.
- Go to "/chat":
- If not logged in, you should be redirected to "/login".
- If logged in, you see the chat UI.
- Go to "/login": Ensure you can see the login page without being redirected.
- Once you confirm this behavior, your Next.js project will have a public landing page at "/" and a protected chat interface at "/chat"