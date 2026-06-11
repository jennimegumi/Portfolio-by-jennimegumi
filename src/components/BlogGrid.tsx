import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  Clock, 
  Calendar, 
  ChevronRight, 
  BookOpen, 
  Tag
} from 'lucide-react';
import { BLOG_POSTS } from '../data';

export default function BlogGrid() {
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);

  const activePost = BLOG_POSTS.find(post => post.id === selectedPostId);

  return (
    <div className="py-10 md:py-16" id="blog_page_section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <AnimatePresence mode="wait">
          {!selectedPostId ? (
            /* BLOG ARTICLES GRID */
            <motion.div
              key="grid"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="space-y-12"
              id="articles_grid_layout"
            >
              {/* Headings */}
              <div className="max-w-xl">
                <h1 className="font-display text-3xl font-black tracking-tight text-black md:text-4.5xl">
                  Design Process Blog
                </h1>
                <p className="mt-2 text-zinc-700 text-sm font-medium">
                  Deep dives on aesthetics, user interactions, grid hierarchies, video tempo timing, and spring physics in dynamic web systems.
                </p>
              </div>

              {/* Grid cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {BLOG_POSTS.map((post) => (
                  <article
                    key={post.id}
                    onClick={() => setSelectedPostId(post.id)}
                    className="group flex flex-col justify-between overflow-hidden border-2 border-black bg-white p-5 transition-all bento-shadow-hover cursor-pointer flex-1"
                    id={`blog_article_card_${post.id}`}
                  >
                    <div className="space-y-4">
                      {/* Thumbnail crop */}
                      <div className="relative h-48 w-full overflow-hidden border-2 border-black bg-zinc-900">
                        <img
                          src={post.image}
                          alt={post.title}
                          referrerPolicy="no-referrer"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-103"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
                        
                        {/* Upper tag overlay */}
                        <span className="absolute top-3 left-3 bg-yellow-300 border-2 border-black px-2.5 py-1 font-mono text-[9px] font-bold text-black tracking-wider uppercase">
                          {post.category}
                        </span>
                      </div>

                      {/* Meta stats */}
                      <div className="flex items-center space-x-3 font-mono text-[10px] text-zinc-600 font-bold">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5" />
                          {post.date}
                        </span>
                        <span className="h-1.5 w-1.5 rounded-full bg-black/20" />
                        <span className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" />
                          {post.readTime}
                        </span>
                      </div>

                      {/* Header title */}
                      <h3 className="font-display font-black text-lg text-black group-hover:text-amber-500 transition-colors line-clamp-2 leading-tight">
                        {post.title}
                      </h3>

                      {/* Excerpt Summary */}
                      <p className="text-zinc-650 text-xs line-clamp-3 leading-relaxed font-semibold">
                        {post.excerpt}
                      </p>
                    </div>

                    {/* Footer Tags and link */}
                    <div className="mt-6 pt-4 border-t border-dashed border-black/15 flex items-center justify-between">
                      <div className="flex gap-1.5 overflow-hidden">
                        {post.tags.slice(0, 2).map((tag, i) => (
                          <span 
                            key={i} 
                            className="text-[9px] font-mono font-bold text-zinc-600 flex items-center gap-1 bg-zinc-50 border border-black/20 px-2 py-0.5"
                          >
                            #{tag.toLowerCase()}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center text-xs font-mono font-black text-black gap-1 group-hover:underline">
                        <span>Read</span>
                        <ChevronRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </motion.div>
          ) : (
            /* DETAILED BLOG ARTICLE READER */
            <motion.div
              key="reader"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="max-w-3xl mx-auto space-y-8"
              id="blog_post_detail_reader"
            >
              {/* Back navigation Thread */}
              <button
                onClick={() => setSelectedPostId(null)}
                className="inline-flex items-center space-x-2 border-2 border-black bg-white px-4 py-2.5 font-display text-xs font-black text-black bento-shadow-hover outline-none"
                id="blog_back_btn"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Return to Blog</span>
              </button>

              {activePost && (
                <article className="space-y-6">
                  
                  {/* Category Pill Tag and Title */}
                  <div className="space-y-4">
                    <span className="inline-flex items-center space-x-1.5 border-2 border-black bg-pink-300 px-3 py-1 text-[11px] font-mono font-extrabold text-black tracking-wider uppercase">
                      <BookOpen className="h-3.5 w-3.5" />
                      <span>{activePost.category}</span>
                    </span>

                    <h1 className="font-display text-2.5xl font-black text-black md:text-4xl leading-tight">
                      {activePost.title}
                    </h1>

                    {/* Reading Meta Data */}
                    <div className="flex flex-wrap items-center gap-4 py-3 border-y border-dashed border-black/15 font-mono text-xs text-zinc-600 font-bold">
                      <span>BY: Marcus Vane</span>
                      <span className="h-1.5 w-1.5 rounded-full bg-black/20" />
                      <span>{activePost.date}</span>
                      <span className="h-1.5 w-1.5 rounded-full bg-black/20" />
                      <span>{activePost.readTime}</span>
                    </div>
                  </div>

                  {/* Header Full-bleed Graphic Banner */}
                  <div className="h-64 sm:h-80 md:h-[350px] w-full overflow-hidden border-2 border-black bg-zinc-900">
                    <img
                      src={activePost.image}
                      alt={activePost.title}
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover"
                      id="blog_banner_graphic"
                    />
                  </div>

                  {/* Editorial Structured Body Content */}
                  <div className="space-y-6 pt-4 text-zinc-800 text-sm md:text-base leading-relaxed font-semibold" id="blog_body_text_box">
                    {activePost.content.map((para, pi) => (
                      <p key={pi} className="first-letter:font-black first-letter:text-black">
                        {para}
                      </p>
                    ))}
                  </div>

                  {/* Article Tags and Footer */}
                  <div className="pt-8 border-t border-dashed border-black/15 flex flex-wrap gap-2 items-center">
                    <Tag className="h-4 w-4 text-zinc-500 mr-1" />
                    {activePost.tags.map((tag, i) => (
                      <span 
                        key={i}
                        className="bg-yellow-105 border border-black/25 px-3 py-1 font-mono text-xs font-bold text-zinc-800"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                </article>
              )}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
