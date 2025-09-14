'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Check, Code2 } from 'lucide-react';

interface CodeSnippet {
  title: string;
  language: string;
  code: string;
  description?: string;
}

interface ProjectCodeSnippetsProps {
  codeSnippets: CodeSnippet[];
}

export function ProjectCodeSnippets({ codeSnippets }: ProjectCodeSnippetsProps) {
  const [activeSnippet, setActiveSnippet] = useState(0);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = async (code: string, index: number) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  const getLanguageIcon = (language: string) => {
    const icons: { [key: string]: string } = {
      typescript: '🔷',
      javascript: '🟨',
      python: '🐍',
      java: '☕',
      css: '🎨',
      html: '🌐',
      sql: '🗄️',
      json: '📄',
      yaml: '⚙️',
      bash: '💻'
    };
    return icons[language.toLowerCase()] || '📝';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      <div className="flex items-center">
        <Code2 className="w-6 h-6 text-primary mr-3" />
        <h2 className="text-3xl font-bold text-secondary">Code Snippets</h2>
      </div>

      <div className="card">
        {/* Snippet Tabs */}
        <div className="flex flex-wrap gap-2 mb-6 border-b border-border pb-4">
          {codeSnippets.map((snippet, index) => (
            <button
              key={index}
              onClick={() => setActiveSnippet(index)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeSnippet === index
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-accent/10 text-accent hover:bg-accent/20'
              }`}
            >
              <span className="mr-2">{getLanguageIcon(snippet.language)}</span>
              {snippet.title}
            </button>
          ))}
        </div>

        {/* Snippet Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSnippet}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            {/* Description */}
            {codeSnippets[activeSnippet].description && (
              <p className="text-muted-foreground">
                {codeSnippets[activeSnippet].description}
              </p>
            )}

            {/* Code Block */}
            <div className="relative">
              <div className="flex items-center justify-between bg-accent/5 px-4 py-2 rounded-t-lg border-b border-border">
                <div className="flex items-center">
                  <span className="mr-2">{getLanguageIcon(codeSnippets[activeSnippet].language)}</span>
                  <span className="text-sm font-medium text-secondary">
                    {codeSnippets[activeSnippet].language.toUpperCase()}
                  </span>
                </div>
                
                <button
                  onClick={() => copyToClipboard(codeSnippets[activeSnippet].code, activeSnippet)}
                  className="flex items-center px-3 py-1 text-xs bg-accent/10 text-accent rounded hover:bg-accent/20 transition-colors"
                >
                  {copiedIndex === activeSnippet ? (
                    <>
                      <Check className="w-3 h-3 mr-1" />
                      Copiato!
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3 mr-1" />
                      Copia
                    </>
                  )}
                </button>
              </div>
              
              <pre className="bg-background p-4 rounded-b-lg overflow-x-auto text-sm">
                <code className="text-muted-foreground">
                  {codeSnippets[activeSnippet].code}
                </code>
              </pre>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

