'use client';

import { useState } from 'react';
import { Loader2, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

type RecommendationsResult = {
  success: boolean;
  recommendedCourses?: string[] | null;
  errors?: {
    academicHistory?: string[];
    interests?: string[];
    root?: string[];
  }
};

type RecommendationsFormProps = {
  getRecommendations: (formData: FormData) => Promise<RecommendationsResult>;
};

export function RecommendationsForm({ getRecommendations }: RecommendationsFormProps) {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<RecommendationsResult | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setResult(null);

    const formData = new FormData(event.currentTarget);
    const response = await getRecommendations(formData);
    
    setResult(response);
    setLoading(false);
  };

  return (
    <div className="space-y-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid w-full gap-2">
          <Label htmlFor="academicHistory" className="text-base">Academic History</Label>
          <Textarea
            id="academicHistory"
            name="academicHistory"
            placeholder="e.g., Completed courses in Calculus (A), Intro to Programming (B+), Physics I (A-). Strong in math, but found programming challenging initially."
            rows={5}
            required
            aria-describedby="academicHistory-error"
          />
          {result?.errors?.academicHistory && (
             <p id="academicHistory-error" className="text-sm text-destructive">{result.errors.academicHistory.join(', ')}</p>
          )}
        </div>
        <div className="grid w-full gap-2">
          <Label htmlFor="interests" className="text-base">Interests</Label>
          <Textarea
            id="interests"
            name="interests"
            placeholder="e.g., Interested in machine learning, robotics, and how technology impacts society. Enjoy hands-on projects and team collaborations."
            rows={5}
            required
            aria-describedby="interests-error"
          />
          {result?.errors?.interests && (
             <p id="interests-error" className="text-sm text-destructive">{result.errors.interests.join(', ')}</p>
          )}
        </div>
        
        {result?.errors?.root && (
            <p className="text-sm text-destructive">{result.errors.root.join(', ')}</p>
        )}

        <Button type="submit" disabled={loading} className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground">
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Getting Recommendations...
            </>
          ) : (
            'Get Recommendations'
          )}
        </Button>
      </form>

      {result?.success && result.recommendedCourses && (
        <Card className="bg-primary/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-accent" />
              Here are your recommended courses:
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {result.recommendedCourses.map((course) => (
                <Badge key={course} variant="default" className="text-base px-4 py-2 bg-primary/80">
                  {course}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
