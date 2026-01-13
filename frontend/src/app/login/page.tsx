'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

/**
 * Login Page
 * 
 * TODO: Integrate with NextAuth for proper authentication
 * For now, this is a placeholder that sets a mock token
 */

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState<'admin' | 'reviewer' | 'candidate'>('admin');
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // TODO: Replace with actual API call
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Mock token for development
        if (typeof window !== 'undefined') {
            localStorage.setItem('access_token', 'mock_token_' + role);
            localStorage.setItem('user_role', role);
        }

        // Redirect based on role
        const redirectMap = {
            admin: '/dashboard/jobs',
            reviewer: '/dashboard/reviews',
            candidate: '/portal/status',
        };

        router.push(redirectMap[role]);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
            <Card className="w-full max-w-md">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold">AI HR Automation</CardTitle>
                    <CardDescription>
                        Sign in to manage your hiring pipeline
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium">
                                Email
                            </label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="admin@company.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="password" className="text-sm font-medium">
                                Password
                            </label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Role (Dev Only)</label>
                            <div className="flex gap-2">
                                {(['admin', 'reviewer', 'candidate'] as const).map((r) => (
                                    <Button
                                        key={r}
                                        type="button"
                                        variant={role === r ? 'default' : 'outline'}
                                        size="sm"
                                        onClick={() => setRole(r)}
                                        className="flex-1 capitalize"
                                    >
                                        {r}
                                    </Button>
                                ))}
                            </div>
                        </div>

                        <Button type="submit" className="w-full" disabled={loading}>
                            {loading ? 'Signing in...' : 'Sign In'}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
