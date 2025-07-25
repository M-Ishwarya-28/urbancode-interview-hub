import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { FileText, Upload, CheckCircle, AlertCircle, Star, TrendingUp } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ResumeAnalyzer = () => {
  const [file, setFile] = useState<File | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [analyzed, setAnalyzed] = useState(false);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0];
    if (uploadedFile) {
      setFile(uploadedFile);
    }
  };

  const handleAnalyze = () => {
    setAnalyzing(true);
    // Simulate analysis process
    setTimeout(() => {
      setAnalyzing(false);
      setAnalyzed(true);
    }, 3000);
  };

  const mockAnalysisResults = {
    overallScore: 78,
    sections: {
      format: { score: 85, status: 'good' },
      content: { score: 72, status: 'needs_improvement' },
      keywords: { score: 80, status: 'good' },
      experience: { score: 75, status: 'good' },
      skills: { score: 70, status: 'needs_improvement' }
    },
    suggestions: [
      'Add more quantifiable achievements with specific numbers and metrics',
      'Include more relevant technical keywords for your target role',
      'Improve the formatting consistency across sections',
      'Add a professional summary at the top',
      'Include more recent projects and technologies'
    ],
    keywordMatch: 65,
    atsCompatibility: 82
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="bg-primary/10 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <FileText className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">Resume Analyzer</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get instant AI-powered feedback on your resume. Optimize for ATS systems and 
              improve your chances of landing interviews.
            </p>
          </div>

          {!analyzed ? (
            <Card className="p-8 bg-card border border-border">
              {!file ? (
                <div className="text-center">
                  <div className="border-2 border-dashed border-border rounded-lg p-12 mb-6">
                    <Upload className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">Upload Your Resume</h3>
                    <p className="text-muted-foreground mb-4">
                      Drag and drop your resume or click to browse
                    </p>
                    <Label htmlFor="resume-upload" className="cursor-pointer">
                      <Button variant="premium" asChild>
                        <span>Choose File</span>
                      </Button>
                    </Label>
                    <Input
                      id="resume-upload"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Supported formats: PDF, DOC, DOCX (Max 5MB)
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <FileText className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="font-semibold text-foreground">{file.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {(file.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  </div>

                  {analyzing ? (
                    <div className="text-center space-y-4">
                      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary mx-auto"></div>
                      <h3 className="text-lg font-semibold text-foreground">Analyzing Your Resume...</h3>
                      <p className="text-muted-foreground">This may take a few moments</p>
                      <Progress value={65} className="w-full" />
                    </div>
                  ) : (
                    <div className="text-center">
                      <Button 
                        variant="premium" 
                        size="lg" 
                        onClick={handleAnalyze}
                        className="group"
                      >
                        Start Analysis
                        <TrendingUp className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  )}
                </div>
              )}
            </Card>
          ) : (
            <div className="space-y-8">
              {/* Overall Score */}
              <Card className="p-8 bg-card border border-border">
                <div className="text-center mb-6">
                  <div className="relative inline-block">
                    <div className="text-6xl font-bold text-primary mb-2">
                      {mockAnalysisResults.overallScore}
                    </div>
                    <div className="text-lg text-muted-foreground">Overall Score</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground mb-1">
                      {mockAnalysisResults.keywordMatch}%
                    </div>
                    <div className="text-sm text-muted-foreground">Keyword Match</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground mb-1">
                      {mockAnalysisResults.atsCompatibility}%
                    </div>
                    <div className="text-sm text-muted-foreground">ATS Compatible</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground mb-1">
                      {mockAnalysisResults.suggestions.length}
                    </div>
                    <div className="text-sm text-muted-foreground">Improvements</div>
                  </div>
                </div>
              </Card>

              {/* Section Scores */}
              <Card className="p-8 bg-card border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-6">Section Analysis</h2>
                <div className="space-y-4">
                  {Object.entries(mockAnalysisResults.sections).map(([section, data]) => (
                    <div key={section} className="flex items-center justify-between p-4 bg-muted/20 rounded-lg">
                      <div className="flex items-center space-x-3">
                        {data.status === 'good' ? (
                          <CheckCircle className="h-5 w-5 text-green-500" />
                        ) : (
                          <AlertCircle className="h-5 w-5 text-yellow-500" />
                        )}
                        <span className="font-medium text-foreground capitalize">
                          {section.replace('_', ' ')}
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Progress value={data.score} className="w-24" />
                        <span className="font-bold text-foreground w-8">{data.score}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Suggestions */}
              <Card className="p-8 bg-card border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-6">Improvement Suggestions</h2>
                <div className="space-y-4">
                  {mockAnalysisResults.suggestions.map((suggestion, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 bg-muted/20 rounded-lg">
                      <Star className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-foreground">{suggestion}</p>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="premium" size="lg">
                  Download Detailed Report
                </Button>
                <Button variant="outline" size="lg" onClick={() => {
                  setFile(null);
                  setAnalyzed(false);
                }}>
                  Analyze Another Resume
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ResumeAnalyzer;