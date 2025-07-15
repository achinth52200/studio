import 'server-only';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RecommendationsForm } from "@/components/recommendations-form";
import { recommendCourses, RecommendCoursesInput } from "@/ai/flows/recommend-courses";
import { Sparkles } from 'lucide-react';
import { z } from "zod";

const formSchema = z.object({
  academicHistory: z.string().min(10, 'Please provide more details about your academic history.'),
  interests: z.string().min(10, 'Please tell us more about your interests.'),
});

async function getRecommendationsAction(formData: FormData) {
  'use server';
  
  const rawData = {
    academicHistory: formData.get('academicHistory'),
    interests: formData.get('interests'),
  };

  const validation = formSchema.safeParse(rawData);

  if (!validation.success) {
    return {
      success: false,
      errors: validation.error.flatten().fieldErrors,
      recommendedCourses: [],
    };
  }
  
  try {
    const result = await recommendCourses(validation.data as RecommendCoursesInput);
    return { success: true, ...result };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      errors: { root: ['An unexpected error occurred.'] },
      recommendedCourses: [],
    };
  }
}

export default function RecommendationsPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
          <Sparkles className="h-8 w-8 text-accent" />
          Course Recommendations
        </h1>
        <p className="text-muted-foreground">
          Use our AI-powered tool to discover courses that match your profile.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Find Your Next Course</CardTitle>
          <CardDescription>
            Provide your academic history and interests, and we&apos;ll suggest relevant courses for you to consider for the next semester.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <RecommendationsForm getRecommendations={getRecommendationsAction} />
        </CardContent>
      </Card>
    </div>
  );
}
