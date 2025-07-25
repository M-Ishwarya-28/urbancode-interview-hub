import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Star, Users, Calendar, Filter, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const RealProfessionals = () => {
  const [selectedCompany, setSelectedCompany] = useState('all');
  const [selectedRole, setSelectedRole] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const professionals = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'Senior Software Engineer',
      company: 'Google',
      rating: 4.9,
      reviews: 127,
      experience: '8 years',
      specialties: ['System Design', 'Algorithms', 'Backend'],
      price: '$150/hr',
      avatar: '👩‍💻',
      availability: 'Available Today'
    },
    {
      id: 2,
      name: 'Michael Rodriguez',
      role: 'Principal Engineer',
      company: 'Microsoft',
      rating: 4.8,
      reviews: 89,
      experience: '12 years',
      specialties: ['Cloud Architecture', 'DevOps', 'Leadership'],
      price: '$200/hr',
      avatar: '👨‍💻',
      availability: 'Available Tomorrow'
    },
    {
      id: 3,
      name: 'Emily Wang',
      role: 'Tech Lead',
      company: 'Meta',
      rating: 4.9,
      reviews: 156,
      experience: '10 years',
      specialties: ['Frontend', 'React', 'Mobile'],
      price: '$175/hr',
      avatar: '👩‍💼',
      availability: 'Available in 2 days'
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'Staff Engineer',
      company: 'Amazon',
      rating: 4.7,
      reviews: 73,
      experience: '9 years',
      specialties: ['Distributed Systems', 'AWS', 'Scalability'],
      price: '$160/hr',
      avatar: '👨‍💼',
      availability: 'Available Today'
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      role: 'Engineering Manager',
      company: 'Apple',
      rating: 4.8,
      reviews: 94,
      experience: '11 years',
      specialties: ['iOS', 'Swift', 'Team Leadership'],
      price: '$180/hr',
      avatar: '👩‍💻',
      availability: 'Available Tomorrow'
    },
    {
      id: 6,
      name: 'Alex Johnson',
      role: 'Principal Architect',
      company: 'Netflix',
      rating: 4.9,
      reviews: 112,
      experience: '14 years',
      specialties: ['Microservices', 'Streaming', 'Performance'],
      price: '$220/hr',
      avatar: '👨‍💻',
      availability: 'Available in 3 days'
    }
  ];

  const companies = ['all', 'Google', 'Microsoft', 'Meta', 'Amazon', 'Apple', 'Netflix'];
  const roles = ['all', 'Software Engineer', 'Principal Engineer', 'Tech Lead', 'Staff Engineer', 'Engineering Manager'];

  const filteredProfessionals = professionals.filter(prof => {
    const matchesCompany = selectedCompany === 'all' || prof.company === selectedCompany;
    const matchesRole = selectedRole === 'all' || prof.role.includes(selectedRole);
    const matchesSearch = prof.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         prof.specialties.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCompany && matchesRole && matchesSearch;
  });

  const handleBookInterview = (professional: any) => {
    alert(`Booking interview with ${professional.name}. This would open the booking flow.`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="bg-primary/10 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <Users className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">Real IT Professionals</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Practice with experienced engineers from top tech companies. Get real insights and feedback 
              from industry professionals who've been in your shoes.
            </p>
          </div>

          {/* Filters */}
          <Card className="p-6 mb-8 bg-card border border-border">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Search</label>
                <Input
                  placeholder="Search by name or specialty..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Company</label>
                <Select value={selectedCompany} onValueChange={setSelectedCompany}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {companies.map(company => (
                      <SelectItem key={company} value={company}>
                        {company === 'all' ? 'All Companies' : company}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Role</label>
                <Select value={selectedRole} onValueChange={setSelectedRole}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {roles.map(role => (
                      <SelectItem key={role} value={role}>
                        {role === 'all' ? 'All Roles' : role}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Button variant="outline" className="h-12">
                <Filter className="h-4 w-4 mr-2" />
                More Filters
              </Button>
            </div>
          </Card>

          {/* Results */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-foreground mb-2">
              Available Professionals ({filteredProfessionals.length})
            </h2>
            <p className="text-muted-foreground">
              Book 1-on-1 mock interviews with industry experts
            </p>
          </div>

          {/* Professional Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProfessionals.map(professional => (
              <Card key={professional.id} className="p-6 bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-3xl">{professional.avatar}</div>
                    <div>
                      <h3 className="font-semibold text-foreground">{professional.name}</h3>
                      <p className="text-sm text-muted-foreground">{professional.role}</p>
                      <Badge variant="secondary" className="mt-1">
                        {professional.company}
                      </Badge>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      <span className="text-sm font-medium">{professional.rating}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">({professional.reviews} reviews)</p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Experience:</span>
                    <span className="text-foreground">{professional.experience}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Rate:</span>
                    <span className="text-foreground font-medium">{professional.price}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Availability:</span>
                    <span className="text-green-500 text-xs">{professional.availability}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-muted-foreground mb-2">Specialties:</p>
                  <div className="flex flex-wrap gap-1">
                    {professional.specialties.map((specialty, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button 
                  variant="premium" 
                  className="w-full group"
                  onClick={() => handleBookInterview(professional)}
                >
                  Book Interview
                  <Calendar className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Card>
            ))}
          </div>

          {filteredProfessionals.length === 0 && (
            <div className="text-center py-12">
              <Users className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">No professionals found</h3>
              <p className="text-muted-foreground">Try adjusting your filters or search terms</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RealProfessionals;