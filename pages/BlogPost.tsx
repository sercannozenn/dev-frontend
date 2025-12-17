import React from 'react';

const BlogPost: React.FC = () => {
  return (
    <article className="flex-1 max-w-3xl w-full mx-auto px-4 py-8 md:py-12 animate-fade-in-up">
      <header className="mb-10">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">JavaScript</span>
          <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-semibold">Web Development</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight mb-6 tracking-tight">
          Understanding Asynchronous JavaScript: A Deep Dive into Promises
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-light mb-8">
          Master the event loop, understand the nuances of async/await, and write cleaner, non-blocking code for your modern web applications.
        </p>
        <div className="flex items-center justify-between border-y border-slate-200 dark:border-slate-800 py-4">
          <div className="flex items-center gap-3">
            <div 
              className="size-12 rounded-full bg-cover bg-center ring-2 ring-primary/20" 
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAUWgTy3nM2euMNHEot2HBp9Q-b-79JrQT5tfGIPa8hFrCEGYgUKsCi2iR9HDvsHZ0SR1pYiKNtJh7ooEu_dd90TNJxZqQBeGkgkz3kkx_Gf7_P64-7uFlJwcqEPQkFu7SG-zTsybQKyFmn2_v4xVuhLYKbvLNfGVQA2F_ycsLI7LGqCMz4xCpXK3jljh3Xdcce1512bK4tNTVS2MjEt3Sn2wdLR1V1DJCUSds7Sp93XrHxx48BBtWIL4ZKIaycuCEQzQFUzhOSr2Y")' }}
            ></div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-slate-900 dark:text-white">Jane Dev</span>
              <span className="text-xs text-slate-500 dark:text-slate-400">Senior Frontend Engineer</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm font-medium text-slate-900 dark:text-white">Oct 24, 2023</div>
            <div className="text-xs text-slate-500 dark:text-slate-400">5 min read</div>
          </div>
        </div>
      </header>

      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p className="text-base md:text-lg leading-relaxed text-slate-700 dark:text-slate-300 mb-6">
          Asynchronous programming is a technique that enables your program to start a potentially long-running task and still be able to respond to other events while that task runs, rather than having to wait until that task has finished. When applied to JavaScript, this is fundamental due to its single-threaded nature.
        </p>
        <p className="text-base md:text-lg leading-relaxed text-slate-700 dark:text-slate-300 mb-6">
          In the early days, we relied heavily on callbacks. While effective, they often led to the infamous "callback hell," making code difficult to read and maintain. Today, we have <span className="text-primary font-medium bg-primary/10 px-1 rounded">Promises</span> and <span className="text-primary font-medium bg-primary/10 px-1 rounded">async/await</span> syntax to handle these operations more gracefully.
        </p>

        <div className="my-8 p-6 rounded-lg bg-blue-50 dark:bg-blue-900/20 border-l-4 border-primary flex gap-4">
          <span className="material-symbols-outlined text-primary shrink-0">info</span>
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-1">Did you know?</h4>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              The <code>await</code> keyword can only be used inside an <code>async</code> function. Attempting to use it elsewhere will result in a syntax error.
            </p>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">The Evolution: From Callbacks to Async/Await</h3>
        <p className="text-base md:text-lg leading-relaxed text-slate-700 dark:text-slate-300 mb-6">
           Let's look at a practical comparison. Suppose we want to fetch user data and then fetch their posts. Here is how clean it looks with modern syntax.
        </p>

        <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-[#0d1117] my-8 shadow-2xl relative">
          <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-slate-800 sticky top-0">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              </div>
              <span className="ml-3 text-xs font-mono text-slate-400">fetchData.js</span>
            </div>
            <button className="text-xs flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors group">
              <span className="material-symbols-outlined text-[16px] group-hover:text-primary">content_copy</span> 
              Copy Code
            </button>
          </div>
          {/* Use whitespace-pre-wrap to handle wrapping, break-words to prevent overflow, and remove height constraints */}
          <div className="p-4 md:p-6 text-sm font-mono leading-relaxed bg-[#0d1117]">
<pre className="whitespace-pre-wrap break-words overflow-x-auto"><code className="language-javascript"><span className="text-[#ff7b72]">async</span> <span className="text-[#ff7b72]">function</span> <span className="text-[#d2a8ff]">getUserData</span><span className="text-[#e6edf3]">(userId) {'{'}</span>
  <span className="text-[#ff7b72]">try</span> <span className="text-[#e6edf3]">{'{'}</span>
    <span className="text-[#8b949e]">// Await pauses execution until the promise resolves</span>
    <span className="text-[#ff7b72]">const</span> <span className="text-[#e6edf3]">userResponse</span> <span className="text-[#ff7b72]">=</span> <span className="text-[#ff7b72]">await</span> <span className="text-[#e6edf3]">fetch(</span><span className="text-[#a5d6ff]">{`\`/api/users/\${userId}\``}</span><span className="text-[#e6edf3]">);</span>
    <span className="text-[#ff7b72]">const</span> <span className="text-[#e6edf3]">user</span> <span className="text-[#ff7b72]">=</span> <span className="text-[#ff7b72]">await</span> <span className="text-[#e6edf3]">userResponse.json();</span>

    <span className="text-[#ff7b72]">const</span> <span className="text-[#e6edf3]">postsResponse</span> <span className="text-[#ff7b72]">=</span> <span className="text-[#ff7b72]">await</span> <span className="text-[#e6edf3]">fetch(</span><span className="text-[#a5d6ff]">{`\`/api/users/\${userId}/posts\``}</span><span className="text-[#e6edf3]">);</span>
    <span className="text-[#ff7b72]">const</span> <span className="text-[#e6edf3]">posts</span> <span className="text-[#ff7b72]">=</span> <span className="text-[#ff7b72]">await</span> <span className="text-[#e6edf3]">postsResponse.json();</span>

    <span className="text-[#ff7b72]">return</span> <span className="text-[#e6edf3]">{'{'} user, posts {'}'};</span>
  <span className="text-[#e6edf3]">{'}'}</span> <span className="text-[#ff7b72]">catch</span> <span className="text-[#e6edf3]">(error) {'{'}</span>
    <span className="text-[#e6edf3]">console.error(</span><span className="text-[#a5d6ff]">'Error fetching data:'</span><span className="text-[#e6edf3]">, error);</span>
  <span className="text-[#e6edf3]">{'}'}</span>
<span className="text-[#e6edf3]">{'}'}</span></code></pre>
          </div>
        </div>

        <p className="text-base md:text-lg leading-relaxed text-slate-700 dark:text-slate-300 mb-6">
           Notice how the code reads almost like synchronous code? The <code>try/catch</code> block handles errors for both fetch operations cleanly. This pattern is essential for writing robust applications in modern frameworks like React, Vue, or Angular.
        </p>

        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">Conclusion</h3>
        <p className="text-base md:text-lg leading-relaxed text-slate-700 dark:text-slate-300 mb-6">
           By leveraging async/await, we've transformed complex asynchronous flows into readable, maintainable logic. Start refactoring your old Promise chains today!
        </p>
      </div>
    </article>
  );
};

export default BlogPost;