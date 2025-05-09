
import React from 'react';
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Festival Director, Soundwave",
    quote: "Working with BeatLife transformed our annual festival. Their attention to detail, technical expertise, and ability to manage complex logistics made everything run smoothly. The audience feedback was phenomenal.",
    stars: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
  },
  {
    id: 2,
    name: "David Miller",
    role: "CEO, SoundScape Records",
    quote: "We've partnered with BeatLife for our artists' tour productions, and they consistently deliver exceptional experiences. Their understanding of what makes a great show goes beyond technical proficiency—they truly understand the artist-audience connection.",
    stars: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
  },
  {
    id: 3,
    name: "Alicia Ramirez",
    role: "Marketing Director, Urban Beats Tour",
    quote: "BeatLife doesn't just organize shows; they create immersive experiences that resonate with audiences long after the last note. Their creative approach to marketing and production helped us sell out our entire tour in record time.",
    stars: 5,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="section bg-music-darker">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What People <span className="text-music-purple">Say</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Hear from our clients and partners about their experiences working with us
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="testimonial-card p-6 rounded-lg transition-transform hover:-translate-y-1 duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="flex space-x-1 mb-2">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-music-purple text-music-purple" />
                  ))}
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
