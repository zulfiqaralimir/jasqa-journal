import Link from 'next/link';

interface ArticleCardProps {
  id: string;
  title: string;
  authors: string[];
  abstract: string;
  publishedDate: string;
  volume?: string;
  issue?: string;
  pages?: string;
}

export default function ArticleCard({
  id,
  title,
  authors,
  abstract,
  publishedDate,
  volume,
  issue,
  pages,
}: ArticleCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
      <Link href={`/article/${id}`}>
        <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-blue-600">
          {title}
        </h3>
      </Link>
      <p className="text-sm text-gray-600 mb-3">
        {authors.join(', ')}
      </p>
      <p className="text-gray-700 text-sm mb-4 line-clamp-3">
        {abstract}
      </p>
      <div className="flex items-center justify-between text-xs text-gray-500">
        <div className="flex items-center gap-4">
          {volume && issue && (
            <span>Vol. {volume}, Issue {issue}</span>
          )}
          {pages && <span>pp. {pages}</span>}
        </div>
        <span>{publishedDate}</span>
      </div>
      <div className="mt-4">
        <Link
          href={`/article/${id}`}
          className="text-blue-600 hover:text-blue-800 text-sm font-medium"
        >
          Read More &rarr;
        </Link>
      </div>
    </div>
  );
}
