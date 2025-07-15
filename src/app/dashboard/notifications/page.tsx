import { Megaphone, Calendar, GraduationCap } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const notifications = [
  {
    icon: Calendar,
    color: 'text-primary',
    bgColor: 'bg-primary/10',
    title: 'Mid-term Exam Schedule Released',
    description: 'The schedule for the upcoming mid-term examinations has been posted on the main notice board and the university website. Please review it carefully and report any clashes to the administration office by Friday.',
    date: '2 days ago',
    tags: ['Exams', 'Academics'],
  },
  {
    icon: GraduationCap,
    color: 'text-green-500',
    bgColor: 'bg-green-500/10',
    title: 'Scholarship Application Deadline Extended',
    description: 'The deadline for submitting applications for the Merit-Based Scholarship has been extended to May 15th, 2024. Make sure to submit all required documents before the new deadline.',
    date: '4 days ago',
    tags: ['Scholarships', 'Finance'],
  },
  {
    icon: Megaphone,
    color: 'text-accent',
    bgColor: 'bg-accent/10',
    title: 'Guest Lecture on AI Ethics',
    description: 'Join us for a guest lecture by Dr. Alan Turing on the ethics of AI. The event will be held in the main auditorium on May 1st at 3:00 PM. Attendance is mandatory for all computer science students.',
    date: '5 days ago',
    tags: ['Events', 'Computer Science'],
  },
  {
    icon: Calendar,
    color: 'text-primary',
    bgColor: 'bg-primary/10',
    title: 'Holiday Notice: University Closed',
    description: 'The university will remain closed on Monday, April 29th, on account of a public holiday. All classes and administrative activities will resume on Tuesday.',
    date: '1 week ago',
    tags: ['Holidays', 'General'],
  },
];


export default function NotificationsPage() {
    return (
        <div className="flex flex-col gap-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Notifications</h1>
                <p className="text-muted-foreground">All official notices, circulars, and updates.</p>
            </div>
            <div className="space-y-6">
                {notifications.map((notification, index) => {
                    const Icon = notification.icon;
                    return (
                        <Card key={index} className="overflow-hidden">
                            <CardHeader className="flex flex-row items-start gap-4 space-y-0 p-4 sm:p-6">
                                <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${notification.bgColor}`}>
                                    <Icon className={`h-6 w-6 ${notification.color}`} />
                                </div>
                                <div className="flex-1">
                                    <CardTitle>{notification.title}</CardTitle>
                                    <CardDescription>{notification.date}</CardDescription>
                                </div>
                            </CardHeader>
                            <CardContent className="px-4 pb-4 sm:px-6 sm:pb-6">
                                <p className="text-sm text-muted-foreground leading-relaxed">{notification.description}</p>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {notification.tags.map(tag => (
                                        <Badge key={tag} variant="secondary">{tag}</Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>
        </div>
    )
}
