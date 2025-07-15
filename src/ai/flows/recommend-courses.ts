// RecommendCourses flow implementation.
'use server';
/**
 * @fileOverview Recommends courses to a student based on their academic history and interests.
 *
 * - recommendCourses - A function that recommends courses to a student.
 * - RecommendCoursesInput - The input type for the recommendCourses function.
 * - RecommendCoursesOutput - The return type for the recommendCourses function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RecommendCoursesInputSchema = z.object({
  academicHistory: z
    .string()
    .describe('The academic history of the student, including courses taken and grades received.'),
  interests: z.string().describe('The interests of the student.'),
});
export type RecommendCoursesInput = z.infer<typeof RecommendCoursesInputSchema>;

const RecommendCoursesOutputSchema = z.object({
  recommendedCourses: z
    .array(z.string())
    .describe('A list of recommended courses based on the student\'s academic history and interests.'),
});
export type RecommendCoursesOutput = z.infer<typeof RecommendCoursesOutputSchema>;

export async function recommendCourses(input: RecommendCoursesInput): Promise<RecommendCoursesOutput> {
  return recommendCoursesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'recommendCoursesPrompt',
  input: {schema: RecommendCoursesInputSchema},
  output: {schema: RecommendCoursesOutputSchema},
  prompt: `You are a course recommendation system. You will suggest courses to students based on their academic history and interests.

Academic History: {{{academicHistory}}}
Interests: {{{interests}}}

Based on this information, recommend a list of courses that the student should take. Be concise. Only include the course names. Limit the list to 5 courses.`,
});

const recommendCoursesFlow = ai.defineFlow(
  {
    name: 'recommendCoursesFlow',
    inputSchema: RecommendCoursesInputSchema,
    outputSchema: RecommendCoursesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
