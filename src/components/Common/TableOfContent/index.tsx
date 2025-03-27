'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Heading } from '@/types/heading';
import styles from './index.module.css';
import { formatHeadings } from '@/utils/formatHeadings';

type Props = {
  headings: Heading[];
  sidebar?: boolean;
};

export default function TableOfContents({ headings, sidebar = false }: Props) {
  const [activeId, setActiveId] = useState('');

  const formattedHeadings = formatHeadings(headings);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      let currentId = '';
      headings.forEach((heading, index) => {
        const element = document.getElementById(heading.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const isLastHeading = index === headings.length - 1;
          if (isLastHeading) {
            if (rect.top <= 110) {
              currentId = heading.id;
            }
          } else {
            if (rect.top <= 110 && rect.bottom > 110) {
              currentId = heading.id;
            } else if (rect.top <= 110 && headings[index + 1]) {
              const nextElement = document.getElementById(headings[index + 1].id);
              if (nextElement && nextElement.getBoundingClientRect().top > 110) {
                currentId = heading.id;
              }
            }
          }
        }
      });
      setActiveId(currentId);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <div className={`flex justify-center`}>
      <div className={`${styles.toc} ${sidebar && styles.sidebarToc} w-1/2 border p-4`}>
        <div className="text-center font-bold text-lg">目次</div>
        <ol className="mt-4 list-none pl-0 text-left">
          {formattedHeadings.map((heading) => (
            <li
              key={heading.id}
              style={{
                marginLeft: heading.marginLeft,
                backgroundColor: activeId === heading.id ? '#ecffe9' : 'transparent',
                transition: 'background-color 0.3s ease',
              }}
            >
              <Link
                href={`#${heading.id}`}
                onClick={(e) => handleClick(e, heading.id)}
                className="hover:text-green-500"
              >
                {heading.number} {heading.title}
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
