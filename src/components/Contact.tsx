import React from "react";
import { useForm } from "@formspree/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MessageSquare } from "lucide-react";
import { toast } from "sonner";

const Contact: React.FC = () => {
  const [state, handleSubmit] = useForm("manobzqw");

  if (state.succeeded) {
    toast.success("Thanks for your message! We'll contact to you soon.");
  }

  return (
    <section id="contact" className="section bg-music-dark">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-bold mb-6">
              Get In <span className="text-music-purple">Touch</span>
            </h2>
            <p className="text-gray-300 mb-8">
              Ready to create an unforgettable music experience? Let's bring
              your vision to life. Contact us to discuss how we can help make
              your next event extraordinary.
            </p>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-music-purple/20 mr-4">
                  <Phone className="h-5 w-5 text-music-purple" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Call Us</p>
                  <p className="text-white font-medium">+91 96646 21135</p>
                  <p className="text-white font-medium">+91 </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-music-purple/20 mr-4">
                  <Mail className="h-5 w-5 text-music-purple" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email Us</p>
                  <p className="text-white font-medium">
                    info@symphonybeats.com
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-music-purple/20 mr-4">
                  <MessageSquare className="h-5 w-5 text-music-purple" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Social Media</p>
                  <div className="flex space-x-4 mt-1">
                    <a
                      href="#"
                      className="text-white hover:text-music-purple transition-colors"
                    >
                      Instagram
                    </a>
                    <a
                      href="#"
                      className="text-white hover:text-music-purple transition-colors"
                    >
                      Twitter
                    </a>
                    <a
                      href="#"
                      className="text-white hover:text-music-purple transition-colors"
                    >
                      Facebook
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 bg-music-darker p-8 rounded-lg shadow-lg purple-glow">
            <h3 className="text-2xl font-bold mb-6">
              Book Us For Your Next Show
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-gray-300 block">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                    className="bg-music-dark border-gray-700 focus:border-music-purple"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-gray-300 block">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="Your email"
                    className="bg-music-dark border-gray-700 focus:border-music-purple"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="mobile" className="text-gray-300 block">
                  Mobile Number
                </label>
                <Input
                  id="mobile"
                  name="mobile"
                  type="tel"
                  pattern="[0-9]{10}"
                  required
                  placeholder="Your mobile number"
                  className="bg-music-dark border-gray-700 focus:border-music-purple"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-gray-300 block">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  required
                  placeholder="What's this about?"
                  className="bg-music-dark border-gray-700 focus:border-music-purple"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-gray-300 block">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Tell us about your event or inquiry"
                  className="bg-music-dark border-gray-700 focus:border-music-purple min-h-[120px]"
                />
              </div>

              <Button
                type="submit"
                disabled={state.submitting}
                className="w-full bg-music-purple hover:bg-music-purple/90 text-white"
              >
                {state.submitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
