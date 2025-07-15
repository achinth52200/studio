import Link from "next/link"
import {
  ArrowRight,
  Bell,
  Calendar,
  Sparkles,
  UserCheck,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Welcome back, Jane!</h1>
        <p className="text-muted-foreground">Here&apos;s a summary of your academic life today.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Calendar className="h-6 w-6" />
                <CardTitle>Today&apos;s Schedule</CardTitle>
              </div>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/dashboard/timetable">
                  View All <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <CardDescription>Your classes for today, April 26, 2024.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Time</TableHead>
                  <TableHead>Course</TableHead>
                  <TableHead className="text-right">Location</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>10:00 AM - 11:30 AM</TableCell>
                  <TableCell>CS-301: Data Structures</TableCell>
                  <TableCell className="text-right">Room 404</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>1:00 PM - 2:30 PM</TableCell>
                  <TableCell>MA-212: Linear Algebra</TableCell>
                  <TableCell className="text-right">Room 301</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <UserCheck className="h-6 w-6" />
              <CardTitle>Overall Attendance</CardTitle>
            </div>
            <CardDescription>Your attendance across all courses.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-5xl font-bold text-primary">88%</span>
              <Button asChild>
                <Link href="/dashboard/attendance">View Details</Link>
              </Button>
            </div>
            <Progress value={88} />
            <p className="text-sm text-muted-foreground">Great job! Keep it up to stay on track.</p>
          </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <div className="flex items-center gap-2">
                    <Sparkles className="h-6 w-6 text-accent" />
                    <CardTitle>Course Recommendations</CardTitle>
                </div>
                <CardDescription>Get personalized course suggestions.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-start gap-4">
                <p className="text-sm text-muted-foreground">
                    Discover new courses tailored to your academic history and interests using our AI-powered tool.
                </p>
                <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Link href="/dashboard/recommendations">
                    Find Courses <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bell className="h-6 w-6" />
                <CardTitle>Recent Notifications</CardTitle>
              </div>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/dashboard/notifications">
                  View All <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <CardDescription>Latest updates and circulars.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Calendar className="h-5 w-5" />
              </div>
              <div>
                <p className="font-medium">Mid-term Exam Schedule Released</p>
                <p className="text-sm text-muted-foreground">The schedule for the upcoming mid-term examinations has been posted...</p>
                <p className="text-xs text-muted-foreground mt-1">2 days ago</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 text-accent">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <p className="font-medium">Guest Lecture on AI Ethics</p>
                <p className="text-sm text-muted-foreground">Join us for a guest lecture by Dr. Alan Turing on the ethics of AI...</p>
                <p className="text-xs text-muted-foreground mt-1">5 days ago</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
