
"use client";
import { useEffect, useRef } from 'react';

interface MermaidDiagramProps {
  code: string;
}

export default function MermaidDiagram({ code }: MermaidDiagramProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let isMounted = true;
    (async () => {
      const mermaid = await import('mermaid');
      if (ref.current && isMounted) {
        mermaid.default.initialize({ startOnLoad: false, theme: 'neutral' });
        const { svg } = await mermaid.default.render('mermaid-svg', code);
        if (ref.current) ref.current.innerHTML = svg;
      }
    })();
    return () => {
      isMounted = false;
    };
  }, [code]);

  return <div ref={ref} className="w-full overflow-x-auto my-2" />;
}
