// Test Sanity connection
// Run with: node scripts/test-sanity.js

const { createClient } = require('next-sanity')

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'yhv6w713'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const token = process.env.SANITY_API_READ_TOKEN

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-02-25',
  useCdn: false,
  token,
})

async function testConnection() {
  console.log('🔍 Testing Sanity connection...\n')
  console.log('Project ID:', projectId)
  console.log('Dataset:', dataset)
  console.log('Token:', token ? '✅ Set' : '❌ Not set')
  console.log('\n---\n')

  try {
    // Test basic query
    const result = await client.fetch('*[_type == "article"][0...3]')
    console.log('✅ Connection successful!')
    console.log(`📄 Found ${result.length} articles\n`)

    if (result.length > 0) {
      console.log('Sample article:')
      console.log(JSON.stringify(result[0], null, 2))
    } else {
      console.log('ℹ️  No articles found yet. Add some content in Sanity Studio!')
    }
  } catch (error) {
    console.error('❌ Connection failed!')
    console.error('Error:', error.message)

    if (error.message.includes('not found')) {
      console.log('\n💡 This might mean:')
      console.log('   - Your Sanity project is empty (no content yet)')
      console.log('   - The dataset name is incorrect')
      console.log('   - The project ID is incorrect')
    }
  }
}

testConnection()
