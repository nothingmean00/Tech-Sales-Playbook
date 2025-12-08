// TheirStack Job Board API Integration
// Get your free API key at: https://theirstack.com

export interface TheirStackJob {
  id: string
  job_title: string
  company_name: string
  company_logo?: string
  location: string
  remote: boolean
  job_url: string
  posted_at: string
  salary_min?: number
  salary_max?: number
  salary_currency?: string
  employment_type?: string
  description?: string
  company_data?: {
    funding_stage?: string
    total_funding?: number
    employee_count?: number
    industry?: string
  }
}

export interface TheirStackResponse {
  data: TheirStackJob[]
  total: number
  page: number
  per_page: number
}

export interface JobListing {
  id: string
  title: string
  company: string
  companyLogo?: string
  location: string
  description: string
  applyUrl: string
  postedAt: string
  salaryMin?: number
  salaryMax?: number
  salaryCurrency?: string
  type?: string
  remote: boolean
  companyInfo?: {
    fundingStage?: string
    totalFunding?: number
    employeeCount?: number
    industry?: string
  }
}

const THEIRSTACK_API_KEY = process.env.THEIRSTACK_API_KEY
const THEIRSTACK_BASE_URL = "https://api.theirstack.com/v1"

export async function fetchSalesJobs(options?: {
  page?: number
  perPage?: number
  location?: string
  remoteOnly?: boolean
  searchQuery?: string
}): Promise<{ jobs: JobListing[]; total: number }> {
  const {
    page = 1,
    perPage = 20,
    location,
    remoteOnly = false,
    searchQuery,
  } = options || {}

  if (!THEIRSTACK_API_KEY) {
    console.warn("TheirStack API key not configured")
    return { jobs: [], total: 0 }
  }

  try {
    // Build request body for TheirStack
    const body: Record<string, unknown> = {
      page,
      per_page: perPage,
      // Search for sales-related roles at tech companies
      job_title_or: [
        "Sales Development Representative",
        "SDR",
        "BDR",
        "Business Development Representative",
        "Account Executive",
        "Inside Sales",
        "Sales Representative",
        "Enterprise Sales",
        "Mid-Market Sales",
      ],
      posted_at_max_age_days: 30,
      order_by: [{ desc: true, field: "posted_at" }],
    }

    if (location) {
      body.job_location_pattern = location
    }

    if (remoteOnly) {
      body.remote = true
    }

    if (searchQuery) {
      body.job_title_pattern = searchQuery
    }

    const response = await fetch(`${THEIRSTACK_BASE_URL}/jobs/search`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${THEIRSTACK_API_KEY}`,
      },
      body: JSON.stringify(body),
      next: { revalidate: 3600 }, // Cache for 1 hour
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error("TheirStack API error:", response.status, errorText)
      return { jobs: [], total: 0 }
    }

    const data: TheirStackResponse = await response.json()

    // Transform to our format
    const jobs: JobListing[] = data.data.map((job) => ({
      id: job.id,
      title: job.job_title,
      company: job.company_name,
      companyLogo: job.company_logo,
      location: job.location || (job.remote ? "Remote" : "Unknown"),
      description: job.description || "",
      applyUrl: job.job_url,
      postedAt: job.posted_at,
      salaryMin: job.salary_min,
      salaryMax: job.salary_max,
      salaryCurrency: job.salary_currency || "USD",
      type: job.employment_type || "full_time",
      remote: job.remote,
      companyInfo: job.company_data
        ? {
            fundingStage: job.company_data.funding_stage,
            totalFunding: job.company_data.total_funding,
            employeeCount: job.company_data.employee_count,
            industry: job.company_data.industry,
          }
        : undefined,
    }))

    return { jobs, total: data.total }
  } catch (error) {
    console.error("Error fetching jobs:", error)
    return { jobs: [], total: 0 }
  }
}

export function formatSalary(min?: number, max?: number, currency = "USD"): string | null {
  if (!min && !max) return null

  const formatNum = (n: number) => {
    if (n >= 1000000) {
      return `${(n / 1000000).toFixed(1)}M`
    }
    if (n >= 1000) {
      return `${Math.round(n / 1000)}K`
    }
    return n.toString()
  }

  const symbol = currency === "USD" ? "$" : currency

  if (min && max) {
    return `${symbol}${formatNum(min)} - ${symbol}${formatNum(max)}`
  }
  if (min) {
    return `${symbol}${formatNum(min)}+`
  }
  if (max) {
    return `Up to ${symbol}${formatNum(max)}`
  }
  return null
}

export function formatPostedDate(dateString: string): string {
  const date = new Date(dateString)
  const now = new Date()
  const diffMs = now.getTime() - date.getTime()
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))

  if (diffDays === 0) return "Today"
  if (diffDays === 1) return "Yesterday"
  if (diffDays < 7) return `${diffDays} days ago`
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`
  return `${Math.floor(diffDays / 30)} months ago`
}

export function formatFunding(amount?: number): string | null {
  if (!amount) return null
  if (amount >= 1000000000) {
    return `$${(amount / 1000000000).toFixed(1)}B raised`
  }
  if (amount >= 1000000) {
    return `$${Math.round(amount / 1000000)}M raised`
  }
  if (amount >= 1000) {
    return `$${Math.round(amount / 1000)}K raised`
  }
  return null
}

export function formatEmployeeCount(count?: number): string | null {
  if (!count) return null
  if (count >= 10000) return "10,000+ employees"
  if (count >= 1000) return `${Math.round(count / 1000)}K+ employees`
  if (count >= 500) return "500+ employees"
  if (count >= 100) return "100+ employees"
  if (count >= 50) return "50+ employees"
  return `${count} employees`
}

