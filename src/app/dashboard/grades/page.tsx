import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const gradesData = [
  {
    course: "CS-301: Data Structures",
    grade: "A",
    gpa: "4.0",
    assessments: [
      { name: "Quiz 1", score: "9/10", weight: "10%" },
      { name: "Midterm Exam", score: "45/50", weight: "30%" },
      { name: "Programming Assignment", score: "95/100", weight: "30%" },
      { name: "Final Exam", score: "48/50", weight: "30%" },
    ],
  },
  {
    course: "MA-212: Linear Algebra",
    grade: "A-",
    gpa: "3.7",
    assessments: [
      { name: "Homework 1", score: "10/10", weight: "15%" },
      { name: "Homework 2", score: "8/10", weight: "15%" },
      { name: "Midterm Exam", score: "42/50", weight: "35%" },
      { name: "Final Exam", score: "44/50", weight: "35%" },
    ],
  },
  {
    course: "EE-101: Basic Electronics",
    grade: "B+",
    gpa: "3.3",
    assessments: [
        { name: "Lab Report 1", score: "18/20", weight: "20%" },
        { name: "Lab Report 2", score: "15/20", weight: "20%" },
        { name: "Midterm Exam", score: "35/50", weight: "30%" },
        { name: "Final Exam", score: "40/50", weight: "30%" },
    ],
  },
]

export default function GradesPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Grades & Report Cards</h1>
        <p className="text-muted-foreground">Your academic performance for the current semester.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Semester Performance</CardTitle>
          <CardDescription>Click on a course to view detailed grade breakdown.</CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {gradesData.map((item) => (
              <AccordionItem value={item.course} key={item.course}>
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex w-full items-center justify-between pr-4">
                    <span className="font-medium text-lg">{item.course}</span>
                    <div className="flex items-center gap-4">
                      <Badge variant="default" className="w-16 justify-center text-sm">{item.grade}</Badge>
                      <span className="text-muted-foreground text-sm font-normal">GPA: {item.gpa}</span>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Assessment</TableHead>
                        <TableHead className="text-right">Score</TableHead>
                        <TableHead className="text-right">Weight</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {item.assessments.map((assessment) => (
                        <TableRow key={assessment.name}>
                          <TableCell>{assessment.name}</TableCell>
                          <TableCell className="text-right">{assessment.score}</TableCell>
                          <TableCell className="text-right">{assessment.weight}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  )
}
