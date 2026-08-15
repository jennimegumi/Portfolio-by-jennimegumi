export default function BlogGrid() {
  return (
    <div
      className="py-10 md:py-16"
      id="blog_page_section"
    >
      <div className="mx-auto flex min-h-[70vh] max-w-7xl items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-3xl border-2 border-black bg-yellow-300 p-8 text-center bento-shadow md:p-16">
          
          <div className="space-y-6">
            <span className="inline-block border-2 border-black bg-white px-3 py-1 font-mono text-xs font-black uppercase tracking-widest text-black">
              Design Process Blog
            </span>

            <h1 className="font-display text-5xl font-black tracking-tight text-black md:text-7xl">
              Coming Soon!
            </h1>

            <p className="mx-auto max-w-xl text-sm font-semibold leading-relaxed text-zinc-800 md:text-base">
              I’m currently working on articles covering design processes,
              creative workflows, UI/UX, visual design, and the ideas behind
              my projects. New posts will be available here soon.
            </p>

            <div className="pt-4">
              <div className="mx-auto inline-block border-2 border-black bg-white px-5 py-3 font-mono text-xs font-black uppercase tracking-wider text-black">
                Currently in Production
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}