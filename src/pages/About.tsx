import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Target, Users, Zap, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      bio: 'Former Google engineer with 10+ years in tech. Passionate about democratizing interview preparation.',
      avatar: '👩‍💼'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      bio: 'AI/ML expert from Stanford. Previously led engineering teams at Meta and Amazon.',
      avatar: '👨‍💻'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Product',
      bio: 'Product leader with experience at Microsoft and Netflix. Focused on user experience.',
      avatar: '👩‍💻'
    },
    {
      name: 'David Kim',
      role: 'Head of Content',
      bio: 'Former technical recruiter at Apple. Expert in interview processes and candidate evaluation.',
      avatar: '👨‍💼'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'We believe everyone deserves access to quality interview preparation, regardless of background or budget.'
    },
    {
      icon: Users,
      title: 'Community-First',
      description: 'Building a supportive community where candidates can practice, learn, and grow together.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Leveraging cutting-edge AI technology to create the most realistic and helpful interview experiences.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to providing the highest quality practice sessions and feedback to our users.'
    }
  ];

  const stats = [
    { number: '50,000+', label: 'Candidates Helped' },
    { number: '500+', label: 'IT Professionals' },
    { number: '95%', label: 'Success Rate' },
    { number: '24/7', label: 'AI Availability' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto py-12">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-6">
              About
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Urbancode Mock AI</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're on a mission to revolutionize interview preparation by combining artificial intelligence 
              with real-world expertise from top technology companies.
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

          {/* Our Story */}
          <Card className="p-12 bg-gradient-hero border border-border mb-16">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Founded in 2023 by a team of experienced engineers and recruiters, Urbancode Mock AI was born 
                from a simple observation: traditional interview preparation methods weren't keeping up with 
                the rapidly evolving tech industry.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                We noticed that while coding bootcamps and online courses were becoming more accessible, 
                candidates still struggled with the interview process itself. The gap between knowing how to code 
                and knowing how to interview was preventing talented individuals from landing their dream jobs.
              </p>
              <p className="text-lg text-muted-foreground">
                Today, we're proud to have helped over 50,000 candidates improve their interview skills and 
                land positions at top technology companies. Our platform combines the convenience of AI-powered 
                practice with the authenticity of real professional feedback.
              </p>
            </div>
          </Card>

          {/* Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="p-6 bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card text-center group">
                  <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Team */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="p-6 bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card text-center">
                  <div className="text-6xl mb-4">{member.avatar}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Technology */}
          <Card className="p-12 bg-card border border-border mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Technology</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Built on cutting-edge AI and machine learning technologies to provide the most realistic 
                and effective interview preparation experience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Advanced AI</h3>
                <p className="text-muted-foreground">
                  Our AI interviewers are powered by the latest language models, 
                  providing natural conversations and adaptive questioning.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Smart Analytics</h3>
                <p className="text-muted-foreground">
                  Comprehensive performance analysis that identifies strengths, weaknesses, 
                  and provides actionable improvement recommendations.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Real Connections</h3>
                <p className="text-muted-foreground">
                  Seamless platform for connecting with verified IT professionals 
                  from top companies for authentic interview experiences.
                </p>
              </div>
            </div>
          </Card>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Transform Your Interview Skills?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of successful candidates who've improved their interview performance with our platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/get-started">
                <Button variant="premium" size="xl" className="group">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/features">
                <Button variant="outline" size="xl">
                  Explore Features
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;