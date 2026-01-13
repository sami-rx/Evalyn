import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
    Users,
    TrendingUp,
    Clock,
    AlertCircle,
    ChevronRight,
    Mail,
    Phone,
    MapPin,
    Calendar
} from 'lucide-react';
import Link from 'next/link';

/**
 * Candidate Pipeline Page
 * Kanban board showing candidates by stage for a specific job
 */

// Mock data
const mockJob = {
    id: '1',
    title: 'Senior Frontend Engineer',
    department: 'Engineering',
    status: 'interviewing',
    totalCandidates: 12,
    needsReview: 3,
};

const mockCandidates = [
    // Applied
    {
        id: '1',
        name: 'Sarah Chen',
        email: 'sarah.chen@email.com',
        phone: '+1 (555) 123-4567',
        location: 'San Francisco, CA',
        avatar: 'SC',
        stage: 'applied',
        matchScore: 92,
        confidence: 88,
        needsReview: false,
        appliedDate: '2026-01-12',
    },
    {
        id: '2',
        name: 'Michael Torres',
        email: 'michael.t@email.com',
        phone: '+1 (555) 234-5678',
        location: 'Austin, TX',
        avatar: 'MT',
        stage: 'applied',
        matchScore: 78,
        confidence: 72,
        needsReview: true,
        appliedDate: '2026-01-13',
    },

    // Screening
    {
        id: '3',
        name: 'Emily Rodriguez',
        email: 'emily.r@email.com',
        phone: '+1 (555) 345-6789',
        location: 'New York, NY',
        avatar: 'ER',
        stage: 'screening',
        matchScore: 95,
        confidence: 91,
        needsReview: false,
        appliedDate: '2026-01-10',
    },
    {
        id: '4',
        name: 'David Kim',
        email: 'david.kim@email.com',
        phone: '+1 (555) 456-7890',
        location: 'Seattle, WA',
        avatar: 'DK',
        stage: 'screening',
        matchScore: 85,
        confidence: 79,
        needsReview: true,
        appliedDate: '2026-01-11',
    },

    // Interview
    {
        id: '5',
        name: 'Jessica Park',
        email: 'jessica.p@email.com',
        phone: '+1 (555) 567-8901',
        location: 'Boston, MA',
        avatar: 'JP',
        stage: 'interview',
        matchScore: 88,
        confidence: 85,
        needsReview: false,
        appliedDate: '2026-01-08',
    },
    {
        id: '6',
        name: 'Alex Johnson',
        email: 'alex.j@email.com',
        phone: '+1 (555) 678-9012',
        location: 'Denver, CO',
        avatar: 'AJ',
        stage: 'interview',
        matchScore: 91,
        confidence: 87,
        needsReview: true,
        appliedDate: '2026-01-09',
    },

    // Coding
    {
        id: '7',
        name: 'Priya Patel',
        email: 'priya.p@email.com',
        phone: '+1 (555) 789-0123',
        location: 'Chicago, IL',
        avatar: 'PP',
        stage: 'coding',
        matchScore: 94,
        confidence: 90,
        needsReview: false,
        appliedDate: '2026-01-05',
    },

    // Decision
    {
        id: '8',
        name: 'Marcus Williams',
        email: 'marcus.w@email.com',
        phone: '+1 (555) 890-1234',
        location: 'Portland, OR',
        avatar: 'MW',
        stage: 'decision',
        matchScore: 96,
        confidence: 93,
        needsReview: false,
        appliedDate: '2026-01-03',
    },
];

const stages = [
    { id: 'applied', name: 'Applied', color: 'bg-slate-100 text-slate-700' },
    { id: 'screening', name: 'Resume Screening', color: 'bg-blue-100 text-blue-700' },
    { id: 'interview', name: 'AI Interview', color: 'bg-purple-100 text-purple-700' },
    { id: 'coding', name: 'Coding Challenge', color: 'bg-amber-100 text-amber-700' },
    { id: 'decision', name: 'Final Decision', color: 'bg-green-100 text-green-700' },
];

export default function CandidatePipelinePage({ params }: { params: { id: string } }) {
    const getCandidatesByStage = (stageId: string) => {
        return mockCandidates.filter(c => c.stage === stageId);
    };

    const getScoreColor = (score: number) => {
        if (score >= 90) return 'text-green-600';
        if (score >= 75) return 'text-amber-600';
        return 'text-red-600';
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <div className="flex items-center gap-3">
                        <Link href="/dashboard/jobs" className="text-slate-500 hover:text-slate-900">
                            Jobs
                        </Link>
                        <ChevronRight className="h-4 w-4 text-slate-400" />
                        <h1 className="text-3xl font-bold text-slate-900">{mockJob.title}</h1>
                    </div>
                    <p className="text-slate-500 mt-1">{mockJob.department}</p>
                </div>
                <Badge className="bg-blue-600 text-white px-4 py-2">
                    {mockJob.status}
                </Badge>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">Total Candidates</CardTitle>
                        <Users className="h-4 w-4 text-slate-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{mockJob.totalCandidates}</div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">Avg Match Score</CardTitle>
                        <TrendingUp className="h-4 w-4 text-slate-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">88%</div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">In Review</CardTitle>
                        <Clock className="h-4 w-4 text-slate-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">4</div>
                    </CardContent>
                </Card>
                <Card className="border-amber-200 bg-amber-50">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium text-amber-900">Needs Review</CardTitle>
                        <AlertCircle className="h-4 w-4 text-amber-600" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-amber-600">{mockJob.needsReview}</div>
                    </CardContent>
                </Card>
            </div>

            {/* Kanban Board */}
            <div className="flex gap-4 overflow-x-auto pb-4">
                {stages.map((stage) => {
                    const candidates = getCandidatesByStage(stage.id);

                    return (
                        <div key={stage.id} className="flex-shrink-0 w-80">
                            <Card className="h-full">
                                <CardHeader className="pb-3">
                                    <div className="flex items-center justify-between">
                                        <CardTitle className="text-base">{stage.name}</CardTitle>
                                        <Badge variant="secondary" className={stage.color}>
                                            {candidates.length}
                                        </Badge>
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    {candidates.length === 0 ? (
                                        <div className="text-center py-8 text-slate-400 text-sm">
                                            No candidates
                                        </div>
                                    ) : (
                                        candidates.map((candidate) => (
                                            <Link
                                                key={candidate.id}
                                                href={`/dashboard/candidates/${candidate.id}`}
                                            >
                                                <Card className={`hover:shadow-md transition-shadow cursor-pointer ${candidate.needsReview ? 'border-amber-300 bg-amber-50' : ''
                                                    }`}>
                                                    <CardContent className="p-4">
                                                        <div className="flex items-start gap-3">
                                                            <Avatar className="h-10 w-10">
                                                                <AvatarFallback className="bg-blue-100 text-blue-700">
                                                                    {candidate.avatar}
                                                                </AvatarFallback>
                                                            </Avatar>
                                                            <div className="flex-1 min-w-0">
                                                                <div className="flex items-start justify-between gap-2">
                                                                    <h4 className="font-semibold text-slate-900 truncate">
                                                                        {candidate.name}
                                                                    </h4>
                                                                    {candidate.needsReview && (
                                                                        <AlertCircle className="h-4 w-4 text-amber-600 flex-shrink-0" />
                                                                    )}
                                                                </div>

                                                                <div className="mt-2 space-y-1">
                                                                    <div className="flex items-center gap-1 text-xs text-slate-600">
                                                                        <Mail className="h-3 w-3" />
                                                                        <span className="truncate">{candidate.email}</span>
                                                                    </div>
                                                                    <div className="flex items-center gap-1 text-xs text-slate-600">
                                                                        <MapPin className="h-3 w-3" />
                                                                        <span className="truncate">{candidate.location}</span>
                                                                    </div>
                                                                </div>

                                                                <div className="mt-3 flex items-center justify-between">
                                                                    <div>
                                                                        <p className="text-xs text-slate-500">Match Score</p>
                                                                        <p className={`text-lg font-bold ${getScoreColor(candidate.matchScore)}`}>
                                                                            {candidate.matchScore}%
                                                                        </p>
                                                                    </div>
                                                                    <div>
                                                                        <p className="text-xs text-slate-500">Confidence</p>
                                                                        <p className="text-lg font-bold text-slate-700">
                                                                            {candidate.confidence}%
                                                                        </p>
                                                                    </div>
                                                                </div>

                                                                <div className="mt-3 flex items-center gap-1 text-xs text-slate-500">
                                                                    <Calendar className="h-3 w-3" />
                                                                    <span>Applied {new Date(candidate.appliedDate).toLocaleDateString()}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </CardContent>
                                                </Card>
                                            </Link>
                                        ))
                                    )}
                                </CardContent>
                            </Card>
                        </div>
                    );
                })}
            </div>

            {/* Quick Actions */}
            <Card className="bg-slate-50">
                <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="font-semibold text-slate-900">Quick Actions</h3>
                            <p className="text-sm text-slate-600 mt-1">Manage candidates efficiently</p>
                        </div>
                        <div className="flex gap-2">
                            <Button variant="outline">Export CSV</Button>
                            <Button variant="outline">Filter Candidates</Button>
                            <Button>Bulk Review</Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
