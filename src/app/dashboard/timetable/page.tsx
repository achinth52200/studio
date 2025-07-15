import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const schedule = {
  "9:00 AM": { Monday: null, Tuesday: { course: "CS-302", location: "R-405" }, Wednesday: { course: "CS-301", location: "R-404" }, Thursday: { course: "CS-302", location: "R-405" }, Friday: { course: "CS-301", location: "R-404" } },
  "10:00 AM": { Monday: { course: "CS-301", location: "R-404" }, Tuesday: { course: "CS-302", location: "R-405" }, Wednesday: { course: "CS-301", location: "R-404" }, Thursday: { course: "CS-302", location: "R-405" }, Friday: { course: "CS-301", location: "R-404" } },
  "11:00 AM": { Monday: null, Tuesday: { course: "MA-212", location: "R-301" }, Wednesday: null, Thursday: { course: "MA-212", location: "R-301" }, Friday: null },
  "12:00 PM": { Monday: null, Tuesday: null, Wednesday: null, Thursday: null, Friday: null },
  "1:00 PM": { Monday: { course: "MA-212", location: "R-301" }, Tuesday: null, Wednesday: { course: "EE-101", location: "Lab 3" }, Thursday: null, Friday: { course: "EE-101", location: "Lab 3" } },
  "2:00 PM": { Monday: null, Tuesday: { course: "HU-102", location: "A-102" }, Wednesday: { course: "EE-101", location: "Lab 3" }, Thursday: { course: "HU-102", location: "A-102" }, Friday: { course: "EE-101", location: "Lab 3" } },
  "3:00 PM": { Monday: null, Tuesday: null, Wednesday: null, Thursday: null, Friday: null },
};

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const timeSlots = Object.keys(schedule);

export default function TimetablePage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Weekly Timetable</h1>
        <p className="text-muted-foreground">Your course schedule for the week.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Spring Semester 2024</CardTitle>
          <CardDescription>
            CS-301: Data Structures | CS-302: Operating Systems | MA-212: Linear Algebra | EE-101: Basic Electronics | HU-102: Communication Skills
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-px border rounded-lg overflow-hidden bg-border">
            {/* Header Row */}
            <div className="p-2 font-semibold bg-card hidden md:block">Time</div>
            {days.map(day => (
              <div key={day} className="p-2 text-center font-semibold bg-card hidden md:block">{day}</div>
            ))}

            {/* Schedule Data */}
            {timeSlots.map(time => (
              <div key={time} className="contents">
                <div className="p-2 font-semibold bg-card flex items-center justify-center md:justify-start">{time}</div>
                {days.map(day => {
                  const entry = schedule[time as keyof typeof schedule][day as keyof typeof schedule[keyof typeof schedule]];
                  return (
                    <div key={`${day}-${time}`} className="p-2 bg-card min-h-[80px]">
                      {entry ? (
                        <div className="bg-primary/10 text-primary-foreground p-2 rounded-md h-full flex flex-col justify-center">
                          <p className="font-bold text-primary">{entry.course}</p>
                          <p className="text-sm text-primary/80">{entry.location}</p>
                        </div>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
