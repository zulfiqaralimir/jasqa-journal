import { client } from '@/lib/sanity.client'
import { groq } from 'next-sanity'
import HeroBanner from '@/components/HeroBanner'
import Link from 'next/link'

// Revalidate every 60 seconds
export const revalidate = 60

const boardMembersQuery = groq`*[_type == "boardMember" && active == true] | order(order asc) {
  _id,
  "author": author->{
    name,
    title,
    affiliation,
    department,
    image,
    email,
    bio,
    researchInterests
  },
  role,
  expertise,
  order,
  featured
}`

async function getData() {
  const boardMembers = await client.fetch(boardMembersQuery)
  return { boardMembers }
}

export default async function EditorialBoard() {
  const { boardMembers } = await getData()

  // Separate leadership and members
  const leadership = boardMembers.filter((member: any) =>
    ['editor-in-chief', 'co-editor-in-chief', 'managing-editor'].includes(member.role)
  )
  const editors = boardMembers.filter((member: any) =>
    ['associate-editor', 'section-editor'].includes(member.role)
  )
  const members = boardMembers.filter((member: any) =>
    member.role === 'board-member'
  )

  const getRoleTitle = (role: string) => {
    const roles: { [key: string]: string } = {
      'editor-in-chief': 'Editor-in-Chief',
      'co-editor-in-chief': 'Co-Editor-in-Chief',
      'associate-editor': 'Associate Editor',
      'managing-editor': 'Managing Editor',
      'section-editor': 'Section Editor',
      'board-member': 'Editorial Board Member',
      'advisory-member': 'Advisory Board Member',
    }
    return roles[role] || role
  }

  return (
    <div>
      <HeroBanner
        subtitle="Editorial Board"
        title="Our Distinguished Editorial Team"
        description="Leading experts guiding the future of agentic AI and quantum computing research"
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Editorial Leadership */}
        {leadership.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Editorial Leadership</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {leadership.map((member: any) => (
                <div key={member._id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-center w-24 h-24 bg-blue-100 rounded-full mx-auto mb-4">
                    <span className="text-3xl font-bold text-blue-600">
                      {member.author.name.split(' ').map((n: string) => n[0]).slice(0, 2).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">
                    {member.author.title} {member.author.name}
                  </h3>
                  <p className="text-blue-600 font-medium text-center mb-3">
                    {getRoleTitle(member.role)}
                  </p>
                  <p className="text-gray-600 text-sm text-center mb-2">
                    {member.author.affiliation}
                  </p>
                  {member.author.department && (
                    <p className="text-gray-500 text-xs text-center mb-3">
                      {member.author.department}
                    </p>
                  )}
                  {member.expertise && member.expertise.length > 0 && (
                    <div className="mt-4">
                      <p className="text-xs font-semibold text-gray-700 mb-2">Expertise:</p>
                      <div className="flex flex-wrap gap-1">
                        {member.expertise.slice(0, 3).map((exp: string, i: number) => (
                          <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                            {exp}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Associate and Section Editors */}
        {editors.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Editors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {editors.map((member: any) => (
                <div key={member._id} className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {member.author.title} {member.author.name}
                  </h3>
                  <p className="text-blue-600 text-sm font-medium mb-2">
                    {getRoleTitle(member.role)}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {member.author.affiliation}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Editorial Board Members */}
        {members.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Editorial Board Members</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {members.map((member: any) => (
                <div key={member._id} className="bg-gray-50 rounded-lg p-6 text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {member.author.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {member.author.affiliation}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {boardMembers.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Editorial board information coming soon.</p>
          </div>
        )}

        <section className="mt-16 bg-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Join Our Editorial Board
          </h2>
          <p className="text-gray-700 mb-6">
            We are always looking for distinguished researchers to join our editorial board.
            If you are interested in contributing to the advancement of agentic AI and quantum
            computing research, please contact us.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-semibold"
          >
            Contact Us
          </Link>
        </section>
      </div>
    </div>
  )
}
