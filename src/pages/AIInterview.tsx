import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { ArrowRight, Bot, Clock, Target, Video } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const AIInterview = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    position: '',
    experience: '',
    company: '',
    jobDescription: '',
    interviewType: '',
    duration: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handleStartInterview = () => {
    // This would connect to OpenAI API when implemented
    alert('Interview starting soon! This will connect to OpenAI API for the AI interviewer.');
  };

  if (step === 3) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto py-12">
            <div className="text-center mb-8">
              <div className="bg-primary/10 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Video className="h-10 w-10 text-primary" />
              </div>
              <h1 className="text-3xl font-bold text-foreground mb-4">AI Interviewer Ready</h1>
              <p className="text-muted-foreground">
                Your personalized AI interviewer is ready to begin. Click start when you're prepared.
              </p>
            </div>

            <Card className="p-8 bg-card border border-border">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Interview Details</h3>
                  <p className="text-sm text-muted-foreground">Position: {formData.position}</p>
                  <p className="text-sm text-muted-foreground">Duration: {formData.duration}</p>
                  <p className="text-sm text-muted-foreground">Type: {formData.interviewType}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">What to Expect</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Real-time AI video interviewer</li>
                    <li>• Adaptive questioning based on responses</li>
                    <li>• Instant feedback and scoring</li>
                    <li>• Detailed performance report</li>
                  </ul>
                </div>
              </div>

              <div className="text-center">
                <Button 
                  variant="premium" 
                  size="xl" 
                  onClick={handleStartInterview}
                  className="group"
                >
                  Start AI Interview
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <p className="text-xs text-muted-foreground mt-4">
                  Make sure your camera and microphone are working properly
                </p>
              </div>
            </Card>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto py-12">
          <div className="text-center mb-8">
            <div className="bg-primary/10 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <Bot className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-4">AI Mock Interview Setup</h1>
            <p className="text-muted-foreground">
              Step {step} of 2 - Let's customize your interview experience
            </p>
          </div>

          <Card className="p-8 bg-card border border-border">
            {step === 1 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-foreground mb-6">Personal Information</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="position">Position</Label>
                    <Input
                      id="position"
                      value={formData.position}
                      onChange={(e) => handleInputChange('position', e.target.value)}
                      placeholder="e.g., Software Engineer"
                    />
                  </div>
                  <div>
                    <Label htmlFor="experience">Experience Level</Label>
                    <Select onValueChange={(value) => handleInputChange('experience', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select experience" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="entry">Entry Level (0-2 years)</SelectItem>
                        <SelectItem value="mid">Mid Level (3-5 years)</SelectItem>
                        <SelectItem value="senior">Senior Level (6+ years)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="company">Target Company (Optional)</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    placeholder="e.g., Google, Microsoft, etc."
                  />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-foreground mb-6">Interview Configuration</h2>
                
                <div>
                  <Label htmlFor="interviewType">Interview Type</Label>
                  <Select onValueChange={(value) => handleInputChange('interviewType', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select interview type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="technical">Technical Interview</SelectItem>
                      <SelectItem value="behavioral">Behavioral Interview</SelectItem>
                      <SelectItem value="system-design">System Design</SelectItem>
                      <SelectItem value="mixed">Mixed (Technical + Behavioral)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="duration">Interview Duration</Label>
                  <Select onValueChange={(value) => handleInputChange('duration', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="30">30 minutes</SelectItem>
                      <SelectItem value="45">45 minutes</SelectItem>
                      <SelectItem value="60">60 minutes</SelectItem>
                      <SelectItem value="90">90 minutes</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="jobDescription">Job Description (Optional)</Label>
                  <Textarea
                    id="jobDescription"
                    value={formData.jobDescription}
                    onChange={(e) => handleInputChange('jobDescription', e.target.value)}
                    placeholder="Paste the job description to get more targeted questions..."
                    rows={4}
                  />
                </div>
              </div>
            )}

            <div className="flex justify-between mt-8">
              {step > 1 && (
                <Button 
                  variant="outline" 
                  onClick={() => setStep(step - 1)}
                >
                  Previous
                </Button>
              )}
              <div className="flex-1" />
              <Button 
                variant="premium" 
                onClick={handleNext}
                className="group"
              >
                {step === 2 ? 'Setup Interview' : 'Next'}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AIInterview;