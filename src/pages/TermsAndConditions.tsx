import React from 'react';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { FileText, Calendar, Shield, Users, AlertTriangle, Mail } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TermsAndConditions = () => {
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
            <h1 className="text-4xl font-bold text-foreground mb-4">Terms and Conditions</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Please read these terms and conditions carefully before using our service.
            </p>
            <div className="flex items-center justify-center gap-2 mt-4 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>Last updated: January 29, 2025</span>
            </div>
          </div>

          <Card className="p-8 bg-card border border-border">
            {/* Introduction */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Shield className="h-6 w-6 text-primary" />
                Introduction
              </h2>
              <p className="text-muted-foreground mb-4">
                Welcome to Urbancode Mock AI ("Company," "we," "our," or "us"). These Terms and Conditions 
                ("Terms") govern your use of our AI-powered interview platform, including our website, 
                mobile applications, and all related services (collectively, the "Service").
              </p>
              <p className="text-muted-foreground">
                By accessing or using our Service, you agree to be bound by these Terms. If you disagree 
                with any part of these Terms, then you may not access the Service.
              </p>
            </section>

            <Separator className="my-6" />

            {/* Acceptance of Terms */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground mb-4">
                By creating an account, accessing, or using our Service, you acknowledge that you have read, 
                understood, and agree to be bound by these Terms and our Privacy Policy. These Terms apply 
                to all visitors, users, and others who access or use the Service.
              </p>
              <p className="text-muted-foreground">
                We reserve the right to modify these Terms at any time. We will notify users of any material 
                changes via email or through the Service. Your continued use of the Service after such 
                modifications constitutes acceptance of the updated Terms.
              </p>
            </section>

            <Separator className="my-6" />

            {/* Service Description */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Service Description</h2>
              <p className="text-muted-foreground mb-4">
                Urbancode Mock AI provides an AI-powered interview simulation platform that offers:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>AI-generated interview questions tailored to specific job roles</li>
                <li>Real-time AI interviewer with lip-sync technology</li>
                <li>Interview performance analytics and feedback</li>
                <li>Resume analysis and personalized recommendations</li>
                <li>Connection with real IT professionals for mock interviews</li>
                <li>Resume building tools and templates</li>
              </ul>
              <p className="text-muted-foreground">
                The Service is designed to help users practice and improve their interview skills. We do not 
                guarantee employment outcomes or interview success based on the use of our Service.
              </p>
            </section>

            <Separator className="my-6" />

            {/* User Accounts and Responsibilities */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Users className="h-6 w-6 text-primary" />
                3. User Accounts and Responsibilities
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Account Creation</h3>
                  <p>
                    You must create an account to access certain features of our Service. You are responsible 
                    for maintaining the confidentiality of your account credentials and for all activities 
                    that occur under your account.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Accurate Information</h3>
                  <p>
                    You agree to provide accurate, current, and complete information during registration 
                    and to update such information to keep it accurate, current, and complete.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Prohibited Activities</h3>
                  <p>You agree not to:</p>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                    <li>Use the Service for any unlawful purpose or in violation of these Terms</li>
                    <li>Attempt to gain unauthorized access to the Service or its related systems</li>
                    <li>Interfere with or disrupt the Service or servers or networks connected to the Service</li>
                    <li>Upload or transmit viruses, malware, or other malicious code</li>
                    <li>Impersonate any person or entity or misrepresent your affiliation</li>
                    <li>Share your account credentials with third parties</li>
                  </ul>
                </div>
              </div>
            </section>

            <Separator className="my-6" />

            {/* Privacy and Data Protection */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Privacy and Data Protection</h2>
              <p className="text-muted-foreground mb-4">
                Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect 
                your information when you use our Service. By using our Service, you consent to the collection 
                and use of information in accordance with our Privacy Policy.
              </p>
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                <h3 className="text-lg font-medium text-foreground mb-2">Data Retention</h3>
                <p className="text-muted-foreground text-sm">
                  Interview recordings are automatically deleted after 30 minutes for security purposes. 
                  Performance analytics and feedback data are retained to improve your experience and 
                  track your progress over time.
                </p>
              </div>
            </section>

            <Separator className="my-6" />

            {/* Subscription and Payment Terms */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Subscription and Payment Terms</h2>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Free and Premium Services</h3>
                  <p>
                    We offer both free and premium subscription tiers. Premium features include unlimited 
                    interview attempts, advanced analytics, priority support, and access to senior professionals.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Payment Processing</h3>
                  <p>
                    Subscription fees are billed in advance on a monthly or annual basis. All payments are 
                    processed securely through our payment partners. We do not store your payment information.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Cancellation and Refunds</h3>
                  <p>
                    You may cancel your subscription at any time. Cancellations take effect at the end of 
                    the current billing period. We offer a 14-day money-back guarantee for new premium subscriptions.
                  </p>
                </div>
              </div>
            </section>

            <Separator className="my-6" />

            {/* Intellectual Property */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Intellectual Property</h2>
              <p className="text-muted-foreground mb-4">
                The Service and its original content, features, and functionality are and will remain the 
                exclusive property of Urbancode Mock AI and its licensors. The Service is protected by 
                copyright, trademark, and other laws.
              </p>
              <p className="text-muted-foreground">
                You retain ownership of any content you submit to the Service, but you grant us a license 
                to use such content for the purpose of providing and improving our Service.
              </p>
            </section>

            <Separator className="my-6" />

            {/* Disclaimer and Limitation of Liability */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-yellow-500" />
                7. Disclaimer and Limitation of Liability
              </h2>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-4">
                <p className="text-muted-foreground text-sm">
                  <strong>IMPORTANT:</strong> Please read this section carefully as it limits our liability 
                  and contains important information about your rights.
                </p>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  The Service is provided "as is" and "as available" without any warranties of any kind, 
                  either express or implied. We do not warrant that the Service will be uninterrupted, 
                  error-free, or completely secure.
                </p>
                <p>
                  To the maximum extent permitted by law, we shall not be liable for any indirect, 
                  incidental, special, consequential, or punitive damages, including without limitation, 
                  loss of profits, data, use, goodwill, or other intangible losses.
                </p>
              </div>
            </section>

            <Separator className="my-6" />

            {/* Termination */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Termination</h2>
              <p className="text-muted-foreground mb-4">
                We may terminate or suspend your account and access to the Service immediately, without 
                prior notice or liability, for any reason, including if you breach these Terms.
              </p>
              <p className="text-muted-foreground">
                Upon termination, your right to use the Service will cease immediately. If you wish to 
                terminate your account, you may simply discontinue using the Service or contact our support team.
              </p>
            </section>

            <Separator className="my-6" />

            {/* Governing Law */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Governing Law</h2>
              <p className="text-muted-foreground">
                These Terms shall be governed by and construed in accordance with the laws of the jurisdiction 
                in which our company is incorporated, without regard to its conflict of law provisions. 
                Any disputes arising from these Terms or the Service shall be resolved through binding arbitration.
              </p>
            </section>

            <Separator className="my-6" />

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Mail className="h-6 w-6 text-primary" />
                10. Contact Information
              </h2>
              <p className="text-muted-foreground mb-4">
                If you have any questions about these Terms and Conditions, please contact us:
              </p>
              <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                <p className="text-foreground font-medium">Urbancode Mock AI</p>
                <p className="text-muted-foreground">Email: legal@urbancodemock.ai</p>
                <p className="text-muted-foreground">Support: support@urbancodemock.ai</p>
                <p className="text-muted-foreground">Phone: +1 (555) 123-4567</p>
              </div>
            </section>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;