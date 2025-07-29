import React, { useState, useRef, useEffect } from 'react';
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
  const [selectedRole, setSelectedRole] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
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
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [isAISpeaking, setIsAISpeaking] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [openAIKey, setOpenAIKey] = useState('');
  const [showKeyInput, setShowKeyInput] = useState(false);
  
  const audioRef = useRef<HTMLAudioElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  const questions = [
    "How do you prioritize your tasks when you have multiple deadlines to meet?",
    "Tell me about a challenging project you worked on and how you overcame obstacles.",
    "Where do you see yourself in 5 years?",
    "What motivates you to excel in your work?",
    "How do you handle stress and pressure in the workplace?"
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const jobRoles = [
    'all', 'Software Engineer', 'Data Analyst', 'Product Manager', 'UI/UX Designer', 
    'DevOps Engineer', 'Data Scientist', 'Full Stack Developer', 'Backend Developer', 
    'Frontend Developer', 'Mobile Developer', 'QA Engineer', 'System Administrator'
  ];

  const interviewers = [
    { id: 'payal', name: 'Payal', language: 'IN English', avatar: '👩🏻‍💼', expertise: 'Technical' },
    { id: 'emma', name: 'Emma', language: 'US English', avatar: '👩🏼‍💼', expertise: 'Behavioral' },
    { id: 'john', name: 'John', language: 'US English', avatar: '👨🏻‍💼', expertise: 'Leadership' },
    { id: 'kapil', name: 'Kapil', language: 'IN English', avatar: '👨🏽‍💼', expertise: 'System Design' }
  ];

  const filteredInterviewers = interviewers.filter(interviewer => {
    const matchesRole = selectedRole === 'all' || formData.position.includes(selectedRole);
    const matchesSearch = interviewer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         interviewer.expertise.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesRole && matchesSearch;
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (step < 5) {
      setStep(step + 1);
    }
  };

  const handleStartInterview = () => {
    if (!openAIKey) {
      setShowKeyInput(true);
      return;
    }
    setIsInInterview(true);
    setCurrentQuestion(questions[0]);
    generateAndPlayAIResponse(questions[0]);
  };

  const generateAndPlayAIResponse = async (question: string) => {
    if (!openAIKey) return;
    
    setIsAISpeaking(true);
    
    try {
      // Generate audio using OpenAI TTS
      const response = await fetch('https://api.openai.com/v1/audio/speech', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${openAIKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'tts-1',
          voice: 'alloy',
          input: question,
          response_format: 'mp3'
        }),
      });

      if (response.ok) {
        const audioBlob = await response.blob();
        const audioUrl = URL.createObjectURL(audioBlob);
        
        if (audioRef.current) {
          audioRef.current.src = audioUrl;
          audioRef.current.play();
          startLipSyncAnimation();
          
          audioRef.current.onended = () => {
            setIsAISpeaking(false);
            stopLipSyncAnimation();
          };
        }
      }
    } catch (error) {
      console.error('Error generating AI speech:', error);
      setIsAISpeaking(false);
    }
  };

  const startLipSyncAnimation = () => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw AI interviewer face (simplified representation)
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      // Head
      ctx.beginPath();
      ctx.arc(centerX, centerY - 20, 60, 0, 2 * Math.PI);
      ctx.fillStyle = '#D4A574';
      ctx.fill();
      
      // Eyes
      ctx.beginPath();
      ctx.arc(centerX - 20, centerY - 30, 5, 0, 2 * Math.PI);
      ctx.arc(centerX + 20, centerY - 30, 5, 0, 2 * Math.PI);
      ctx.fillStyle = '#000';
      ctx.fill();
      
      // Animated mouth (lip sync effect)
      const mouthHeight = Math.sin(Date.now() * 0.01) * 5 + 10;
      ctx.beginPath();
      ctx.ellipse(centerX, centerY + 10, 15, mouthHeight, 0, 0, 2 * Math.PI);
      ctx.fillStyle = '#8B4513';
      ctx.fill();
      
      if (isAISpeaking) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };
    
    animate();
  };

  const stopLipSyncAnimation = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
  };

  const handleStartAnswering = () => {
    setIsRecording(true);
  };

  const handleEndAnswer = () => {
    setIsRecording(false);
    const nextIndex = currentQuestionIndex + 1;
    
    if (nextIndex < questions.length) {
      setCurrentQuestionIndex(nextIndex);
      setCurrentQuestion(questions[nextIndex]);
      setTimeout(() => {
        generateAndPlayAIResponse(questions[nextIndex]);
      }, 1000);
    } else {
      // Interview completed
      alert('Interview completed! Generating analytics report...');
    }
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

  // OpenAI Key Input Modal
  if (showKeyInput) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="p-8 max-w-md w-full mx-4 bg-card border border-border">
          <div className="text-center mb-6">
            <h2 className="text-xl font-semibold mb-2 text-foreground">OpenAI API Key Required</h2>
            <p className="text-muted-foreground text-sm">
              Enter your OpenAI API key to enable AI interviewer with real-time speech and lip sync.
            </p>
          </div>
          <div className="space-y-4">
            <div>
              <Label htmlFor="openai-key" className="text-foreground">OpenAI API Key</Label>
              <Input
                id="openai-key"
                type="password"
                placeholder="sk-..."
                value={openAIKey}
                onChange={(e) => setOpenAIKey(e.target.value)}
                className="bg-background border-border text-foreground"
              />
            </div>
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                onClick={() => setShowKeyInput(false)}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button 
                onClick={() => {
                  setShowKeyInput(false);
                  handleStartInterview();
                }}
                disabled={!openAIKey}
                className="flex-1"
              >
                Start Interview
              </Button>
            </div>
          </div>
        </Card>
      </div>
    );
  }

  // Interview Interface
  if (isInInterview) {
    return (
      <div className="min-h-screen bg-background flex">
          {/* Main Interview Area */}
        <div className="flex-1 flex flex-col">
          {/* AI Interviewer Video Container */}
          <div className="flex-1 bg-gradient-to-br from-background/80 to-muted/40 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full max-w-4xl flex items-center justify-center">
                {/* AI Interviewer Canvas */}
                <canvas
                  ref={canvasRef}
                  width={400}
                  height={300}
                  className="border-2 border-border rounded-lg bg-gradient-to-br from-muted/20 to-muted/40"
                />
                
                {/* Status Indicators */}
                <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm px-3 py-1 rounded border border-border text-foreground text-sm">
                  {isAISpeaking ? 'AI Speaking...' : 'Waiting for response...'}
                </div>
                
                <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm px-3 py-1 rounded border border-border text-foreground text-sm">
                  Question {currentQuestionIndex + 1} of {questions.length}
                </div>
                
                {/* Recording Controls */}
                <div className="absolute bottom-4 right-4 space-x-2">
                  {!isRecording ? (
                    <Button 
                      size="sm" 
                      className="bg-green-600 hover:bg-green-700 text-white"
                      onClick={handleStartAnswering}
                      disabled={isAISpeaking}
                    >
                      <Mic className="w-4 h-4 mr-2" />
                      START ANSWER
                    </Button>
                  ) : (
                    <Button 
                      size="sm" 
                      className="bg-red-600 hover:bg-red-700 text-white"
                      onClick={handleEndAnswer}
                    >
                      <X className="w-4 h-4 mr-2" />
                      END ANSWER
                    </Button>
                  )}
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
                {currentQuestion || questions[0]}
              </h2>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-80 bg-card border-l border-border p-4 flex flex-col">
          {/* Camera Preview */}
          <div className="mb-4">
            <div className="bg-muted rounded-lg h-32 flex items-center justify-center relative border border-border">
              <Camera className="w-8 h-8 text-muted-foreground" />
              {isRecording && (
                <div className="absolute top-2 left-2 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              )}
              <Button 
                size="sm" 
                variant="ghost" 
                className="absolute top-2 right-2 text-muted-foreground hover:text-foreground"
                onClick={() => setIsInInterview(false)}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Interview Info */}
          <div className="flex-1">
            <h3 className="font-semibold mb-2 text-foreground">{formData.position}</h3>
            <p className="text-sm text-muted-foreground mb-4">{formData.interviewType}</p>
            
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start border-border text-foreground">
                <Target className="w-4 h-4 mr-2" />
                EVALUATION CRITERIA
              </Button>
              
              <Button 
                variant="destructive" 
                className="w-full justify-start"
                onClick={() => setIsInInterview(false)}
              >
                <X className="w-4 h-4 mr-2" />
                EXIT INTERVIEW
              </Button>
            </div>

            {/* Progress */}
            <div className="mt-6">
              <div className="flex justify-between text-sm text-muted-foreground mb-2">
                <span>Progress</span>
                <span>{currentQuestionIndex + 1}/{questions.length}</span>
              </div>
              <Progress value={((currentQuestionIndex + 1) / questions.length) * 100} />
            </div>
          </div>
        </div>

        {/* Hidden Audio Element */}
        <audio ref={audioRef} className="hidden" />
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
              <Card className="p-6 bg-card border border-border">
                <h2 className="text-xl font-semibold mb-6 text-center text-foreground">Compatibility Test</h2>
                <div className="bg-muted rounded-lg h-48 flex items-center justify-center mb-6 border border-border">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-muted-foreground/20 rounded-lg flex items-center justify-center">
                      <Settings className="w-8 h-8 text-muted-foreground" />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${compatibility.browser ? 'bg-green-100 dark:bg-green-900' : 'bg-muted'}`}>
                      {compatibility.browser && <Check className="w-3 h-3 text-green-600 dark:text-green-400" />}
                    </div>
                    <span className="text-sm text-foreground">Check completed. Your browser is compatible.</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${compatibility.microphone ? 'bg-green-100 dark:bg-green-900' : 'bg-muted'}`}>
                      {compatibility.microphone && <Check className="w-3 h-3 text-green-600 dark:text-green-400" />}
                    </div>
                    <span className="text-sm text-foreground">Test completed. Microphone is enabled.</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${compatibility.camera ? 'bg-green-100 dark:bg-green-900' : 'bg-muted'}`}>
                      {compatibility.camera && <Check className="w-3 h-3 text-green-600 dark:text-green-400" />}
                    </div>
                    <span className="text-sm text-foreground">Test completed. Camera is enabled.</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${compatibility.voiceQuality ? 'bg-green-100 dark:bg-green-900' : 'bg-muted'}`}>
                      {compatibility.voiceQuality && <Check className="w-3 h-3 text-green-600 dark:text-green-400" />}
                    </div>
                    <span className="text-sm text-foreground">Voice quality is Good.</span>
                  </div>
                </div>
              </Card>

              {/* Interview Instructions */}
              <Card className="p-6 bg-card border border-border">
                <h2 className="text-xl font-semibold mb-6 text-center text-foreground">Interview Practice Instructions</h2>
                <div className="bg-gradient-to-br from-primary/10 to-primary/20 rounded-lg h-48 flex items-center justify-center mb-6 relative overflow-hidden border border-border">
                  <img 
                    src="/lovable-uploads/b0debaa5-62ac-4b72-8b74-e80f0e297c80.png"
                    alt="Interview Practice" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 right-4">
                    <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
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

          {/* Filters Section - Only show before the main form */}
          {step === 1 && (
            <Card className="p-6 mb-8 bg-card border border-border">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Search Interviewers</label>
                  <Input
                    placeholder="Search by name or expertise..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="bg-background border-border text-foreground"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Job Role</label>
                  <Select value={selectedRole} onValueChange={setSelectedRole}>
                    <SelectTrigger className="bg-background border-border text-foreground">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {jobRoles.map(role => (
                        <SelectItem key={role} value={role}>
                          {role === 'all' ? 'All Roles' : role}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Position</label>
                  <Select value={formData.position} onValueChange={(value) => handleInputChange('position', value)}>
                    <SelectTrigger className="bg-background border-border text-foreground">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {jobRoles.slice(1).map(role => (
                        <SelectItem key={role} value={role}>
                          {role}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </Card>
          )}

          {/* Main Content */}
          <div className="bg-card rounded-lg shadow-sm border border-border p-8">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-foreground mb-2">{formData.position}</h2>
              <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                {step === 1 ? 'Job Role' : step === 2 ? 'Interview Configuration' : 'Interviewer Selection'}
              </span>
            </div>

            {step === 1 && (
              <div className="space-y-6">
                {/* Resume Upload Section */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-medium text-foreground">Resume Based Interview: (Optional)</h3>
                    <Button 
                      variant="outline" 
                      className="text-primary border-primary hover:bg-primary/10"
                      onClick={() => handleInputChange('resumeUploaded', 'true')}
                    >
                      <Upload className="w-4 h-4 mr-2" />
                      Upload Resume
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">Get interview questions personalized to your resume.</p>
                </div>

                {/* Select Round */}
                <div className="mb-6">
                  <Label className="text-base font-medium mb-4 block text-foreground">
                    Select Round <span className="text-red-500">*</span>
                  </Label>
                  <RadioGroup 
                    value={formData.interviewType} 
                    onValueChange={(value) => handleInputChange('interviewType', value)}
                    className="flex gap-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Warm Up" id="warmup" className="border-primary text-primary" />
                      <Label htmlFor="warmup" className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm">Warm Up</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Role Related" id="rolerelated" />
                      <Label htmlFor="rolerelated" className="bg-muted text-muted-foreground px-4 py-2 rounded-full text-sm">Role Related</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Behavioral" id="behavioral" />
                      <Label htmlFor="behavioral" className="bg-muted text-muted-foreground px-4 py-2 rounded-full text-sm">Behavioral</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Interview Duration */}
                <div className="mb-6">
                  <Label className="text-base font-medium mb-4 block text-foreground">
                    Interview Duration <span className="text-red-500">*</span>
                  </Label>
                  <RadioGroup 
                    value={formData.duration} 
                    onValueChange={(value) => handleInputChange('duration', value)}
                    className="flex gap-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="5" id="5mins" />
                      <Label htmlFor="5mins" className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm">5 mins</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="15" id="15mins" className="border-primary text-primary" />
                      <Label htmlFor="15mins" className="bg-muted text-muted-foreground px-4 py-2 rounded-full text-sm">
                        15 mins <Star className="w-4 h-4 inline ml-1 text-yellow-500" />
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="30" id="30mins" />
                      <Label htmlFor="30mins" className="bg-muted text-muted-foreground px-4 py-2 rounded-full text-sm">
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
                  <Label className="text-base font-medium mb-4 block text-foreground">
                    Select Your Interviewer <span className="text-red-500">*</span>
                  </Label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {filteredInterviewers.map((interviewer) => (
                      <div 
                        key={interviewer.id}
                        className={`border rounded-lg p-4 cursor-pointer transition-all ${
                          formData.selectedInterviewer === interviewer.id 
                            ? 'border-primary bg-primary/10' 
                            : 'border-border hover:border-primary/50'
                        }`}
                        onClick={() => handleInputChange('selectedInterviewer', interviewer.id)}
                      >
                        <div className="text-center">
                          <div className="w-12 h-12 rounded-full bg-muted mx-auto mb-2 flex items-center justify-center text-xl">
                            {interviewer.avatar}
                          </div>
                          <h4 className="font-medium text-foreground">{interviewer.name}</h4>
                          <p className="text-xs text-muted-foreground">{interviewer.language}</p>
                          <p className="text-xs text-primary mt-1">{interviewer.expertise}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {filteredInterviewers.length === 0 && (
                    <div className="text-center py-8">
                      <Bot className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-foreground mb-2">No interviewers found</h3>
                      <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                {/* Practice Settings */}
                <div className="mb-6">
                  <Label className="text-base font-medium mb-4 block text-foreground">
                    Practice Settings <span className="text-red-500">*</span>
                  </Label>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Checkbox 
                        id="audio" 
                        checked={formData.audioEnabled}
                        onCheckedChange={(checked) => handleInputChange('audioEnabled', checked)}
                        className="border-border"
                      />
                      <Label htmlFor="audio" className="text-sm font-medium text-foreground">Audio</Label>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Checkbox 
                        id="video" 
                        checked={formData.videoEnabled}
                        onCheckedChange={(checked) => handleInputChange('videoEnabled', checked)}
                        className="border-red-500 text-red-500"
                      />
                      <Label htmlFor="video" className="text-sm font-medium text-foreground">Video</Label>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">Note: Video will be deleted after 30 mins.</p>
                </div>

                {/* Terms and Conditions */}
                <div className="mb-6">
                  <div className="flex items-center space-x-3">
                    <Checkbox 
                      id="terms" 
                      checked={formData.agreedToTerms}
                      onCheckedChange={(checked) => handleInputChange('agreedToTerms', checked)}
                      className="border-primary text-primary"
                    />
                    <Label htmlFor="terms" className="text-sm text-foreground">
                      I agree with the <span className="text-primary underline">terms and conditions</span>.
                    </Label>
                  </div>
                </div>

                {/* Attempts Remaining */}
                <div className="text-right text-sm text-muted-foreground mb-6">
                  Attempts remaining : 1
                </div>

                {/* Upgrade Notice */}
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 flex items-center gap-3">
                  <div className="text-primary">👑</div>
                  <div className="flex-1">
                    <span className="text-sm text-foreground">
                      Switch to Urbancode Pro to access premium features. 
                      <span className="underline cursor-pointer text-primary">Upgrade Now</span>
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