import Link from 'next/link';

interface IssueCardProps {
  volume: string;
  issue: string;
  year: string;
  coverImage?: string;
  articleCount: number;
  publishedDate: string;
}

export default function IssueCard({
  volume,
  issue,
  year,
  coverImage,
  articleCount,
  publishedDate,
}: IssueCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      <div className="bg-gradient-to-br from-blue-500 to-indigo-600 h-48 flex items-center justify-center text-white">
        {coverImage ? (
          <img src={coverImage} alt={`Volume ${volume} Issue ${issue}`} className="w-full h-full object-cover" />
        ) : (
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide">JASQA</p>
            <p className="text-3xl font-bold mt-2">Vol. {volume}</p>
            <p className="text-xl">Issue {issue}</p>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Volume {volume}, Issue {issue}
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          {year} | {articleCount} Articles
        </p>
        <p className="text-xs text-gray-500 mb-4">
          Published: {publishedDate}
        </p>
        <Link
          href={`/browse-issues?volume=${volume}&issue=${issue}`}
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm font-medium"
        >
          View Issue
        </Link>
      </div>
    </div>
  );
}
