import React from 'react';
import { Card } from '@/components/ui/card';
import { Bot, Users, FileText, BarChart3, Video, Shield, Clock, Trophy } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Features = () => {
  const features = [
    {
      icon: Bot,
      title: 'AI-Powered Interviews',
      description: 'Practice with our advanced AI that adapts to your responses and provides real-time feedback.',
      benefits: ['Personalized questions', 'Instant feedback', 'Adaptive difficulty', '24/7 availability']
    },
    {
      icon: Users,
      title: 'Real IT Professionals',
      description: 'Connect with experienced engineers from top tech companies for authentic interview practice.',
      benefits: ['Industry experts', 'Real-world scenarios', 'Career guidance', 'Network building']
    },
    {
      icon: FileText,
      title: 'Resume Analyzer',
      description: 'Get instant AI-powered feedback on your resume to optimize for ATS systems.',
      benefits: ['ATS optimization', 'Keyword analysis', 'Format suggestions', 'Industry standards']
    },
    {
      icon: BarChart3,
      title: 'Performance Analytics',
      description: 'Track your progress with detailed analytics and improvement recommendations.',
      benefits: ['Progress tracking', 'Skill assessment', 'Weakness identification', 'Growth metrics']
    },
    {
      icon: Video,
      title: 'Video Practice',
      description: 'Practice with realistic video interviews and improve your presentation skills.',
      benefits: ['Body language analysis', 'Speech patterns', 'Confidence building', 'Recording playback']
    },
    {
      icon: Shield,
      title: 'Secure & Private',
      description: 'Your data is encrypted and secure. Practice with confidence.',
      benefits: ['End-to-end encryption', 'GDPR compliant', 'No data sharing', 'Privacy first']
    }
  ];

  const stats = [
    { number: '50K+', label: 'Successful Interviews' },
    { number: '95%', label: 'Success Rate' },
    { number: '500+', label: 'IT Professionals' },
    { number: '24/7', label: 'Availability' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto py-12">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-6">
              Powerful Features for
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Interview Success</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to ace your next tech interview. From AI-powered practice sessions 
              to real professional guidance, we've got you covered.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="p-8 bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card group">
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-4">{feature.title}</h3>
                <p className="text-muted-foreground mb-6">{feature.description}</p>
                
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          {/* How It Works */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-12">How It Works</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-primary/10 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Choose Your Path</h3>
                <p className="text-muted-foreground">Select AI interview or real professional guidance</p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Customize Settings</h3>
                <p className="text-muted-foreground">Set your role, experience level, and preferences</p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Practice & Learn</h3>
                <p className="text-muted-foreground">Engage in realistic interview scenarios</p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">4</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Get Feedback</h3>
                <p className="text-muted-foreground">Receive detailed feedback and improvement tips</p>
              </div>
            </div>
          </div>

          {/* Advanced Features */}
          <Card className="p-12 bg-gradient-hero border border-border">
            <div className="text-center mb-8">
              <Trophy className="h-16 w-16 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-foreground mb-4">Advanced AI Technology</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our platform uses cutting-edge AI to provide the most realistic and helpful interview experience possible.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Real-Time Adaptation</h3>
                <p className="text-muted-foreground">AI adjusts difficulty and question types based on your responses</p>
              </div>
              
              <div className="text-center">
                <BarChart3 className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Deep Analytics</h3>
                <p className="text-muted-foreground">Comprehensive analysis of your performance and improvement areas</p>
              </div>
              
              <div className="text-center">
                <Video className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Multi-Modal Assessment</h3>
                <p className="text-muted-foreground">Evaluation of verbal, non-verbal, and technical communication</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Features;