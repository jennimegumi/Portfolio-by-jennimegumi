import React, { useState } from 'react';
import {
  Send,
  Mail,
  User,
  Briefcase,
  DollarSign,
  MessageSquare,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
  const [state, handleSubmit] = useForm('mrpzapjo');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'UI/UX Design Systems',
    budget: '$5,000 - $10,000',
    message: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /*
   * Formspree handles the actual submission.
   * We keep formData only for controlling the inputs.
   */
  const handleFormSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    await handleSubmit(e);

    /*
     * Clear the form after a successful submission.
     */
    if (state.succeeded) {
      setFormData({
        name: '',
        email: '',
        service: 'UI/UX Design Systems',
        budget: '$5,000 - $10,000',
        message: '',
      });
    }
  };

  return (
    <div
      className="py-10 md:py-16"
      id="contact_form_page"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-xl mb-12">
          <h1 className="font-display text-3xl font-black tracking-tight text-black md:text-4.5xl">
            Let's Collaborate
          </h1>

          <p className="mt-2 text-zinc-700 text-sm font-medium">
            Have an outstanding digital product, branding project, video
            campaign, or creative brief? Tell me about your project below.
          </p>
        </div>

        {/* Main Contact Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* LEFT — DIRECT CHANNELS */}
          <div className="lg:col-span-4">
            <div className="border-2 border-black bg-purple-100 p-6 bento-shadow space-y-6">

              <h3 className="font-display font-black text-xl text-black">
                Direct Channels
              </h3>

              <div className="space-y-4 text-xs font-mono">

                {/* Email */}
                <div className="flex flex-col gap-1 p-3.5 border border-black bg-white">
                  <span className="text-zinc-500 text-[9px] font-extrabold uppercase tracking-widest">
                    EMAIL INBOX
                  </span>

                  <a
                    href="mailto:jennygraceapo@gmail.com"
                    className="text-black hover:text-indigo-600 text-sm font-extrabold"
                  >
                    jennygraceapo@gmail.com
                  </a>
                </div>

                {/* Behance */}
                <div className="flex flex-col gap-1 p-3.5 border border-black bg-white">
                  <span className="text-zinc-500 text-[9px] font-extrabold uppercase tracking-widest">
                    LINKEDIN
                  </span>

                  <a
                    href="https://linkedin.com/in/jennimegumi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-indigo-600 text-sm font-extrabold"
                  >
                    linkedin.com/in/jennimegumi
                  </a>
                </div>

                {/* GitHub */}
                <div className="flex flex-col gap-1 p-3.5 border border-black bg-white">
                  <span className="text-zinc-500 text-[9px] font-extrabold uppercase tracking-widest">
                    GITHUB ARCHIVE
                  </span>

                  <a
                    href="https://github.com/jennimegumi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-emerald-600 text-sm font-extrabold"
                  >
                    github.com/jennimegumi
                  </a>
                </div>

              </div>

              <div className="border-t border-black/15 pt-4">
                <p className="text-[11px] text-zinc-700 font-semibold leading-relaxed">
                  Fill out the project brief and your enquiry will be sent
                  directly to my email. I'll review your project and get
                  back to you as soon as possible.
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT — BRIEF PLAN ARCHITECT */}
          <div className="lg:col-span-8">

            <div
              className="border-2 border-black bg-white p-6 md:p-8 bento-shadow"
              id="form_frame"
            >

              <h3 className="font-display font-black text-xl text-black mb-2">
                Brief Plan Architect
              </h3>

              <p className="text-xs text-zinc-600 font-semibold mb-6">
                Tell me about your project, goals, timeline, and creative
                requirements.
              </p>

              {/* SUCCESS STATE */}
              {state.succeeded ? (
                <div
                  className="border-2 border-black bg-emerald-100 p-8 text-center space-y-4"
                  id="contact_success_message"
                >
                  <div className="flex justify-center">
                    <div className="border-2 border-black bg-white p-3">
                      <CheckCircle className="h-8 w-8 text-emerald-600" />
                    </div>
                  </div>

                  <h3 className="font-display text-2xl font-black text-black">
                    Brief Sent Successfully!
                  </h3>

                  <p className="mx-auto max-w-lg text-sm text-zinc-700 font-semibold leading-relaxed">
                    Thanks for reaching out! Your project enquiry has been
                    sent successfully. I'll review your brief and contact
                    you through the email address you provided.
                  </p>

                  <button
                    type="button"
                    onClick={() =>
                      setFormData({
                        name: '',
                        email: '',
                        service: 'UI/UX Design Systems',
                        budget: '$5,000 - $10,000',
                        message: '',
                      })
                    }
                    className="border-2 border-black bg-white px-5 py-2.5 font-mono text-xs font-black text-black bento-shadow-hover"
                  >
                    Send Another Brief
                  </button>
                </div>
              ) : (

                /* CONTACT FORM */
                <form
                  onSubmit={handleFormSubmit}
                  className="space-y-6"
                  id="designer_brief_form"
                >

                  {/* Name + Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Name */}
                    <div className="space-y-2">
                      <label
                        htmlFor="form_input_name"
                        className="block text-xs font-mono font-extrabold text-black uppercase tracking-widest"
                      >
                        Your Identity / Name
                      </label>

                      <div className="relative">
                        <User className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-black pointer-events-none" />

                        <input
                          required
                          type="text"
                          name="name"
                          id="form_input_name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="e.g. Juan De La Cruz"
                          className="w-full border-2 border-black bg-white py-3 pl-10 pr-4 text-sm text-black placeholder-zinc-400 outline-none focus:bg-yellow-50 transition-all font-display font-bold"
                        />
                      </div>

                      <ValidationError
                        prefix="Name"
                        field="name"
                        errors={state.errors}
                        className="text-xs font-mono font-bold text-rose-600"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label
                        htmlFor="form_input_email"
                        className="block text-xs font-mono font-extrabold text-black uppercase tracking-widest"
                      >
                        Email Address
                      </label>

                      <div className="relative">
                        <Mail className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-black pointer-events-none" />

                        <input
                          required
                          type="email"
                          name="email"
                          id="form_input_email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="e.g. juan@email.com"
                          className="w-full border-2 border-black bg-white py-3 pl-10 pr-4 text-sm text-black placeholder-zinc-400 outline-none focus:bg-yellow-50 transition-all font-display font-bold"
                        />
                      </div>

                      <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                        className="text-xs font-mono font-bold text-rose-600"
                      />
                    </div>

                  </div>

                  {/* Service + Budget */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Service */}
                    <div className="space-y-2">
                      <label
                        htmlFor="form_select_service"
                        className="block text-xs font-mono font-extrabold text-black uppercase tracking-widest"
                      >
                        Design Sphere Focus
                      </label>

                      <div className="relative">
                        <Briefcase className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-black pointer-events-none" />

                        <select
                          name="service"
                          id="form_select_service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="w-full appearance-none border-2 border-black bg-white py-3 pl-10 pr-4 text-sm text-black outline-none focus:bg-yellow-50 transition-all font-display font-bold"
                        >
                          <option value="Generative AI Prompting & Workflows">
                            Generative AI Prompting
                          </option>

                          <option value="Social Media Management & Strategy">
                            Social Media Management & Strategy
                          </option>

                          <option value="UI/UX Design Systems">
                            UI/UX Design Systems
                          </option>

                          <option value="Graphic Design / Print">
                            Graphic Design / Print
                          </option>

                          <option value="3D Abstract Artworks">
                            Traditional / Digital Artworks
                          </option>

                          <option value="Video Cuts & Promos">
                            Video Cuts & Promos
                          </option>

                          <option value="Logo Branding Guides">
                            Logo Branding Guides
                          </option>
                        </select>
                      </div>

                      <ValidationError
                        prefix="Service"
                        field="service"
                        errors={state.errors}
                        className="text-xs font-mono font-bold text-rose-600"
                      />
                    </div>

                    {/* Budget */}
                    <div className="space-y-2">
                      <label
                        htmlFor="form_select_budget"
                        className="block text-xs font-mono font-extrabold text-black uppercase tracking-widest"
                      >
                        Project Investment Scale
                      </label>

                      <div className="relative">
                        <DollarSign className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-black pointer-events-none" />

                        <select
                          name="budget"
                          id="form_select_budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full appearance-none border-2 border-black bg-white py-3 pl-10 pr-4 text-sm text-black outline-none focus:bg-yellow-50 transition-all font-display font-bold"
                        >
                          <option value="Php 5,000 - Php 10,000">
                            Php 5,000 - Php 10,000
                          </option>

                          <option value="Php 11,000 - Php 20,000">
                            Php 11,000 - Php 20,000
                          </option>

                          <option value="Php 25,000+">
                            Php 25,000+
                          </option>
                        </select>
                      </div>

                      <ValidationError
                        prefix="Budget"
                        field="budget"
                        errors={state.errors}
                        className="text-xs font-mono font-bold text-rose-600"
                      />
                    </div>

                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label
                      htmlFor="form_input_message"
                      className="block text-xs font-mono font-extrabold text-black uppercase tracking-widest"
                    >
                      Project Details
                    </label>

                    <div className="relative">
                      <MessageSquare className="absolute left-3.5 top-3.5 h-4 w-4 text-black" />

                      <textarea
                        required
                        rows={6}
                        name="message"
                        id="form_input_message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your project, objectives, timeline, deliverables, or anything else I should know..."
                        className="w-full border-2 border-black bg-white py-3.5 pl-10 pr-4 text-sm text-black placeholder-zinc-400 outline-none focus:bg-yellow-50 transition-all font-display resize-none font-bold"
                      />
                    </div>

                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                      className="text-xs font-mono font-bold text-rose-600"
                    />
                  </div>

                  {/* General Form Error */}
                  {state.errors && (
                    <div className="flex items-start gap-2 border-2 border-black bg-rose-100 p-3 text-xs font-semibold text-rose-700">
                      <AlertCircle className="h-4 w-4 shrink-0" />

                      <span>
                        There was a problem sending your enquiry. Please
                        check the fields above and try again.
                      </span>
                    </div>
                  )}

                  {/* Submit */}
                  <div className="pt-2">

                    <button
                      type="submit"
                      disabled={state.submitting}
                      className="w-full sm:w-auto min-w-[220px] flex items-center justify-center gap-2 border-2 border-black bg-black py-3.5 px-6 font-display text-sm font-bold text-white transition-all bento-shadow-hover hover:bg-zinc-800 disabled:opacity-50 disabled:cursor-not-allowed"
                      id="form_submit_btn"
                    >
                      {state.submitting ? (
                        <>
                          <svg
                            className="animate-spin h-4 w-4 text-white"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />

                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>

                          <span>Sending Brief...</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          <span>Send Project Brief</span>
                        </>
                      )}
                    </button>

                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}