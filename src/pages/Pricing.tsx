import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Check, Star, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Pricing = () => {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      description: 'Perfect for getting started with interview practice',
      features: [
        '3 AI mock interviews per month',
        'Basic feedback and scoring',
        'Resume analyzer (1 resume/month)',
        'Community support',
        'Basic question bank'
      ],
      limitations: [
        'Limited interview types',
        'No real professional access',
        'Basic analytics only'
      ],
      buttonText: 'Get Started Free',
      buttonVariant: 'outline' as const,
      popular: false
    },
    {
      name: 'Pro',
      price: '$29',
      period: 'per month',
      description: 'Ideal for serious job seekers and career advancement',
      features: [
        'Unlimited AI mock interviews',
        'All interview types & difficulties',
        'Advanced feedback & analytics',
        'Resume builder with templates',
        'Unlimited resume analysis',
        '2 real professional sessions/month',
        'Priority support',
        'Interview recording & playback',
        'Custom interview scenarios'
      ],
      limitations: [],
      buttonText: 'Start Pro Trial',
      buttonVariant: 'premium' as const,
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$99',
      period: 'per month',
      description: 'For teams and organizations seeking comprehensive training',
      features: [
        'Everything in Pro',
        'Unlimited real professional sessions',
        'Team management & analytics',
        'Custom branding',
        'API access',
        'Dedicated account manager',
        'Custom interview frameworks',
        'Advanced reporting & insights',
        'SSO integration',
        'White-label options'
      ],
      limitations: [],
      buttonText: 'Contact Sales',
      buttonVariant: 'outline' as const,
      popular: false
    }
  ];

  const faqs = [
    {
      question: 'What happens after my free trial ends?',
      answer: 'You can continue using the free plan with limited features, or upgrade to Pro for unlimited access to all features.'
    },
    {
      question: 'Can I change plans anytime?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.'
    },
    {
      question: 'Are real professional sessions live?',
      answer: 'Yes, all professional sessions are live 1-on-1 video calls with experienced IT professionals from top companies.'
    },
    {
      question: 'Do you offer refunds?',
      answer: 'We offer a 14-day money-back guarantee for all paid plans if you\'re not satisfied with our service.'
    },
    {
      question: 'Is there a student discount?',
      answer: 'Yes, we offer 50% off on Pro plans for students with valid .edu email addresses.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto py-12">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-6">
              Simple, Transparent
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Pricing</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the perfect plan for your interview preparation journey. 
              Start free and upgrade when you're ready for more features.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`p-8 bg-card border transition-all duration-300 hover:shadow-card relative ${
                  plan.popular 
                    ? 'border-primary scale-105 shadow-premium' 
                    : 'border-border hover:border-primary/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center">
                      <Star className="h-4 w-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-5xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground ml-2">/{plan.period}</span>
                  </div>
                  <p className="text-muted-foreground">{plan.description}</p>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                  
                  {plan.limitations.map((limitation, limitIndex) => (
                    <div key={limitIndex} className="flex items-start opacity-60">
                      <div className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 flex items-center justify-center">
                        <div className="w-3 h-0.5 bg-muted-foreground rounded" />
                      </div>
                      <span className="text-muted-foreground text-sm">{limitation}</span>
                    </div>
                  ))}
                </div>

                <Link to="/get-started" className="block">
                  <Button 
                    variant={plan.buttonVariant} 
                    className="w-full group"
                    size="lg"
                  >
                    {plan.buttonText}
                    <Zap className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </Card>
            ))}
          </div>

          {/* Feature Comparison */}
          <Card className="p-8 bg-card border border-border mb-16">
            <h2 className="text-3xl font-bold text-foreground text-center mb-8">Feature Comparison</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 text-foreground font-semibold">Features</th>
                    <th className="text-center py-4 text-foreground font-semibold">Free</th>
                    <th className="text-center py-4 text-foreground font-semibold">Pro</th>
                    <th className="text-center py-4 text-foreground font-semibold">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="py-4 text-foreground">AI Mock Interviews</td>
                    <td className="text-center py-4">3/month</td>
                    <td className="text-center py-4">Unlimited</td>
                    <td className="text-center py-4">Unlimited</td>
                  </tr>
                  <tr>
                    <td className="py-4 text-foreground">Real Professional Sessions</td>
                    <td className="text-center py-4">-</td>
                    <td className="text-center py-4">2/month</td>
                    <td className="text-center py-4">Unlimited</td>
                  </tr>
                  <tr>
                    <td className="py-4 text-foreground">Resume Analysis</td>
                    <td className="text-center py-4">1/month</td>
                    <td className="text-center py-4">Unlimited</td>
                    <td className="text-center py-4">Unlimited</td>
                  </tr>
                  <tr>
                    <td className="py-4 text-foreground">Advanced Analytics</td>
                    <td className="text-center py-4">-</td>
                    <td className="text-center py-4">✓</td>
                    <td className="text-center py-4">✓</td>
                  </tr>
                  <tr>
                    <td className="py-4 text-foreground">API Access</td>
                    <td className="text-center py-4">-</td>
                    <td className="text-center py-4">-</td>
                    <td className="text-center py-4">✓</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>

          {/* FAQs */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8">Frequently Asked Questions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {faqs.map((faq, index) => (
                <Card key={index} className="p-6 bg-card border border-border text-left">
                  <h3 className="text-lg font-semibold text-foreground mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA */}
          <Card className="p-12 bg-gradient-hero border border-border text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Ace Your Next Interview?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of successful candidates who've improved their interview skills with Urbancode Mock AI.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/get-started">
                <Button variant="premium" size="xl" className="group">
                  Start Free Trial
                  <Zap className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="xl">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;