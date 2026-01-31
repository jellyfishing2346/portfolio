import { useEffect, useRef } from 'react';

interface MermaidDiagramProps {
  code: string;
}

export default function MermaidDiagram({ code }: MermaidDiagramProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    import('mermaid').then((mermaid) => {
      if (ref.current) {
        mermaid.default.initialize({ startOnLoad: false, theme: 'neutral' });
        mermaid.default.render('mermaid-svg', code, (svgCode) => {
          if (ref.current) ref.current.innerHTML = svgCode;
        });
      }
    });
  }, [code]);

  return <div ref={ref} className="w-full overflow-x-auto my-2" />;
}
