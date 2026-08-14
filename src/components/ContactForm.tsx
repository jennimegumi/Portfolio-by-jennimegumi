import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Send, 
  Mail, 
  User, 
  Briefcase, 
  DollarSign, 
  MessageSquare, 
  Trash2, 
  CheckCircle, 
  Inbox, 
  Bot, 
  Sparkles 
} from 'lucide-react';
import { ContactMessage } from '../types';

export default function ContactForm() {
  // Inbox data handling from localStorage
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  
  // Form input fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'ui-ux',
    budget: '$5,000 - $10,000',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [activeInboxView, setActiveInboxView] = useState(false);

  // Initialize inbox with default mockup messages on mount
  useEffect(() => {
    const stored = localStorage.getItem('portfolio_received_enquiries');
    if (stored) {
      setMessages(JSON.parse(stored));
    } else {
      const initialMsgs: ContactMessage[] = [
        {
          id: "msg-1290",
          name: "Sasha Grey",
          email: "sasha@nordicspacetech.io",
          service: "UI/UX Product Design",
          budget: "$10,000+",
          message: "We loved your Pulse Fintech dashboard case study. We are building a modular, decentralized climate-metric platform and want you to design our primary design system and components.",
          date: "Yesterday, 3:12 PM"
        },
        {
          id: "msg-9430",
          name: "Alex Rivera",
          email: "arivera@aurorabeauty.co",
          service: "Logo Branding & Identity",
          budget: "$5,000 - $10,000",
          message: "Looking for an elegant ecological rebrand for our sunscreen bottle line, similar to your Aura Skincare project. Let me know your availability for next month.",
          date: "2 Days ago"
        }
      ];
      localStorage.setItem('portfolio_received_enquiries', JSON.stringify(initialMsgs));
      setMessages(initialMsgs);
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    // Simulate standard network dispatch delay
    setTimeout(() => {
      const newMsg: ContactMessage = {
        id: `msg-${Math.floor(Math.random() * 9000) + 1000}`,
        name: formData.name,
        email: formData.email,
        service: translateServiceKey(formData.service),
        budget: formData.budget,
        message: formData.message,
        date: "Just now"
      };

      const updated = [newMsg, ...messages];
      localStorage.setItem('portfolio_received_enquiries', JSON.stringify(updated));
      setMessages(updated);

      setIsSubmitting(false);
      setShowSuccess(true);
      
      // Reset input fields
      setFormData({
        name: '',
        email: '',
        service: 'ui-ux',
        budget: '$5,000 - $10,000',
        message: ''
      });

      // Clear success notification alert after 4s
      setTimeout(() => setShowSuccess(false), 4000);
    }, 1200);
  };

  const deleteMessage = (id: string) => {
    const remaining = messages.filter(msg => msg.id !== id);
    localStorage.setItem('portfolio_received_enquiries', JSON.stringify(remaining));
    setMessages(remaining);
  };

  const translateServiceKey = (key: string) => {
    switch (key) {
      case 'generative-ai': return 'Generative AI Prompting';
      case 'social-media': return 'Social Media Management & Growth';
      case 'ui-ux': return 'UI/UX Product Design';
      case 'graphic-design': return 'Graphic Design';
      case 'artwork': return 'Artworks & 3D Sculpting';
      case 'video-edit': return 'Video Editing & Promo';
      case 'logo-branding': return 'Logo Branding & Guidelines';
      default: return 'General Creative Consult';
    }
  };

  // Simulate an automatic designer reply from Marcus Vane
  const triggerSimulatedReply = (msgId: string) => {
    setMessages(prev => prev.map(msg => {
      if (msg.id === msgId) {
        return {
          ...msg,
          reply: `Hi ${msg.name}! Thanks for reaching out. Your brief on '${msg.service}' with budget '${msg.budget}' aligns perfectly with our standard creative milestones. I've stored your request and will follow up at ${msg.email} with calendar scheduling details. - Marcus Vane`
        };
      }
      return msg;
    }));
  };

  return (
    <div className="py-10 md:py-16" id="contact_form_page">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="max-w-xl mb-12">
          <h1 className="font-display text-3xl font-black tracking-tight text-black md:text-4.5xl">
            Let's Collaborate
          </h1>
          <p className="mt-2 text-zinc-700 text-sm font-medium">
            Have an outstanding digital product, modern art installation, video commercial promo, or cosmetic rebrand brief? Set up your details below.
          </p>
        </div>

        {/* Form Container Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Contact Info Specs card */}
          <div className="lg:col-span-4 space-y-6">
            <div className="border-2 border-black bg-purple-100 p-6 bento-shadow space-y-6">
              <h3 className="font-display font-black text-xl text-black">Direct Channels</h3>
              
              <div className="space-y-4 text-xs font-mono">
                <div className="flex flex-col gap-1 p-3.5 border border-black bg-white">
                  <span className="text-zinc-500 text-[9px] font-extrabold uppercase tracking-widest">EMAIL INBOX</span>
                  <a href="mailto:marcus@vane.design" className="text-black hover:text-indigo-600 text-sm font-extrabold">
                    marcus@vane.design
                  </a>
                </div>

                <div className="flex flex-col gap-1 p-3.5 border border-black bg-white">
                  <span className="text-zinc-500 text-[9px] font-extrabold uppercase tracking-widest">DRIBBBLE / BEHANCE</span>
                  <a href="https://dribbble.com" className="text-black hover:text-indigo-600 text-sm font-extrabold">
                    dribbble.com/marcusvane
                  </a>
                </div>

                <div className="flex flex-col gap-1 p-3.5 border border-black bg-white">
                  <span className="text-zinc-500 text-[9px] font-extrabold uppercase tracking-widest">GITHUB ARCHIVE</span>
                  <a href="https://github.com" className="text-black hover:text-emerald-600 text-sm font-extrabold">
                    github.com/marcus-vane
                  </a>
                </div>
              </div>

              {/* Showcase trigger to log */}
              <div className="pt-4 border-t border-black/15 space-y-3">
                <span className="block text-[11px] text-zinc-700 font-semibold leading-relaxed">
                  Want to see submitted messages and test replies? I have built a fully featured administrative mock panel below.
                </span>
                <button
                  onClick={() => {
                    setActiveInboxView(true);
                    // Scroll to inbox box
                    setTimeout(() => {
                      document.getElementById('client-inbox-dashboard')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="flex w-full items-center justify-center space-x-1.5 border-2 border-black bg-yellow-300 py-2.5 font-display text-xs font-black text-black bento-shadow-hover"
                  id="trigger_inbox_view_btn"
                >
                  <Inbox className="h-4 w-4 mr-1" />
                  <span>Open received Inbox ({messages.length})</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right: Planner Form */}
          <div className="lg:col-span-8">
            <div className="border-2 border-black bg-white p-6 md:p-8 bento-shadow" id="form_frame">
              <h3 className="font-display font-black text-xl text-black mb-6">Brief Plan Architect</h3>
              
              <form onSubmit={handleFormSubmit} className="space-y-6" id="designer_brief_form">
                
                {/* Row: Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="space-y-2">
                    <label className="block text-xs font-mono font-extrabold text-black uppercase tracking-widest">
                      Your Identity / Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-black pointer-events-none" />
                      <input
                        required
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Liam Sterling"
                        className="w-full border-2 border-black bg-white py-3 pl-10 pr-4 text-sm text-black placeholder-zinc-400 outline-none focus:bg-yellow-50 transition-all font-display font-bold"
                        id="form_input_name"
                      />
                    </div>
                  </div>

                  {/* Email field */}
                  <div className="space-y-2">
                    <label className="block text-xs font-mono font-extrabold text-black uppercase tracking-widest">
                      Secure Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-black pointer-events-none" />
                      <input
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. liam@workforce.com"
                        className="w-full border-2 border-black bg-white py-3 pl-10 pr-4 text-sm text-black placeholder-zinc-400 outline-none focus:bg-yellow-50 transition-all font-display font-bold"
                        id="form_input_email"
                      />
                    </div>
                  </div>
                </div>

                {/* Row: Service selector & Budget toggle value */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Service type */}
                  <div className="space-y-2">
                    <label className="block text-xs font-mono font-extrabold text-black uppercase tracking-widest">
                      Design Sphere Focus
                    </label>
                    <div className="relative">
                      <Briefcase className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-black pointer-events-none" />
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full appearance-none border-2 border-black bg-white py-3 pl-10 pr-4 text-sm text-black outline-none focus:bg-yellow-50 transition-all font-display font-bold"
                        id="form_select_service"
                      >
                        <option value="generative-ai">Generative AI Prompting & Workflows</option>
                        <option value="social-media">Social Media Management & Strategy</option>
                        <option value="ui-ux">UI/UX Design Systems</option>
                        <option value="graphic-design">Graphic Design / Print</option>
                        <option value="artwork">3D Abstract Artworks</option>
                        <option value="video-edit">Video cuts & Promos</option>
                        <option value="logo-branding">Logo Branding Guides</option>
                      </select>
                    </div>
                  </div>

                  {/* Budget estimation range */}
                  <div className="space-y-2">
                    <label className="block text-xs font-mono font-extrabold text-black uppercase tracking-widest">
                      Project Investment Scale
                    </label>
                    <div className="relative">
                      <DollarSign className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-black pointer-events-none" />
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full appearance-none border-2 border-black bg-white py-3 pl-10 pr-4 text-sm text-black outline-none focus:bg-yellow-50 transition-all font-display font-bold"
                        id="form_select_budget"
                      >
                        <option value="$2,000 - $5,000">$2,000 - $5,000 (Milestone tier)</option>
                        <option value="$5,000 - $10,000">$5,000 - $10,000 (Product tier)</option>
                        <option value="$10,000+">$10,000+ (Full Campaign scope)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Text: Message brief */}
                <div className="space-y-2">
                  <label className="block text-xs font-mono font-extrabold text-black uppercase tracking-widest">
                    Milestones and Project Challenge Details
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3.5 top-3.5 h-4 w-4 text-black" />
                    <textarea
                      required
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Briefly describe your objectives, target timeline, or core product details. What does your project solve?"
                      className="w-full border-2 border-black bg-white py-3.5 pl-10 pr-4 text-sm text-black placeholder-zinc-400 outline-none focus:bg-yellow-50 transition-all font-display resize-none font-bold"
                      id="form_input_message"
                    />
                  </div>
                </div>

                {/* Submission Indicator and triggers */}
                <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-4 pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto min-w-[200px] flex items-center justify-center space-x-2 border-2 border-black bg-black py-3.5 font-display text-sm font-bold text-white transition-all bento-shadow-hover hover:bg-zinc-800 disabled:opacity-50"
                    id="form_submit_btn"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        <span>Dispatching...</span>
                      </span>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        <span>Dispatch Plan Brief</span>
                      </>
                    )}
                  </button>

                  <AnimatePresence>
                    {showSuccess && (
                      <motion.div
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        className="flex items-center space-x-2 text-emerald-600 font-mono text-xs font-bold"
                        id="sent_toast"
                      >
                        <CheckCircle className="h-4.5 w-4.5 text-emerald-600" />
                        <span>Brief saved successfully!</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

              </form>
            </div>
          </div>

        </div>

        {/* CLIENT RECEIVED ENQUIRIES LOCAL LOG PANEL - Highly interactive */}
        <div className="mt-20 border-t-2 border-black pt-16 space-y-8" id="client-inbox-dashboard">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="max-w-xl">
              <span className="font-mono text-[9px] bg-cyan-200 text-black border border-black font-extrabold uppercase tracking-widest inline-block px-1.5 py-0.5 mb-2">
                DEVELOPER / RECEPTIVE DEMO MODE
              </span>
              <h2 className="font-display text-2.5xl font-black text-black flex items-center gap-2">
                <Inbox className="h-6 w-6 text-black" />
                Client Inbox Enquiries Logs
              </h2>
              <p className="mt-2 text-zinc-700 text-xs md:text-sm font-semibold">
                Because this app is static without a server database, we capture your form entries in <code className="text-black font-bold border border-black/20 bg-white px-1">localStorage</code>. Simulate how the designer views, filters, and issues replies directly below!
              </p>
            </div>

            <button
              onClick={() => setActiveInboxView(!activeInboxView)}
              className="text-xs font-mono font-black border-2 border-black bg-white text-black bento-shadow-hover px-4 py-2.5 transition-colors"
              id="inbox_drawer_toggle"
            >
              {activeInboxView ? 'Fold Enquiries' : 'Show Received Enquiries Panel'}
            </button>
          </div>

          <AnimatePresence>
            {activeInboxView && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden space-y-4"
                id="inbox_drawer_content"
              >
                {messages.length === 0 ? (
                  <div className="border-2 border-dashed border-black/30 bg-white p-8 text-center text-zinc-500 font-mono text-sm">
                    No received enquiries recorded. Submit the brief form above to test interactions live!
                  </div>
                ) : (
                  <div className="space-y-6">
                    {messages.map((msg) => (
                      <div 
                        key={msg.id}
                        className="border-2 border-black bg-lime-50 p-5 md:p-6 space-y-4 relative bento-shadow"
                        id={`inbox_item_${msg.id}`}
                      >
                        
                        {/* Header metadata row */}
                        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-black/15 pb-3">
                          <div className="space-y-1">
                            <span className="block font-display font-black text-base text-black">
                              {msg.name}
                            </span>
                            <span className="block font-mono text-[10px] text-zinc-650 font-bold">
                              EMAIL LINK: <a href={`mailto:${msg.email}`} className="text-indigo-600 underline font-black">{msg.email}</a>
                            </span>
                          </div>

                          <div className="flex flex-wrap items-center gap-1.5 text-[10px] font-mono">
                            <span className="border border-black bg-indigo-150 px-2 py-0.5 text-black font-bold uppercase tracking-wide">
                              {msg.service}
                            </span>
                            <span className="border border-black bg-emerald-200 px-2 py-0.5 text-black font-bold">
                              {msg.budget}
                            </span>
                            <span className="text-zinc-500 font-bold ml-2">
                              {msg.date}
                            </span>
                          </div>
                        </div>

                        {/* Brief text content */}
                        <div className="space-y-1">
                          <span className="block font-mono text-[8px] text-zinc-500 tracking-widest uppercase font-extrabold">
                            CLIENT BRIEF INPUT DETAIL
                          </span>
                          <p className="text-xs md:text-sm text-zinc-800 leading-relaxed font-semibold max-w-5xl whitespace-pre-line">
                            {msg.message}
                          </p>
                        </div>

                        {/* Interactive triggers - Simulated Reply display */}
                        {msg.reply && (
                          <div className="border-2 border-black bg-white p-4 space-y-1">
                            <div className="flex items-center space-x-2 text-black font-mono text-[10px] font-black">
                              <Bot className="h-4 w-4" />
                              <span>MARCUS VANE - AUTOMATIC REPLY DISPATCHED</span>
                            </div>
                            <p className="text-xs text-zinc-700 italic font-medium leading-relaxed">
                              "{msg.reply}"
                            </p>
                          </div>
                        )}

                        {/* Administration controls */}
                        <div className="pt-2 flex items-center justify-between border-t border-black/10">
                          {!msg.reply ? (
                            <button
                              onClick={() => triggerSimulatedReply(msg.id)}
                              className="inline-flex items-center gap-1.5 font-mono text-[10px] font-extrabold text-black bg-yellow-300 hover:bg-yellow-400 border-2 border-black px-3 py-1.5 bento-shadow-hover transition-all"
                              id={`trigger_sim_reply_${msg.id}`}
                            >
                              <Sparkles className="h-3.5 w-3.5" />
                              <span>Simulate Automatic Message Reply</span>
                            </button>
                          ) : (
                            <span className="text-[10px] font-mono text-emerald-600 font-extrabold flex items-center gap-1">
                              <CheckCircle className="h-3.5 w-3.5 text-emerald-600" />
                              Simulated response dispatched
                            </span>
                          )}

                          <button
                            onClick={() => deleteMessage(msg.id)}
                            className="border border-black bg-white p-2 text-zinc-500 hover:text-rose-500 hover:bg-rose-50 transition-all outline-none"
                            id={`delete_msg_${msg.id}`}
                            title="Delete Enquiry Row"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>

                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </div>
  );
}
