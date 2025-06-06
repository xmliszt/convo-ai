import { Metadata } from 'next';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { openGraph } from '../shared-metadata';
import { GoogleOAuthButton } from './google-oauth-button';

export const metadata: Metadata = {
  title: 'Convo AI | Sign in',
  openGraph: {
    ...openGraph,
    url: '/signin',
    title: 'Convo AI | Sign in',
  },
  alternates: {
    canonical: 'https://www.convo-ai.cc/signin',
  },
};

export default function Page() {
  return (
    <main>
      <div className='mx-auto flex h-full w-full max-w-lg flex-col justify-center px-4 py-20'>
        <Card>
          <CardHeader>
            <CardTitle>Sign in to Convo AI</CardTitle>
            <CardDescription>
              Sign in start any conversation with Convo AI. You will also be able
              to revisit your saved conversations and evaluation results in your
              profile.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className='space-y-4'>
              <div className='flex flex-col justify-center space-y-4 px-4'>
                {/* OAuth buttons */}
                <GoogleOAuthButton />
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
