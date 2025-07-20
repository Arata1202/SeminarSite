import { STEP } from '@/constants/selection';
import ScrollAnimation from '@/components/Common/Animation/ScrollAnimation';

export default function Progress() {
  return (
    <nav className="mt-10">
      <ScrollAnimation variant="fadeInUp" duration={1.0}>
        <ol className="divide-y divide-gray-300 rounded-md border border-gray-300 md:flex md:divide-y-0">
          {STEP.map((item, index) => (
            <li key={item.id} className="relative md:flex md:flex-1">
              <div className="flex items-center px-6 py-4 text-sm font-medium">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-green-700">
                  <span className="text-green-700">{item.id}</span>
                </span>
                <span className="ml-4 text-sm font-medium text-green-700">{item.name}</span>
              </div>
              {index !== STEP.length - 1 ? (
                <div className="absolute right-0 top-0 hidden h-full w-5 md:block">
                  <svg
                    fill="none"
                    viewBox="0 0 22 80"
                    preserveAspectRatio="none"
                    className="h-full w-full text-gray-300"
                  >
                    <path
                      d="M0 -2L20 40L0 82"
                      stroke="currentcolor"
                      vectorEffect="non-scaling-stroke"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              ) : null}
            </li>
          ))}
        </ol>
      </ScrollAnimation>
    </nav>
  );
}
