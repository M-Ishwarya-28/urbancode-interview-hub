import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Bot, Users, ArrowRight, Star, Zap, ChevronLeft, ChevronRight, BarChart3, Video } from 'lucide-react';
import CountUp from 'react-countup';
import heroAiImage from '@/assets/hero-ai-interview.jpg';
import heroRealImage from '@/assets/hero-real-interview.jpg';
import aiInterview1 from '@/assets/ai-interview-1.jpg';
import aiInterview2 from '@/assets/ai-interview-2.jpg';
import realInterview1 from '@/assets/real-interview-1.jpg';

const Hero = () => {
  const [currentAiSlide, setCurrentAiSlide] = useState(0);
  const [currentRealSlide, setCurrentRealSlide] = useState(0);

  const aiImages = [heroAiImage, aiInterview1, aiInterview2];
  const realImages = [heroRealImage, realInterview1, heroAiImage];

  useEffect(() => {
    const aiInterval = setInterval(() => {
      setCurrentAiSlide(prev => (prev + 1) % aiImages.length);
    }, 3000);

    const realInterval = setInterval(() => {
      setCurrentRealSlide(prev => (prev + 1) % realImages.length);
    }, 3500);

    return () => {
      clearInterval(aiInterval);
      clearInterval(realInterval);
    };
  }, []);

  const nextAiSlide = () => setCurrentAiSlide(prev => (prev + 1) % aiImages.length);
  const prevAiSlide = () => setCurrentAiSlide(prev => (prev - 1 + aiImages.length) % aiImages.length);
  const nextRealSlide = () => setCurrentRealSlide(prev => (prev + 1) % realImages.length);
  const prevRealSlide = () => setCurrentRealSlide(prev => (prev - 1 + realImages.length) % realImages.length);

  return (
    <div className="min-h-screen bg-gradient-hero pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Main Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center mb-6">
            <div className="flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
              <Star className="h-4 w-4 text-primary" />
              <span className="text-sm text-primary font-medium">Trusted by 50K+ professionals</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
            Master Your
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Interview</span>
            <br />
            Skills Today
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Practice with AI-powered mock interviews or connect with real IT professionals. 
            Get personalized feedback, build confidence, and land your dream job.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link to="/get-started">
              <Button variant="premium" size="xl" className="group">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/demo">
              <Button variant="outline" size="xl">
                Watch Demo
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">
                <CountUp start={0} end={50000} duration={2.5} separator="," />+
              </div>
              <div className="text-muted-foreground">Successful Interviews</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">
                <CountUp start={0} end={95} duration={2.5} />%
              </div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">
                <CountUp start={0} end={500} duration={2.5} />+
              </div>
              <div className="text-muted-foreground">IT Professionals</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Availability</div>
            </div>
          </div>
        </div>

        {/* Interview Options */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* AI Mock Interview */}
          <div className="relative group">
            <div className="bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card">
              <div className="absolute top-6 right-6">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Bot className="h-8 w-8 text-primary" />
                </div>
              </div>
              
              <div className="mb-6 relative overflow-hidden rounded-lg">
                <div className="relative h-48">
                  {aiImages.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`AI Mock Interview ${index + 1}`}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                        index === currentAiSlide ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  ))}
                  
                  {/* Navigation Arrows */}
                  <button 
                    onClick={prevAiSlide}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1 transition-colors"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button 
                    onClick={nextAiSlide}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1 transition-colors"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                  
                  {/* Dots Indicator */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
                    {aiImages.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full transition-colors cursor-pointer ${
                          index === currentAiSlide ? 'bg-primary' : 'bg-white/50'
                        }`}
                        onClick={() => setCurrentAiSlide(index)}
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4">AI Mock Interview</h3>
              <p className="text-muted-foreground mb-6">
                Practice with our advanced AI interviewer that adapts to your responses and provides 
                real-time feedback on technical and behavioral questions.
              </p>
              
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-muted-foreground">
                  <Zap className="h-4 w-4 text-primary mr-2" />
                  Instant feedback and scoring
                </li>
                <li className="flex items-center text-sm text-muted-foreground">
                  <Zap className="h-4 w-4 text-primary mr-2" />
                  1000+ technical questions
                </li>
                <li className="flex items-center text-sm text-muted-foreground">
                  <Zap className="h-4 w-4 text-primary mr-2" />
                  Personalized improvement tips
                </li>
              </ul>
              
              <Link to="/ai-interview">
                <Button variant="hero" className="w-full group">
                  Start AI Interview
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Real IT Professional */}
          <div className="relative group">
            <div className="bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card">
              <div className="absolute top-6 right-6">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Users className="h-8 w-8 text-primary" />
                </div>
              </div>
              
              <div className="mb-6 relative overflow-hidden rounded-lg">
                <div className="relative h-48">
                  {realImages.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Real IT Professional Interview ${index + 1}`}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                        index === currentRealSlide ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  ))}
                  
                  {/* Navigation Arrows */}
                  <button 
                    onClick={prevRealSlide}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1 transition-colors"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button 
                    onClick={nextRealSlide}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1 transition-colors"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                  
                  {/* Dots Indicator */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
                    {realImages.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full transition-colors cursor-pointer ${
                          index === currentRealSlide ? 'bg-primary' : 'bg-white/50'
                        }`}
                        onClick={() => setCurrentRealSlide(index)}
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4">Real IT Professional</h3>
              <p className="text-muted-foreground mb-6">
                Connect with experienced IT professionals from top companies for authentic 
                interview practice and industry insights.
              </p>
              
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-muted-foreground">
                  <Zap className="h-4 w-4 text-primary mr-2" />
                  Industry experts from FAANG
                </li>
                <li className="flex items-center text-sm text-muted-foreground">
                  <Zap className="h-4 w-4 text-primary mr-2" />
                  Real-world scenarios
                </li>
                <li className="flex items-center text-sm text-muted-foreground">
                  <Zap className="h-4 w-4 text-primary mr-2" />
                  Career guidance included
                </li>
              </ul>
              
              <Link to="/real-professionals">
                <Button variant="hero" className="w-full group">
                  Book Professional
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Why Choose
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Urbancode Mock AI</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to succeed in your next tech interview, backed by cutting-edge AI and real industry expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <div className="bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card group">
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Bot className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">AI-Powered Practice</h3>
              <p className="text-muted-foreground mb-4">
                Practice with our advanced AI that adapts to your responses and provides real-time feedback on technical and behavioral questions.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                  Instant feedback and scoring
                </li>
                <li className="flex items-center text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                  1000+ technical questions
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card group">
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Real Professional Feedback</h3>
              <p className="text-muted-foreground mb-4">
                Connect with experienced engineers from FAANG companies for authentic interview practice and career guidance.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                  Industry experts from top companies
                </li>
                <li className="flex items-center text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                  Real-world scenarios
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card group">
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <BarChart3 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Performance Analytics</h3>
              <p className="text-muted-foreground mb-4">
                Track your progress with detailed analytics and get personalized recommendations for improvement.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                  Progress tracking
                </li>
                <li className="flex items-center text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                  Weakness identification
                </li>
              </ul>
            </div>
          </div>

          {/* Success Stories */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Success Stories</h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              Join thousands of candidates who've landed their dream jobs with our platform.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card rounded-2xl p-8 border border-border">
                <div className="text-6xl mb-4">👨‍💻</div>
                <h3 className="text-lg font-bold text-foreground mb-2">Alex Chen</h3>
                <p className="text-primary font-medium mb-3">Software Engineer at Google</p>
                <p className="text-muted-foreground text-sm">
                  "The AI practice sessions helped me identify my weak spots and improve my communication skills. Landed my dream job!"
                </p>
              </div>

              <div className="bg-card rounded-2xl p-8 border border-border">
                <div className="text-6xl mb-4">👩‍💻</div>
                <h3 className="text-lg font-bold text-foreground mb-2">Sarah Kim</h3>
                <p className="text-primary font-medium mb-3">Frontend Developer at Meta</p>
                <p className="text-muted-foreground text-sm">
                  "Practicing with real professionals gave me insights I couldn't get anywhere else. Highly recommend!"
                </p>
              </div>

              <div className="bg-card rounded-2xl p-8 border border-border">
                <div className="text-6xl mb-4">👨‍💼</div>
                <h3 className="text-lg font-bold text-foreground mb-2">Mike Johnson</h3>
                <p className="text-primary font-medium mb-3">Full Stack Engineer at Amazon</p>
                <p className="text-muted-foreground text-sm">
                  "The detailed feedback and analytics helped me track my progress and improve systematically."
                </p>
              </div>
            </div>
          </div>

          {/* Technology Section */}
          <div className="bg-gradient-hero rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">Powered by Advanced AI</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Our platform uses cutting-edge artificial intelligence to provide the most realistic and effective interview preparation experience.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Real-Time Adaptation</h3>
                <p className="text-muted-foreground">
                  AI adjusts difficulty and question types based on your responses
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <BarChart3 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Deep Analytics</h3>
                <p className="text-muted-foreground">
                  Comprehensive analysis of your performance and improvement areas
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Video className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Multi-Modal Assessment</h3>
                <p className="text-muted-foreground">
                  Evaluation of verbal, non-verbal, and technical communication
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;