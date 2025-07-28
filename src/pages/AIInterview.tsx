import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Progress } from '@/components/ui/progress';
import { ArrowRight, Bot, Clock, Target, Video, Upload, Check, X, Mic, Camera, Volume2, Star, Play, FileText, Users, Settings } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const AIInterview = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    position: 'Data Analyst',
    experience: '',
    company: '',
    jobDescription: '',
    interviewType: 'Warm Up',
    duration: '15',
    selectedInterviewer: 'john',
    resumeUploaded: false,
    agreedToTerms: false,
    audioEnabled: true,
    videoEnabled: true
  });

  const [compatibility, setCompatibility] = useState({
    browser: false,
    microphone: false,
    camera: false,
    voiceQuality: false
  });

  const [isInInterview, setIsInInterview] = useState(false);

  const interviewers = [
    { id: 'payal', name: 'Payal', language: 'IN English', avatar: '👩🏻‍💼', expertise: 'Technical' },
    { id: 'emma', name: 'Emma', language: 'US English', avatar: '👩🏼‍💼', expertise: 'Behavioral' },
    { id: 'john', name: 'John', language: 'US English', avatar: '👨🏻‍💼', expertise: 'Leadership' },
    { id: 'kapil', name: 'Kapil', language: 'IN English', avatar: '👨🏽‍💼', expertise: 'System Design' }
  ];

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (step < 5) {
      setStep(step + 1);
    }
  };

  const handleStartInterview = () => {
    setIsInInterview(true);
  };

  const runCompatibilityTest = () => {
    // Simulate compatibility tests
    setTimeout(() => setCompatibility(prev => ({ ...prev, browser: true })), 500);
    setTimeout(() => setCompatibility(prev => ({ ...prev, microphone: true })), 1000);
    setTimeout(() => setCompatibility(prev => ({ ...prev, camera: true })), 1500);
    setTimeout(() => setCompatibility(prev => ({ ...prev, voiceQuality: true })), 2000);
  };

  React.useEffect(() => {
    if (step === 4) {
      runCompatibilityTest();
    }
  }, [step]);

  // Interview Interface
  if (isInInterview) {
    return (
      <div className="min-h-screen bg-background flex">
        {/* Main Interview Area */}
        <div className="flex-1 flex flex-col">
          {/* Video Container */}
          <div className="flex-1 bg-black relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full max-w-4xl">
                <img 
                  src="/lovable-uploads/b0debaa5-62ac-4b72-8b74-e80f0e297c80.png"
                  alt="AI Interviewer" 
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute bottom-4 left-4 bg-black/50 px-3 py-1 rounded text-white text-sm">
                  04:55
                </div>
                <div className="absolute bottom-4 right-4">
                  <Button size="sm" className="bg-green-600 hover:bg-green-700">
                    <Play className="w-4 h-4 mr-2" />
                    START ANSWER
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Question Area */}
          <div className="bg-card border-t p-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-4">
                <span className="text-primary text-sm font-medium">Main Question</span>
              </div>
              <h2 className="text-xl font-semibold text-center mb-4">
                How do you prioritize your tasks when you have multiple deadlines to meet?
              </h2>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-80 bg-card border-l p-4 flex flex-col">
          {/* Camera Preview */}
          <div className="mb-4">
            <div className="bg-gray-300 rounded-lg h-32 flex items-center justify-center relative">
              <Camera className="w-8 h-8 text-gray-500" />
              <Button 
                size="sm" 
                variant="ghost" 
                className="absolute top-2 right-2"
                onClick={() => setIsInInterview(false)}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Interview Info */}
          <div className="flex-1">
            <h3 className="font-semibold mb-2">Data Analyst</h3>
            <p className="text-sm text-muted-foreground mb-4">Warm Up</p>
            
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <Target className="w-4 h-4 mr-2" />
                EVALUATION CRITERIA
              </Button>
              
              <Button variant="destructive" className="w-full justify-start">
                <X className="w-4 h-4 mr-2" />
                EXIT INTERVIEW
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Practice Prerequisite Page (Step 4)
  if (step === 4) {
    const allCompatibilityChecked = Object.values(compatibility).every(Boolean);
    
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto py-12">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-2xl font-bold text-foreground">Practice Prerequisite</h1>
              <Button variant="outline" className="text-primary border-primary">
                EVALUATION CRITERIA
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Compatibility Test */}
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-6 text-center">Compatibility Test</h2>
                <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center mb-6">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gray-300 rounded-lg flex items-center justify-center">
                      <Settings className="w-8 h-8 text-gray-600" />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${compatibility.browser ? 'bg-green-100' : 'bg-gray-100'}`}>
                      {compatibility.browser && <Check className="w-3 h-3 text-green-600" />}
                    </div>
                    <span className="text-sm">Check completed. Your browser is compatible.</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${compatibility.microphone ? 'bg-green-100' : 'bg-gray-100'}`}>
                      {compatibility.microphone && <Check className="w-3 h-3 text-green-600" />}
                    </div>
                    <span className="text-sm">Test completed. Microphone is enabled.</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${compatibility.camera ? 'bg-green-100' : 'bg-gray-100'}`}>
                      {compatibility.camera && <Check className="w-3 h-3 text-green-600" />}
                    </div>
                    <span className="text-sm">Test completed. Camera is enabled.</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${compatibility.voiceQuality ? 'bg-green-100' : 'bg-gray-100'}`}>
                      {compatibility.voiceQuality && <Check className="w-3 h-3 text-green-600" />}
                    </div>
                    <span className="text-sm">Voice quality is Good.</span>
                  </div>
                </div>
              </Card>

              {/* Interview Instructions */}
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-6 text-center">Interview Practice Instructions</h2>
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg h-48 flex items-center justify-center mb-6 relative overflow-hidden">
                  <img 
                    src="/lovable-uploads/b0debaa5-62ac-4b72-8b74-e80f0e297c80.png"
                    alt="Interview Practice" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 right-4">
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      START ANSWER
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex gap-3">
                    <span className="font-medium text-primary">1.</span>
                    <span>Click on the 'Answer' button to start recording and 'End Answer' button to move to the next question</span>
                  </div>
                  
                  <div className="flex gap-3">
                    <span className="font-medium text-primary">2.</span>
                    <span>Answer all the questions to generate the final analytics report</span>
                  </div>
                  
                  <div className="flex gap-3">
                    <span className="font-medium text-primary">3.</span>
                    <span>Do not worry if the transcription text is not accurate, we will improve that before generating analytics report</span>
                  </div>
                  
                  <div className="flex gap-3">
                    <span className="font-medium text-primary">4.</span>
                    <span>Use your headphone for better experience.</span>
                  </div>
                </div>
              </Card>
            </div>

            <div className="flex justify-center gap-4 mt-8">
              <Button variant="outline" onClick={() => setStep(3)}>
                GO BACK
              </Button>
              <Button 
                variant="premium" 
                onClick={handleStartInterview}
                disabled={!allCompatibilityChecked}
                className="min-w-[150px]"
              >
                START PRACTICE
              </Button>
            </div>
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
        <div className="max-w-4xl mx-auto py-12">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-foreground mb-2">Interview Details</h1>
            <Progress value={(step / 4) * 100} className="w-full max-w-md mx-auto" />
            <p className="text-sm text-muted-foreground mt-2">Step {step} of 4</p>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-lg shadow-sm border p-8">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">{formData.position}</h2>
              <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                {step === 1 ? 'Job Role' : step === 2 ? 'Interview Configuration' : 'Interviewer Selection'}
              </span>
            </div>

            {step === 1 && (
              <div className="space-y-6">
                {/* Resume Upload Section */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-medium text-gray-900">Resume Based Interview: (Optional)</h3>
                    <Button 
                      variant="outline" 
                      className="text-purple-600 border-purple-600 hover:bg-purple-50"
                      onClick={() => handleInputChange('resumeUploaded', 'true')}
                    >
                      <Upload className="w-4 h-4 mr-2" />
                      Upload Resume
                    </Button>
                  </div>
                  <p className="text-sm text-gray-600">Get interview questions personalized to your resume.</p>
                </div>

                {/* Select Round */}
                <div className="mb-6">
                  <Label className="text-base font-medium mb-4 block">
                    Select Round <span className="text-red-500">*</span>
                  </Label>
                  <RadioGroup 
                    value={formData.interviewType} 
                    onValueChange={(value) => handleInputChange('interviewType', value)}
                    className="flex gap-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Warm Up" id="warmup" className="border-purple-600 text-purple-600" />
                      <Label htmlFor="warmup" className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm">Warm Up</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Role Related" id="rolerelated" />
                      <Label htmlFor="rolerelated" className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm">Role Related</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Behavioral" id="behavioral" />
                      <Label htmlFor="behavioral" className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm">Behavioral</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Interview Duration */}
                <div className="mb-6">
                  <Label className="text-base font-medium mb-4 block">
                    Interview Duration <span className="text-red-500">*</span>
                  </Label>
                  <RadioGroup 
                    value={formData.duration} 
                    onValueChange={(value) => handleInputChange('duration', value)}
                    className="flex gap-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="5" id="5mins" />
                      <Label htmlFor="5mins" className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm">5 mins</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="15" id="15mins" className="border-purple-600 text-purple-600" />
                      <Label htmlFor="15mins" className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm">
                        15 mins <Star className="w-4 h-4 inline ml-1 text-yellow-500" />
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="30" id="30mins" />
                      <Label htmlFor="30mins" className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm">
                        30 mins <Star className="w-4 h-4 inline ml-1 text-yellow-500" />
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                {/* Select Your Interviewer */}
                <div className="mb-6">
                  <Label className="text-base font-medium mb-4 block">
                    Select Your Interviewer <span className="text-red-500">*</span>
                  </Label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {interviewers.map((interviewer) => (
                      <div 
                        key={interviewer.id}
                        className={`border rounded-lg p-4 cursor-pointer transition-all ${
                          formData.selectedInterviewer === interviewer.id 
                            ? 'border-purple-600 bg-purple-50' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        onClick={() => handleInputChange('selectedInterviewer', interviewer.id)}
                      >
                        <div className="text-center">
                          <div className="w-12 h-12 rounded-full bg-gray-200 mx-auto mb-2 flex items-center justify-center text-xl">
                            {interviewer.avatar}
                          </div>
                          <h4 className="font-medium text-gray-900">{interviewer.name}</h4>
                          <p className="text-xs text-gray-600">{interviewer.language}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                {/* Practice Settings */}
                <div className="mb-6">
                  <Label className="text-base font-medium mb-4 block">
                    Practice Settings <span className="text-red-500">*</span>
                  </Label>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Checkbox 
                        id="audio" 
                        checked={formData.audioEnabled}
                        onCheckedChange={(checked) => handleInputChange('audioEnabled', checked)}
                        className="border-gray-300"
                      />
                      <Label htmlFor="audio" className="text-sm font-medium">Audio</Label>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Checkbox 
                        id="video" 
                        checked={formData.videoEnabled}
                        onCheckedChange={(checked) => handleInputChange('videoEnabled', checked)}
                        className="border-red-500 text-red-500"
                      />
                      <Label htmlFor="video" className="text-sm font-medium">Video</Label>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Note: Video will be deleted after 30 mins.</p>
                </div>

                {/* Terms and Conditions */}
                <div className="mb-6">
                  <div className="flex items-center space-x-3">
                    <Checkbox 
                      id="terms" 
                      checked={formData.agreedToTerms}
                      onCheckedChange={(checked) => handleInputChange('agreedToTerms', checked)}
                      className="border-purple-600 text-purple-600"
                    />
                    <Label htmlFor="terms" className="text-sm">
                      I agree with the <span className="text-purple-600 underline">terms and conditions</span>.
                    </Label>
                  </div>
                </div>

                {/* Attempts Remaining */}
                <div className="text-right text-sm text-gray-500 mb-6">
                  Attempts remaining : 1
                </div>

                {/* Upgrade Notice */}
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 flex items-center gap-3">
                  <div className="text-orange-600">👑</div>
                  <div className="flex-1">
                    <span className="text-sm text-orange-800">
                      Switch to Remasto Rise to access premium features. 
                      <span className="underline cursor-pointer">Upgrade Now</span>
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex justify-between mt-8">
              {step > 1 && (
                <Button variant="outline" onClick={() => setStep(step - 1)}>
                  CANCEL
                </Button>
              )}
              <div className="flex-1" />
              <Button 
                variant="premium" 
                onClick={handleNext}
                disabled={step === 3 && !formData.agreedToTerms}
                className="min-w-[150px]"
              >
                {step === 3 ? 'START PRACTICE' : 'Continue'}
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AIInterview;