import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { cn } from "@/lib/utils"

const attendanceData = [
  { course: "CS-301: Data Structures", attended: 30, total: 32 },
  { course: "MA-212: Linear Algebra", attended: 28, total: 30 },
  { course: "EE-101: Basic Electronics", attended: 25, total: 31 },
  { course: "HU-102: Communication Skills", attended: 18, total: 18 },
  { course: "CS-302: Operating Systems", attended: 22, total: 29 },
]

export default function AttendancePage() {
  const overallAttended = attendanceData.reduce((acc, item) => acc + item.attended, 0)
  const overallTotal = attendanceData.reduce((acc, item) => acc + item.total, 0)
  const overallPercentage = Math.round((overallAttended / overallTotal) * 100)

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Attendance</h1>
        <p className="text-muted-foreground">Your attendance records for the current semester.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Overall Attendance</CardTitle>
          <CardDescription>A summary of your attendance across all subjects.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <span className="text-4xl font-bold text-primary">{overallPercentage}%</span>
            <div className="flex-1">
              <Progress value={overallPercentage} aria-label={`${overallPercentage}% overall attendance`} />
              <p className="text-sm text-muted-foreground mt-2">{`You have attended ${overallAttended} out of ${overallTotal} classes.`}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Course-wise Attendance</CardTitle>
          <CardDescription>Detailed attendance for each course.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Course</TableHead>
                <TableHead className="w-[150px]">Classes Attended</TableHead>
                <TableHead className="w-[150px]">Total Classes</TableHead>
                <TableHead className="w-[200px]">Percentage</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {attendanceData.map((item) => {
                const percentage = Math.round((item.attended / item.total) * 100)
                return (
                  <TableRow key={item.course}>
                    <TableCell className="font-medium">{item.course}</TableCell>
                    <TableCell>{item.attended}</TableCell>
                    <TableCell>{item.total}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-4">
                        <Progress value={percentage} className="h-2 flex-1" />
                        <span className={cn(
                          "font-medium",
                          percentage < 75 ? "text-destructive" : "text-primary"
                        )}>
                          {percentage}%
                        </span>
                      </div>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
